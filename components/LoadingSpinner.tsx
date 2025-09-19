'use client';

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin border-t-primary"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl">🤝</span>
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-textPrimary">Finding your support circle...</h3>
        <p className="text-sm text-textSecondary max-w-xs">
          We're matching you with peers who understand your journey. This may take a moment.
        </p>
      </div>
      
      <div className="flex items-center space-x-2 text-xs text-textSecondary">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span>Professional oversight active</span>
      </div>
    </div>
  );
}
