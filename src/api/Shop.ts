import SesamiNode from "../Sesami.node";
import type {
  ReadShopConfigResponse,
  ReadSettingResponse,
  ReadShopPlanResponse,
  UpdateShopRequest,
  SesameShopResponse,
  SesameShopsResponse,
} from "../types";
import { ISesamiAppointments } from "./Appointments";
import { ISesamiFlows } from "./Flows";
import { ISesamiReservations } from "./Reservations";
import { ISesamiResources } from "./Resources";
import { ISesamiServices } from "./Services";
import { ISesamiTeamMembers } from "./TeamMembers";

/**
 * Class representing the shops API for Sesami.
 */
export class ISesamiShops {
  private _api: SesamiNode;

  /**
   * Creates an instance of ISesamiShops.
   * @param api - The SesamiNode API instance.
   */
  constructor(api: SesamiNode) {
    this._api = api;
  }

  /**
   * Retrieves a list of shops.
   * @param limit - The maximum number of shops to retrieve.
   * @param searchTerm - A search term to filter shops.
   * @returns A promise resolving to a list of shops.
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
      endpoint: "shops",
      query: {
        limit,
        searchTerm,
      },
    });
  }

  /**
   * Retrieves a specific shop by ID.
   * @param id - The ID of the shop.
   * @returns An instance of ISesamiShop.
   */
  getById(id: string): ISesamiShop {
    return new ISesamiShop(this._api, id);
  }
}

/**
 * Class representing a single shop in Sesami.
 */
export class ISesamiShop {
  private _api: SesamiNode;
  _id: string;
  services: ISesamiServices;
  teamMembers: ISesamiTeamMembers;
  flows: ISesamiFlows;
  appointments: ISesamiAppointments;
  reservations: ISesamiReservations;
  resources: ISesamiResources;

  /**
   * Creates an instance of ISesamiShop.
   * @param api - The SesamiNode API instance.
   * @param shopID - The ID of the shop.
   */
  constructor(api: SesamiNode, shopID: string) {
    this._api = api;
    this._id = shopID;
    this.services = new ISesamiServices(this._api, this);
    this.teamMembers = new ISesamiTeamMembers(this._api, this);
    this.flows = new ISesamiFlows(this._api, this);
    this.appointments = new ISesamiAppointments(this._api, this);
    this.resources = new ISesamiResources(this._api, this);
    this.reservations = new ISesamiReservations(this._api, this);
  }

  /**
   * Retrieves the details of the shop.
   * @returns A promise resolving to the shop details.
   */
  async get(): Promise<SesameShopResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `shops/${this._id}`,
    });
  }

  /**
   * Retrieves the configuration of the shop.
   * @returns A promise resolving to the shop configuration.
   */
  async config(): Promise<ReadShopConfigResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `shops/${this._id}/configs`,
    });
  }

  /**
   * Retrieves the settings of the shop.
   * @returns A promise resolving to the shop settings.
   */
  async settings(): Promise<ReadSettingResponse> {
    return (await this.get())?.settings;
  }

  /**
   * Retrieves the plan details of the shop.
   * @returns A promise resolving to the shop plan details.
   */
  async plan(): Promise<ReadShopPlanResponse> {
    return (await this.get())?.plan;
  }

  /**
   * Updates the shop with new properties.
   * @param properties - The properties to update.
   * @returns A promise resolving to the updated shop details.
   */
  async update(properties: UpdateShopRequest): Promise<SesameShopResponse> {
    return await this._api.request({
      method: "PATCH",
      endpoint: `shops/${this._id}`,
      body: properties,
    });
  }
}
