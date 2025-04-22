import SesamiNode from "../Sesami.node";
import { AccessTokenRequest } from "../types";

export class ISesamiAuth {
  private _api: SesamiNode;

  constructor(api: SesamiNode) {
    this._api = api;
  }

  async refreshToken({ token }: { token?: string }): Promise<{
    access_token: string;
    refresh_token: string;
  }> {
    return await this._api.request({
      method: "POST",
      endpoint: `auth/refresh-token`,
      body: {
        refreshToken: token,
      },
    });
  }

  async accessToken(properties: AccessTokenRequest): Promise<unknown> {
    return await this._api.request({
      method: "POST",
      endpoint: `auth/access-token`,
      body: properties,
    });
  }

  async oAuth({
    clientId,
    shopId,
    scopes,
    redirectUri,
  }: {
    clientId: string;
    shopId: string;
    scopes: string[];
    redirectUri: string;
  }): Promise<unknown> {
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

  async oAuthToken(): Promise<unknown> {
    return await this._api.request({
      method: "GET",
      endpoint: `oauth/access-token`,
      body: {},
    });
  }
}
