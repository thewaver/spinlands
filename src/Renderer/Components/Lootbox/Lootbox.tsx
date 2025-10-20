import { Accessor } from "solid-js";

import { RarityType } from "../../../Logic/Abstracts/Rarity/Rarity.types";
import { useAppStore } from "../../App.store";

import * as styles from "./Lootbox.css";

export type LootboxProps = {
    rarity: Accessor<RarityType>;
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
