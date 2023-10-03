export type Category = {
    id?: string;
    name: string;
    description: string;
    weight: number;
    published: boolean;
};
export type Categories = Record<string, Category>;
