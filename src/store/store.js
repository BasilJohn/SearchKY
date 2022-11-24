import { configureStore,applyMiddleware,compose} from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import rootReducer from "./reducers";
let composeEnhancers = compose;
export const store =configureStore({reducer: rootReducer},composeEnhancers(applyMiddleware(ReduxThunk)));
