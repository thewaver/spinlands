import { Accessor, ParentProps } from "solid-js";

import { RarityType } from "../../../Logic/Abstracts/Rarity/Rarity.types";

import * as styles from "./RarityLabel.css";

export type RarityLabelProps = {
    rarity: Accessor<RarityType>;
};

export const RarityLabel = (props: ParentProps<RarityLabelProps>) => {
    return <span class={`rarityLabel ${styles.rarityVariant[props.rarity()]}`}>{props.children}</span>;
};
