import { RESOURCE_DEFS } from "../../Resource/Resource.const";
import { RESOURCE_TYPES, ResourceType } from "../../Resource/Resource.types";
import { CAR_ATTRIBUTE_TYPES } from "../Attribute/CarAttribute.types";
import { CAR_COMPONENT_DEFS } from "./CarComponent.const";
import { CAR_COMPONENT_TYPES, CarComponentType } from "./CarComponent.types";

export namespace CarComponentUtils {
    export const getUpgradeResourceUse = (levels: Record<CarComponentType, number>) => {
        const result = Object.fromEntries(
            RESOURCE_TYPES.filter((key) => RESOURCE_DEFS[key].uses.includes("assembly")).map((key) => [key, 0]),
        );

        Object.entries(CAR_COMPONENT_DEFS).forEach(([key, value]) => {
            Object.entries(value.getUpgradeCost(levels[key as CarComponentType]).resources).forEach(
                ([resource, amount]) => {
                    result[resource] += Math.floor(amount);
                },
            );
        });

        return result;
    };

    export const getComponentUpgradeCost = (levels: Record<CarComponentType, number>) => {
        const result = Object.fromEntries(
            CAR_COMPONENT_TYPES.map((key) => [
                key,
                { total: 0, items: new Array<{ resource: ResourceType; amount: number; total: number }>() },
            ]),
        );

        Object.entries(CAR_COMPONENT_DEFS).forEach(([key, value]) => {
            Object.entries(value.getUpgradeCost(levels[key as CarComponentType]).resources).forEach(
                ([resource, amount]) => {
                    const total = Math.floor(RESOURCE_DEFS[resource as ResourceType].value * amount);

                    result[key].total += total;
                    result[key].items.push({
                        amount,
                        resource: resource as ResourceType,
                        total,
                    });
                },
            );
        });

        return result;
    };

    export const getComponentUpgradeTime = (levels: Record<CarComponentType, number>) => {
        const result = Object.fromEntries(CAR_COMPONENT_TYPES.map((key) => [key, 0]));

        Object.entries(CAR_COMPONENT_DEFS).forEach(([key, value]) => {
            result[key] += value.getUpgradeCost(levels[key as CarComponentType]).timeSeconds;
        });

        return result;
    };

    export const getAttributeValues = (levels: Record<CarComponentType, number>) => {
        const result = Object.fromEntries(CAR_ATTRIBUTE_TYPES.map((key) => [key, 0]));

        Object.entries(CAR_COMPONENT_DEFS).forEach(([key, value]) => {
            Object.entries(value.getAttributeShift(levels[key as CarComponentType])).forEach(([attribute, amount]) => {
                result[attribute] += Math.floor(amount);
            });
        });

        return result;
    };

    export const isUpgradeable = (component: CarComponentType, levels: Record<CarComponentType, number>) => {
        const newAttributes = getAttributeValues(
            Object.fromEntries(
                Object.entries(levels).map(([key, value]) => [key, key === component ? value + 1 : value]),
            ) as Record<CarComponentType, number>,
        );

        return !Object.values(newAttributes).some((value) => value < 0);
    };
}

