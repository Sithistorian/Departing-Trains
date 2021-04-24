import React from 'react';

//import child components
import Routes from './components/Routes';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      routes: [],
      routeSelected: '',
      routeDirections: [],
      stops: [],
      stopSelected: ''
    }
    //bindings
    this.setStops = this.setStops.bind(this);
    this.selectRouteId = this.selectRouteId.bind(this);
    this.setRouteDirections = this.setRouteDirections.bind(this);
    this.selectStopId = this.selectStopId.bind(this);

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

  setRouteDirections (route) {
    this.setState({
      routeDirections: route.attributes.direction_names
    })
  }

  selectRouteId (e) {
    e.preventDefault();
    this.setState({
      routeSelected: e.target.value
    }, () => {
      this.setStops(e.target.value);
    })
  }

  selectStopId (e) {
    e.preventDefault();
    this.setState({
      stopSelected: e.target.value
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
        setRouteDirections={this.setRouteDirections}
        selectRouteId={this.selectRouteId}
        selectStopId={this.selectStopId}
        stops={this.state.stops}
        routeDirections={this.state.routeDirections}
        stopSelected={this.state.stopSelected}
        />

      </div>
    )
  }

}

export default App;
