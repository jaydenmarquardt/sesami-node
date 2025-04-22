"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISesamiReservation = exports.ISesamiReservations = void 0;
/**
 * Class representing the reservations API for Sesami.
 */
class ISesamiReservations {
    /**
     * Creates an instance of ISesamiReservations.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     */
    constructor(api, shop) {
        this._api = api;
        this._shop = shop;
    }
    /**
     * Retrieves a list of reservations.
     * @param limit - The maximum number of reservations to retrieve.
     * @param searchTerm - A search term to filter reservations.
     * @returns A promise resolving to a list of reservations.
     */
    async get({ limit = 10, searchTerm, }) {
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
    getById(id) {
        return new ISesamiReservation(this._api, this._shop, id);
    }
    /**
     * Adds a new reservation.
     * @param properties - The properties of the reservation to add.
     * @throws Error indicating the method is not implemented.
     */
    async add(properties) {
        throw new Error("Not implemented in API");
    }
}
exports.ISesamiReservations = ISesamiReservations;
/**
 * Class representing a single reservation in Sesami.
 */
class ISesamiReservation {
    /**
     * Creates an instance of ISesamiReservation.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     * @param id - The ID of the reservation.
     */
    constructor(api, shop, id) {
        this._api = api;
        this._shop = shop;
        this._id = id;
    }
    /**
     * Retrieves the details of the reservation.
     * @returns A promise resolving to the reservation details.
     */
    async get() {
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
    async update(properties) {
        throw new Error("Not implemented in API");
    }
    /**
     * Deletes the reservation.
     * @throws Error indicating the method is not implemented.
     */
    async delete() {
        throw new Error("Not implemented in API");
    }
}
exports.ISesamiReservation = ISesamiReservation;
