import SesamiNode from "../Sesami.node";
import { ReadResourceResponse } from "../types";
import { ISesamiShop } from "./Shop";

export class ISesamiResources {
  private _api: SesamiNode;
  private _shop: ISesamiShop;

  constructor(api: SesamiNode, shop: ISesamiShop) {
    this._api = api;
    this._shop = shop;
  }

  getById(id: string): ISesamiResource {
    return new ISesamiResource(this._api, this._shop, id);
  }
}

export class ISesamiResource {
  private _api: SesamiNode;
  private _shop: ISesamiShop;
  _id: string;

  constructor(api: SesamiNode, shop: ISesamiShop, id: string) {
    this._api = api;
    this._shop = shop;
    this._id = id;
  }

  async get(): Promise<ReadResourceResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/resources/${this._id}`,
    });
  }
}
