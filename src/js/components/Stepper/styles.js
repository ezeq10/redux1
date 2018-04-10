// components/Stepper/styles.js

import React from 'react';
import styled from 'styled-components';

const width = 300;
const circleSize = 11;

export const RootWrapper = styled.div`
  width: ${ width }px;
  min-height: 0;
`;

export const InnerWrapper = styled.div`
  width: ${ width }px;
  height: 28px;
  display: table;
  margin: 0 auto;
  background: #B9B9B9;  
  border-radius: 5px;
`;

export const StepItem = styled.div`
  display: table-cell;
  position: relative;
`;

export const StepCircle = styled.div`
  width: ${ circleSize }px;
  height: ${ circleSize }px;
  margin: 0 auto;
  background: ${props => props.active ? '#2D9B1E' : '#FAFAFA'};
  border-radius: 50%;
  text-align: center;
  padding: 0;
  display: block;
  opacity: 1;
  border-width: 0.1em;
  border-color: ${props => props.active ? '#67C049' : '#959595'};
  border-style: solid;
`;

export const StepTitle = styled.div`
  width: 80px;
  margin-top: 4px;
  margin-left: 10px;
  font-size: x-small;
  font-family: arial;
  font-weight: bold;
  text-align: left;
  display: block;
`;