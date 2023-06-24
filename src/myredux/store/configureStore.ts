import { applyMiddleware, createStore,compose } from 'redux';
import thunk from 'redux-thunk';
import { blogReducer } from '../reducers/blogReducer';

const composeEnhancers: any = compose;

const configureStore: any = () => {
  const store: any = createStore(
    blogReducer,

    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

export default configureStore;