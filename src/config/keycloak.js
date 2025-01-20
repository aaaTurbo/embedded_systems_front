import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:9000',
    realm: 'devrealm',
    clientId: 'cards-public'
});

export default keycloak;