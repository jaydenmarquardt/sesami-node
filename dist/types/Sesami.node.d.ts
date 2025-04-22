import { ISesamiAuth } from "./api/Auth";
import { ISesamiShops } from "./api/Shop";
/**
 * Main class for interacting with the Sesami API.
 */
export default class SesamiNode {
    private _apiToken;
    private _apiClientID;
    private _apiVersion;
    private _apiURL;
    private _shopID;
    shops: ISesamiShops;
    calendar: any;
    users: any;
    auth: ISesamiAuth;
    /**
     * Creates an instance of SesamiNode.
     * @param apiClientID - The client ID for the Sesami API.
     * @param apiToken - The API token for authentication.
     * @param shopID - The shop ID to interact with.
     * @param apiVersion - The version of the API to use (default is "v1").
     * @param apiURL - The base URL of the API (optional).
     * @throws Error if any required parameter is missing.
     */
    constructor({ apiClientID, apiToken, shopID, apiVersion, apiURL, }: {
        apiToken?: string;
        apiClientID?: string;
        shopID?: string;
        apiVersion?: string;
        apiURL?: string;
    });
    /**
     * Makes a request to the Sesami API.
     * @param method - The HTTP method to use (default is "GET").
     * @param endpoint - The API endpoint to call.
     * @param body - The request body (optional).
     * @param query - The query parameters (optional).
     * @returns A promise resolving to the API response.
     */
    request({ method, endpoint, body, query, }: {
        method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
        endpoint: string;
        body?: any;
        query?: {
            [key: string]: any;
        };
    }): Promise<any>;
    /**
     * Makes a GraphQL request to the Sesami API.
     * @param method - The HTTP method to use (default is "POST").
     * @param body - The request body (optional).
     * @param query - The GraphQL query string (optional).
     * @returns A promise resolving to the GraphQL response.
     */
    qraphql({ method, body, query, }: {
        method?: "GET" | "POST" | "PUT" | "DELETE";
        body?: any;
        query?: string;
    }): Promise<any>;
}
