import {
  CreateAvailabilityRequest,
  CreateResourceAvailabilityRangeRequest,
} from "./Availability.types";
import { ReadUploadResponse } from "./types";

export type PaginationTeamMemberItemResponse = {
  id: string;
  name: string;
  priority: number;
  description: string;
  eventDescription: string;
  email: string;
  mobile: string;
  availabilitiesSavedAt: string; // ISO 8601 date-time
  notificationEmailStatus: boolean;
  status: boolean;
  image: ReadUploadResponse;
  shopURL: string;
  cursor: string;
};

export type ReadTeamMemberResponse = {
  id: string;
  name: string;
  priority: number;
  description: string;
  eventDescription: string;
  email: string;
  mobile: string;
  availabilitiesSavedAt: string; // ISO 8601 date-time
  notificationEmailStatus: boolean;
  status: boolean;
  image: ReadUploadResponse;
  shopURL: string;
};
export type CreateTeamMemberRequest = {
  name: string;
  priority: number;
  description: string;
  eventDescription: string;
  image: string;
  email: string;
  mobile: string;
  notificationEmailStatus: boolean;
  status: boolean;
  availabilities: CreateAvailabilityRequest[];
  availabilityRange: CreateResourceAvailabilityRangeRequest;
  services: string[];
};

export type UpdateTeamMemberRequest = {
  name: string;
  priority: number;
  description: string;
  eventDescription: string;
  image: string;
  email: string;
  mobile: string;
  notificationEmailStatus: boolean;
  status: boolean;
  availabilities: CreateAvailabilityRequest[];
  availabilityRange: CreateResourceAvailabilityRangeRequest;
  services: string[];
};
