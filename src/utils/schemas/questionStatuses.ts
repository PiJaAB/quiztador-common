import { z } from 'zod';

const QuestionStatuses = z.union([
  z.literal('Published'), 
  z.literal('Draft'), 
  z.literal('Rejected')
]);

export default QuestionStatuses;
