import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import throttle from 'lodash/throttle';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { loadState, saveState } from '../helpers/localStorage';

export const history = createBrowserHistory();

const middleware = [
    thunk,
    routerMiddleware(history)
];

const persistedState = loadState();

const store = createStore(
    rootReducer(history),
    persistedState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.subscribe(throttle(() => {
    saveState({
        user: store.getState().user
    });
}, 1000));

export default store;
