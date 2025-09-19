'use client';

import { useState, useEffect } from 'react';
import { AppShell } from '../components/AppShell';
import { Dashboard } from '../components/Dashboard';
import { TagSelector } from '../components/TagSelector';
import { SessionView } from '../components/SessionView';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Onboarding } from '../components/Onboarding';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { EmptyState } from '../components/EmptyState';

export type AppState = 'dashboard' | 'tag-selection' | 'matching' | 'session' | 'payment' | 'error';

export interface UserSession {
  id: string;
  tags: string[];
  status: 'matching' | 'active' | 'ended';
  messages: Array<{
    id: string;
    type: 'user' | 'peer' | 'prompt' | 'moderator';
    content: string;
    timestamp: Date;
  }>;
  startTime?: Date;
  endTime?: Date;
}

export default function Home() {
  const [appState, setAppState] = useState<AppState>('dashboard');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentSession, setCurrentSession] = useState<UserSession | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Check if user has seen onboarding
  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('carecircle-onboarding-complete');
    if (!hasSeenOnboarding) {
      setShowOnboarding(true);
    }
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem('carecircle-onboarding-complete', 'true');
    setShowOnboarding(false);
  };

  const handleStartSupport = () => {
    setAppState('tag-selection');
  };

  const handleTagsSelected = async (tags: string[]) => {
    setSelectedTags(tags);
    setIsLoading(true);
    setAppState('matching');

    // Simulate matching process with potential failure
    setTimeout(() => {
      // Simulate 10% chance of matching failure for demo purposes
      if (Math.random() < 0.1) {
        setIsLoading(false);
        setAppState('error');
        return;
      }

      const newSession: UserSession = {
        id: `session-${Date.now()}`,
        tags,
        status: 'active',
        messages: [
          {
            id: '1',
            type: 'prompt',
            content: `Welcome to your support circle. You've been matched with others who understand ${tags.join(', ')}. Let's start by sharing what brought you here today.`,
            timestamp: new Date(),
          }
        ],
        startTime: new Date(),
      };
      
      setCurrentSession(newSession);
      setAppState('session');
      setIsLoading(false);
    }, 3000);
  };

  const handleEndSession = () => {
    if (currentSession) {
      setCurrentSession({
        ...currentSession,
        status: 'ended',
        endTime: new Date(),
      });
    }
    setAppState('dashboard');
  };

  const handleSendMessage = (content: string) => {
    if (!currentSession) return;

    const newMessage = {
      id: `msg-${Date.now()}`,
      type: 'user' as const,
      content,
      timestamp: new Date(),
    };

    setCurrentSession({
      ...currentSession,
      messages: [...currentSession.messages, newMessage],
    });

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Thank you for sharing. How are others feeling about this?",
        "That takes courage to share. What has helped you cope so far?",
        "I hear you. What would you tell someone else in your situation?",
        "Your feelings are valid. What small step could you take today?",
      ];
      
      const aiResponse = {
        id: `ai-${Date.now()}`,
        type: 'prompt' as const,
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };

      setCurrentSession(prev => prev ? {
        ...prev,
        messages: [...prev.messages, aiResponse],
      } : null);
    }, 2000);
  };

  // Show onboarding if first time user
  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  if (isLoading) {
    return (
      <AppShell>
        <LoadingSpinner />
      </AppShell>
    );
  }

  return (
    <ErrorBoundary>
      <AppShell>
        {appState === 'dashboard' && (
          <Dashboard 
            onStartSupport={handleStartSupport}
          />
        )}
        
        {appState === 'tag-selection' && (
          <TagSelector 
            onTagsSelected={handleTagsSelected}
            onBack={() => setAppState('dashboard')}
          />
        )}
        
        {appState === 'error' && (
          <EmptyState
            icon="😔"
            title="Unable to find a match"
            description="We couldn't find peers available right now. This sometimes happens during low-traffic periods. Please try again in a few minutes."
            actionLabel="Try Again"
            onAction={() => setAppState('tag-selection')}
            gradient="from-orange-500 to-red-500"
          />
        )}
        
        {appState === 'session' && currentSession && (
          <SessionView 
            session={currentSession}
            onSendMessage={handleSendMessage}
            onEndSession={handleEndSession}
          />
        )}
      </AppShell>
    </ErrorBoundary>
  );
}
