import {createStore, applyMiddleware, compose} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from './RootReducer';

const configureStore = (initialState: object) => {
  const enhance = compose(applyMiddleware(thunk, logger));
  return createStore(RootReducer, initialState, enhance);
};

const store = configureStore({});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
