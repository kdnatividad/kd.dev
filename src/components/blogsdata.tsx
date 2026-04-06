export type BlogPost = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  views: number;
  tags: string[];
  url: string;
};

export const blogsData: BlogPost[] = [
  {
    title: "Post Title One",
    description:
      "A short description of what this post is about and what the reader will get out of it.",
    date: "January 1, 2025",
    readTime: "5 min read",
    views: 320,
    tags: ["Tag1", "Tag2", "Tag3"],
    url: "#",
  },
  {
    title: "Post Title Two",
    description:
      "A short description of what this post is about and what the reader will get out of it.",
    date: "February 14, 2025",
    readTime: "7 min read",
    views: 512,
    tags: ["TagA", "TagB", "TagC"],
    url: "#",
  },
];
