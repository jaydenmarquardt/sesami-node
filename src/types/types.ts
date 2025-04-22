import {
  ServiceResourceRequest,
  ServiceResourceResponseREST,
} from "./Services.types";

export type ErrorCode =
  | "valid_permissions"
  | "not_found"
  | "is_unique"
  | "valid_interval"
  | "is_json"
  | "forbidden"
  | "unauthorized"
  | "invalid_input"
  | "re_password"
  | "login_strategy"
  | "is_enum"
  | "valid_otp"
  | "existing_otp"
  | "active_user"
  | "correct_password"
  | "internal_error"
  | "internal_server_error"
  | "is_not_empty"
  | "is_number"
  | "is_string"
  | "is_boolean"
  | "is_email"
  | "is_date"
  | "is_object"
  | "is_mongo_id"
  | "is_array"
  | "is_url"
  | "is_time_zone"
  | "max"
  | "min";

export type ErrorConstraint = {
  /**  Each request needs to satisfy a list of constraints. If one of these constraints is not satisfied, you will see the name of it here. */
  name: ErrorCode;
  /**  Extra information about the error. For example, if the input was supposed to pass some regex, the regex body would be inside this payload. E.g. hh:mm. This field is nullable.*/
  payload: string;
};

export type Error = {
  constraints: ErrorConstraint[];
  /**  The name of the property which caused the error. It can also be ROOT which indicates that something wrong with the overall request. */
  property: "id" | "date" | "ROOT" | string;
};

export type JSONAPIErrorResponse = Error[];

export type GRAPHQLErrorResponse = {
  message: "400";
  errors: {
    extensions: {
      errors: Error[];
    };
  }[];
};
export type ReadResourceResponse = {
  id: string;
  name: string;
  type: string;
  email: string;
  status: boolean;
  image: ReadUploadResponse;
  shopId: string;
  description: string;
  eventDescription: string;
  mobile: string;
  notificationEmailStatus: boolean;
  metaFields: any; // Replace with more specific type if known
};

export type SesamiPaginateResult<T> = {
  data: T[];
  nextCursor: string;
  previousCursor: string;
  totalItems: number;
  remainingItems: number;
};

export type ReadInstantBookingResponse = {
  requiredFields: string[];
};

export type ReadUploadResponse = {
  id: string;
  path: string;
};

export type ReadPlanResponse = {
  id: string;
  description: string;
  maxServices: number;
  maxTeamMembers: number;
  name: string;
  price: number;
  title: string;
  maxGroupAppointmentsSlots: number;
  maxUsers: number;
  maxFlows: number;
  listed: boolean;
  planId: number;
  maxLocations: number;
  maxResources: number;
  maxTokens: number;
};

export type ReadApplicationChargeResponse = {
  id: string;
  externalId: string;
  planId: number;
  name: string;
  price: string;
  status: string;
  return_url: string;
  billing_on: string;
  test: boolean;
  cancelled_on: string;
  trial_days: number;
  decorated_return_url: string;
  confirmation_url: string;
  created_at: string; // ISO 8601 date-time
};

export type ReadLocationResourceResponseREST = {
  locationId: string;
  resources: ServiceResourceResponseREST[];
};

export type CreateInstantBookingRequest = {
  requiredFields: string[];
};

export type LocationResourceRequest = {
  locationId: string;
  resources: ServiceResourceRequest[];
};
export type AccessTokenType = "PERSONAL_ACCESS_TOKEN" | "ONLINE_TOKEN";

export type TokenExpiry = "THIRTY" | "SIXTY" | "NINETY" | "NEVER";
export type CreatePATRequest = {
  permissions: string[];
  expireAt: TokenExpiry;
  shop: string;
  name: string;
  user: string;
};
export type GetOnlineTokenRequest = {
  appId: string;
  shop: string;
  extensionId: string;
};
export type AccessTokenRequest = {
  type: AccessTokenType;
  personalAccessTokenRequest?: CreatePATRequest;
  onlineTokenRequest?: GetOnlineTokenRequest;
};
