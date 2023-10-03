import { z } from 'zod';
declare const QuestionStatuses: z.ZodUnion<[z.ZodLiteral<"Published">, z.ZodLiteral<"Draft">, z.ZodLiteral<"Rejected">]>;
export default QuestionStatuses;
