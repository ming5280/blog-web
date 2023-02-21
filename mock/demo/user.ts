import { MockMethod } from 'vite-plugin-mock';
// 单纯的使⽤⾃⼰的返回数据话，可以不⽤引⼊mockjs
// http://mockjs.com/examples.html
import Mock, { Random } from 'mockjs';
import { resultError, resultSuccess, requestParams } from '../_util';

export default [
  {
    url: '/mock/api/login',
    timeout: 500,
    method: 'post',
    response: (request: requestParams) => {
      const { username, password } = request.body;
      if (username !== 'admin' || password !== '123456') {
        return resultError('请输入用户名和密码！');
      }
      return resultSuccess(
        {
          id: '10000001',
          name: 'admin',
          age: '25',
        },
        {
          message: '登录成功！',
        },
      );
    },
  },
  {
    url: '/mock/api/getUserList',
    timeout: 3000,
    method: 'get',
    response: (request: requestParams) => {
      const { id } = request.query;
      if (!id) {
        return resultError('id不存在！');
      }
      return resultSuccess(
        Mock.mock({
          'list|4': [
            {
              id: '@id',
              name: '@cname',
              age: Random.integer(1, 100),
              address: '@county',
              city: '@city',
              province: '@province',
              email: Random.email(),
              phone: /^1[0-9]{10}$/,
              regin: '@region',
              url: '@url',
              date: Random.date('yyyy-MM-dd'),
            },
          ],
        }),
      );
    },
  },
] as MockMethod[];
