import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
import thunk from 'redux-thunk';

import Home from '../src/screens/Home/Home';

afterEach(cleanup);
const props = {
  navigation: {
    navigate: jest.fn(),
  },
};

describe('<Home />', () => {
  const mockStore = configureStore([thunk]);
  it('Clear Store Values', () => {
    const home = {
      count: 0,
      searchList: [],
    };
    const store = mockStore({home});
    const rendered = render(
      <Provider store={store}>
        <Home props={props}/>
      </Provider>,
    );
    const buttonComponent = rendered.getByTestId('btnSearch');

    fireEvent(buttonComponent, 'press');

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toEqual('CLEAR_STORE_DATA');
  });

});
