import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the root reducer
import { rootReducer } from './reducers';

// Default data so we don't have to worry about interacting with an API for tutorial
import comments from './data/comments';
import posts from './data/posts';

// Create object for default data
const defaultState = {
  posts,
  comments
};

export const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);