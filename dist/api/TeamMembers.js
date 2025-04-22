"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISesamiTeamMember = exports.ISesamiTeamMembers = void 0;
/**
 * Class representing the team members API for Sesami.
 */
class ISesamiTeamMembers {
    /**
     * Creates an instance of ISesamiTeamMembers.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     */
    constructor(api, shop) {
        this._api = api;
        this._shop = shop;
    }
    /**
     * Retrieves a list of team members.
     * @param limit - The maximum number of team members to retrieve.
     * @param searchTerm - A search term to filter team members.
     * @returns A promise resolving to a list of team members.
     */
    async get({ limit = 10, searchTerm, }) {
        return await this._api.request({
            method: "GET",
            endpoint: `${this._shop._id}/team-members`,
            query: {
                limit,
                searchTerm,
            },
        });
    }
    /**
     * Retrieves a specific team member by ID.
     * @param id - The ID of the team member.
     * @returns An instance of ISesamiTeamMember.
     */
    getById(id) {
        return new ISesamiTeamMember(this._api, this._shop, id);
    }
    /**
     * Adds a new team member.
     * @param properties - The properties of the team member to add.
     * @returns A promise resolving to the created team member.
     */
    async add(properties) {
        return await this._api.request({
            method: "POST",
            endpoint: `${this._shop._id}/team-members`,
            body: properties,
        });
    }
}
exports.ISesamiTeamMembers = ISesamiTeamMembers;
/**
 * Class representing a single team member in Sesami.
 */
class ISesamiTeamMember {
    /**
     * Creates an instance of ISesamiTeamMember.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     * @param id - The ID of the team member.
     */
    constructor(api, shop, id) {
        /**
         * Google Calendar integration for the team member.
         */
        this.google = {
            /**
             * Retrieves the Google Calendar sync status for the team member.
             * @returns A promise resolving to the sync status and availability.
             */
            status: async () => {
                return await this._api.request({
                    method: "GET",
                    endpoint: `${this._shop._id}/team-members/${this._id}/google-calendar-sync`,
                });
            },
            /**
             * Initiates Google Calendar synchronization for the team member.
             * @returns A promise resolving to a confirmation message.
             */
            sync: async () => {
                return await this._api.request({
                    method: "POST",
                    endpoint: `${this._shop._id}/team-members/${this._id}/google`,
                });
            },
            /**
             * Revokes Google Calendar synchronization for the team member.
             * @returns A promise resolving to a confirmation message.
             */
            revoke: async () => {
                return await this._api.request({
                    method: "DELETE",
                    endpoint: `${this._shop._id}/team-members/${this._id}/google/revoke`,
                });
            },
        };
        this._api = api;
        this._shop = shop;
        this._id = id;
    }
    /**
     * Retrieves the details of the team member.
     * @returns A promise resolving to the team member details.
     */
    async get() {
        return await this._api.request({
            method: "GET",
            endpoint: `${this._shop._id}/team-members/${this._id}`,
        });
    }
    /**
     * Updates the team member with new properties.
     * @param properties - The properties to update.
     * @returns A promise resolving to the updated team member.
     */
    async update(properties) {
        return await this._api.request({
            method: "PATCH",
            endpoint: `${this._shop._id}/team-members/${this._id}`,
            body: properties,
        });
    }
    /**
     * Deletes the team member.
     * @returns A promise resolving to a confirmation message.
     */
    async delete() {
        return await this._api.request({
            method: "DELETE",
            endpoint: `${this._shop._id}/team-members/${this._id}`,
        });
    }
    /**
     * Retrieves the availabilities of the team member.
     * @returns A promise resolving to a list of availabilities.
     */
    async availabilities() {
        return await this._api.request({
            method: "GET",
            endpoint: `${this._shop._id}/team-members/${this._id}/availabilities`,
        });
    }
}
exports.ISesamiTeamMember = ISesamiTeamMember;
