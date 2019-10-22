import set from 'lodash/set';

/**
 * 解析 query 参数
 */
function queryParser() {
  return async (ctx, next) => {
    /* eslint-disable */
    if (ctx.request.method !== 'GET') return await next();
    const { url } = ctx.request;
    ctx.request.body = splitQueryToObject(url);
    await next();
  };
}

/**
 * 将 url 转化为对象
 * @param {*} url
 */
function splitQueryToObject(url) {
  const queryParams = {};
  if (url.includes('?')) {
    const paramStrList = url.split('?')[1].split('&');
    paramStrList.reduce((c, param) => set(c, param.split('=')[0], convertPureNumber(param.split('=')[1])), queryParams);
  }

  return queryParams;
}

/**
 * 将纯数字的字符串转成数字
 */
function convertPureNumber(str) {
  if (!str) return '';

  const num = parseInt(str);
  if (str == num) {
    return num;
  }
  return str;
}

export default queryParser;
