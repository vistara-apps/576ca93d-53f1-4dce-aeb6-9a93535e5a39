'use client';

import { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-md mx-auto bg-surface min-h-screen">
        {/* Header */}
        <header className="bg-surface border-b border-border px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">❤️</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-primary">CareCircle</h1>
                <p className="text-xs text-secondary">Care Circle</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
          
          <div className="mt-3">
            <p className="text-sm text-secondary">Anonymous Peer Support Groups</p>
          </div>
          
          {/* Navigation Tags */}
          <div className="flex space-x-4 mt-4">
            <button className="flex items-center space-x-1 text-sm text-primary">
              <span>🏠</span>
              <span>Online</span>
            </button>
            <button className="flex items-center space-x-1 text-sm text-secondary">
              <span>📱</span>
              <span>Mental</span>
            </button>
            <button className="flex items-center space-x-1 text-sm text-secondary">
              <span>💼</span>
              <span>Counseling</span>
            </button>
            <button className="flex items-center space-x-1 text-sm text-secondary">
              <span>🧠</span>
              <span>Healing</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Bottom Navigation */}
        <nav className="bg-surface border-t border-border px-4 py-2">
          <div className="flex justify-around">
            <button className="flex flex-col items-center py-2 text-secondary">
              <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </button>
            <button className="flex flex-col items-center py-2 text-primary">
              <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="flex flex-col items-center py-2 text-secondary">
              <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="flex flex-col items-center py-2 text-secondary">
              <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="flex flex-col items-center py-2 text-secondary">
              <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5z" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
