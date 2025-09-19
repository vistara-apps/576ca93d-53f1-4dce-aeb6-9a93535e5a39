'use client';

import { useState } from 'react';

interface OnboardingProps {
  onComplete: () => void;
}

const ONBOARDING_STEPS = [
  {
    id: 'welcome',
    title: 'Welcome to CareCircle',
    description: 'A safe space for anonymous peer support where you can connect with others who understand your journey.',
    icon: '❤️',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'anonymous',
    title: 'Completely Anonymous',
    description: 'Your identity is never shared. Connect through shared experiences, not personal information.',
    icon: '🔒',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'professional',
    title: 'Professional Oversight',
    description: 'Licensed mental health professionals monitor all sessions to ensure a safe and supportive environment.',
    icon: '🛡️',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'support',
    title: 'Find Your Circle',
    description: 'Share your challenges and receive support from peers who truly understand what you\'re going through.',
    icon: '🤝',
    gradient: 'from-orange-500 to-red-500'
  }
];

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const step = ONBOARDING_STEPS[currentStep];

  const handleNext = () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {ONBOARDING_STEPS.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index <= currentStep
                    ? 'bg-purple-600 scale-110'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Card */}
        <div className="card bg-white shadow-2xl border-0 text-center animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center shadow-xl`}>
              <span className="text-white text-4xl">{step.icon}</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 mb-8">
            <h1 className="text-2xl font-bold text-gray-900">{step.title}</h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              {step.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handleSkip}
              className="btn-ghost text-gray-500 hover:text-gray-700"
            >
              Skip
            </button>

            <div className="flex space-x-3">
              {currentStep > 0 && (
                <button
                  onClick={handlePrevious}
                  className="btn-secondary px-6"
                >
                  Back
                </button>
              )}
              <button
                onClick={handleNext}
                className="btn-primary px-8"
              >
                {currentStep === ONBOARDING_STEPS.length - 1 ? 'Get Started' : 'Next'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Step {currentStep + 1} of {ONBOARDING_STEPS.length}
          </p>
        </div>
      </div>
    </div>
  );
}