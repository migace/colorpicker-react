import { createStore } from 'redux';
import reducers from './reducers';

let store = createStore(reducers);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

export default store;
