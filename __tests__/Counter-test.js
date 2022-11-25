import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
import thunk from 'redux-thunk';

import Counter from '../src/screens/Counter/Counter';

afterEach(cleanup);

describe('<Counter />', () => {
  const mockStore = configureStore([thunk]);
  const INITIAL_STATE = {statecount: 5};
  it('Check Count', () => {
    const home = {
      count: 0,
    };
    const store = mockStore({home});
    const rendered = render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );
    const textComponent = rendered.getByTestId('countText');
    expect(textComponent.props.children).toEqual(0);
  });

  it('Increment Function', () => {
    const home = {
      count: 1,
    };
    const store = mockStore({home});
    const rendered = render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );
    const buttonComponent = rendered.getByTestId('incrementButton');

    fireEvent(buttonComponent, 'press');

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toEqual('SET_COUNTER_VALUE');
    const textComponent = rendered.getByTestId('countText');
    expect(textComponent.props.children).toEqual(1);
  });

  it('Decrement Function', () => {
    const home = {
      count: 0,
    };
    const store = mockStore({home});
    const rendered = render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );
    const buttonComponent = rendered.getByTestId('decrementButton');

    fireEvent(buttonComponent, 'press');

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toEqual('SET_COUNTER_VALUE');
    const textComponent = rendered.getByTestId('countText');
    expect(textComponent.props.children).toEqual(0);
  });
});


