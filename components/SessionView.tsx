'use client';

import { useState, useRef, useEffect } from 'react';
import { UserSession } from '../app/page';

interface SessionViewProps {
  session: UserSession;
  onSendMessage: (content: string) => void;
  onEndSession: () => void;
}

export function SessionView({ session, onSendMessage, onEndSession }: SessionViewProps) {
  const [messageInput, setMessageInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [session.messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageInput.trim()) {
      onSendMessage(messageInput.trim());
      setMessageInput('');
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Session Header */}
      <div className="bg-surface border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-primary">Support Circle</h3>
            <p className="text-xs text-secondary">
              {session.tags.join(', ')} • {session.startTime && formatTime(session.startTime)}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-secondary">Oversight Active</span>
            </div>
            <button
              onClick={onEndSession}
              className="text-xs text-red-600 hover:text-red-700 font-medium"
            >
              End Session
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {session.messages.map((message) => (
          <div key={message.id} className="animate-fade-in">
            {message.type === 'prompt' && (
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">🤖</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-blue-900">Guided Prompt</span>
                      <span className="text-xs text-blue-600">{formatTime(message.timestamp)}</span>
                    </div>
                    <p className="text-sm text-blue-800 leading-relaxed">{message.content}</p>
                  </div>
                </div>
              </div>
            )}

            {message.type === 'user' && (
              <div className="flex justify-end">
                <div className="bg-primary text-white rounded-lg px-4 py-3 max-w-xs">
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className="text-xs opacity-75 mt-1">{formatTime(message.timestamp)}</p>
                </div>
              </div>
            )}

            {message.type === 'peer' && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-primary rounded-lg px-4 py-3 max-w-xs">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-medium text-secondary">Anonymous Peer</span>
                  </div>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className="text-xs text-secondary mt-1">{formatTime(message.timestamp)}</p>
                </div>
              </div>
            )}

            {message.type === 'moderator' && (
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">👨‍⚕️</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-yellow-900">Professional Moderator</span>
                      <span className="text-xs text-yellow-600">{formatTime(message.timestamp)}</span>
                    </div>
                    <p className="text-sm text-yellow-800 leading-relaxed">{message.content}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="bg-surface border-t border-border p-4">
        <form onSubmit={handleSendMessage} className="flex space-x-3">
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Share your thoughts..."
            className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button
            type="submit"
            disabled={!messageInput.trim()}
            className={`
              px-6 py-3 rounded-lg font-medium transition-all duration-200
              ${messageInput.trim()
                ? 'bg-primary text-white hover:opacity-90 active:scale-95'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            Send
          </button>
        </form>
        
        <div className="mt-2 flex items-center justify-between text-xs text-secondary">
          <span>Anonymous • Encrypted • Moderated</span>
          <span>{session.messages.length} messages</span>
        </div>
      </div>
    </div>
  );
}
