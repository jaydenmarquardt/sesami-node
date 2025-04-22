"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISesamiFlow = exports.ISesamiFlows = void 0;
/**
 * Class representing the flows API for Sesami.
 */
class ISesamiFlows {
    /**
     * Creates an instance of ISesamiFlows.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     */
    constructor(api, shop) {
        this._api = api;
        this._shop = shop;
    }
    /**
     * Retrieves a list of flows.
     * @param limit - The maximum number of flows to retrieve.
     * @param searchTerm - A search term to filter flows.
     * @returns A promise resolving to a list of flows.
     */
    async get({ limit = 10, searchTerm, }) {
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
    getById(id) {
        return new ISesamiFlow(this._api, this._shop, id);
    }
    /**
     * Adds a new flow.
     * @param properties - The properties of the flow to add.
     * @returns A promise resolving to the created flow.
     */
    async add(properties) {
        return await this._api.request({
            method: "POST",
            endpoint: `${this._shop._id}/flows`,
            body: properties,
        });
    }
}
exports.ISesamiFlows = ISesamiFlows;
/**
 * Class representing a single flow in Sesami.
 */
class ISesamiFlow {
    /**
     * Creates an instance of ISesamiFlow.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     * @param id - The ID of the flow.
     */
    constructor(api, shop, id) {
        this._api = api;
        this._shop = shop;
        this._id = id;
    }
    /**
     * Retrieves the details of the flow.
     * @returns A promise resolving to the flow details.
     */
    async get() {
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
    async update(properties) {
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
    async delete() {
        return await this._api.request({
            method: "DELETE",
            endpoint: `${this._shop._id}/flows/${this._id}`,
        });
    }
}
exports.ISesamiFlow = ISesamiFlow;
