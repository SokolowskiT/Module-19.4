import { createStore } from 'redux';

import comments from './reducer';
import { addComment } from './actions';

const store = createStore(comments, { comments: [] });

console.log(store.getState());

store.subscribe(() => console.log(store.getState()));

store.dispatch(addComment('first text'));
store.dispatch(addComment('second text'));
