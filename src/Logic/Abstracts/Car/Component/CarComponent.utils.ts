import { RARITY_WEIGHTS } from "../../Rarity/Rarity.const";
import { RESOURCE_DEFS } from "../../Resource/Resource.const";
import { RESOURCE_TYPES, ResourceType } from "../../Resource/Resource.types";
import { CAR_ATTRIBUTE_TYPES, CarAttributeType } from "../Attribute/CarAttribute.types";
import { CAR_COMPONENT_DEFS } from "./CarComponent.const";
import { CAR_COMPONENT_TYPES, CarComponentType } from "./CarComponent.types";

export namespace CarComponentUtils {
    export const getTotalUpgradeResourcesUsed = (levels: Record<CarComponentType, number>) => {
        const result = Object.fromEntries(
            RESOURCE_TYPES.filter((key) => RESOURCE_DEFS[key].uses.includes("assembly"))
                .sort((a, b) => RARITY_WEIGHTS[RESOURCE_DEFS[a].rarity] - RARITY_WEIGHTS[RESOURCE_DEFS[b].rarity])
                .map((key) => [key, 0]),
        ) as Record<ResourceType, number>;

        Object.entries(CAR_COMPONENT_DEFS).forEach(([key, value]) => {
            Object.entries(value.getUpgradeCost(levels[key as CarComponentType]).resources).forEach(
                ([resource, amount]) => {
                    result[resource as ResourceType] += Math.floor(amount);
                },
            );
        });

        return result;
    };

    type CarComponentUpgradeCostItem = {
        resource: ResourceType;
        amount: number;
        total: number;
    };

    export const getComponenstUpgradeCost = (levels: Record<CarComponentType, number>) => {
        const result = Object.fromEntries(
            CAR_COMPONENT_TYPES.map((key) => [key, { total: 0, items: new Array<CarComponentUpgradeCostItem>() }]),
        ) as Record<CarComponentType, { total: number; items: CarComponentUpgradeCostItem[] }>;

        Object.entries(CAR_COMPONENT_DEFS).forEach(([key, value]) => {
            Object.entries(value.getUpgradeCost(levels[key as CarComponentType]).resources).forEach(
                ([resource, amount]) => {
                    const total = Math.floor(RESOURCE_DEFS[resource as ResourceType].value * amount);

                    result[key as CarComponentType].total += total;
                    result[key as CarComponentType].items.push({
                        amount,
                        resource: resource as ResourceType,
                        total,
                    });
                },
            );
        });

        return result;
    };

    export const getComponentsUpgradeTime = (levels: Record<CarComponentType, number>) => {
        const result = Object.fromEntries(CAR_COMPONENT_TYPES.map((key) => [key, 0])) as Record<
            CarComponentType,
            number
        >;

        Object.entries(CAR_COMPONENT_DEFS).forEach(([key, value]) => {
            result[key as CarComponentType] += value.getUpgradeCost(levels[key as CarComponentType]).timeSeconds;
        });

        return result;
    };

    export const getAttributesValues = (levels: Record<CarComponentType, number>) => {
        const result = Object.fromEntries(CAR_ATTRIBUTE_TYPES.map((key) => [key, 0])) as Record<
            CarAttributeType,
            number
        >;

        Object.entries(CAR_COMPONENT_DEFS).forEach(([key, value]) => {
            Object.entries(value.getAttributeShift(levels[key as CarComponentType])).forEach(([attribute, amount]) => {
                result[attribute as CarAttributeType] += Math.floor(amount);
            });
        });

        return result;
    };

    export const isUpgradeable = (
        component: CarComponentType,
        levels: Record<CarComponentType, number>,
        resources: Record<ResourceType, number>,
    ) => {
        if (
            Object.entries(CAR_COMPONENT_DEFS[component].getUpgradeCost(levels[component]).resources).some(
                ([key, value]) => resources[key as ResourceType] < value,
            )
        )
            return false;

        const newAttributes = getAttributesValues(
            Object.fromEntries(
                Object.entries(levels).map(([key, value]) => [key, key === component ? value + 1 : value]),
            ) as Record<CarComponentType, number>,
        );

        return !Object.values(newAttributes).some((value) => value < 0);
    };
}

