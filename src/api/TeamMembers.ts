import SesamiNode from "../Sesami.node";
import type {
  ReadAvailabilityResponse,
  SesameTeamMembersResponse,
  ReadTeamMemberResponse,
  UpdateTeamMemberRequest,
  CreateTeamMemberRequest,
} from "../types";
import { ISesamiShop } from "./Shop";

/**
 * Class representing the team members API for Sesami.
 */
export class ISesamiTeamMembers {
  private _api: SesamiNode;
  private _shop: ISesamiShop;

  /**
   * Creates an instance of ISesamiTeamMembers.
   * @param api - The SesamiNode API instance.
   * @param shop - The shop instance.
   */
  constructor(api: SesamiNode, shop: ISesamiShop) {
    this._api = api;
    this._shop = shop;
  }

  /**
   * Retrieves a list of team members.
   * @param limit - The maximum number of team members to retrieve.
   * @param searchTerm - A search term to filter team members.
   * @returns A promise resolving to a list of team members.
   */
  async get({
    limit = 10,
    searchTerm,
  }: {
    limit?: number;
    searchTerm?: string;
  }): Promise<SesameTeamMembersResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/team-members`,
      query: {
        limit,
        searchTerm,
      },
    });
  }

  /**
   * Retrieves a specific team member by ID.
   * @param id - The ID of the team member.
   * @returns An instance of ISesamiTeamMember.
   */
  getById(id: string): ISesamiTeamMember {
    return new ISesamiTeamMember(this._api, this._shop, id);
  }

  /**
   * Adds a new team member.
   * @param properties - The properties of the team member to add.
   * @returns A promise resolving to the created team member.
   */
  async add(
    properties: CreateTeamMemberRequest
  ): Promise<ReadTeamMemberResponse> {
    return await this._api.request({
      method: "POST",
      endpoint: `${this._shop._id}/team-members`,
      body: properties,
    });
  }
}

/**
 * Class representing a single team member in Sesami.
 */
export class ISesamiTeamMember {
  private _api: SesamiNode;
  private _shop: ISesamiShop;
  _id: string;

  /**
   * Creates an instance of ISesamiTeamMember.
   * @param api - The SesamiNode API instance.
   * @param shop - The shop instance.
   * @param id - The ID of the team member.
   */
  constructor(api: SesamiNode, shop: ISesamiShop, id: string) {
    this._api = api;
    this._shop = shop;
    this._id = id;
  }

  /**
   * Retrieves the details of the team member.
   * @returns A promise resolving to the team member details.
   */
  async get(): Promise<ReadTeamMemberResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/team-members/${this._id}`,
    });
  }

  /**
   * Updates the team member with new properties.
   * @param properties - The properties to update.
   * @returns A promise resolving to the updated team member.
   */
  async update(
    properties: UpdateTeamMemberRequest
  ): Promise<ReadTeamMemberResponse> {
    return await this._api.request({
      method: "PATCH",
      endpoint: `${this._shop._id}/team-members/${this._id}`,
      body: properties,
    });
  }

  /**
   * Deletes the team member.
   * @returns A promise resolving to a confirmation message.
   */
  async delete(): Promise<{
    message: string;
  }> {
    return await this._api.request({
      method: "DELETE",
      endpoint: `${this._shop._id}/team-members/${this._id}`,
    });
  }

  /**
   * Google Calendar integration for the team member.
   */
  google = {
    /**
     * Retrieves the Google Calendar sync status for the team member.
     * @returns A promise resolving to the sync status and availability.
     */
    status: async (): Promise<{
      canUseCalendarSync: boolean;
      calendarSyncStatus: "active" | "pending";
    }> => {
      return await this._api.request({
        method: "GET",
        endpoint: `${this._shop._id}/team-members/${this._id}/google-calendar-sync`,
      });
    },

    /**
     * Initiates Google Calendar synchronization for the team member.
     * @returns A promise resolving to a confirmation message.
     */
    sync: async (): Promise<{
      message: string;
    }> => {
      return await this._api.request({
        method: "POST",
        endpoint: `${this._shop._id}/team-members/${this._id}/google`,
      });
    },

    /**
     * Revokes Google Calendar synchronization for the team member.
     * @returns A promise resolving to a confirmation message.
     */
    revoke: async (): Promise<{
      message: string;
    }> => {
      return await this._api.request({
        method: "DELETE",
        endpoint: `${this._shop._id}/team-members/${this._id}/google/revoke`,
      });
    },
  };

  /**
   * Retrieves the availabilities of the team member.
   * @returns A promise resolving to a list of availabilities.
   */
  async availabilities(): Promise<ReadAvailabilityResponse[]> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/team-members/${this._id}/availabilities`,
    });
  }
}
