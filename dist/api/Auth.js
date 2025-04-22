"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISesamiAuth = void 0;
/**
 * Class representing the authentication API for Sesami.
 */
class ISesamiAuth {
    /**
     * Creates an instance of ISesamiAuth.
     * @param api - The SesamiNode API instance.
     */
    constructor(api) {
        this._api = api;
    }
    /**
     * Refreshes the authentication token.
     * @param token - The refresh token to use.
     * @returns A promise resolving to the new access and refresh tokens.
     */
    async refreshToken({ token }) {
        return await this._api.request({
            method: "POST",
            endpoint: `auth/refresh-token`,
            body: {
                refreshToken: token,
            },
        });
    }
    /**
     * Retrieves an access token.
     * @param properties - The access token request properties.
     * @returns A promise resolving to the access token response.
     */
    async accessToken(properties) {
        return await this._api.request({
            method: "POST",
            endpoint: `auth/access-token`,
            body: properties,
        });
    }
    /**
     * Initiates the OAuth authorization process.
     * @param clientId - The client ID for the OAuth application.
     * @param shopId - The shop ID to authorize.
     * @param scopes - The scopes to request.
     * @param redirectUri - The redirect URI for the OAuth flow.
     * @returns A promise resolving to the OAuth authorization response.
     */
    async oAuth({ clientId, shopId, scopes, redirectUri, }) {
        return await this._api.request({
            method: "GET",
            endpoint: `oauth/authorization`,
            query: {
                clientId,
                shopId,
                scopes,
                redirectUri,
            },
        });
    }
    /**
     * Retrieves an OAuth access token.
     * @returns A promise resolving to the OAuth access token response.
     */
    async oAuthToken() {
        return await this._api.request({
            method: "GET",
            endpoint: `oauth/access-token`,
            body: {},
        });
    }
}
exports.ISesamiAuth = ISesamiAuth;
