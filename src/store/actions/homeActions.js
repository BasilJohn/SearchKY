import * as ActionTypes from '../actionConstants';
import Config from '../../requests/config';
import {get} from '../../requests/apiRequests';

export const getSearchData = value => dispatch => {
  const payload = {
    key: 'AIzaSyAI9pZXDNzAbBmhbrpo3PHf2ok5GRGstg0',
    part: 'snippet',
    maxResults: 25,
    q: value,
    type: 'video',
  };
  dispatch({
    type: ActionTypes.SET_DATA_LOADING,
    data: true,
  });
  get(
    Config.getSearchData,
    payload,
    response => {
      dispatch({
        type: ActionTypes.GET_SEARCH_DATA_SUCCESS,
        data: response?.data,
      });
      dispatch({
        type: ActionTypes.SET_DATA_LOADING,
        data: false,
      });
    },
    error => {
      dispatch({
        type: ActionTypes.GET_SEARCH_DATA_ERROR,
        data: error,
      });
      dispatch({
        type: ActionTypes.SET_DATA_LOADING,
        data: false,
      });
    },
  );
};

export const counterAction = value => dispatch => {
    dispatch({
      type: ActionTypes.SET_COUNTER_VALUE,
      data: value,
    });
};
