import SesamiNode from "../Sesami.node";
import { AccessTokenRequest } from "../types";
/**
 * Class representing the authentication API for Sesami.
 */
export declare class ISesamiAuth {
    private _api;
    /**
     * Creates an instance of ISesamiAuth.
     * @param api - The SesamiNode API instance.
     */
    constructor(api: SesamiNode);
    /**
     * Refreshes the authentication token.
     * @param token - The refresh token to use.
     * @returns A promise resolving to the new access and refresh tokens.
     */
    refreshToken({ token }: {
        token?: string;
    }): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    /**
     * Retrieves an access token.
     * @param properties - The access token request properties.
     * @returns A promise resolving to the access token response.
     */
    accessToken(properties: AccessTokenRequest): Promise<unknown>;
    /**
     * Initiates the OAuth authorization process.
     * @param clientId - The client ID for the OAuth application.
     * @param shopId - The shop ID to authorize.
     * @param scopes - The scopes to request.
     * @param redirectUri - The redirect URI for the OAuth flow.
     * @returns A promise resolving to the OAuth authorization response.
     */
    oAuth({ clientId, shopId, scopes, redirectUri, }: {
        clientId: string;
        shopId: string;
        scopes: string[];
        redirectUri: string;
    }): Promise<unknown>;
    /**
     * Retrieves an OAuth access token.
     * @returns A promise resolving to the OAuth access token response.
     */
    oAuthToken(): Promise<unknown>;
}
