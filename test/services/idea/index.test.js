'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('idea service', () => {
  it('registered the ideas service', () => {
    assert.ok(app.service('ideas'));
  });
});
