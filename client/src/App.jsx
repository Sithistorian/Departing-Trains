import React from 'react';
import Apattern from './components/Apattern';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {


    }
    //bindings
    this.onChange = this.onChange.bind(this);
  }

  //Example Pattern

  // onChange(e) {
  //   this.setState({
  //     input1: e.target.value,
  //   });
  // }

  //Generalization Problem

  // onChange(e) {
  //   if (e.target.name === 'input1') {
  //     this.setState({
  //       input1: e.target.value,
  //     });
  //   } else if (e.target.name === 'input2') {
  //     this.setState({
  //       input2: e.target.value,
  //     });
  //   } else if (e.target.name === 'input3') {
  //     this.setState({
  //       input3: e.target.value,
  //     });
  //   }
  // }


  //Solution

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }


  render () {
    return (
      <div><Apattern state={this.state} onChange={this.onChange}/></div>
    )
  }

}

export default App;
