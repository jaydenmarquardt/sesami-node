import { ReadServiceResponse } from "./Services.types";
import { ReadUploadResponse } from "./types";
export type ReadLineItemPropertyResponse = {
    id: string;
    value: string;
    name: string;
};
export type ReadCustomerResponse = {
    id: string;
    externalId: string;
    name: string;
    email: string;
    phone: string;
    billingPhone: string;
    image: ReadUploadResponse;
};
export type AppointmentEventType = "CANCELLED" | "CREATED" | "NO_SHOW" | "RESCHEDULED" | "CUSTOMER_CHECKIN" | "CONFIRMATIONEMAILSENT";
export type ReadAppointmentEventResponse = {
    id: string;
    type: AppointmentEventType;
    content: string;
    initiatedBy: string;
    dateTime: string;
};
export type ReadAppointmentResponse = {
    id: string;
    shopId: string;
    orderId: string;
    orderName: string;
    lineItemId: string;
    customer: ReadCustomerResponse;
    customerTimezone: string;
    customerManagementLink: string;
    price: number;
    datetime: string;
    rangeStart: string;
    rangeEnd: string;
    variantTitle: string;
    externalVariantId: string;
    duration: number;
    currency: string;
    status: string;
    gateway: string;
    bufferTimeBefore: number;
    bufferTimeAfter: number;
    service: string;
    teamMember: string;
    slotId: string;
    instantBookingId: string;
    quantity: number;
    locale: string;
    lineItemProperties: ReadLineItemPropertyResponse[];
    events: ReadAppointmentEventResponse[];
    createdAt: string;
    updatedAt: string;
    sessionId: string;
    resources: string[];
    locationId: string;
};
export type PaginationAppointmentItemResponse = ReadAppointmentResponse & {
    cursor: string;
};
export type CreateAppointmentEventRequest = {
    content: string;
    dateTime: string;
};
export type RescheduleAppointmentRequest = {
    content: string;
    dateTime: string;
    teamMemberId: string;
    resourceIds: string[];
    locationId: string;
};
export type GenerateReportResponse = {
    email: string;
};
export type CancelAppointmentRequest = {
    refundMoney: boolean;
    content?: string;
};
export type ReadReservationResponse = {
    id: string;
    shopId: string;
    customer: ReadCustomerResponse;
    customerTimezone: string;
    price: number;
    dateTime: string;
    rangeStart: string;
    rangeEnd: string;
    variantTitle: string;
    externalVariantId: string;
    duration: number;
    currency: string;
    bufferTimeBefore: number;
    bufferTimeAfter: number;
    service: ReadServiceResponse;
    teamMember: string;
    slotId: string;
    quantity: number;
    clientId: string;
    createdAt: string;
    updatedAt: string;
    resources: string[];
};
export type PaginationReservationItemResponse = ReadReservationResponse & {
    cursor: string;
};
