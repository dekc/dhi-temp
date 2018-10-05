import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { DHIChart } from 'src/';

describe('DHIChart', () => {
  let node;

  beforeEach(() => {
    node = document.createElement('div');
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it('displays a placeholder message', () => {
    render(<DHIChart />, node, () => {
      expect(node.innerHTML).toContain('Custom DHI Chart');
    });
  });
});
