'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
          <div className="max-w-md w-full">
            <div className="card bg-white shadow-2xl border-0 text-center">
              {/* Error Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-xl">
                  <span className="text-white text-4xl">⚠️</span>
                </div>
              </div>

              {/* Error Content */}
              <div className="space-y-4 mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Something went wrong</h1>
                <p className="text-gray-600 leading-relaxed">
                  We're sorry, but something unexpected happened. Don't worry - your privacy and data remain secure.
                </p>
                {process.env.NODE_ENV === 'development' && this.state.error && (
                  <details className="text-left bg-gray-50 p-4 rounded-lg">
                    <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                      Technical Details
                    </summary>
                    <pre className="text-xs text-gray-600 overflow-auto">
                      {this.state.error.message}
                    </pre>
                  </details>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="btn-primary w-full"
                >
                  Try Again
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className="btn-secondary w-full"
                >
                  Refresh Page
                </button>
              </div>

              {/* Support Info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  If this problem persists, please contact our support team. Your mental health support is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}