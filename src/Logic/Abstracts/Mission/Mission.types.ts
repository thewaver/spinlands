import { CarAttributeType } from "../Car/Attribute/CarAttribute.types";
import { ResourceType } from "../Resource/Resource.types";

export type MissionAttribute = 0 | 1 | 2 | 4;
export type MissionPlacement = 1 | 2 | 3;
export type MissionModifiers = Partial<Record<Exclude<CarAttributeType, "cooling" | "power">, MissionAttribute>>;
export type MissionRewards = Partial<Record<ResourceType, number>>;
export type MissionRequirements = Partial<Record<Extract<ResourceType, "ammo" | "gas" | "nitro">, number>>;

export type MissionDefs = {
    name: string;
    desc: string;
    timeSeconds: number;
    modifiers: MissionModifiers;
    rewards: Record<MissionPlacement, MissionRewards>;
    requirements: MissionRequirements;
};
