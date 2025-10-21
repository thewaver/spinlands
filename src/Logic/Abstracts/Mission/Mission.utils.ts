import { randomTimes } from "../../Utils/number";
import { CarAttributeType } from "../Car/Attribute/CarAttribute.types";
import { MissionDefs } from "./Mission.types";

export namespace MissionUtils {
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
