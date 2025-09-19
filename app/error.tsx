'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-surface rounded-lg p-6 text-center shadow-card">
        <div className="text-6xl mb-4">😔</div>
        <h2 className="text-xl font-bold text-textPrimary mb-2">
          Something went wrong
        </h2>
        <p className="text-textSecondary mb-6">
          We're sorry, but something unexpected happened. Please try again.
        </p>
        <button
          onClick={reset}
          className="btn-primary w-full"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
