export type FlowTrigger = "APPOINTMENT_CREATED" | "APPOINTMENT_RESCHEDULED" | "CUSTOMER_CHECKED_IN" | "APPOINTMENT_STARTED" | "APPOINTMENT_CANCELLED" | "NO_SHOW";
export type FlowAction = "EMAIL" | "WEBHOOK";
export type FlowTimeUnit = "IMMEDIATELY" | "MINUTES_BEFORE" | "HOURS_BEFORE" | "DAYS_BEFORE" | "MINUTES_AFTER" | "HOURS_AFTER" | "DAYS_AFTER";
export type PaginationFlowItemResponse = {
    cursor: string;
    id: string;
    status: boolean;
    name: string;
    trigger: FlowTrigger;
    action: FlowAction;
    target: string;
    when: ReadWhenResponse;
    template: ReadTemplateResponse;
    createdAt: string;
    updatedAt: string;
};
export type ReadFlowResponse = {
    id: string;
    status: boolean;
    name: string;
    trigger: FlowTrigger;
    action: FlowAction;
    target: string;
    when: ReadWhenResponse;
    template: ReadTemplateResponse;
    createdAt: string;
    updatedAt: string;
};
export type ReadWhenResponse = {
    offset: number;
    amount: number;
    unit: FlowTimeUnit;
};
export type ReadTemplateResponse = {
    headers: string;
    body: string;
};
export type CreateFlowRequest = {
    status: boolean;
    name: string;
    trigger: FlowTrigger;
    action: FlowAction;
    target: string;
    when: CreateWhenRequest;
    template: CreateTemplateRequest;
};
export type UpdateFlowRequest = {
    status: boolean;
    name: string;
    trigger: FlowTrigger;
    action: FlowAction;
    target: string;
    when: CreateWhenRequest;
    template: CreateTemplateRequest;
};
export type CreateWhenRequest = {
    offset: number;
    amount: number;
    unit: FlowTimeUnit;
};
export type CreateTemplateRequest = {
    headers: string;
    body: string;
};
