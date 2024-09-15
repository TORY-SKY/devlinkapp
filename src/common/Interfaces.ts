// interface for individual link
export type LinkData = {
  id: number;
  platform: string;
  url: string;
};

export interface LinkContext {
  links: LinkData[];
  addLink: (link: LinkData) => void;
}
