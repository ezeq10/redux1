// components/Stepper/index.js

import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { 
  RootWrapper, 
  InnerWrapper, 
  StepItem, 
  StepCircle,
  StepTitle
} from './styles';

const Stepper = ({  
    activeStep, 
    steps, 
    disabledSteps
}) => (
  <RootWrapper>
    <InnerWrapper>
      <StepTitle>Title here</StepTitle>
      { steps.map((step, index) => (
        <Step
          key={index}
          width={100 / steps.length}
          title={step.title}
          href={step.href}
          onClick={step.onClick}
          active={!(disabledSteps || []).includes(index) && index === activeStep}
          completed={!(disabledSteps || []).includes(index) && index < activeStep}
          first={index === 0}
          isLast={index === steps.length - 1}
          index={index}            
        />
      ))}
    </InnerWrapper>
  </RootWrapper>
);

Stepper.propTypes = {
  activeStep: PropTypes.number,
  steps: PropTypes.array
};
                          
Stepper.defaultProps = {
  activeStep: 0
};

export default Stepper;


class Step extends PureComponent {
  constructor() {
    super();
  }

  handleOnClick = (e) => {
    this.props.onClick();
    // cambiar estilo bola, marcarlo como activo
  }
  
  render() {        
    const { title, index, active, completed, first, isLast, href, onClick } = this.props;
    return (
      <StepItem>
        <StepCircle active={ active } onClick={ this.handleOnClick }></StepCircle>        
      </StepItem>
    )
  }
}

Step.defaultProps = {  
};

Step.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  active: PropTypes.bool,
  completed: PropTypes.bool,
  first: PropTypes.bool,
  isLast: PropTypes.bool,    
};