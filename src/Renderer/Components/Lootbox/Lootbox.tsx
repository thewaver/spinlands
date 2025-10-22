import { Accessor, For, createMemo } from "solid-js";

import { LOOTBOX_DEFS } from "../../../Logic/Abstracts/Lootbox/Lootbox.const";
import { LootboxUtils } from "../../../Logic/Abstracts/Lootbox/Lootbox.utls";
import { RarityType } from "../../../Logic/Abstracts/Rarity/Rarity.types";
import { ResourceType } from "../../../Logic/Abstracts/Resource/Resource.types";
import { useAppStore } from "../../App.store";

import * as styles from "./Lootbox.css";

export type LootboxProps = {
    rarity: Accessor<RarityType>;
    onClick?: (items: Partial<Record<ResourceType, number>>) => void;
};

export const Lootbox = (props: LootboxProps) => {
    const [, actions] = useAppStore();

    const getTotalProbability = createMemo(() => LootboxUtils.getTotalProbability(props.rarity()));

    return (
        <button
            class={`${styles.root} ${styles.rarityVariant[props.rarity()]}`}
            onClick={() => {
                const picked = LootboxUtils.open(props.rarity(), true);

                Object.entries(picked).forEach(([key, value]) => {
                    actions.addResource(key as ResourceType, value);
                });

                props.onClick?.(picked);
            }}
        >
            <div>
                <div class={styles.title}>{props.rarity().toLocaleUpperCase()}</div>
                <div>{`get ${LOOTBOX_DEFS[props.rarity()].openCount} items`}</div>
            </div>
            <div class={styles.tabulation}>
                <For each={Object.entries(LOOTBOX_DEFS[props.rarity()].items)}>
                    {([key, value]) => (
                        <>
                            <div>{key}</div>
                            <div>{value.amount}</div>
                            <div>{`${((value.probability * 100) / getTotalProbability()).toFixed(1)}%`}</div>
                        </>
                    )}
                </For>
            </div>
        </button>
    );
};

