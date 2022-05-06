export type G_Question<PublicUserReference> = {
  id?: string;
  category: string;
  query: string;
  questionImage: string | null;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
  wrongAnswer3: string;
  status: string;
  author: PublicUserReference;
  nid: string;
};
