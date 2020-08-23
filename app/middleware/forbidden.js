'use strict';

module.exports = () => {
  return async function forbidden(ctx, next) {
    await next();
  };
};
