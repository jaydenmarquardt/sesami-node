import SesamiNode from "../Sesami.node";
import {
  CreateFlowRequest,
  ReadFlowResponse,
  SesameFlowsResponse,
  UpdateFlowRequest,
} from "../types";
import { ISesamiShop } from "./Shop";

export class ISesamiFlows {
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
  }): Promise<SesameFlowsResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/flows`,
      query: {
        limit,
        searchTerm,
      },
    });
  }

  getById(id: string): ISesamiFlow {
    return new ISesamiFlow(this._api, this._shop, id);
  }

  async add(properties: CreateFlowRequest): Promise<ReadFlowResponse> {
    return await this._api.request({
      method: "POST",
      endpoint: `${this._shop._id}/flows`,
      body: properties,
    });
  }
}

export class ISesamiFlow {
  private _api: SesamiNode;
  private _shop: ISesamiShop;
  _id: string;

  constructor(api: SesamiNode, shop: ISesamiShop, id: string) {
    this._api = api;
    this._shop = shop;
    this._id = id;
  }

  async get(): Promise<ReadFlowResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/flows/${this._id}`,
    });
  }

  async update(properties: UpdateFlowRequest): Promise<ReadFlowResponse> {
    return await this._api.request({
      method: "PATCH",
      endpoint: `${this._shop._id}/flows/${this._id}`,
      body: properties,
    });
  }

  async delete(): Promise<{
    message: string;
  }> {
    return await this._api.request({
      method: "DELETE",
      endpoint: `${this._shop._id}/flows/${this._id}`,
    });
  }
}
