'use client';

interface DashboardProps {
  onStartSupport: () => void;
}

export function Dashboard({ onStartSupport }: DashboardProps) {
  return (
    <div className="content-padding section-spacing">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-8 animate-slide-up">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-1">Find support when you need it most</p>
        </div>
        <div className="text-right">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center hover-lift animate-bounce-in">
            <span className="text-white text-lg">👋</span>
          </div>
        </div>
      </div>

      {/* Main Action Card */}
      <div className="card-interactive bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 hover-lift hover-glow animate-fade-in" onClick={onStartSupport}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <span className="text-white text-xl">🤝</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Find Your Support Circle</h2>
              <p className="text-purple-600 text-sm font-medium">Connect with peers anonymously</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
              Available 24/7
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Join a safe, anonymous space where you can share your experiences and receive support from others who truly understand your journey.
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center space-x-1">
              <span>🔒</span>
              <span>Anonymous</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>🛡️</span>
              <span>Moderated</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>💬</span>
              <span>Encrypted</span>
            </span>
          </div>
          <div className="btn-primary">
            Start Support →
          </div>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slide-up">
        {/* Guided Prompts */}
        <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 hover-lift">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-lg">💭</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Guided Prompts</h3>
              <p className="text-xs text-blue-600">AI-powered support</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Get personalized conversation starters and coping strategies.
          </p>
          <button className="btn-ghost text-blue-600 hover:bg-blue-50">
            Explore →
          </button>
        </div>

        {/* Professional Oversight */}
        <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 hover-lift">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-lg">👨‍⚕️</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Professional Care</h3>
              <p className="text-xs text-green-600">Licensed counselors</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            All sessions monitored by licensed mental health professionals.
          </p>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-700 font-medium">Active Now</span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="card text-center bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
          <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
          <div className="text-xs text-purple-700 font-medium">Available</div>
        </div>
        <div className="card text-center bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200">
          <div className="text-2xl font-bold text-cyan-600 mb-1">100%</div>
          <div className="text-xs text-cyan-700 font-medium">Anonymous</div>
        </div>
        <div className="card text-center bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
          <div className="text-2xl font-bold text-green-600 mb-1">Safe</div>
          <div className="text-xs text-green-700 font-medium">Moderated</div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="card bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-white text-lg">🔒</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Your Privacy is Protected</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              All conversations are end-to-end encrypted and completely anonymous. Your identity is never shared with other participants.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="tag-inactive">End-to-End Encrypted</span>
              <span className="tag-inactive">No Personal Data Stored</span>
              <span className="tag-inactive">Anonymous Matching</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
