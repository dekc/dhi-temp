import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { DHILogin } from 'src/';

describe('DHILogin', () => {
  let node;

  beforeEach(() => {
    node = document.createElement('div');
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it('displays placeholder message', () => {
    render(<DHILogin />, node, () => {
      expect(node.innerHTML).toContain('DHI Custom Login');
    });
  });
});
