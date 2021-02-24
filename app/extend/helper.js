const moment = require('moment');
// 格式化时间
exports.formatTime = time => moment(time)
  .format('YYYY-MM-DD HH:mm:ss');
// 处理成功响应
exports.success = ({ ctx, res = null, msg = '请求成功' }) => {
  // 请求日志
  const { method } = ctx.request;
  if (method === 'GET') {
    ctx.logger.info('request.query', ctx.request.query);
  } else {
    ctx.logger.info('request.body', ctx.request.body);
  }
  // 返回日志
  ctx.logger.info('response.body', {
    code: 0,
    data: res,
    msg
  });
  ctx.status = 200;
  return {
    code: 0,
    data: res,
    msg
  };
};
// 有效时间为30分钟
exports.getToken = function(options) {
  return this.app.jwt.sign(options, this.app.config.jwt.secret, { expiresIn: '1800s' });
};
