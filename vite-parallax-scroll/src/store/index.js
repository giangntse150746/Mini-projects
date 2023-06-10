import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';

import appReducers from '../slices';

const middleware = getDefaultMiddleware({
  serializableCheck: false,
});
const combinedReducer = combineReducers({
  ...appReducers
});
const rootReducer = (state, action) => {
  if (action.type === 'Reset') {
    state = undefined;
  }
  return combinedReducer(state, action);
};
const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;