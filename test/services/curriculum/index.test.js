'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('curriculum service', function() {
  it('registered the curriculums service', () => {
    assert.ok(app.service('curriculums'));
  });
});
