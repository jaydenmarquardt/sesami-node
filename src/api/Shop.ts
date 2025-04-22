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

export class ISesamiShops {
  private _api: SesamiNode;

  constructor(api: SesamiNode) {
    this._api = api;
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
      endpoint: "shops",
      query: {
        limit,
        searchTerm,
      },
    });
  }

  getById(id: string): ISesamiShop {
    return new ISesamiShop(this._api, id);
  }
}

export class ISesamiShop {
  private _api: SesamiNode;
  _id: string;
  services: ISesamiServices;
  teamMembers: ISesamiTeamMembers;
  flows: ISesamiFlows;
  appointments: ISesamiAppointments;
  reservations: ISesamiReservations;
  resources: ISesamiResources;

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

  async get(): Promise<SesameShopResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `shops/${this._id}`,
    });
  }

  async config(): Promise<ReadShopConfigResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `shops/${this._id}/configs`,
    });
  }

  async settings(): Promise<ReadSettingResponse> {
    return (await this.get())?.settings;
  }

  async plan(): Promise<ReadShopPlanResponse> {
    return (await this.get())?.plan;
  }

  async update(properties: UpdateShopRequest): Promise<SesameShopResponse> {
    return await this._api.request({
      method: "PATCH",
      endpoint: `shops/${this._id}`,
      body: properties,
    });
  }
}
