import SesamiNode from "../Sesami.node";
import { ReadResourceResponse } from "../types";
import { ISesamiShop } from "./Shop";

/**
 * Class representing the resources API for Sesami.
 */
export class ISesamiResources {
  private _api: SesamiNode;
  private _shop: ISesamiShop;

  /**
   * Creates an instance of ISesamiResources.
   * @param api - The SesamiNode API instance.
   * @param shop - The shop instance.
   */
  constructor(api: SesamiNode, shop: ISesamiShop) {
    this._api = api;
    this._shop = shop;
  }

  /**
   * Retrieves a specific resource by ID.
   * @param id - The ID of the resource.
   * @returns An instance of ISesamiResource.
   */
  getById(id: string): ISesamiResource {
    return new ISesamiResource(this._api, this._shop, id);
  }
}

/**
 * Class representing a single resource in Sesami.
 */
export class ISesamiResource {
  private _api: SesamiNode;
  private _shop: ISesamiShop;
  _id: string;

  /**
   * Creates an instance of ISesamiResource.
   * @param api - The SesamiNode API instance.
   * @param shop - The shop instance.
   * @param id - The ID of the resource.
   */
  constructor(api: SesamiNode, shop: ISesamiShop, id: string) {
    this._api = api;
    this._shop = shop;
    this._id = id;
  }

  /**
   * Retrieves the details of the resource.
   * @returns A promise resolving to the resource details.
   */
  async get(): Promise<ReadResourceResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/resources/${this._id}`,
    });
  }
}
