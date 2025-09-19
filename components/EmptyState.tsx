'use client';

interface EmptyStateProps {
  icon: string;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  gradient?: string;
}

export function EmptyState({ 
  icon, 
  title, 
  description, 
  actionLabel, 
  onAction,
  gradient = 'from-gray-500 to-slate-500'
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8">
      {/* Icon */}
      <div className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center shadow-lg mb-6 animate-bounce-in`}>
        <span className="text-white text-4xl">{icon}</span>
      </div>

      {/* Content */}
      <div className="space-y-3 mb-8 max-w-sm">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Action Button */}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="btn-primary px-8"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}