import SesamiNode from "../Sesami.node";
import { SesameReservationsResponse } from "../types";
import { ReadReservationResponse } from "../types/Appointments.types";
import { ISesamiShop } from "./Shop";

/**
 * Class representing the reservations API for Sesami.
 */
export class ISesamiReservations {
  private _api: SesamiNode;
  private _shop: ISesamiShop;

  /**
   * Creates an instance of ISesamiReservations.
   * @param api - The SesamiNode API instance.
   * @param shop - The shop instance.
   */
  constructor(api: SesamiNode, shop: ISesamiShop) {
    this._api = api;
    this._shop = shop;
  }

  /**
   * Retrieves a list of reservations.
   * @param limit - The maximum number of reservations to retrieve.
   * @param searchTerm - A search term to filter reservations.
   * @returns A promise resolving to a list of reservations.
   */
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

  /**
   * Retrieves a specific reservation by ID.
   * @param id - The ID of the reservation.
   * @returns An instance of ISesamiReservation.
   */
  getById(id: string): ISesamiReservation {
    return new ISesamiReservation(this._api, this._shop, id);
  }

  /**
   * Adds a new reservation.
   * @param properties - The properties of the reservation to add.
   * @throws Error indicating the method is not implemented.
   */
  async add(properties: any): Promise<ReadReservationResponse> {
    throw new Error("Not implemented in API");
  }
}

/**
 * Class representing a single reservation in Sesami.
 */
export class ISesamiReservation {
  private _api: SesamiNode;
  private _shop: ISesamiShop;
  _id: string;

  /**
   * Creates an instance of ISesamiReservation.
   * @param api - The SesamiNode API instance.
   * @param shop - The shop instance.
   * @param id - The ID of the reservation.
   */
  constructor(api: SesamiNode, shop: ISesamiShop, id: string) {
    this._api = api;
    this._shop = shop;
    this._id = id;
  }

  /**
   * Retrieves the details of the reservation.
   * @returns A promise resolving to the reservation details.
   */
  async get(): Promise<ReadReservationResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/reservations/${this._id}`,
    });
  }

  /**
   * Updates the reservation with new properties.
   * @param properties - The properties to update.
   * @throws Error indicating the method is not implemented.
   */
  async update(properties: any): Promise<ReadReservationResponse> {
    throw new Error("Not implemented in API");
  }

  /**
   * Deletes the reservation.
   * @throws Error indicating the method is not implemented.
   */
  async delete(): Promise<{
    message: string;
  }> {
    throw new Error("Not implemented in API");
  }
}
