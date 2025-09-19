'use client';

import { useState } from 'react';
// import { useMiniKit } from '@coinbase/onchainkit/minikit'; // Temporarily disabled
import { AppShell } from '../components/AppShell';
import { Dashboard } from '../components/Dashboard';
import { TagSelector } from '../components/TagSelector';
import { SessionView } from '../components/SessionView';
import { LoadingSpinner } from '../components/LoadingSpinner';

export type AppState = 'dashboard' | 'tag-selection' | 'matching' | 'session' | 'payment';

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
  // const { context } = useMiniKit(); // Temporarily disabled
  const [appState, setAppState] = useState<AppState>('dashboard');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentSession, setCurrentSession] = useState<UserSession | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleStartSupport = () => {
    setAppState('tag-selection');
  };

  const handleTagsSelected = async (tags: string[]) => {
    setSelectedTags(tags);
    setIsLoading(true);
    setAppState('matching');

    // Simulate matching process
    setTimeout(() => {
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

  if (isLoading) {
    return (
      <AppShell>
        <div className="flex items-center justify-center min-h-screen">
          <LoadingSpinner />
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      {appState === 'dashboard' && (
        <Dashboard
          onStartSupport={handleStartSupport}
          userContext={undefined} // Temporarily disabled
        />
      )}
      
      {appState === 'tag-selection' && (
        <TagSelector 
          onTagsSelected={handleTagsSelected}
          onBack={() => setAppState('dashboard')}
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
  );
}
