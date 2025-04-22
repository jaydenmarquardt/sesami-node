export type CreateAvailabilityRequest = {
  type: "wday" | "date";
  weekday:
    | "sunday"
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday";
  date: string;
  intervals: CreateAvailabilityIntervalRequest[];
};

export type CreateAvailabilityIntervalRequest = {
  from: string;
  to: string;
};
export type CreateResourceAvailabilityRangeRequest = {
  availableFrom: CreateFromRangeRequest;
  availableTo: CreateToRangeRequest;
};

export type CreateFromRangeRequest = {
  type: "DAYS_INTO_THE_FUTURE" | "EXACT_DATE" | "NOW";
  value: any; // Replace with a specific scalar type if known
};

export type CreateToRangeRequest = {
  type: "DAYS_INTO_THE_FUTURE" | "EXACT_DATE" | "INDEFINITELY";
  value: any;
};
export type ReadAvailabilityResponse = {
  id: string;
  type: "wday" | "date";
  weekday:
    | "sunday"
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday";
  date: string;
  intervals: ReadAvailabilityIntervalResponse[];
};

export type ReadAvailabilityIntervalResponse = {
  id: string;
  from: string;
  to: string;
  unavailable: boolean;
};
