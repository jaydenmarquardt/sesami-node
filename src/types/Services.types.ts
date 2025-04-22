import {
  ReadAvailabilityResponse,
  CreateAvailabilityRequest,
  CreateResourceAvailabilityRangeRequest,
} from "./Availability.types";
import {
  ReadUploadResponse,
  ReadLocationResourceResponseREST,
  LocationResourceRequest,
} from "./types";

export type PaginationServiceItemResponse = {
  teamMembers: string[];
  id: string;
  externalId: string;
  title: string;
  description: string;
  image: ReadUploadResponse;
  onlineStoreUrl: string;
  onlineStorePreviewUrl: string;
  urlKey: string;
  teamMemberAssignStrategy: string;
  eventDescription: string;
  instantBooking: boolean;
  availabilitiesSavedAt: string; // ISO 8601 date-time
  displayTeamOnStorefront: boolean;
  disableSameDayBooking: boolean;
  roundStartInterval: number;
  bufferFromNow: number;
  advancedOptions: boolean;
  storefrontStartDate: string;
  bookingUntilDays: number;
  bufferTimeBefore: number;
  bufferTimeAfter: number;
  status: boolean;
  customerCanCancel: boolean;
  customerCanReschedule: boolean;
  refundMoneyOnCancel: boolean;
  customerCanManageBefore: number;
  groupAppointments: boolean;
  groupAppointmentSlots: number;
  variants: ReadServiceVariantResponse[];
  availabilities: ReadAvailabilityResponse[];
  location: ReadServiceLocationResponse;
  flexStartInterval: "FIFTEEN" | "THIRTY" | "FORTY_FIVE" | "SIXTY";
  createOrder: boolean;
  locationIds: string[];
  locations: ReadLocationResourceResponseREST[];
  shopId: string;
  cursor: string;
};
export type ReadServiceResponse = {
  teamMembers: string[];
  id: string;
  externalId: string;
  title: string;
  description: string;
  image: ReadUploadResponse;
  onlineStoreUrl: string;
  onlineStorePreviewUrl: string;
  urlKey: string;
  teamMemberAssignStrategy: string;
  eventDescription: string;
  instantBooking: boolean;
  availabilitiesSavedAt: string; // ISO 8601 date-time
  displayTeamOnStorefront: boolean;
  disableSameDayBooking: boolean;
  roundStartInterval: number;
  bufferFromNow: number;
  advancedOptions: boolean;
  storefrontStartDate: string;
  bookingUntilDays: number;
  bufferTimeBefore: number;
  bufferTimeAfter: number;
  status: boolean;
  customerCanCancel: boolean;
  customerCanReschedule: boolean;
  refundMoneyOnCancel: boolean;
  customerCanManageBefore: number;
  groupAppointments: boolean;
  groupAppointmentSlots: number;
  variants: ReadServiceVariantResponse[];
  availabilities: ReadAvailabilityResponse[];
  location: ReadServiceLocationResponse;
  flexStartInterval: "FIFTEEN" | "THIRTY" | "FORTY_FIVE" | "SIXTY";
  createOrder: boolean;
  locationIds: string[];
  locations: ReadLocationResourceResponseREST[];
  shopId: string;
};

export type ServiceResourceResponseREST = {
  typeId: string;
  isSelectable: boolean;
  isTimeBlocker: boolean;
  ids: string[];
  hideAnyAvailable: boolean;
};
export type ReadServiceVariantResponse = {
  id: string;
  externalId: string;
  title: string;
  price: number;
  options: ReadServiceVariantOptionResponse[];
};

export type ReadServiceVariantOptionResponse = {
  id: string;
  value: string;
  name: string;
};

export type ReadServiceLocationResponse = {
  id: string;
  content: string;
};

export type UpdateServiceRequest = {
  eventDescription: string;
  instantBooking: boolean;
  displayTeamOnStorefront: boolean;
  disableSameDayBooking: boolean;
  roundStartInterval: number;
  bufferFromNow: number;
  storefrontStartDate: string; // ISO 8601
  bookingUntilDays: number;
  bufferTimeBefore: number;
  bufferTimeAfter: number;
  customerCanCancel: boolean;
  customerCanReschedule: boolean;
  refundMoneyOnCancel: boolean;
  customerCanManageBefore: number;
  groupAppointments: boolean;
  groupAppointmentSlots: number;
  flexStartInterval: "FIFTEEN" | "THIRTY" | "FORTY_FIVE" | "SIXTY";
  location: CreateServiceLocationRequest;
  availabilities: CreateAvailabilityRequest[];
  teamMembers: string[];
  availabilityRange: CreateResourceAvailabilityRangeRequest;
  createOrder: boolean;
  locationResources: LocationResourceRequest[];
};

export type CreateServiceLocationRequest = {
  content: string;
};
export type ServiceResourceRequest = {
  typeId: string;
  isSelectable: boolean;
  blocksDuringAppointment: boolean;
  ids: string[];
  hideAnyAvailable: boolean;
};
