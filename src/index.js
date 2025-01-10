import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import keycloak from "./config/keycloack";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <ReactKeycloakProvider authClient={keycloak}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </ReactKeycloakProvider>
    </Provider>,
);