export type HomeTipsParams = {
  id: ;
};

export interface TipInfo {
  id: string;
  name: string;
  date: string;
  color: string;
}

export type HomeTipsGetResultModel = {
  list: TipInfo[];
};

export type HomeArticleLsitParams = {
  id: string;
  page?: number;
  pageSize?: number;
};

export interface ArticleInfo {
  id: string;
  title: string;
  picturePath: string;
  describe: string;
  releaseTime: string;
  author: string;
  classification: string;
  numOfComments: number;
  numOfViews: number;
}
export type HomeArticleLsitGetResultModel = {
  list: TipInfo[];
  total: number;
};
