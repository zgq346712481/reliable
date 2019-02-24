'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/delegate.test.js', () => {
  const webhook = {
    url: 'https://oapi.dingtalk.com/robot/send?access_token=xxxxx',
  };
  const title = 'test title';
  const text = [ 'text1', 'text2' ];
  const responseData = { test: 1 };

  before(function() {
    app.mockContext({
      helper: {
        sendMarkdown: async options => {
          assert.deepStrictEqual(options.webhook, webhook);
          assert.deepStrictEqual(options.title, title);
          assert.deepStrictEqual(options.text, text);
          return {
            data: responseData,
          };
        },
      },
    });
  });

  it('POST /api/delegate/message delegate message', async () => {
    const { body } = await app
      .httpRequest()
      .post('/api/delegate/message')
      .send({
        webhook,
        title,
        text,
      });
    assert(body.success);
    assert.deepStrictEqual(body.data, responseData);
  });
});
