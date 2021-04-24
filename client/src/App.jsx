import React from 'react';

//import child components
import Routes from './components/Routes';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      routes: [],
      stops: []
    }
    //bindings
    this.setStops = this.setStops.bind(this);

  }

  //Handlers

  setStops (route) {
   const {getStops} = this.props.requests;

   getStops(route, res => {
     this.setState({
       stops: res
     })
   })
  }

  //Initilization
  componentDidMount () {
    const {getRoutes} = this.props.requests;

    getRoutes(res => {
      this.setState({
        routes: res
      })
    })
  }


  render () {
    return (
      <div>

        <Routes routes={this.state.routes}/>

      </div>
    )
  }

}

export default App;
