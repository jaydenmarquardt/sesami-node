import SesamiNode from "../Sesami.node";
import {
  CreateFlowRequest,
  ReadFlowResponse,
  SesameFlowsResponse,
  UpdateFlowRequest,
} from "../types";
import { ISesamiShop } from "./Shop";

/**
 * Class representing the flows API for Sesami.
 */
export class ISesamiFlows {
  private _api: SesamiNode;
  private _shop: ISesamiShop;

  /**
   * Creates an instance of ISesamiFlows.
   * @param api - The SesamiNode API instance.
   * @param shop - The shop instance.
   */
  constructor(api: SesamiNode, shop: ISesamiShop) {
    this._api = api;
    this._shop = shop;
  }

  /**
   * Retrieves a list of flows.
   * @param limit - The maximum number of flows to retrieve.
   * @param searchTerm - A search term to filter flows.
   * @returns A promise resolving to a list of flows.
   */
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

  /**
   * Retrieves a specific flow by ID.
   * @param id - The ID of the flow.
   * @returns An instance of ISesamiFlow.
   */
  getById(id: string): ISesamiFlow {
    return new ISesamiFlow(this._api, this._shop, id);
  }

  /**
   * Adds a new flow.
   * @param properties - The properties of the flow to add.
   * @returns A promise resolving to the created flow.
   */
  async add(properties: CreateFlowRequest): Promise<ReadFlowResponse> {
    return await this._api.request({
      method: "POST",
      endpoint: `${this._shop._id}/flows`,
      body: properties,
    });
  }
}

/**
 * Class representing a single flow in Sesami.
 */
export class ISesamiFlow {
  private _api: SesamiNode;
  private _shop: ISesamiShop;
  _id: string;

  /**
   * Creates an instance of ISesamiFlow.
   * @param api - The SesamiNode API instance.
   * @param shop - The shop instance.
   * @param id - The ID of the flow.
   */
  constructor(api: SesamiNode, shop: ISesamiShop, id: string) {
    this._api = api;
    this._shop = shop;
    this._id = id;
  }

  /**
   * Retrieves the details of the flow.
   * @returns A promise resolving to the flow details.
   */
  async get(): Promise<ReadFlowResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/flows/${this._id}`,
    });
  }

  /**
   * Updates the flow with new properties.
   * @param properties - The properties to update.
   * @returns A promise resolving to the updated flow.
   */
  async update(properties: UpdateFlowRequest): Promise<ReadFlowResponse> {
    return await this._api.request({
      method: "PATCH",
      endpoint: `${this._shop._id}/flows/${this._id}`,
      body: properties,
    });
  }

  /**
   * Deletes the flow.
   * @returns A promise resolving to a confirmation message.
   */
  async delete(): Promise<{
    message: string;
  }> {
    return await this._api.request({
      method: "DELETE",
      endpoint: `${this._shop._id}/flows/${this._id}`,
    });
  }
}
