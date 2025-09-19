'use client';

interface DashboardProps {
  onStartSupport: () => void;
  userContext?: any;
}

export function Dashboard({ onStartSupport, userContext }: DashboardProps) {
  return (
    <div className="p-4 space-y-6">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-primary">Dashboard 🧡</h2>
        <span className="text-sm text-secondary">This Week</span>
      </div>

      {/* Anonymous Peer Support Groups Card */}
      <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg p-6 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-800">Anonymous Peer Support Groups</h3>
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              ACTIVE
            </span>
          </div>
          
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Find like-minded peers who understand your journey and connect anonymously.
          </p>
          
          <button 
            onClick={onStartSupport}
            className="flex items-center space-x-2 text-sm font-medium text-gray-800 hover:text-gray-900 transition-colors duration-200"
          >
            <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">👥</span>
            </span>
            <span>Join Peer Circle</span>
          </button>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 rounded-full opacity-20 transform translate-x-8 -translate-y-8"></div>
      </div>

      {/* Guided Prompts Card */}
      <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-800">Guided Prompts</h3>
            <span className="text-2xl">🤖</span>
          </div>
          
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Access AI-generated conversation starters and structured support tools.
          </p>
          
          <button className="flex items-center space-x-2 text-sm font-medium text-gray-800 hover:text-gray-900 transition-colors duration-200">
            <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">💭</span>
            </span>
            <span>Explore Prompts</span>
          </button>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-blue-300 rounded-full opacity-20 transform translate-x-6 -translate-y-6"></div>
      </div>

      {/* Professional Oversight Info */}
      <div className="bg-surface rounded-lg p-4 border border-border">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <div>
            <p className="text-sm font-medium text-primary">Professional Oversight Active</p>
            <p className="text-xs text-secondary">Licensed counselors monitor all sessions for safety</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-surface rounded-lg p-4 border border-border text-center">
          <div className="text-2xl font-bold text-primary">24/7</div>
          <div className="text-xs text-secondary">Support Available</div>
        </div>
        <div className="bg-surface rounded-lg p-4 border border-border text-center">
          <div className="text-2xl font-bold text-accent">100%</div>
          <div className="text-xs text-secondary">Anonymous</div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <div className="flex items-start space-x-3">
          <span className="text-lg">🔒</span>
          <div>
            <h4 className="text-sm font-medium text-primary mb-1">Your Privacy Matters</h4>
            <p className="text-xs text-secondary leading-relaxed">
              All conversations are encrypted and anonymous. Your identity is never shared with other participants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
