import {
  PaginationAppointmentItemResponse,
  PaginationReservationItemResponse,
} from "./Appointments.types";
import { PaginationFlowItemResponse } from "./Flows.types";
import {
  PaginationServiceItemResponse,
  ReadServiceResponse,
} from "./Services.types";
import { SesamiPaginationShopItemResponse } from "./Shop.types";
import { PaginationTeamMemberItemResponse } from "./TeamMembers.types";
import { SesamiPaginateResult } from "./types";

export type SesameShopsResponse =
  SesamiPaginateResult<SesamiPaginationShopItemResponse>;

export type SesameTeamMembersResponse =
  SesamiPaginateResult<PaginationTeamMemberItemResponse>;

export type SesameShopResponse = SesamiPaginationShopItemResponse;

export type SesameServicesResponse =
  SesamiPaginateResult<PaginationServiceItemResponse>;

export type SesameFlowsResponse =
  SesamiPaginateResult<PaginationFlowItemResponse>;

export type SesameServiceResponse = ReadServiceResponse;

export type SesameAppointmentsResponse =
  SesamiPaginateResult<PaginationAppointmentItemResponse>;

export type SesameReservationsResponse =
  SesamiPaginateResult<PaginationReservationItemResponse>;
