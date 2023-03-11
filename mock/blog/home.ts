import { MockMethod } from 'vite-plugin-mock';
// 单纯的使⽤⾃⼰的返回数据话，可以不⽤引⼊mockjs
// http://mockjs.com/examples.html
import Mock, { Random } from 'mockjs';
import { resultError, resultSuccess, requestParams } from '../_util';

export default [
  {
    url: '/mock/api/homeTips',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(
        Mock.mock({
          'list|4': [
            {
              id: '@id',
              name: '@cname',
              date: Random.date('yyyy-MM-dd'),
            },
          ],
        }),
      );
    },
  },
] as MockMethod[];
