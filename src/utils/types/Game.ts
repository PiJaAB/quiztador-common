import { PublicUser } from './User';

export type Tactics = '50-50' | 'addTime' | 'copyAnswer' | 'seeStats' | 'none';

export type ParticipantStatus =
  | 'Pending'
  | 'Waiting'
  | 'Playing'
  | 'Eliminated'
  | 'Winner';

export interface QuestionToAnswer {
  availableTimeMs?: number;
  questionId: string;
  roundNumber: number;
}

export interface Participant<Timestamp> {
  user?: PublicUser & { uid: string };
  timeMs: number;
  displayedTimeMs: number;
  status: ParticipantStatus;
  displayedStatus: ParticipantStatus;
  questionToAnswer?: QuestionToAnswer;
  eloRatingChange?: number;
  goldChange?: number;
  turnExpiresAt?: Timestamp;
  timedOut?: boolean;
}

export type CategoryId = string;
export type QuestionId = string;
export type UserId = string;
type QuestionRoundCategory = string;

export interface QuestionRound {
  selectingParticipantIndex?: number;
  selectingUid?: string;
  category?: QuestionRoundCategory;
  categoryOptions?: CategoryId[];
  questions?: QuestionId[];
  completed: boolean;
  type: 'BuildUp' | 'KnockOut';
}

export interface Game<Timestamp> {
  participants: Participant<Timestamp>[];
  timeOnUserWhosTurnExpiresNext?: Timestamp | null;
  type: 'FromInvite' | '2P-Queue' | '4P-Queue';
  rules: {
    buildUpRounds: number;
    allowedTimeMinutes: number;
  };
  rounds: {
    [roundNumber: string]: QuestionRound;
  };
  currentRoundNumber: number;
  answers: {
    [playerId: string]: {
      [roundNumber: string]: {
        [questionId: string]: {
          timeMs: number;
          answer: number;
          tacticsUsed?: Tactics[];
        };
      };
    };
  };
  completed: boolean;
  winner: UserId | null;
  participatingUids: UserId[];
  slotsAvailable: boolean;
  userStatsDistributed?: boolean | null;
  updatedAt: Timestamp;
  roundTacticsUsed?: {
    [roundNumber: string]: {
      [playerId: string]: Tactics[];
    };
  };
}

// export interface GameAnswers {
//   [playerId: string]: {
//     [roundNumber: number]: {
//       [questionId: string]: {
//         time: number;
//         answer: number;
//       };
//     };
//   };
// }
