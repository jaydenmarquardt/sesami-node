import SesamiNode from "../Sesami.node";
import { CreateFlowRequest, ReadFlowResponse, SesameFlowsResponse, UpdateFlowRequest } from "../types";
import { ISesamiShop } from "./Shop";
/**
 * Class representing the flows API for Sesami.
 */
export declare class ISesamiFlows {
    private _api;
    private _shop;
    /**
     * Creates an instance of ISesamiFlows.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     */
    constructor(api: SesamiNode, shop: ISesamiShop);
    /**
     * Retrieves a list of flows.
     * @param limit - The maximum number of flows to retrieve.
     * @param searchTerm - A search term to filter flows.
     * @returns A promise resolving to a list of flows.
     */
    get({ limit, searchTerm, }: {
        limit?: number;
        searchTerm?: string;
    }): Promise<SesameFlowsResponse>;
    /**
     * Retrieves a specific flow by ID.
     * @param id - The ID of the flow.
     * @returns An instance of ISesamiFlow.
     */
    getById(id: string): ISesamiFlow;
    /**
     * Adds a new flow.
     * @param properties - The properties of the flow to add.
     * @returns A promise resolving to the created flow.
     */
    add(properties: CreateFlowRequest): Promise<ReadFlowResponse>;
}
/**
 * Class representing a single flow in Sesami.
 */
export declare class ISesamiFlow {
    private _api;
    private _shop;
    _id: string;
    /**
     * Creates an instance of ISesamiFlow.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     * @param id - The ID of the flow.
     */
    constructor(api: SesamiNode, shop: ISesamiShop, id: string);
    /**
     * Retrieves the details of the flow.
     * @returns A promise resolving to the flow details.
     */
    get(): Promise<ReadFlowResponse>;
    /**
     * Updates the flow with new properties.
     * @param properties - The properties to update.
     * @returns A promise resolving to the updated flow.
     */
    update(properties: UpdateFlowRequest): Promise<ReadFlowResponse>;
    /**
     * Deletes the flow.
     * @returns A promise resolving to a confirmation message.
     */
    delete(): Promise<{
        message: string;
    }>;
}
