import SesamiNode from "../Sesami.node";
import { SesameReservationsResponse } from "../types";
import { ReadReservationResponse } from "../types/Appointments.types";
import { ISesamiShop } from "./Shop";
/**
 * Class representing the reservations API for Sesami.
 */
export declare class ISesamiReservations {
    private _api;
    private _shop;
    /**
     * Creates an instance of ISesamiReservations.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     */
    constructor(api: SesamiNode, shop: ISesamiShop);
    /**
     * Retrieves a list of reservations.
     * @param limit - The maximum number of reservations to retrieve.
     * @param searchTerm - A search term to filter reservations.
     * @returns A promise resolving to a list of reservations.
     */
    get({ limit, searchTerm, }: {
        limit?: number;
        searchTerm?: string;
    }): Promise<SesameReservationsResponse>;
    /**
     * Retrieves a specific reservation by ID.
     * @param id - The ID of the reservation.
     * @returns An instance of ISesamiReservation.
     */
    getById(id: string): ISesamiReservation;
    /**
     * Adds a new reservation.
     * @param properties - The properties of the reservation to add.
     * @throws Error indicating the method is not implemented.
     */
    add(properties: any): Promise<ReadReservationResponse>;
}
/**
 * Class representing a single reservation in Sesami.
 */
export declare class ISesamiReservation {
    private _api;
    private _shop;
    _id: string;
    /**
     * Creates an instance of ISesamiReservation.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     * @param id - The ID of the reservation.
     */
    constructor(api: SesamiNode, shop: ISesamiShop, id: string);
    /**
     * Retrieves the details of the reservation.
     * @returns A promise resolving to the reservation details.
     */
    get(): Promise<ReadReservationResponse>;
    /**
     * Updates the reservation with new properties.
     * @param properties - The properties to update.
     * @throws Error indicating the method is not implemented.
     */
    update(properties: any): Promise<ReadReservationResponse>;
    /**
     * Deletes the reservation.
     * @throws Error indicating the method is not implemented.
     */
    delete(): Promise<{
        message: string;
    }>;
}
