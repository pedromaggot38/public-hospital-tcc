export interface Article {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    subtitle: string | null;
    content: string | null;
    published: boolean;
    slug: string;
    author: string;
    imageUrl: string | null;
    imageDescription: string | null;
}