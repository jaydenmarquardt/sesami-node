"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISesamiResource = exports.ISesamiResources = void 0;
/**
 * Class representing the resources API for Sesami.
 */
class ISesamiResources {
    /**
     * Creates an instance of ISesamiResources.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     */
    constructor(api, shop) {
        this._api = api;
        this._shop = shop;
    }
    /**
     * Retrieves a specific resource by ID.
     * @param id - The ID of the resource.
     * @returns An instance of ISesamiResource.
     */
    getById(id) {
        return new ISesamiResource(this._api, this._shop, id);
    }
}
exports.ISesamiResources = ISesamiResources;
/**
 * Class representing a single resource in Sesami.
 */
class ISesamiResource {
    /**
     * Creates an instance of ISesamiResource.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     * @param id - The ID of the resource.
     */
    constructor(api, shop, id) {
        this._api = api;
        this._shop = shop;
        this._id = id;
    }
    /**
     * Retrieves the details of the resource.
     * @returns A promise resolving to the resource details.
     */
    async get() {
        return await this._api.request({
            method: "GET",
            endpoint: `${this._shop._id}/resources/${this._id}`,
        });
    }
}
exports.ISesamiResource = ISesamiResource;
