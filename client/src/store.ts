import { configureStore } from '@reduxjs/toolkit';
import { compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

// REDUX devtools setup
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({ 
  reducer: reducers,
  enhancers: composeEnhancers,
  middleware: [reduxThunk]
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
