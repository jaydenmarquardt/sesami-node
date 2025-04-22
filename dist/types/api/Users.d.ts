import SesamiNode from "../Sesami.node";
import { ISesamiShop } from "./Shop";
export declare class ISesamiNames {
    private _api;
    private _shop;
    constructor(api: SesamiNode, shop: ISesamiShop);
    get({ limit, searchTerm, }: {
        limit?: number;
        searchTerm?: string;
    }): Promise<SesameNameResponse>;
    getById(id: string): ISesamiName;
    add(properties: CreateNameRequest): Promise<ReadNameResponse>;
}
export declare class ISesamiName {
    private _api;
    private _shop;
    _id: string;
    constructor(api: SesamiNode, shop: ISesamiShop, id: string);
    get(): Promise<ReadNameResponse>;
    update(properties: UpdateNameRequest): Promise<ReadNameResponse>;
    delete(): Promise<{
        message: string;
    }>;
}
