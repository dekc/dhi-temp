import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import { DHIChart, DHILogin } from '../../src';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

const ComponentTitle = styled.h3`
  font-size: 1.2em;
  text-align: left;
  color: ${props => props.color || 'steelblue'};
  padding: 3px;
`;
/**
 * Simple top-level component used to demonstrate the various
 * DHI React-based components.
 *
 * @class Demo
 * @extends {Component}
 */
class Demo extends Component {
  render() {
    return (
      <div>
        <Title>dhi-react-components Library</Title>
        <ComponentTitle color="red">DHI Chart Component</ComponentTitle>
        <DHIChart />
        <ComponentTitle>DHI Login Component</ComponentTitle>
        <DHILogin />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
