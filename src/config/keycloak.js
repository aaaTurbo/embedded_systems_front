import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:9000/',
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
        if (!authenticated) {
            window.location.reload();
        } else {
            console.log(keycloak.authenticated);
            console.log(keycloak.token);
        }
    })
    .catch(err => {
        console.error('Failed to initialize Keycloak', err);
    });

export default keycloak;