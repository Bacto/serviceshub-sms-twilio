'use strict';

import suspend, { resume } from 'suspend';
import joi from 'joi';
import Twilio from 'twilio';

module.exports = {
  config: {
    validate: {
      payload: {
        accountSid: joi.string().alphanum().required(),
        authToken: joi.string().alphanum().required(),
        from: joi.string().regex(/^\+[0-9]+$/).required(),
        to: joi.string().regex(/^\+[0-9]+$/).required(),
        body: joi.string().required(),
        async: joi.boolean()
      }
    }
  },

  handler: suspend(function*(request, reply) {
    const { accountSid, authToken, from, to, body, async } = request.payload;

    if (async) {
      reply({ result: 'ok' });
    }

    const client = Twilio(accountSid, authToken);
    const result = yield client.sendMessage({
      from,
      to,
      body
    }, resume());

    if (!async) {
      reply(result);
    }
  })
};
