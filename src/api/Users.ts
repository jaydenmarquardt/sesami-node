import SesamiNode from "../Sesami.node";
import { ISesamiShop } from "./Shop";

export class ISesamiNames {
  private _api: SesamiNode;
  private _shop: ISesamiShop;

  constructor(api: SesamiNode, shop: ISesamiShop) {
    this._api = api;
    this._shop = shop;
  }

  async get({
    limit = 10,
    searchTerm,
  }: {
    limit?: number;
    searchTerm?: string;
  }): Promise<SesameNameResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/path`,
      query: {
        limit,
        searchTerm,
      },
    });
  }

  getById(id: string): ISesamiName {
    return new ISesamiName(this._api, this._shop, id);
  }

  async add(properties: CreateNameRequest): Promise<ReadNameResponse> {
    return await this._api.request({
      method: "POST",
      endpoint: `${this._shop._id}/path`,
      body: properties,
    });
  }
}

export class ISesamiName {
  private _api: SesamiNode;
  private _shop: ISesamiShop;
  _id: string;

  constructor(api: SesamiNode, shop: ISesamiShop, id: string) {
    this._api = api;
    this._shop = shop;
    this._id = id;
  }

  async get(): Promise<ReadNameResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/path/${this._id}`,
    });
  }

  async update(properties: UpdateNameRequest): Promise<ReadNameResponse> {
    return await this._api.request({
      method: "PATCH",
      endpoint: `${this._shop._id}/path/${this._id}`,
      body: properties,
    });
  }

  async delete(): Promise<{
    message: string;
  }> {
    return await this._api.request({
      method: "DELETE",
      endpoint: `${this._shop._id}/path/${this._id}`,
    });
  }
}
