import SesamiNode from "../Sesami.node";
import type {
  ReadAvailabilityResponse,
  ReadServiceResponse,
  ReadServiceVariantResponse,
  UpdateServiceRequest,
  SesameShopsResponse,
} from "../types";
import { ISesamiShop } from "./Shop";

/**
 * Class representing the services API for Sesami.
 */
export class ISesamiServices {
  private _api: SesamiNode;
  private _shop: ISesamiShop;

  /**
   * Creates an instance of ISesamiServices.
   * @param api - The SesamiNode API instance.
   * @param shop - The shop instance.
   */
  constructor(api: SesamiNode, shop: ISesamiShop) {
    this._api = api;
    this._shop = shop;
  }

  /**
   * Retrieves a list of services.
   * @param limit - The maximum number of services to retrieve.
   * @param searchTerm - A search term to filter services.
   * @returns A promise resolving to a list of services.
   */
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

  /**
   * Adds a new service.
   * @param properties - The properties of the service to add.
   * @returns A promise resolving to the created service.
   */
  async add(properties: UpdateServiceRequest): Promise<ReadServiceResponse> {
    return await this._api.request({
      method: "POST",
      endpoint: `${this._shop._id}/services`,
      body: properties,
    });
  }

  /**
   * Retrieves a specific service by ID.
   * @param id - The ID of the service.
   * @returns An instance of ISesamiService.
   */
  getById(id: string): ISesamiService {
    return new ISesamiService(this._api, this._shop, id);
  }
}

/**
 * Class representing a single service in Sesami.
 */
export class ISesamiService {
  private _api: SesamiNode;
  private _shop: ISesamiShop;
  _id: string;

  /**
   * Creates an instance of ISesamiService.
   * @param api - The SesamiNode API instance.
   * @param shop - The shop instance.
   * @param serviceID - The ID of the service.
   */
  constructor(api: SesamiNode, shop: ISesamiShop, serviceID: string) {
    this._api = api;
    this._shop = shop;
    this._id = serviceID;
  }

  /**
   * Retrieves the details of the service.
   * @returns A promise resolving to the service details.
   */
  async get(): Promise<ReadServiceResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/services/${this._id}`,
    });
  }

  /**
   * Updates the service with new properties.
   * @param properties - The properties to update.
   * @returns A promise resolving to the updated service.
   */
  async update(properties: UpdateServiceRequest): Promise<ReadServiceResponse> {
    return await this._api.request({
      method: "PATCH",
      endpoint: `${this._shop._id}/services/${this._id}`,
      body: properties,
    });
  }

  /**
   * Deletes the service.
   * @returns A promise resolving to a confirmation message.
   */
  async delete(): Promise<{
    message: string;
  }> {
    return await this._api.request({
      method: "DELETE",
      endpoint: `${this._shop._id}/services/${this._id}`,
    });
  }

  /**
   * Retrieves the variants of the service.
   * @returns A promise resolving to a list of service variants.
   */
  async variants(): Promise<ReadServiceVariantResponse[]> {
    return (await this.get())?.variants || [];
  }

  /**
   * Retrieves the availabilities of the service.
   * @returns A promise resolving to a list of service availabilities.
   */
  async availabilities(): Promise<ReadAvailabilityResponse[]> {
    return (await this.get())?.availabilities || [];
  }
}
