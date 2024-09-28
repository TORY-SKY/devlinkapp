// interface for individual link
export type LinkData = {
  id: string;
  platform: string;
  url: string;
};
export type LinkDataContext = {
  id: number;
  platform: string;
  url: string;
};

export interface LinkContext {
  linkss: LinkData[];
  addLink: (link: LinkData) => void;
}
