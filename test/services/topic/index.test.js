'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('topic service', function() {
  it('registered the topics service', () => {
    assert.ok(app.service('topics'));
  });
});
