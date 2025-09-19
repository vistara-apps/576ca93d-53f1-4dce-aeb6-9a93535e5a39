# CareCircle - Anonymous Peer Support

A Base Mini App that connects users anonymously with peers facing similar mental health challenges, offering guided conversation prompts and professional oversight.

## Features

- **Anonymous Peer Matching**: Connect with others facing similar challenges
- **Guided Support Prompts**: AI-generated conversation starters
- **Professional Oversight**: Licensed counselors monitor sessions
- **Privacy & Anonymity**: End-to-end encrypted conversations
- **Micro-transactions**: $0.99 per session or $4.99/month unlimited

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Add your OnchainKit API key to `.env.local`:
```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Architecture

- **Next.js 15** with App Router
- **MiniKit** for Base integration
- **OnchainKit** for wallet functionality
- **Tailwind CSS** for styling
- **TypeScript** for type safety

## Core Components

- `AppShell`: Main app layout with navigation
- `Dashboard`: Home screen with feature cards
- `TagSelector`: Topic selection for matching
- `SessionView`: Real-time chat interface
- `LoadingSpinner`: Matching animation

## Data Model

- **User**: Anonymous user profiles with tags
- **Session**: Encrypted conversation sessions
- **Moderator**: Professional oversight system

## Privacy & Security

- All conversations are encrypted
- User identities remain anonymous
- Professional moderation for safety
- No personal data stored

## Deployment

Deploy to Vercel or similar platform:

```bash
npm run build
```

## License

MIT License - see LICENSE file for details.
