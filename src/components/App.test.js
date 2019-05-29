import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/default';
import store, { history } from '../stores';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </ConnectedRouter>
        </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
