"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISesamiService = exports.ISesamiServices = void 0;
/**
 * Class representing the services API for Sesami.
 */
class ISesamiServices {
    /**
     * Creates an instance of ISesamiServices.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     */
    constructor(api, shop) {
        this._api = api;
        this._shop = shop;
    }
    /**
     * Retrieves a list of services.
     * @param limit - The maximum number of services to retrieve.
     * @param searchTerm - A search term to filter services.
     * @returns A promise resolving to a list of services.
     */
    async get({ limit = 10, searchTerm, }) {
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
    async add(properties) {
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
    getById(id) {
        return new ISesamiService(this._api, this._shop, id);
    }
}
exports.ISesamiServices = ISesamiServices;
/**
 * Class representing a single service in Sesami.
 */
class ISesamiService {
    /**
     * Creates an instance of ISesamiService.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     * @param serviceID - The ID of the service.
     */
    constructor(api, shop, serviceID) {
        this._api = api;
        this._shop = shop;
        this._id = serviceID;
    }
    /**
     * Retrieves the details of the service.
     * @returns A promise resolving to the service details.
     */
    async get() {
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
    async update(properties) {
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
    async delete() {
        return await this._api.request({
            method: "DELETE",
            endpoint: `${this._shop._id}/services/${this._id}`,
        });
    }
    /**
     * Retrieves the variants of the service.
     * @returns A promise resolving to a list of service variants.
     */
    async variants() {
        return (await this.get())?.variants || [];
    }
    /**
     * Retrieves the availabilities of the service.
     * @returns A promise resolving to a list of service availabilities.
     */
    async availabilities() {
        return (await this.get())?.availabilities || [];
    }
}
exports.ISesamiService = ISesamiService;
