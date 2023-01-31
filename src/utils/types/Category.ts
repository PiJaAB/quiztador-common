export type Category = {
  id?: string;
  name: string;
  description: string;
  weight: number;
};

export type Categories = Record<string, Category>;
