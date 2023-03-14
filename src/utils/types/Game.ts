import { Category } from './Category';
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
}

export type CategoryId = string;
export type QuestionId = string;
export type UserId = string;

export interface QuestionRound {
  selectingParticipantIndex?: number;
  selectingUid?: string;
  category?: Category;
  categoryOptions?: CategoryId[];
  questions?: QuestionId[];
  completed: boolean;
  type: 'BuildUp' | 'KnockOut';
}

export interface Game<Timestamp> {
  participants: Participant<Timestamp>[];
  participantWhosTurnExpiresNext?: string | null;
  type: 'FromInvite' | '2P-Queue' | '4P-Queue';
  rules: {
    buildUpRounds: number;
    allowedTimeMinutes: number;
  };
  rounds: {
    [roundNumber: string]: QuestionRound;
  };
  currentRoundNumber: string;
  answers: {
    [playerId: string]: {
      [roundNumber: string]: {
        [questionId: string]: {
          timeMs: number;
          answer: number;
          tacticUsed?: Tactics;
        };
      };
    };
  };
  completed: boolean;
  winner: UserId | null;
  participatingUids: UserId[];
  slotsAvailable: boolean;
  updatedAt: Timestamp;
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
