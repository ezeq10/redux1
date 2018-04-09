import React, { Component } from "react";
import ReactDOM from "react-dom";
import Stepper from './js/components/Stepper';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      steps: [{
        title: 'Step One',
        href: '#1',
        onClick: (e) => {
          console.log('onClick', 1)
        }
      }, {
        title: 'Step Two',
        href: '#2',
        onClick: (e) => {
          console.log('onClick', 2)
        }
      }, {
        title: 'Step Three',
        href: '#3',
        onClick: (e) => {
          console.log('onClick', 3)
        }
      }, {
        title: 'Step Four',
        href: '#4',
        onClick: (e) => {
          console.log('onClick', 4)
        }
      }, {
        title: 'Step Five',
        href: '#5',
        onClick: (e) => {
          console.log('onClick', 5)
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
        <div>
          <Stepper 
            activeStep={ currentStep }
            steps={ steps } 
            disabledSteps={ [] } 
          />
        </div>  
      </div>
    );
  }  
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));