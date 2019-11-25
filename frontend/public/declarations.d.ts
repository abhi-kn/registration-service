declare interface IdTokenParsed {
    name: string
}

declare interface KeyCloak {
    authenticated: boolean,
    init: Function,
    login: Function,
    logout: Function,
    loadUserInfo: Function,
    token: string,
    idTokenParsed: IdTokenParsed
}

declare interface Window {
    clientConfig: object,
    keycloak: KeyCloak,
    Keycloak: Function,
}