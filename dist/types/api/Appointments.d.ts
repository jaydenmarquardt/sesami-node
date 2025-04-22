import SesamiNode from "../Sesami.node";
import { SesameAppointmentsResponse } from "../types";
import { CancelAppointmentRequest, CreateAppointmentEventRequest, GenerateReportResponse, ReadAppointmentResponse, RescheduleAppointmentRequest } from "../types/Appointments.types";
import { ISesamiShop } from "./Shop";
/**
 * Class representing the appointments API for Sesami.
 */
export declare class ISesamiAppointments {
    private _api;
    private _shop;
    /**
     * Creates an instance of ISesamiAppointments.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     */
    constructor(api: SesamiNode, shop: ISesamiShop);
    /**
     * Retrieves a list of appointments.
     * @param limit - The maximum number of appointments to retrieve.
     * @param searchTerm - A search term to filter appointments.
     * @returns A promise resolving to a list of appointments.
     */
    get({ limit, searchTerm, }: {
        limit?: number;
        searchTerm?: string;
    }): Promise<SesameAppointmentsResponse>;
    /**
     * Retrieves a specific appointment by ID.
     * @param id - The ID of the appointment.
     * @returns An instance of ISesamiAppointment.
     */
    getById(id: string): ISesamiAppointment;
    /**
     * Adds a new appointment.
     * @param properties - The properties of the appointment to add.
     * @throws Error indicating the method is not implemented.
     */
    add(properties: any): Promise<any>;
    /**
     * Generates a report of appointments.
     * @param teamMember - The team member to filter by.
     * @param filterType - The type of filter to apply.
     * @param start - The start date for the report (if applicable).
     * @param end - The end date for the report (if applicable).
     * @returns A promise resolving to the generated report.
     */
    report({ teamMember, filterType, start, end, }: {
        teamMember?: string;
        filterType?: "ALL" | "UPCOMING" | "PAST" | "RANGE";
        start?: string;
        end?: string;
    }): Promise<GenerateReportResponse>;
}
/**
 * Class representing a single appointment in Sesami.
 */
export declare class ISesamiAppointment {
    private _api;
    private _shop;
    _id: string;
    /**
     * Creates an instance of ISesamiAppointment.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     * @param id - The ID of the appointment.
     */
    constructor(api: SesamiNode, shop: ISesamiShop, id: string);
    /**
     * Retrieves the details of the appointment.
     * @returns A promise resolving to the appointment details.
     */
    get(): Promise<ReadAppointmentResponse>;
    /**
     * Updates the appointment with new properties.
     * @param properties - The properties to update.
     * @throws Error indicating the method is not implemented.
     */
    update(properties: any): Promise<ReadAppointmentResponse>;
    /**
     * Deletes the appointment.
     * @throws Error indicating the method is not implemented.
     */
    delete(): Promise<{
        message: string;
    }>;
    /**
     * Cancels the appointment.
     * @param properties - The cancellation request properties.
     * @returns A promise resolving to a cancellation confirmation.
     */
    cancel(properties: CancelAppointmentRequest): Promise<{
        message: string;
    }>;
    /**
     * Marks the appointment as a no-show.
     * @param properties - The event request properties.
     * @returns A promise resolving to the updated appointment details.
     */
    noShow(properties: CreateAppointmentEventRequest): Promise<ReadAppointmentResponse>;
    /**
     * Checks in the appointment.
     * @param properties - The event request properties.
     * @returns A promise resolving to the updated appointment details.
     */
    checkIn(properties: CreateAppointmentEventRequest): Promise<ReadAppointmentResponse>;
    /**
     * Reschedules the appointment.
     * @param properties - The reschedule request properties.
     * @returns A promise resolving to a reschedule confirmation.
     */
    reschedule(properties: RescheduleAppointmentRequest): Promise<{
        message: string;
    }>;
    /**
     * Resends the appointment confirmation.
     * @returns A promise resolving to the updated appointment details.
     */
    resendConfirmation(): Promise<ReadAppointmentResponse>;
}
