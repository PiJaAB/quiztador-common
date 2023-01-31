import { z } from 'zod';
import GameInviteSchema from '../schemas/gameInviteSchema';

export type GameInviteData = z.infer<typeof GameInviteSchema>;
