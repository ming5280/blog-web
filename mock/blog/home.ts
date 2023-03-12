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
              'name|+1': [
                '偷偷告诉大家，本博客的后台管理也正在制作，为大家准备了游客专用账号！',
                '网站新增留言回复啦！使用QQ登陆即可回复，人人都可以回复！',
                '如果你觉得网站做得还不错，来Fly社区点个赞吧！<a href="http://fly.layui.com/case/2017/"target="_blank"style="color: #01aaed">点我前往</a></span>',
                '个人博客 &nbsp;——&nbsp;一个.NET程序员的个人博客，新版网站采用Layui为前端框架，目前正在建设中！',
              ],
              date: '@datetime',
              'color|+1': ['#009688', 'red', 'red', '#009688'],
            },
          ],
        }),
      );
    },
  },
] as MockMethod[];
