import { z } from 'zod';
import GameInviteSchema from '../schemas/gameInviteSchema';

export type GameInvite = z.infer<typeof GameInviteSchema>;
