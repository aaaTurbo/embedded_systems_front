import Keycloak from 'keycloak-js';

const keycloak =  new Keycloak({
    url: 'http://localhost:8080/auth',
    realm: 'my-realm',
    clientId: 'my-client'
});

export default keycloak;