import * as ActionTypes from '../actionConstants';
const initialState = {
  searchList: [],
  searchListError: '',
  count: 0,
  isDataLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        searchList: action?.data?.items,
        searchListError: '',
      };
    case ActionTypes.GET_SEARCH_DATA_ERROR:
      return {
        ...state,
        searchList: [],
        searchListError: 'Could not retrieve results please try again.',
      };
    case ActionTypes.SET_DATA_LOADING:
      return {
        ...state,
        isDataLoading: action.data,
      };
    case ActionTypes.SET_COUNTER_VALUE:
      return {
        ...state,
        count: action.data,
      };
    default:
      return state;
  }
};
