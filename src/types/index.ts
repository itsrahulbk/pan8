export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'pancake' | 'dosa' | 'protein-bar';
  price: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  author: string;
}