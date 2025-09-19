export const SUPPORT_TAGS = [
  'anxiety',
  'depression', 
  'stress',
  'loneliness',
  'grief',
  'relationships',
  'work',
  'family',
  'self-esteem',
  'trauma',
  'addiction',
  'sleep'
] as const;

export const PRICING = {
  PER_SESSION: 0.99,
  MONTHLY_UNLIMITED: 4.99,
} as const;

export const SESSION_CONFIG = {
  MAX_DURATION_MINUTES: 60,
  MAX_PARTICIPANTS: 3,
  MIN_PARTICIPANTS: 2,
  MATCHING_TIMEOUT_SECONDS: 30,
} as const;

export const CONVERSATION_PROMPTS = [
  "What brought you here today?",
  "How are you feeling right now?",
  "What has been your biggest challenge lately?",
  "What coping strategies have you tried?",
  "What would you tell someone else in your situation?",
  "What small step could you take today?",
  "How can we support each other?",
  "What are you grateful for today?",
] as const;
