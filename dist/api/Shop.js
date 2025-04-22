"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISesamiShop = exports.ISesamiShops = void 0;
const Appointments_1 = require("./Appointments");
const Flows_1 = require("./Flows");
const Reservations_1 = require("./Reservations");
const Resources_1 = require("./Resources");
const Services_1 = require("./Services");
const TeamMembers_1 = require("./TeamMembers");
/**
 * Class representing the shops API for Sesami.
 */
class ISesamiShops {
    /**
     * Creates an instance of ISesamiShops.
     * @param api - The SesamiNode API instance.
     */
    constructor(api) {
        this._api = api;
    }
    /**
     * Retrieves a list of shops.
     * @param limit - The maximum number of shops to retrieve.
     * @param searchTerm - A search term to filter shops.
     * @returns A promise resolving to a list of shops.
     */
    async get({ limit = 10, searchTerm, }) {
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
    getById(id) {
        return new ISesamiShop(this._api, id);
    }
}
exports.ISesamiShops = ISesamiShops;
/**
 * Class representing a single shop in Sesami.
 */
class ISesamiShop {
    /**
     * Creates an instance of ISesamiShop.
     * @param api - The SesamiNode API instance.
     * @param shopID - The ID of the shop.
     */
    constructor(api, shopID) {
        this._api = api;
        this._id = shopID;
        this.services = new Services_1.ISesamiServices(this._api, this);
        this.teamMembers = new TeamMembers_1.ISesamiTeamMembers(this._api, this);
        this.flows = new Flows_1.ISesamiFlows(this._api, this);
        this.appointments = new Appointments_1.ISesamiAppointments(this._api, this);
        this.resources = new Resources_1.ISesamiResources(this._api, this);
        this.reservations = new Reservations_1.ISesamiReservations(this._api, this);
    }
    /**
     * Retrieves the details of the shop.
     * @returns A promise resolving to the shop details.
     */
    async get() {
        return await this._api.request({
            method: "GET",
            endpoint: `shops/${this._id}`,
        });
    }
    /**
     * Retrieves the configuration of the shop.
     * @returns A promise resolving to the shop configuration.
     */
    async config() {
        return await this._api.request({
            method: "GET",
            endpoint: `shops/${this._id}/configs`,
        });
    }
    /**
     * Retrieves the settings of the shop.
     * @returns A promise resolving to the shop settings.
     */
    async settings() {
        return (await this.get())?.settings;
    }
    /**
     * Retrieves the plan details of the shop.
     * @returns A promise resolving to the shop plan details.
     */
    async plan() {
        return (await this.get())?.plan;
    }
    /**
     * Updates the shop with new properties.
     * @param properties - The properties to update.
     * @returns A promise resolving to the updated shop details.
     */
    async update(properties) {
        return await this._api.request({
            method: "PATCH",
            endpoint: `shops/${this._id}`,
            body: properties,
        });
    }
}
exports.ISesamiShop = ISesamiShop;
