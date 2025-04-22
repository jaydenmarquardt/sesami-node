import SesamiNode from "../Sesami.node";
import { SesameAppointmentsResponse } from "../types";
import {
  CancelAppointmentRequest,
  CreateAppointmentEventRequest,
  GenerateReportResponse,
  ReadAppointmentResponse,
  RescheduleAppointmentRequest,
} from "../types/Appointments.types";
import { ISesamiShop } from "./Shop";

export class ISesamiAppointments {
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
  }): Promise<SesameAppointmentsResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/appointments`,
      query: {
        limit,
        searchTerm,
      },
    });
  }

  getById(id: string): ISesamiAppointment {
    return new ISesamiAppointment(this._api, this._shop, id);
  }

  async add(properties: any): Promise<any> {
    throw new Error("Not implemented in API");
  }

  async report({
    teamMember,
    filterType,
    start,
    end,
  }: {
    teamMember?: string;
    filterType?: "ALL" | "UPCOMING" | "PAST" | "RANGE";
    start?: string; //Date Time
    end?: string; //Date Time
  }): Promise<GenerateReportResponse> {
    return await this._api.request({
      method: "POST",
      endpoint: `${this._shop._id}/appointments/report`,
      query: {
        teamMember,
        filterType,
        start,
        end,
      },
    });
  }
}

export class ISesamiAppointment {
  private _api: SesamiNode;
  private _shop: ISesamiShop;
  _id: string;

  constructor(api: SesamiNode, shop: ISesamiShop, id: string) {
    this._api = api;
    this._shop = shop;
    this._id = id;
  }

  async get(): Promise<ReadAppointmentResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/appointments/${this._id}`,
    });
  }

  async update(properties: any): Promise<ReadAppointmentResponse> {
    throw new Error("Not implemented in API");
  }

  async delete(): Promise<{
    message: string;
  }> {
    throw new Error("Not implemented in API");
  }

  async cancel(properties: CancelAppointmentRequest): Promise<{
    message: string;
  }> {
    return await this._api.request({
      method: "POST",
      endpoint: `${this._shop._id}/appointments/${this._id}/cancel`,
      body: properties,
    });
  }
  async noShow(
    properties: CreateAppointmentEventRequest
  ): Promise<ReadAppointmentResponse> {
    return await this._api.request({
      method: "POST",
      endpoint: `${this._shop._id}/appointments/${this._id}/no-show`,
      body: properties,
    });
  }
  async checkIn(
    properties: CreateAppointmentEventRequest
  ): Promise<ReadAppointmentResponse> {
    return await this._api.request({
      method: "POST",
      endpoint: `${this._shop._id}/appointments/${this._id}/check-in`,
      body: properties,
    });
  }
  async reschedule(properties: RescheduleAppointmentRequest): Promise<{
    message: string;
  }> {
    return await this._api.request({
      method: "POST",
      endpoint: `${this._shop._id}/appointments/${this._id}/reschedule`,
      body: properties,
    });
  }

  async resendConfirmation(): Promise<ReadAppointmentResponse> {
    return await this._api.request({
      method: "POST",
      endpoint: `${this._shop._id}/appointments/${this._id}/resend-appointment-confirmation`,
    });
  }
}
