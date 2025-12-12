export interface Author {
  name: string;
  affiliation: string;
  location: string;
  role?: string;
}

export interface Section {
  title: string;
  content: string | string[];
  subsections?: {
    title: string;
    content: string | string[];
  }[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface Reference {
  id: string;
  text: string;
}

export interface PaperData {
  title: string;
  subtitle?: string;
  authors: Author[];
  abstract: string;
  keywords: string[];
  sections: Section[];
  references: Reference[];
}