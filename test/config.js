var baseUrl = 'https://keycloak-keycloak2.apps-crc.testing/auth';

module.exports = {
  registration: {
    endpoint: baseUrl + '/realms/myrealms/clients-registrations',
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI0NDQwYWQ3OS0zN2JmLTQ0OGEtYmUwZS01ODkyODhhMGYyNjEifQ.eyJleHAiOjAsImlhdCI6MTYyOTkyMTIzMCwianRpIjoiODAwOTYxMmUtNjU4Ni00ZjNkLTgzNjctNWY3N2MyZDUwMTRkIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay1rZXljbG9hazIuYXBwcy1jcmMudGVzdGluZy9hdXRoL3JlYWxtcy9teXJlYWxtIiwiYXVkIjoiaHR0cHM6Ly9rZXljbG9hay1rZXljbG9hazIuYXBwcy1jcmMudGVzdGluZy9hdXRoL3JlYWxtcy9teXJlYWxtIiwidHlwIjoiUmVnaXN0cmF0aW9uQWNjZXNzVG9rZW4iLCJyZWdpc3RyYXRpb25fYXV0aCI6ImF1dGhlbnRpY2F0ZWQifQ.R4ixvwRc0V8KjDoaubHg6Qe6b7yx-TVjzsWpAqsmkiA'
  },
  baseUrl: baseUrl,
  token: {
    username: 'alice',
    password: 'password',
    grant_type: 'password',
    client_id: 'test-cli',
    realmName: 'quickstart'
  },
  testClient: {
    clientId: 'test-cli',
    consentRequired: "false",
    publicClient: "true",
    standardFlowEnabled: "false",
    directAccessGrantsEnabled: "true",
    fullScopeAllowed: "true"
  }
};
