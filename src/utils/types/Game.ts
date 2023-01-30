import { Category } from './category';
import { Question } from './question';
import { PublicUser } from './user';

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

export interface Participant {
  user?: PublicUser & { uid: string };
  timeMs: number;
  displayedTimeMs: number;
  status: ParticipantStatus;
  displayedStatus: ParticipantStatus;
  questionToAnswer?: QuestionToAnswer;
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

export interface Game {
  participants: Participant[];
  type: 'Invite' | '2P-Queue' | '4P-Queue';
  rules: {
    buildUpRounds: number;
  };
  rounds: {
    [roundNumber: string]: QuestionRound;
  };
  currentRoundNumber: number;
  answers: {
    [playerId: string]: {
      [roundNumber: number]: {
        [questionId: string]: {
          timeMs: number;
          answer: number;
        };
      };
    };
  };
  completed: boolean;
  winner: UserId | null;
  participatingUids: UserId[];
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
