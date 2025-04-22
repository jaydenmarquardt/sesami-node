import SesamiNode from "../Sesami.node";
import { ReadResourceResponse } from "../types";
import { ISesamiShop } from "./Shop";
/**
 * Class representing the resources API for Sesami.
 */
export declare class ISesamiResources {
    private _api;
    private _shop;
    /**
     * Creates an instance of ISesamiResources.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     */
    constructor(api: SesamiNode, shop: ISesamiShop);
    /**
     * Retrieves a specific resource by ID.
     * @param id - The ID of the resource.
     * @returns An instance of ISesamiResource.
     */
    getById(id: string): ISesamiResource;
}
/**
 * Class representing a single resource in Sesami.
 */
export declare class ISesamiResource {
    private _api;
    private _shop;
    _id: string;
    /**
     * Creates an instance of ISesamiResource.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     * @param id - The ID of the resource.
     */
    constructor(api: SesamiNode, shop: ISesamiShop, id: string);
    /**
     * Retrieves the details of the resource.
     * @returns A promise resolving to the resource details.
     */
    get(): Promise<ReadResourceResponse>;
}
