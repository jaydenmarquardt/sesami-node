import SesamiNode from "../Sesami.node";
import type {
  ReadAvailabilityResponse,
  SesameTeamMembersResponse,
  ReadTeamMemberResponse,
  UpdateTeamMemberRequest,
  CreateTeamMemberRequest,
} from "../types";
import { ISesamiShop } from "./Shop";

export class ISesamiTeamMembers {
  private _api: SesamiNode;
  private _shop: ISesamiShop;

  constructor(api: SesamiNode, shop: ISesamiShop) {
    this._api = api;
    this._shop = shop;
  }

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

  getById(id: string): ISesamiTeamMember {
    return new ISesamiTeamMember(this._api, this._shop, id);
  }

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

export class ISesamiTeamMember {
  private _api: SesamiNode;
  private _shop: ISesamiShop;
  _id: string;

  constructor(api: SesamiNode, shop: ISesamiShop, id: string) {
    this._api = api;
    this._shop = shop;
    this._id = id;
  }

  async get(): Promise<ReadTeamMemberResponse> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/team-members/${this._id}`,
    });
  }

  async update(
    properties: UpdateTeamMemberRequest
  ): Promise<ReadTeamMemberResponse> {
    return await this._api.request({
      method: "PATCH",
      endpoint: `${this._shop._id}/team-members/${this._id}`,
      body: properties,
    });
  }

  async delete(): Promise<{
    message: string;
  }> {
    return await this._api.request({
      method: "DELETE",
      endpoint: `${this._shop._id}/team-members/${this._id}`,
    });
  }

  google = {
    status: async (): Promise<{
      canUseCalendarSync: boolean;
      calendarSyncStatus: "active" | "pending";
    }> => {
      return await this._api.request({
        method: "GET",
        endpoint: `${this._shop._id}/team-members/${this._id}/google-calendar-sync`,
      });
    },
    sync: async (): Promise<{
      message: string;
    }> => {
      return await this._api.request({
        method: "POST",
        endpoint: `${this._shop._id}/team-members/${this._id}/google`,
      });
    },
    revoke: async (): Promise<{
      message: string;
    }> => {
      return await this._api.request({
        method: "DELETE",
        endpoint: `${this._shop._id}/team-members/${this._id}/google/revoke`,
      });
    },
  };

  async availabilities(): Promise<ReadAvailabilityResponse[]> {
    return await this._api.request({
      method: "GET",
      endpoint: `${this._shop._id}/team-members/${this._id}/availabilities`,
    });
  }
}
