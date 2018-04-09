import React from 'react';
import styled from 'styled-components';

const width = 300;
const circleSize = 12;
const fontSize = 4;

export const RootWrapper = styled.div`
  width: ${ width }px;
  min-height: 0;
  padding: 0;                                                                                                                                                                                                                                                                                                      
`;

export const InnerWrapper = styled.div`
  width: ${ width }px;
  display: table;
  margin: 0 auto;
  background: #CDCDCD;  
`;

export const StepItem = styled.div`
  display: table-cell;
  position: relative;
`;

export const StepCircle = styled.div`
  width: ${ circleSize }px;
  height: ${ circleSize }px;
  margin: 0 auto;
  background: ${props => props.active ? '#45CD5E' : '#FFF'};
  border-radius: 50%;
  text-align: center;
  padding: 0;
  display: block;
  opacity: 1;
  border-width: 0.1em;
  border-color: #DCDCDC;
  border-style: solid;
`;

export const StepTitle = styled.div`
  margin-top: 8;
  font-size: ${ fontSize };
  font-family: arial;
  font-weight: bold;
  text-align: center;
  display: block;
  color: #757575;
  opacity: 1;
`;