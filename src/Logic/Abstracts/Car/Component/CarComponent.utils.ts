import { RESOURCE_DEFS } from "../../Resource/Resource.const";
import { RESOURCE_TYPES, ResourceType } from "../../Resource/Resource.types";
import { CAR_ATTRIBUTE_TYPES } from "../Attribute/CarAttribute.types";
import { CAR_COMPONENT_DEFS } from "./CarComponent.const";
import { CAR_COMPONENT_TYPES } from "./CarComponent.types";

export namespace CarComponentUtils {
    export const getUpgradeResourceUse = (level: number) => {
        const result = Object.fromEntries(
            RESOURCE_TYPES.filter((key) => RESOURCE_DEFS[key].uses.includes("assembly")).map((key) => [key, 0]),
        );

        Object.values(CAR_COMPONENT_DEFS).forEach((value) => {
            Object.entries(value.getUpgradeCost(level).resources).forEach(([resource, amount]) => {
                result[resource] += Math.floor(amount);
            });
        });

        return result;
    };

    export const getComponentUpgradeCost = (level: number) => {
        const result = Object.fromEntries(
            CAR_COMPONENT_TYPES.map((key) => [key, { amount: 0, items: new Array<string>() }]),
        );

        Object.entries(CAR_COMPONENT_DEFS).forEach(([key, value]) => {
            Object.entries(value.getUpgradeCost(level).resources).forEach(([resource, amount]) => {
                const value = Math.floor(RESOURCE_DEFS[resource as ResourceType].value * amount);

                result[key].amount += value;
                result[key].items.push(`${resource}*${amount}: ${value}`);
            });
        });

        return result;
    };

    export const getAttributeValues = (level: number) => {
        const result = Object.fromEntries(CAR_ATTRIBUTE_TYPES.map((key) => [key, 0]));

        Object.values(CAR_COMPONENT_DEFS).forEach((value) => {
            Object.entries(value.getAttributeShift(level)).forEach(([attribute, amount]) => {
                result[attribute] += Math.floor(amount);
            });
        });

        return result;
    };
}
