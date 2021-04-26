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
  it('should have Routes set in state after initialization', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.state('routes').length).not.toEqual(0);
  })
})


