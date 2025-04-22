"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISesamiAppointment = exports.ISesamiAppointments = void 0;
/**
 * Class representing the appointments API for Sesami.
 */
class ISesamiAppointments {
    /**
     * Creates an instance of ISesamiAppointments.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     */
    constructor(api, shop) {
        this._api = api;
        this._shop = shop;
    }
    /**
     * Retrieves a list of appointments.
     * @param limit - The maximum number of appointments to retrieve.
     * @param searchTerm - A search term to filter appointments.
     * @returns A promise resolving to a list of appointments.
     */
    async get({ limit = 10, searchTerm, }) {
        return await this._api.request({
            method: "GET",
            endpoint: `${this._shop._id}/appointments`,
            query: {
                limit,
                searchTerm,
            },
        });
    }
    /**
     * Retrieves a specific appointment by ID.
     * @param id - The ID of the appointment.
     * @returns An instance of ISesamiAppointment.
     */
    getById(id) {
        return new ISesamiAppointment(this._api, this._shop, id);
    }
    /**
     * Adds a new appointment.
     * @param properties - The properties of the appointment to add.
     * @throws Error indicating the method is not implemented.
     */
    async add(properties) {
        throw new Error("Not implemented in API");
    }
    /**
     * Generates a report of appointments.
     * @param teamMember - The team member to filter by.
     * @param filterType - The type of filter to apply.
     * @param start - The start date for the report (if applicable).
     * @param end - The end date for the report (if applicable).
     * @returns A promise resolving to the generated report.
     */
    async report({ teamMember, filterType, start, end, }) {
        return await this._api.request({
            method: "POST",
            endpoint: `${this._shop._id}/appointments/report`,
            query: {
                teamMember,
                filterType,
                start,
                end,
            },
        });
    }
}
exports.ISesamiAppointments = ISesamiAppointments;
/**
 * Class representing a single appointment in Sesami.
 */
class ISesamiAppointment {
    /**
     * Creates an instance of ISesamiAppointment.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     * @param id - The ID of the appointment.
     */
    constructor(api, shop, id) {
        this._api = api;
        this._shop = shop;
        this._id = id;
    }
    /**
     * Retrieves the details of the appointment.
     * @returns A promise resolving to the appointment details.
     */
    async get() {
        return await this._api.request({
            method: "GET",
            endpoint: `${this._shop._id}/appointments/${this._id}`,
        });
    }
    /**
     * Updates the appointment with new properties.
     * @param properties - The properties to update.
     * @throws Error indicating the method is not implemented.
     */
    async update(properties) {
        throw new Error("Not implemented in API");
    }
    /**
     * Deletes the appointment.
     * @throws Error indicating the method is not implemented.
     */
    async delete() {
        throw new Error("Not implemented in API");
    }
    /**
     * Cancels the appointment.
     * @param properties - The cancellation request properties.
     * @returns A promise resolving to a cancellation confirmation.
     */
    async cancel(properties) {
        return await this._api.request({
            method: "POST",
            endpoint: `${this._shop._id}/appointments/${this._id}/cancel`,
            body: properties,
        });
    }
    /**
     * Marks the appointment as a no-show.
     * @param properties - The event request properties.
     * @returns A promise resolving to the updated appointment details.
     */
    async noShow(properties) {
        return await this._api.request({
            method: "POST",
            endpoint: `${this._shop._id}/appointments/${this._id}/no-show`,
            body: properties,
        });
    }
    /**
     * Checks in the appointment.
     * @param properties - The event request properties.
     * @returns A promise resolving to the updated appointment details.
     */
    async checkIn(properties) {
        return await this._api.request({
            method: "POST",
            endpoint: `${this._shop._id}/appointments/${this._id}/check-in`,
            body: properties,
        });
    }
    /**
     * Reschedules the appointment.
     * @param properties - The reschedule request properties.
     * @returns A promise resolving to a reschedule confirmation.
     */
    async reschedule(properties) {
        return await this._api.request({
            method: "POST",
            endpoint: `${this._shop._id}/appointments/${this._id}/reschedule`,
            body: properties,
        });
    }
    /**
     * Resends the appointment confirmation.
     * @returns A promise resolving to the updated appointment details.
     */
    async resendConfirmation() {
        return await this._api.request({
            method: "POST",
            endpoint: `${this._shop._id}/appointments/${this._id}/resend-appointment-confirmation`,
        });
    }
}
exports.ISesamiAppointment = ISesamiAppointment;
