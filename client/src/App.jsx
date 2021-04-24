import React from 'react';

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
      <div>React is Working</div>
    )
  }

}

export default App;
