"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Auth_1 = require("./api/Auth");
const Shop_1 = require("./api/Shop");
/**
 * Main class for interacting with the Sesami API.
 */
class SesamiNode {
    /**
     * Creates an instance of SesamiNode.
     * @param apiClientID - The client ID for the Sesami API.
     * @param apiToken - The API token for authentication.
     * @param shopID - The shop ID to interact with.
     * @param apiVersion - The version of the API to use (default is "v1").
     * @param apiURL - The base URL of the API (optional).
     * @throws Error if any required parameter is missing.
     */
    constructor({ apiClientID, apiToken, shopID, apiVersion = "v1", apiURL, }) {
        this._apiURL = "https://api.sesami.co/api/";
        this.shops = new Shop_1.ISesamiShops(this);
        this.auth = new Auth_1.ISesamiAuth(this);
        if (!apiToken) {
            throw new Error("Sesami Node: apiToken is required");
        }
        if (!apiClientID) {
            throw new Error("Sesami Node: apiClientID is required");
        }
        if (!shopID) {
            throw new Error("Sesami Node: shopID is required");
        }
        this._apiToken = apiToken;
        this._apiClientID = apiClientID;
        this._shopID = shopID;
        this._apiVersion = apiVersion;
        this._apiURL = apiURL || this._apiURL;
    }
    /**
     * Makes a request to the Sesami API.
     * @param method - The HTTP method to use (default is "GET").
     * @param endpoint - The API endpoint to call.
     * @param body - The request body (optional).
     * @param query - The query parameters (optional).
     * @returns A promise resolving to the API response.
     */
    async request({ method = "GET", endpoint, body, query, }) {
        const queryString = query
            ? Object.keys(query)
                .filter((key) => query[key] !== undefined)
                .map((key) => {
                const value = query[key];
                if (Array.isArray(value)) {
                    return `${key}=${value.join(",")}`;
                }
                return `${key}=${encodeURIComponent(value)}`;
            })
                .join("&")
            : "";
        const url = `${this._apiURL}${this._apiVersion}/${endpoint}${queryString ? `?${queryString}` : ""}`;
        const myHeaders = new Headers();
        myHeaders.append("content-type", "application/json");
        myHeaders.append("x-api-key", this._apiToken);
        myHeaders.append("x-client-id", this._apiClientID);
        myHeaders.append("x-shop-id", this._shopID);
        const requestOptions = {
            method,
            headers: myHeaders,
            redirect: "follow",
            body: body ? JSON.stringify(body) : null,
        };
        return await fetch(url, requestOptions)
            .then((response) => {
            return response.json();
        })
            .then((response) => {
            console.log("response", { response, url, method, body, query });
            return response;
        })
            .catch((error) => {
            console.error("error", error);
            return { error, url, method, body, query };
        });
    }
    /**
     * Makes a GraphQL request to the Sesami API.
     * @param method - The HTTP method to use (default is "POST").
     * @param body - The request body (optional).
     * @param query - The GraphQL query string (optional).
     * @returns A promise resolving to the GraphQL response.
     */
    async qraphql({ method = "POST", body, query, }) {
        const url = `${this._apiURL}/graphql`;
        const myHeaders = new Headers();
        myHeaders.append("content-type", "application/json");
        myHeaders.append("x-api-key", this._apiToken);
        myHeaders.append("x-client-id", this._apiClientID);
        myHeaders.append("x-shop-id", this._shopID);
        const requestOptions = {
            method,
            headers: myHeaders,
            redirect: "follow",
            body: JSON.stringify({
                query: `{"query":"query GetShops { getShops {data { email } } }","variables":{}}`,
                variables: {
                    searchTerm: "ss",
                    limit: 7,
                    after: null,
                    before: null,
                },
                operationName: "getShops",
            }),
        };
        return await fetch(url, requestOptions)
            .then((response) => response.json())
            .catch((error) => {
            console.error("error", error);
            return { error, url, method, body, query };
        });
    }
}
exports.default = SesamiNode;
