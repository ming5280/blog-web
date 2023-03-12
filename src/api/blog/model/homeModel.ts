export type HomeTipsParams = {
  id: string;
};

export interface TipInfo {
  id: string;
  name: string;
  date: string;
  color: string;
}

export type GetHomeTipsResultModel = {
  list: TipInfo[];
};
