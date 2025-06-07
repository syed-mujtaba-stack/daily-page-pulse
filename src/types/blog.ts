
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  category: Category;
  tags: string[];
  publishedAt: string;
  readTime: number;
  imageUrl: string;
  featured: boolean;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  email: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}
