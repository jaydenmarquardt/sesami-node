import { ReadServiceResponse } from "./Services.types";
import { ReadTeamMemberResponse } from "./TeamMembers.types";
import {
  ReadUploadResponse,
  ReadPlanResponse,
  ReadInstantBookingResponse,
  ReadApplicationChargeResponse,
  CreateInstantBookingRequest,
} from "./types";

export type SesamiPaginationShopItemResponse = {
  cursor: string;
  id: string;
  createdAt: string; // ISO 8601 date-time
  updatedAt: string; // ISO 8601 date-time
  externalId: string;
  url: string;
  domain: string;
  email: string;
  currency: string;
  customerEmail: string;
  moneyWithCurrencyFormat: string;
  settings: ReadSettingResponse;
  isBanned: boolean;
  plan: ReadShopPlanResponse;
  image: ReadUploadResponse;
  isMigrated: boolean;
  maxGroupAppointmentsSlots: number;
  maxTeamMembers: number;
  maxFlows: number;
  maxServices: number;
  teamMembers: ReadTeamMemberResponse[];
  services: ReadServiceResponse[];
  maxLocations: number;
  maxResources: number;
  maxUsers: number;
  maxApps: number;
};
export type ReadShopConfigResponse = {
  features: ShopFeature[];
  plan: ReadPlanResponse;
  settings: ReadSettingResponse;
  canSetPermissions: boolean;
  locale: string;
  maxApp: number;
};

export type ShopFeature =
  | "CALENDAR_SYNC"
  | "REMOVE_BRANDING"
  | "SERVICE_HOURS"
  | "APPOINTMENT_MANAGEMENT"
  | "GROUP_APPOINTMENTS"
  | "APPOINTMENT_REPORT"
  | "RESERVATION"
  | "STOREFRONT_SDK"
  | "FLOWS"
  | "INSTANT_BOOKING"
  | "STOREFRONT_CALENDAR_V2"
  | "ADMIN_CHAT"
  | "PORTAL_ONBOARDING"
  | "SENDER_EMAIL_DOMAIN_VERIFICATION"
  | "EXPERIENCE_SELECTOR"
  | "APPS"
  | "PERSONAL_ACCESS_TOKEN"
  | "MULTI_RESOURCE"
  | "MULTI_LOCATION";

export type ReadSettingResponse = {
  status: boolean;
  timezone: string;
  storefrontButtonLabel: string;
  storefrontDateFormat: string;
  emailCalendarEventToCustomer: boolean;
  emailCalendarEventToMerchant: boolean;
  verifyCart: boolean;
  removeBranding: boolean;
  hideTimezoneFromStorefront: boolean;
  locale: string;
  timeFormat: string;
  reservationPeriod: number;
  usesSDK: boolean;
  lineItemPropertiesToCapture: string[];
  instantBooking: ReadInstantBookingResponse;
  calendarExperience: "CLASSIC" | "V2";
};

export type ReadShopPlanResponse = {
  id: string;
  plan: ReadPlanResponse;
  trialEndsOn: string; // ISO 8601 date-time
  applicationCharge: ReadApplicationChargeResponse;
  pendingApplicationCharge: ReadApplicationChargeResponse;
};
export type UpdateShopRequest = {
  settings: UpdateSettingRequest;
  image: string;
};
export type UpdateSettingRequest = {
  status: boolean;
  timezone: string;
  storefrontButtonLabel: string;
  storefrontDateFormat: string;
  emailCalendarEventToCustomer: boolean;
  emailCalendarEventToMerchant: boolean;
  removeBranding: boolean;
  hideTimezoneFromStorefront: boolean;
  locale: string;
  timeFormat: string;
  reservationPeriod: number;
  instantBooking: CreateInstantBookingRequest;
  calendarExperience: "CLASSIC" | "V2";
};
