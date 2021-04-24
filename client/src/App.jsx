import React from 'react';

//import child components
import Routes from './components/Routes';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      routes: []
    }
    //bindings

  }

  componentDidMount () {
    this.props.services.requests.getRoutes(res => {
      this.setState({
        routes: res
      })
    })
  }


  render () {
    return (
      <div>

        <Routes />

      </div>
    )
  }

}

export default App;
