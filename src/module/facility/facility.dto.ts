export interface NewFacilitiesBodyDTO {
    facilities: NewFacilityBodyDTO[];
}

export interface NewFacilityBodyDTO {
    name: string;
    facilityGroupId: number;
}

export interface UpdateFacilityBodyDTO {
    name: string;
}