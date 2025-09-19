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
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <svg className="w-5 h-5 text-textSecondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h2 className="text-xl font-bold text-textPrimary">What brings you here?</h2>
          <p className="text-sm text-textSecondary">Select topics you'd like support with</p>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <div className="flex items-start space-x-3">
          <span className="text-lg">💡</span>
          <div>
            <h4 className="text-sm font-medium text-blue-900 mb-1">How it works</h4>
            <p className="text-xs text-blue-700 leading-relaxed">
              Choose 1-3 topics that resonate with you. We'll match you with others who understand these challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Tag Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-textPrimary">Select your topics:</h3>
        <div className="grid grid-cols-2 gap-3">
          {AVAILABLE_TAGS.map((tag) => (
            <button
              key={tag.id}
              onClick={() => toggleTag(tag.id)}
              className={`
                p-4 rounded-lg border-2 transition-all duration-200 text-left
                ${selectedTags.includes(tag.id)
                  ? 'border-primary bg-primary bg-opacity-10 shadow-md'
                  : 'border-border bg-surface hover:border-gray-300 hover:shadow-sm'
                }
              `}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{tag.emoji}</span>
                <div>
                  <div className={`font-medium ${selectedTags.includes(tag.id) ? 'text-primary' : 'text-textPrimary'}`}>
                    {tag.label}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Count */}
      {selectedTags.length > 0 && (
        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
          <p className="text-sm text-green-800">
            <span className="font-medium">{selectedTags.length}</span> topic{selectedTags.length !== 1 ? 's' : ''} selected
          </p>
        </div>
      )}

      {/* Continue Button */}
      <div className="sticky bottom-4">
        <button
          onClick={handleContinue}
          disabled={selectedTags.length === 0}
          className={`
            w-full py-4 rounded-lg font-semibold transition-all duration-200
            ${selectedTags.length > 0
              ? 'bg-primary text-white hover:opacity-90 active:scale-95'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          {selectedTags.length === 0 
            ? 'Select at least one topic' 
            : `Find Support Circle (${selectedTags.length} topic${selectedTags.length !== 1 ? 's' : ''})`
          }
        </button>
      </div>

      {/* Privacy Reminder */}
      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
        <div className="flex items-center space-x-2">
          <span className="text-sm">🔒</span>
          <p className="text-xs text-textSecondary">
            Your selections remain completely anonymous and are only used for matching.
          </p>
        </div>
      </div>
    </div>
  );
}
