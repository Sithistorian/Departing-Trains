import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Components to Test
import App from './App';
import Routes from './components/Routes';
import StopsList from './components/StopsList';
import Directions from './components/Directions';
import Prediction from './components/Prediction';
import { shallow, mount } from 'enzyme';

// Test Renderng

describe('render components', () => {
  it('renders the App component without crashing', () => {
    shallow(<App/>);
  });
  it('renders the Routes component without crashing', () => {
    shallow(<Routes/>);
  });
  it('renders the StopsList component without crashing', () => {
    shallow(<StopsList/>);
  });
  it('renders the Directions component without crashing', () => {
    shallow(<Directions/>);
  });
  it('renders the Prediction component without crashing', () => {
    shallow(<Prediction/>);
  });
})

// const wrapper = shallow(<MyComponent />);
// expect(wrapper.find(Foo)).to.have.lengthOf(3);

