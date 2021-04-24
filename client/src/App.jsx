import React from 'react';

// import child components
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
    // Bindings
    this.setStops = this.setStops.bind(this);
    this.selectRouteId = this.selectRouteId.bind(this);
    this.setRouteDirections = this.setRouteDirections.bind(this);
    this.selectStopId = this.selectStopId.bind(this);

  }

 // Initilization
  componentDidMount () {
    const { getRoutes } = this.props.requests;

    getRoutes(res => {
      this.setState({
        routes: res
      })
    })
  }

  // Handlers

  setStops (routeId) {
   const { getStops } = this.props.requests;

   getStops(routeId, res => {
     this.setState({
       stops: res
     })
   })
  }

  setRouteDirections (routeId) {
    const { routes } = this.state;

    let directions = null;

    for(let i = 0; i < routes.length; i++) {
      if (routeId === routes[i].id) {
        directions = routes[i].attributes.direction_names
      }
    }

    this.setState({
      routeDirections: directions
    })

  }

  selectRouteId (e) {
    e.preventDefault();
    this.setState({
      routeSelected: e.target.value
    }, () => {
      this.setStops(e.target.value);
      this.setRouteDirections(e.target.value);
    })
  }

  selectStopId (e) {
    e.preventDefault();
    this.setState({
      stopSelected: e.target.value
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
