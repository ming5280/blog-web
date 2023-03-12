import { http } from '/@/utils/http';
import { HomeTipsParams, GetHomeTipsResultModel } from './model/homeModel';

enum Api {
  GetHomeTips = '/mock/api/homeTips',
}

/**
 * @description: 首页tip列表
 */
export const getHomeTips = (params: HomeTipsParams) =>
  http.get<GetHomeTipsResultModel>({ url: Api.GetHomeTips, params });
