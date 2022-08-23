export interface Frontmatter {
  title: string;
  date: string;
  author: string;
  github: string;
  description: string;
  thumbnail: string;
  tags: string;
  minutesRead: string;
}

export interface ArticleMdx {
  frontmatter: Frontmatter;
  url?: string;
}
