export type G_Question<PublicUserReference> = {
  category: string;
  question: string;
  questionImage: string | null;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
  wrongAnswer3: string;
  author: PublicUserReference;
  nid: string;
};
