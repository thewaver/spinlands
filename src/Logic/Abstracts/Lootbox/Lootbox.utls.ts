import { getWeightedRandom } from "../../Utils/number";
import { RarityType } from "../Rarity/Rarity.types";
import { ResourceType } from "../Resource/Resource.types";
import { LOOTBOX_DEFS } from "./Lootbox.const";

export namespace LootboxUtils {
    export const open = (count: number, rarity: RarityType): Partial<Record<ResourceType, number>> => {
        const candidates = Object.fromEntries(
            Object.entries(LOOTBOX_DEFS[rarity]).map(([key, value]) => [key, value.probability]),
        );

        let result = {} as Partial<Record<ResourceType, number>>;

        for (let i = 0; i < count; i++) {
            const picked = getWeightedRandom(candidates) as ResourceType;

            result[picked] ??= 0;
            result[picked] += LOOTBOX_DEFS[rarity][picked]?.amount ?? 0;
        }

        return result;
    };
}
