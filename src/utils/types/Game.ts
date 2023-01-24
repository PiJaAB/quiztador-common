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
  user?: PublicUser;
  time: number;
  displayedTime: number;
  status: ParticipantStatus;
  displayedStatus: ParticipantStatus;
}

export interface QuestionRound {
  selectingParticipant?: Participant;
  category?: Category;
  categoryOptions?: Category[];
  questions?: Question[];
  type: 'BuildUp' | 'KnockOut';
}

export interface Game {
  participants: Participant[];
  type: 'Invite' | '2P-Queue' | '4P-Queue';
  rules: {
    buildUpRounds: number;
  };
}

export interface InviteeType {
  name: string;
}
