import Keycloak from 'keycloak-js';

class KeyCloakService {
    constructor() {
        this.keycloak = new Keycloak({
            url: 'http://localhost:9000/',
            realm: 'devrealm',
            clientId: 'cards-public',
            KeycloakResponseType: 'code',
            onLoad: 'login-required'
        });

        this.isAuthenticated = false;

        this.keycloak.init({
            onLoad: 'login-required',
            responseType: "code",
            silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
            checkLoginIframe: false,
            redirectUri: 'http://localhost:3000/',
            pkceMethod: 'S256'
        })
            .then(authenticated => {
                this.isAuthenticated = authenticated;
                if (!authenticated) {
                    window.location.reload();
                }
            });
    }

    login() {
        this.keycloak.login();
    }

    logout() {
        this.keycloak.logout();
    }

    getToken() {
        return this.keycloak.token;
    }

    isLoggedIn() {
        return this.isAuthenticated;
    }

}

export default new KeyCloakService();