export type Category = {
  name: string;
  description: string;
  weight: number;
};

export type Categories = Record<string, Category>;
