import SesamiNode from "../Sesami.node";
import type {
  ReadAvailabilityResponse,
  ReadServiceResponse,
  ReadServiceVariantResponse,
  UpdateServiceRequest,
  SesameShopsResponse,
} from "../types";
import { ISesamiShop } from "./Shop";

export class ISesamiServices {
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
  }): Promise<SesameShopsResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/services`,
      query: {
        limit,
        searchTerm,
      },
    });
  }

  async add(properties: UpdateServiceRequest): Promise<ReadServiceResponse> {
    return await this._api.request({
      method: "POST",
      endpoint: `${this._shop._id}/services`,
      body: properties,
    });
  }

  getById(id: string): ISesamiService {
    return new ISesamiService(this._api, this._shop, id);
  }
}

export class ISesamiService {
  private _api: SesamiNode;
  private _shop: ISesamiShop;
  _id: string;

  constructor(api: SesamiNode, shop: ISesamiShop, serviceID: string) {
    this._api = api;
    this._shop = shop;
    this._id = serviceID;
  }

  async get(): Promise<ReadServiceResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/services/${this._id}`,
    });
  }

  async update(properties: UpdateServiceRequest): Promise<ReadServiceResponse> {
    return await this._api.request({
      method: "PATCH",
      endpoint: `${this._shop._id}/services/${this._id}`,
      body: properties,
    });
  }

  async delete(): Promise<{
    message: string;
  }> {
    return await this._api.request({
      method: "DELETE",
      endpoint: `${this._shop._id}/services/${this._id}`,
    });
  }

  async variants(): Promise<ReadServiceVariantResponse[]> {
    return (await this.get())?.variants || [];
  }

  async availabilities(): Promise<ReadAvailabilityResponse[]> {
    return (await this.get())?.availabilities || [];
  }
}
