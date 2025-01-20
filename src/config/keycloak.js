import { createContext, useContext, useEffect } from 'react';
import Keycloak from 'keycloak-js';
import { useDispatch } from 'react-redux';
import { setAuth } from '../store';

const KeycloakContext = createContext();

const keycloak = new Keycloak({
    url: 'http://localhost:9000/',
    realm: 'devrealm',
    clientId: 'cards-public',
});

export const KeycloakProvider = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        keycloak.init({
            onLoad: 'login-required',
            responseType: "code",
            silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
            checkLoginIframe: false,
            redirectUri: 'http://localhost:3000/',
            pkceMethod: 'S256'
        })
            .then(authenticated => {
                dispatch(setAuth({
                    status: authenticated,
                    token: authenticated ? keycloak.token : null
                }));
            })
            .catch(err => {
                console.error('Failed to initialize Keycloak', err);
                dispatch(setAuth({
                    status: false,
                    token: null
                }));
            });
    }, [dispatch]);

    const login = () => {
        keycloak.login();
    };

    const logout = () => {
        keycloak.logout();
    };

    return (
        <KeycloakContext.Provider value={{ keycloak, login, logout }}>
            {children}
        </KeycloakContext.Provider>
    );
};

export const useKeycloak = () => {
    return useContext(KeycloakContext);
};