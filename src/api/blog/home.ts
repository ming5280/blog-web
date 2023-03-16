import { http } from '/@/utils/http';
import {
  HomeTipsParams,
  HomeTipsGetResultModel,
  HomeArticleLsitParams,
  HomeArticleLsitGetResultModel,
} from './model/homeModel';

enum Api {
  GetHomeTips = '/mock/api/homeTips',
  GetHomeArticleLsit = '/mock/api/homeArticleLsit',
}

/**
 * @description: 首页tip列表
 */
export const getHomeTips = (params: HomeTipsParams) =>
  http.get<HomeTipsGetResultModel>({ url: Api.GetHomeTips, params });

/**
 * @description: 首页文章列表
 */
export const getHomeArticleLsit = (params: HomeArticleLsitParams) =>
  http.get<HomeArticleLsitGetResultModel>({ url: Api.GetHomeArticleLsit, params });
