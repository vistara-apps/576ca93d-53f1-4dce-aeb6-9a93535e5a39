'use client';

import { useState } from 'react';

interface TagSelectorProps {
  onTagsSelected: (tags: string[]) => void;
  onBack: () => void;
}

const AVAILABLE_TAGS = [
  { id: 'anxiety', label: 'Anxiety', emoji: '😰' },
  { id: 'depression', label: 'Depression', emoji: '😔' },
  { id: 'stress', label: 'Stress', emoji: '😤' },
  { id: 'loneliness', label: 'Loneliness', emoji: '😞' },
  { id: 'grief', label: 'Grief', emoji: '💔' },
  { id: 'relationships', label: 'Relationships', emoji: '💕' },
  { id: 'work', label: 'Work Issues', emoji: '💼' },
  { id: 'family', label: 'Family', emoji: '👨‍👩‍👧‍👦' },
  { id: 'self-esteem', label: 'Self-Esteem', emoji: '🪞' },
  { id: 'trauma', label: 'Trauma', emoji: '🩹' },
  { id: 'addiction', label: 'Addiction', emoji: '🚫' },
  { id: 'sleep', label: 'Sleep Issues', emoji: '😴' },
];

export function TagSelector({ onTagsSelected, onBack }: TagSelectorProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tagId: string) => {
    setSelectedTags(prev => 
      prev.includes(tagId) 
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  const handleContinue = () => {
    if (selectedTags.length > 0) {
      onTagsSelected(selectedTags);
    }
  };

  return (
    <div className="content-padding section-spacing">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <button 
          onClick={onBack}
          className="btn-ghost p-3 rounded-2xl"
          aria-label="Go back to dashboard"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">What brings you here?</h1>
          <p className="text-gray-600">Select topics you'd like support with</p>
        </div>
      </div>

      {/* Instructions */}
      <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xl">💡</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">How it works</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Choose 1-3 topics that resonate with you. We'll match you with others who understand these challenges and can offer genuine support.
            </p>
          </div>
        </div>
      </div>

      {/* Tag Grid */}
      <div className="space-y-6" role="region" aria-labelledby="topic-selection-heading">
        <h2 id="topic-selection-heading" className="text-xl font-semibold text-gray-900">Choose your topics</h2>
        <div className="grid grid-cols-2 gap-4" role="group" aria-label="Topic selection">
          {AVAILABLE_TAGS.map((tag) => (
            <button
              key={tag.id}
              onClick={() => toggleTag(tag.id)}
              className={`
                card-interactive p-5 rounded-2xl border-2 transition-all duration-200 text-left transform hover:scale-105 min-h-[80px] touch-manipulation
                ${selectedTags.includes(tag.id)
                  ? 'border-purple-400 bg-gradient-to-br from-purple-50 to-purple-100 shadow-lg ring-2 ring-purple-200'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg'
                }
              `}
              aria-pressed={selectedTags.includes(tag.id)}
              aria-describedby={`${tag.id}-description`}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  selectedTags.includes(tag.id) 
                    ? 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg' 
                    : 'bg-gray-100'
                }`}>
                  <span className="text-2xl">{tag.emoji}</span>
                </div>
                <div className={`font-semibold text-sm ${
                  selectedTags.includes(tag.id) ? 'text-purple-700' : 'text-gray-900'
                }`}>
                  {tag.label}
                </div>
                <span id={`${tag.id}-description`} className="sr-only">
                  {selectedTags.includes(tag.id) ? 'Selected' : 'Not selected'}. Click to {selectedTags.includes(tag.id) ? 'deselect' : 'select'} {tag.label} topic.
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Count */}
      {selectedTags.length > 0 && (
        <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <p className="text-green-800 font-medium">
              <span className="font-bold">{selectedTags.length}</span> topic{selectedTags.length !== 1 ? 's' : ''} selected
            </p>
          </div>
        </div>
      )}

      {/* Continue Button */}
      <div className="sticky bottom-6">
        <button
          onClick={handleContinue}
          disabled={selectedTags.length === 0}
          className={`
            w-full py-4 rounded-2xl font-bold text-lg transition-all duration-200 shadow-lg min-h-[56px] touch-manipulation
            ${selectedTags.length > 0
              ? 'btn-primary transform hover:scale-105'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }
          `}
          aria-describedby="continue-button-description"
        >
          {selectedTags.length === 0 
            ? 'Select at least one topic' 
            : `Find Support Circle (${selectedTags.length} topic${selectedTags.length !== 1 ? 's' : ''})`
          }
        </button>
        <span id="continue-button-description" className="sr-only">
          {selectedTags.length === 0 
            ? 'Please select at least one topic to continue' 
            : `Continue with ${selectedTags.length} selected topic${selectedTags.length !== 1 ? 's' : ''}`
          }
        </span>
      </div>

      {/* Privacy Reminder */}
      <div className="card bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm">🔒</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Your selections remain completely anonymous and are only used for matching. No personal information is shared.
          </p>
        </div>
      </div>
    </div>
  );
}
