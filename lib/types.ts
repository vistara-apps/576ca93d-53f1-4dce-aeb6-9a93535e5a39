export interface User {
  userId: string;
  creationDate: Date;
  userTags: string[];
  pushNotificationToken?: string;
}

export interface Session {
  sessionId: string;
  creationDate: Date;
  problemTags: string[];
  matchedUserIds: string[];
  conversationHistory: EncryptedMessage[];
  status: 'active' | 'ended' | 'moderated';
  startTime: Date;
  endTime?: Date;
}

export interface EncryptedMessage {
  id: string;
  encryptedContent: string;
  timestamp: Date;
  senderId: string;
  type: 'user' | 'peer' | 'prompt' | 'moderator';
}

export interface Moderator {
  moderatorId: string;
  specialization: string[];
}

export interface PaymentSession {
  sessionId: string;
  userId: string;
  amount: number;
  currency: 'USD';
  status: 'pending' | 'completed' | 'failed';
  transactionHash?: string;
}
