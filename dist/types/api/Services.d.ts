import SesamiNode from "../Sesami.node";
import type { ReadAvailabilityResponse, ReadServiceResponse, ReadServiceVariantResponse, UpdateServiceRequest, SesameShopsResponse } from "../types";
import { ISesamiShop } from "./Shop";
/**
 * Class representing the services API for Sesami.
 */
export declare class ISesamiServices {
    private _api;
    private _shop;
    /**
     * Creates an instance of ISesamiServices.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     */
    constructor(api: SesamiNode, shop: ISesamiShop);
    /**
     * Retrieves a list of services.
     * @param limit - The maximum number of services to retrieve.
     * @param searchTerm - A search term to filter services.
     * @returns A promise resolving to a list of services.
     */
    get({ limit, searchTerm, }: {
        limit?: number;
        searchTerm?: string;
    }): Promise<SesameShopsResponse>;
    /**
     * Adds a new service.
     * @param properties - The properties of the service to add.
     * @returns A promise resolving to the created service.
     */
    add(properties: UpdateServiceRequest): Promise<ReadServiceResponse>;
    /**
     * Retrieves a specific service by ID.
     * @param id - The ID of the service.
     * @returns An instance of ISesamiService.
     */
    getById(id: string): ISesamiService;
}
/**
 * Class representing a single service in Sesami.
 */
export declare class ISesamiService {
    private _api;
    private _shop;
    _id: string;
    /**
     * Creates an instance of ISesamiService.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     * @param serviceID - The ID of the service.
     */
    constructor(api: SesamiNode, shop: ISesamiShop, serviceID: string);
    /**
     * Retrieves the details of the service.
     * @returns A promise resolving to the service details.
     */
    get(): Promise<ReadServiceResponse>;
    /**
     * Updates the service with new properties.
     * @param properties - The properties to update.
     * @returns A promise resolving to the updated service.
     */
    update(properties: UpdateServiceRequest): Promise<ReadServiceResponse>;
    /**
     * Deletes the service.
     * @returns A promise resolving to a confirmation message.
     */
    delete(): Promise<{
        message: string;
    }>;
    /**
     * Retrieves the variants of the service.
     * @returns A promise resolving to a list of service variants.
     */
    variants(): Promise<ReadServiceVariantResponse[]>;
    /**
     * Retrieves the availabilities of the service.
     * @returns A promise resolving to a list of service availabilities.
     */
    availabilities(): Promise<ReadAvailabilityResponse[]>;
}
