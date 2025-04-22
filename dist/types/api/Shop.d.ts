import SesamiNode from "../Sesami.node";
import type { ReadShopConfigResponse, ReadSettingResponse, ReadShopPlanResponse, UpdateShopRequest, SesameShopResponse, SesameShopsResponse } from "../types";
import { ISesamiAppointments } from "./Appointments";
import { ISesamiFlows } from "./Flows";
import { ISesamiReservations } from "./Reservations";
import { ISesamiResources } from "./Resources";
import { ISesamiServices } from "./Services";
import { ISesamiTeamMembers } from "./TeamMembers";
/**
 * Class representing the shops API for Sesami.
 */
export declare class ISesamiShops {
    private _api;
    /**
     * Creates an instance of ISesamiShops.
     * @param api - The SesamiNode API instance.
     */
    constructor(api: SesamiNode);
    /**
     * Retrieves a list of shops.
     * @param limit - The maximum number of shops to retrieve.
     * @param searchTerm - A search term to filter shops.
     * @returns A promise resolving to a list of shops.
     */
    get({ limit, searchTerm, }: {
        limit?: number;
        searchTerm?: string;
    }): Promise<SesameShopsResponse>;
    /**
     * Retrieves a specific shop by ID.
     * @param id - The ID of the shop.
     * @returns An instance of ISesamiShop.
     */
    getById(id: string): ISesamiShop;
}
/**
 * Class representing a single shop in Sesami.
 */
export declare class ISesamiShop {
    private _api;
    _id: string;
    services: ISesamiServices;
    teamMembers: ISesamiTeamMembers;
    flows: ISesamiFlows;
    appointments: ISesamiAppointments;
    reservations: ISesamiReservations;
    resources: ISesamiResources;
    /**
     * Creates an instance of ISesamiShop.
     * @param api - The SesamiNode API instance.
     * @param shopID - The ID of the shop.
     */
    constructor(api: SesamiNode, shopID: string);
    /**
     * Retrieves the details of the shop.
     * @returns A promise resolving to the shop details.
     */
    get(): Promise<SesameShopResponse>;
    /**
     * Retrieves the configuration of the shop.
     * @returns A promise resolving to the shop configuration.
     */
    config(): Promise<ReadShopConfigResponse>;
    /**
     * Retrieves the settings of the shop.
     * @returns A promise resolving to the shop settings.
     */
    settings(): Promise<ReadSettingResponse>;
    /**
     * Retrieves the plan details of the shop.
     * @returns A promise resolving to the shop plan details.
     */
    plan(): Promise<ReadShopPlanResponse>;
    /**
     * Updates the shop with new properties.
     * @param properties - The properties to update.
     * @returns A promise resolving to the updated shop details.
     */
    update(properties: UpdateShopRequest): Promise<SesameShopResponse>;
}
