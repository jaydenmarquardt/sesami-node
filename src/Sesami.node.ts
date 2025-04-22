import { ISesamiAuth } from "./api/Auth";
import { ISesamiShops } from "./api/Shop";

export default class SesamiNode {
  private _apiToken: string;
  private _apiClientID: string;
  private _apiVersion: string;
  private _apiURL: string = "https://api.sesami.co/api/";
  private _shopID: string;

  shops: ISesamiShops = new ISesamiShops(this);
  calendar: any; //TODO
  users: any; //TODO
  auth: ISesamiAuth = new ISesamiAuth(this);

  constructor({
    apiClientID,
    apiToken,
    shopID,
    apiVersion = "v1",
    apiURL,
  }: {
    apiToken?: string;
    apiClientID?: string;
    shopID?: string;
    apiVersion?: string;
    apiURL?: string;
  }) {
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

  async request({
    method = "GET",
    endpoint,
    body,
    query,
  }: {
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    endpoint: string;
    body?: any;
    query?: { [key: string]: any };
  }) {
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

    const url = `${this._apiURL}${this._apiVersion}/${endpoint}${
      queryString ? `?${queryString}` : ""
    }`;
    const myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");
    myHeaders.append("x-api-key", this._apiToken);
    myHeaders.append("x-client-id", this._apiClientID);
    myHeaders.append("x-shop-id", this._shopID);

    const requestOptions: any = {
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
  async qraphql({
    method = "POST",
    body,
    query,
  }: {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: any;
    query?: string;
  }) {
    const url = `${this._apiURL}/graphql`;
    const myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");
    myHeaders.append("x-api-key", this._apiToken);
    myHeaders.append("x-client-id", this._apiClientID);
    myHeaders.append("x-shop-id", this._shopID);

    const requestOptions: any = {
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

  async user(limit: number = 10) {
    return await this.request({
      method: "GET",
      endpoint: "shops",
      query: {
        limit,
      },
    });
  }
}
