import { createStore } from 'redux';
import todoApp from './reducers';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './Utils/TodoLocalStorage';

const persistedState = loadState();

const store = createStore(
	todoApp,
	persistedState
);

store.subscribe(throttle(() => {
    saveState({
    	todos: store.getState().todos
    });
}, 1000));


export default store;