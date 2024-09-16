// interface for individual link
export type LinkData = {
  platform: string;
  url: string;
};
export type LinkDataContext = {
  id: number;
  platform: string;
  url: string;
};

export interface LinkContext {
  links: LinkData[];
  addLink: (link: LinkData) => void;
}
