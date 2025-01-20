import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:9000/realms/devrealm/protocol/openid-connect/auth',
    realm: 'devrealm',
    clientId: 'cards-public',
    KeycloakResponseType: 'code',
    onLoad: 'login-required'
});

keycloak.init({
    onLoad: 'login-required',
    responseType: "code",
    silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
    checkLoginIframe: false,
    redirectUri: 'http://localhost:3000/',
    pkceMethod: 'S256'
})
    .then(authenticated => {
        if (authenticated) {
            console.log('Authenticated');
        } else {
            console.warn('Not authenticated');
        }
    })
    .catch(err => {
        console.error('Failed to initialize Keycloak', err);
    });

export default keycloak;