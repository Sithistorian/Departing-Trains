/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';

Enzyme.configure({ adapter: new Adapter() });

// Components to Test
import App from './App';
import Routes from './components/Routes';
import StopsList from './components/StopsList';
import Directions from './components/Directions';
import Prediction from './components/Prediction';

// Test Renderng

describe('The App component should be working correctly', () => {

  it('should render App without crashing', () => {
    mount(<App/>);
  });

  it('should have a header', () => {
    const wrapper = shallow(<App/>);
    const header = (<div id="app-header">MBTA Departure Finder</div>);

    expect(wrapper.contains(header)).toEqual(true);
  });

  it('should have the correct title', () => {
    const wrapper = shallow(<App/>);

    expect(wrapper.find('#app-header').text()).toEqual('MBTA Departure Finder');
  });

  it('should render a back button', () => {
    const wrapper = shallow(<App/>);

    expect(wrapper.find('#app-backbutton').type()).toEqual('button');
  });

  it('should render a route dropdown menu', () => {
    const wrapper = mount(<App/>);

    expect(wrapper.find('option').text()).toEqual('Select Your Route');
  });
  // it('should have Routes set in state after initialization', () => {
  //   const wrapper = mount(<App/>);
  //   expect(wrapper.state('routes').length).not.toEqual(0);
  // })
})
