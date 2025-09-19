'use client';

export function LoadingSpinner() {
  return (
    <div className="content-padding flex flex-col items-center justify-center min-h-screen space-y-8">
      {/* Enhanced Loading Animation */}
      <div className="relative">
        <div className="w-24 h-24 border-4 border-purple-100 rounded-full animate-spin border-t-purple-600 shadow-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <span className="text-white text-3xl">🤝</span>
          </div>
        </div>
      </div>
      
      {/* Progress Steps */}
      <div className="text-center space-y-4 max-w-sm">
        <h2 className="text-2xl font-bold text-gray-900">Finding your support circle</h2>
        <p className="text-gray-600 leading-relaxed">
          We're carefully matching you with peers who understand your journey and can provide meaningful support.
        </p>
      </div>

      {/* Loading Steps */}
      <div className="w-full max-w-sm space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
          <span className="text-sm text-green-700 font-medium">Analyzing your topics</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white text-xs">⚡</span>
          </div>
          <span className="text-sm text-purple-700 font-medium">Matching with peers</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-xs">○</span>
          </div>
          <span className="text-sm text-gray-500">Creating safe space</span>
        </div>
      </div>
      
      {/* Safety Notice */}
      <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 max-w-sm">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
            <span className="text-white text-sm">🛡️</span>
          </div>
          <div>
            <p className="text-sm font-medium text-green-800">Professional oversight active</p>
            <p className="text-xs text-green-600">Licensed counselors monitoring for safety</p>
          </div>
        </div>
      </div>
    </div>
  );
}
