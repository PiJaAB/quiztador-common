import { string } from 'zod';
import { Category } from './category';
import { Question } from './question';
import { PublicUser } from './user';

export type ParticipantStatus =
  | 'Pending'
  | 'Waiting'
  | 'Playing'
  | 'Eliminated'
  | 'Winner';

export interface Participant {
  user?: PublicUser & { uid: string };
  time: number;
  displayedTime: number;
  status: ParticipantStatus;
  displayedStatus: ParticipantStatus;
}

export type CategoryId = string;

export interface QuestionRound {
  selectingParticipantIndex?: number;
  category?: Category;
  categoryOptions?: CategoryId[];
  questions?: Question[];
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
}
