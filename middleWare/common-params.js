import { getNow } from '@/lib/utils';

function commonParams() {
  return async (ctx, next) => {
    const { body } = ctx.request;
    if (!body) {
      ctx.request.body = {};
    }
    ctx.request.body.createdTime = getNow();
    await next();
  };
}

export default commonParams;
