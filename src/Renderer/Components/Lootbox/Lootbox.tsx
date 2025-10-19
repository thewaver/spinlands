import { Accessor } from "solid-js";

import { ResourceRarity } from "../../../Logic/Abstracts/Resource/Resource.types";
import { useAppStore } from "../../App.store";

import * as styles from "./Lootbox.css";

export type LootboxProps = {
    rarity: Accessor<ResourceRarity>;
    onClick: () => void;
};

export const Lootbox = (props: LootboxProps) => {
    const [state, actions] = useAppStore();

    return (
        <button class={`${styles.root} ${styles.rarityVariant[props.rarity()]}`} onClick={props.onClick}>
            {props.rarity().toLocaleUpperCase()}
        </button>
    );
};
