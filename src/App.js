import React, { Component } from "react";
import ReactDOM from "react-dom";
import Stepper from './js/components/Stepper';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      steps: [{
        title: 'Step One',
        href: 'http://example1.com',
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 1)
        }
      }, {
        title: 'Step Two',
        href: 'http://example2.com',
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 2)
        }
      }, {
        title: 'Step Three',
        href: 'http://example3.com',
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 2)
        }
      }],
      currentStep: 0
    }
  }

  render() {

    const { steps, currentStep } = this.state;

    return (
      <div>
        <p>React here!</p>
        <p>
          <Stepper 
            activeStep={ currentStep }
            steps={ steps } 
            disabledSteps={ [2] } 
          />
        </p>  
      </div>
    );
  }  
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));