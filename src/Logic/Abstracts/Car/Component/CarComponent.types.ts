import { ResourceType } from "../../Resource/Resource.types";
import { CarAttributeType } from "../Attribute/CarAttribute.types";

export const CAR_COMPONENT_TYPES = [
    "armor",
    "brakes",
    "engine",
    "radiator",
    "suspension",
    "tires",
    "transmission",
    "weapons",
] as const;
export type CarComponentType = (typeof CAR_COMPONENT_TYPES)[number];

export type CarComponentUpgradeCost = {
    timeSeconds: number;
    resources: Partial<Record<ResourceType, number>>;
};

export type CarComponentDefs = {
    getAttributeShift: (level: number) => Partial<Record<CarAttributeType, number>>;
    getUpgradeCost: (level: number) => CarComponentUpgradeCost;
};
