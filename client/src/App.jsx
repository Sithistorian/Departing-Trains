import React from 'react';
import services from '../services';

// import child components
import Routes from './components/Routes';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      routes: [],
      stops: [],
      directionDestinations: [],
      routeDirections: [],
      routeSelected: '',
      stopSelected: '',
      directionSelected: '',
      directionId: '',
      prediction: [],
      submitted: false,
      vehicleInfo: []
    }
    // Bindings
    this.setStops = this.setStops.bind(this);
    this.setRouteInfo = this.setRouteInfo.bind(this);
    this.setRouteDirections = this.setRouteDirections.bind(this);
    this.setStopId = this.setStopId.bind(this);
    this.setDirection = this.setDirection.bind(this);
    this.setPrediction = this.setPrediction.bind(this);
    this.setVehicleInfo = this.setVehicleInfo.bind(this);
    this.backButton = this.backButton.bind(this);

  }

 // Initilization
  componentDidMount () {
    const { getRoutes } = services.requests;

    getRoutes(res => {
      this.setState({
        routes: res
      })
    })
  }

  // Handlers

  setStops (routeId) {
   const { getStops } = services.requests;

   getStops(routeId, res => {
     this.setState({
       stops: res
     })
   })
  }

  setRouteDirections (routeId) {
    const { routes } = this.state;

    let directions = null;
    let directionDestinations = null;

    for(let i = 0; i < routes.length; i++) {
      if (routeId === routes[i].id) {
        directions = routes[i].attributes.direction_names;
        directionDestinations = routes[i].attributes.direction_destinations;
      }
    }

    this.setState({
      routeDirections: directions,
      directionDestinations
    })

  }

  setRouteInfo (e) {
    e.preventDefault();
    this.setState({
      routeSelected: e.target.value
    }, () => {
      this.setStops(e.target.value);
      this.setRouteDirections(e.target.value);
    })
  }

  setStopId (e) {
    e.preventDefault();
    this.setState({
      stopSelected: e.target.value
    })
  }

  setDirection (e) {
    const { routeDirections } = this.state;
    e.preventDefault();

    const directionId = routeDirections.indexOf(e.target.value)

    this.setState({
      directionSelected: e.target.value,
      directionId
    })
  }

  setPrediction(e) {
    e.preventDefault(e);
    const { routeSelected, stopSelected, directionId } = this.state;
    const { getPrediction } = services.requests;

    getPrediction(routeSelected, stopSelected, directionId, (response) => {
      this.setState({
        prediction: response,
        submitted: true
      }, this.setVehicleInfo)
    })
  }

  setVehicleInfo() {
    const { prediction } = this.state;
    const { getVehicleInfo } = services.requests;

    if (prediction.length !== 0) {
      const vehicleId = prediction[0].relationships.vehicle.data.id;

      getVehicleInfo(vehicleId, (response) => {
        this.setState({
          vehicleInfo: response
        })
      })
    }
  }

  backButton() {
    const { submitted, directionSelected, stopSelected, stops } = this.state;

    if (submitted) {
      this.setState({
        prediction: [],
        submitted: false
      });
      return
    }
    if (directionSelected) {
      this.setState({
        directionSelected: ''
      });
      return
    }
    if (stopSelected) {
      this.setState({
        stopSelected: ''
      });
      return
    }
    if (0 < stops.length) {
      this.setState({
        stops: []
      });
    }
  }

  render () {
    const {routes, routeSelected, setRouteDirections, stops, routeDirections, stopSelected, directionSelected, prediction, submitted, vehicleInfo, directionDestinations} = this.state;
    return (
      <>
      <div id="app-header">MBTA Departure Finder</div>
      <div id="app-main-container">
        <button id="app-backbutton" type="button" onClick={this.backButton}>Back</button>
        <Routes
        stops={stops}
        routes={routes}
        submitted={submitted}
        vehicleInfo={vehicleInfo}
        setStopId={this.setStopId}
        stopSelected={stopSelected}
        routeSelected={routeSelected}
        setRouteInfo={this.setRouteInfo}
        setDirection={this.setDirection}
        routeDirections={routeDirections}
        setPrediction={this.setPrediction}
        directionSelected={directionSelected}
        setRouteDirections={setRouteDirections}
        directionDestinations={directionDestinations}
        prediction={prediction.length !== 0 ? prediction[0] : prediction}
        />
      </div>
      </>
    )
  }

}

export default App;
