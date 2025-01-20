import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import {KeycloakProvider} from "./config/keycloak";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <KeycloakProvider>
                <App/>
            </KeycloakProvider>
        </React.StrictMode>
    </Provider>,
);