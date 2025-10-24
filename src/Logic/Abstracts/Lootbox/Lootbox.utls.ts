import { getWeightedRandom } from "../../Utils/number";
import { RarityType } from "../Rarity/Rarity.types";
import { RESOURCE_DEFS } from "../Resource/Resource.const";
import { ResourceType } from "../Resource/Resource.types";
import { LOOTBOX_DEFS } from "./Lootbox.const";

export namespace LootboxUtils {
    export const open = (rarity: RarityType, openRecursively?: boolean): Partial<Record<ResourceType, number>> => {
        const candidates = Object.fromEntries(
            Object.entries(LOOTBOX_DEFS[rarity].items).map(([key, value]) => [key, value.probability]),
        );

        let result = {} as Partial<Record<ResourceType, number>>;

        for (let i = 0; i < LOOTBOX_DEFS[rarity].openCount; i++) {
            const picked = getWeightedRandom(candidates) as ResourceType;

            if (!openRecursively || !picked.startsWith("lootbox")) {
                result[picked] = (result[picked] ?? 0) + (LOOTBOX_DEFS[rarity].items[picked]?.amount ?? 0);
            } else {
                const recursiveRarity = RESOURCE_DEFS[picked].rarity;

                for (let j = 0; j < LOOTBOX_DEFS[recursiveRarity].openCount; j++) {
                    const recursiveResult = open(recursiveRarity, true);

                    Object.entries(recursiveResult).forEach(([key, value]) => {
                        result[key as ResourceType] = (result[key as ResourceType] ?? 0) + value;
                    });
                }
            }
        }

        return result;
    };

    export const getTotalProbability = (rarity: RarityType) => {
        return Object.values(LOOTBOX_DEFS[rarity].items).reduce((res, cur) => res + cur.probability, 0);
    };
}

