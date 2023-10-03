import { z } from 'zod';
declare const QuestionSchema: z.ZodObject<{
    category: z.ZodString;
    question: z.ZodString;
    questionImage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    correctAnswer: z.ZodString;
    wrongAnswer1: z.ZodString;
    wrongAnswer2: z.ZodString;
    wrongAnswer3: z.ZodString;
    status: z.ZodUnion<[z.ZodLiteral<"Published">, z.ZodLiteral<"Draft">, z.ZodLiteral<"Rejected">]>;
    author: z.ZodString;
    createdAt: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodDate]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodDate]>>;
    votes: z.ZodOptional<z.ZodNumber>;
    nid: z.ZodOptional<z.ZodString>;
    lastTenAnswers: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodLiteral<-1>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>]>, "many">>>;
    answers: z.ZodOptional<z.ZodObject<{
        countCorrect: z.ZodDefault<z.ZodNumber>;
        countWrong1: z.ZodDefault<z.ZodNumber>;
        countWrong2: z.ZodDefault<z.ZodNumber>;
        countWrong3: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        countCorrect: number;
        countWrong1: number;
        countWrong2: number;
        countWrong3: number;
    }, {
        countCorrect?: number | undefined;
        countWrong1?: number | undefined;
        countWrong2?: number | undefined;
        countWrong3?: number | undefined;
    }>>;
    upvotes: z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodNumber>>>;
    downvotes: z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodNumber>>>;
}, "strip", z.ZodTypeAny, {
    status: "Published" | "Draft" | "Rejected";
    category: string;
    question: string;
    correctAnswer: string;
    wrongAnswer1: string;
    wrongAnswer2: string;
    wrongAnswer3: string;
    author: string;
    questionImage?: string | null | undefined;
    createdAt?: string | Date | undefined;
    updatedAt?: string | Date | undefined;
    votes?: number | undefined;
    nid?: string | undefined;
    lastTenAnswers?: (0 | 2 | 1 | -1 | 3)[] | undefined;
    answers?: {
        countCorrect: number;
        countWrong1: number;
        countWrong2: number;
        countWrong3: number;
    } | undefined;
    upvotes?: number | null | undefined;
    downvotes?: number | null | undefined;
}, {
    status: "Published" | "Draft" | "Rejected";
    category: string;
    question: string;
    correctAnswer: string;
    wrongAnswer1: string;
    wrongAnswer2: string;
    wrongAnswer3: string;
    author: string;
    questionImage?: string | null | undefined;
    createdAt?: string | Date | undefined;
    updatedAt?: string | Date | undefined;
    votes?: number | undefined;
    nid?: string | undefined;
    lastTenAnswers?: (0 | 2 | 1 | -1 | 3)[] | undefined;
    answers?: {
        countCorrect?: number | undefined;
        countWrong1?: number | undefined;
        countWrong2?: number | undefined;
        countWrong3?: number | undefined;
    } | undefined;
    upvotes?: number | null | undefined;
    downvotes?: number | null | undefined;
}>;
export default QuestionSchema;
