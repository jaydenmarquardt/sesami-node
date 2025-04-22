import SesamiNode from "../Sesami.node";
import type { ReadAvailabilityResponse, SesameTeamMembersResponse, ReadTeamMemberResponse, UpdateTeamMemberRequest, CreateTeamMemberRequest } from "../types";
import { ISesamiShop } from "./Shop";
/**
 * Class representing the team members API for Sesami.
 */
export declare class ISesamiTeamMembers {
    private _api;
    private _shop;
    /**
     * Creates an instance of ISesamiTeamMembers.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     */
    constructor(api: SesamiNode, shop: ISesamiShop);
    /**
     * Retrieves a list of team members.
     * @param limit - The maximum number of team members to retrieve.
     * @param searchTerm - A search term to filter team members.
     * @returns A promise resolving to a list of team members.
     */
    get({ limit, searchTerm, }: {
        limit?: number;
        searchTerm?: string;
    }): Promise<SesameTeamMembersResponse>;
    /**
     * Retrieves a specific team member by ID.
     * @param id - The ID of the team member.
     * @returns An instance of ISesamiTeamMember.
     */
    getById(id: string): ISesamiTeamMember;
    /**
     * Adds a new team member.
     * @param properties - The properties of the team member to add.
     * @returns A promise resolving to the created team member.
     */
    add(properties: CreateTeamMemberRequest): Promise<ReadTeamMemberResponse>;
}
/**
 * Class representing a single team member in Sesami.
 */
export declare class ISesamiTeamMember {
    private _api;
    private _shop;
    _id: string;
    /**
     * Creates an instance of ISesamiTeamMember.
     * @param api - The SesamiNode API instance.
     * @param shop - The shop instance.
     * @param id - The ID of the team member.
     */
    constructor(api: SesamiNode, shop: ISesamiShop, id: string);
    /**
     * Retrieves the details of the team member.
     * @returns A promise resolving to the team member details.
     */
    get(): Promise<ReadTeamMemberResponse>;
    /**
     * Updates the team member with new properties.
     * @param properties - The properties to update.
     * @returns A promise resolving to the updated team member.
     */
    update(properties: UpdateTeamMemberRequest): Promise<ReadTeamMemberResponse>;
    /**
     * Deletes the team member.
     * @returns A promise resolving to a confirmation message.
     */
    delete(): Promise<{
        message: string;
    }>;
    /**
     * Google Calendar integration for the team member.
     */
    google: {
        /**
         * Retrieves the Google Calendar sync status for the team member.
         * @returns A promise resolving to the sync status and availability.
         */
        status: () => Promise<{
            canUseCalendarSync: boolean;
            calendarSyncStatus: "active" | "pending";
        }>;
        /**
         * Initiates Google Calendar synchronization for the team member.
         * @returns A promise resolving to a confirmation message.
         */
        sync: () => Promise<{
            message: string;
        }>;
        /**
         * Revokes Google Calendar synchronization for the team member.
         * @returns A promise resolving to a confirmation message.
         */
        revoke: () => Promise<{
            message: string;
        }>;
    };
    /**
     * Retrieves the availabilities of the team member.
     * @returns A promise resolving to a list of availabilities.
     */
    availabilities(): Promise<ReadAvailabilityResponse[]>;
}
