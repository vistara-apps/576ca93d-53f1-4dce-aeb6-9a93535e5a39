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
      <div className="bg-white border-b border-gray-100 px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <span className="text-white text-lg">🤝</span>
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Support Circle</h2>
              <p className="text-sm text-purple-600 font-medium">
                {session.tags.join(', ')} • {session.startTime && formatTime(session.startTime)}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-700 font-medium">Protected</span>
            </div>
            <button
              onClick={onEndSession}
              className="btn-ghost text-red-600 hover:text-red-700 text-sm px-3 py-1"
            >
              End
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 bg-gray-50">
        {session.messages.map((message) => (
          <div key={message.id} className="animate-fade-in">
            {message.type === 'prompt' && (
              <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 max-w-lg mx-auto">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white text-lg">💭</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-blue-900">Guided Prompt</span>
                      <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">{formatTime(message.timestamp)}</span>
                    </div>
                    <p className="text-blue-800 leading-relaxed">{message.content}</p>
                  </div>
                </div>
              </div>
            )}

            {message.type === 'user' && (
              <div className="flex justify-end">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl px-5 py-3 max-w-sm shadow-lg">
                  <p className="leading-relaxed">{message.content}</p>
                  <p className="text-xs opacity-75 mt-2 text-right">{formatTime(message.timestamp)}</p>
                </div>
              </div>
            )}

            {message.type === 'peer' && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-900 rounded-2xl px-5 py-3 max-w-sm shadow-md border border-gray-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">👤</span>
                    </div>
                    <span className="text-xs font-medium text-gray-500">Anonymous Peer</span>
                  </div>
                  <p className="leading-relaxed">{message.content}</p>
                  <p className="text-xs text-gray-400 mt-2">{formatTime(message.timestamp)}</p>
                </div>
              </div>
            )}

            {message.type === 'moderator' && (
              <div className="card bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 max-w-lg mx-auto">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white text-lg">👨‍⚕️</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-amber-900">Professional Moderator</span>
                      <span className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full">{formatTime(message.timestamp)}</span>
                    </div>
                    <p className="text-amber-800 leading-relaxed">{message.content}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-100 px-6 py-4 shadow-lg">
        <form onSubmit={handleSendMessage} className="flex space-x-3 mb-3">
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Share your thoughts safely..."
            className="input-primary flex-1 text-lg"
          />
          <button
            type="submit"
            disabled={!messageInput.trim()}
            className={`
              px-8 py-3 rounded-2xl font-semibold transition-all duration-200 shadow-lg
              ${messageInput.trim()
                ? 'btn-primary transform hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            Send
          </button>
        </form>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4 text-gray-500">
            <span className="flex items-center space-x-1">
              <span>🔒</span>
              <span>Anonymous</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>🛡️</span>
              <span>Encrypted</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>👨‍⚕️</span>
              <span>Moderated</span>
            </span>
          </div>
          <span className="text-purple-600 font-medium">{session.messages.length} messages</span>
        </div>
      </div>
    </div>
  );
}
