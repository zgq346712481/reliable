'use strict';

const { Controller } = require('egg');

class DelegateController extends Controller {
  async message() {
    const ctx = this.ctx;
    const { webhook, text, title } = ctx.request.body;

    const res = await ctx.helper.sendMarkdown({
      webhook,
      title: title || 'title',
      text,
    });

    if (res.data) {
      ctx.success(res.data);
    } else {
      ctx.success({});
    }
  }
}

module.exports = DelegateController;
