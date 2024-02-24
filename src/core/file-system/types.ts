export type Path = {
  name: string;
  isDir: boolean;
  size: number;
};

export type FetchPathReturn = {
  paths: Path[];
  parent: {
    parts: string[];
    full: string;
  };
};
