"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISesamiName = exports.ISesamiNames = void 0;
class ISesamiNames {
    constructor(api, shop) {
        this._api = api;
        this._shop = shop;
    }
    async get({ limit = 10, searchTerm, }) {
        return await this._api.request({
            method: "GET",
            endpoint: `${this._shop._id}/path`,
            query: {
                limit,
                searchTerm,
            },
        });
    }
    getById(id) {
        return new ISesamiName(this._api, this._shop, id);
    }
    async add(properties) {
        return await this._api.request({
            method: "POST",
            endpoint: `${this._shop._id}/path`,
            body: properties,
        });
    }
}
exports.ISesamiNames = ISesamiNames;
class ISesamiName {
    constructor(api, shop, id) {
        this._api = api;
        this._shop = shop;
        this._id = id;
    }
    async get() {
        return await this._api.request({
            method: "GET",
            endpoint: `${this._shop._id}/path/${this._id}`,
        });
    }
    async update(properties) {
        return await this._api.request({
            method: "PATCH",
            endpoint: `${this._shop._id}/path/${this._id}`,
            body: properties,
        });
    }
    async delete() {
        return await this._api.request({
            method: "DELETE",
            endpoint: `${this._shop._id}/path/${this._id}`,
        });
    }
}
exports.ISesamiName = ISesamiName;
