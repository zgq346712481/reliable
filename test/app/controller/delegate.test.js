'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/delegate.test.js', () => {
  it('POST /api/delegate/message delegate message', async () => {
    const { body } = await app
      .httpRequest()
      .post('/api/delegate/message')
      .send({
        webhook: {
          url: 'https://oapi.dingtalk.com/robot/send?access_token=xxxxx',
        },
        title: 'title',
        text: [ 'text1', 'text2' ],
      });
    assert(body.success);
    const data = body.data;
    // data is the response from DingTalk, something like { errmsg: 'token is not exist', errcode: 300001 }
    assert(data);
  });
});
