import { randomTimes } from "../../Utils/number";
import { CAR_ATTRIBUTE_TYPES, CarAttributeType } from "../Car/Attribute/CarAttribute.types";
import { MISSION_DEFS } from "./Mission.const";
import { MissionDefs } from "./Mission.types";

export namespace MissionUtils {
    export const getCarAttributeUse = (): Record<CarAttributeType, number> => {
        const result = Object.fromEntries(CAR_ATTRIBUTE_TYPES.map((key) => [key, 0])) as Record<
            CarAttributeType,
            number
        >;

        Object.values(MISSION_DEFS).forEach((defs) => {
            Object.entries(defs.modifiers).forEach(([key, value]) => {
                result[key as CarAttributeType] += value;
            });
        });

        return result;
    };

    export const getMissionScore = (
        modifiers: MissionDefs["modifiers"],
        carAttributeLevels: Record<CarAttributeType, number>,
    ) => {
        return Object.entries(modifiers).reduce(
            (res, [key, value]) => (res += randomTimes(carAttributeLevels[key as CarAttributeType], value * 4)),
            0,
        );
    };
}

