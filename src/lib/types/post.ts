export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  thumbnail: {
    url: string;
    name: string;
  };
  tags: string[];
  created_at: string | null;
  isPublic: boolean;
}
