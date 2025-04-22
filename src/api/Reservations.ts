import SesamiNode from "../Sesami.node";
import { SesameReservationsResponse } from "../types";
import { ReadReservationResponse } from "../types/Appointments.types";
import { ISesamiShop } from "./Shop";

export class ISesamiReservations {
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
  }): Promise<SesameReservationsResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/reservations`,
      query: {
        limit,
        searchTerm,
      },
    });
  }

  getById(id: string): ISesamiReservation {
    return new ISesamiReservation(this._api, this._shop, id);
  }

  async add(properties: any): Promise<ReadReservationResponse> {
    throw new Error("Not implemented in API");
  }
}

export class ISesamiReservation {
  private _api: SesamiNode;
  private _shop: ISesamiShop;
  _id: string;

  constructor(api: SesamiNode, shop: ISesamiShop, id: string) {
    this._api = api;
    this._shop = shop;
    this._id = id;
  }

  async get(): Promise<ReadReservationResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/reservations/${this._id}`,
    });
  }

  async update(properties: any): Promise<ReadReservationResponse> {
    throw new Error("Not implemented in API");
  }

  async delete(): Promise<{
    message: string;
  }> {
    throw new Error("Not implemented in API");
  }
}
