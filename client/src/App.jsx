import React from 'react';

//import child components
import Routes from './components/Routes';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      routes: [],
      routeSelected: '',
      stops: []
    }
    //bindings
    this.setStops = this.setStops.bind(this);
    this.selectRoute = this.selectRoute.bind(this);

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

  selectRoute (e) {
    e.preventDefault();
    this.setState({
      routeSelected: e.target.value
    }, () => {
      this.setStops(e.target.value);
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

        <Routes
        routes={this.state.routes}
        routeSelected={this.state.routeSelected}
        selectRoute={this.selectRoute}
        stops={this.state.stops}
        />

      </div>
    )
  }

}

export default App;
