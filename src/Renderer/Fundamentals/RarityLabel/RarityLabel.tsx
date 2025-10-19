import { Accessor, ParentProps } from "solid-js";

import { ResourceRarity } from "../../../Logic/Abstracts/Resource/Resource.types";

import * as styles from "./RarityLabel.css";

export type RarityLabelProps = {
    rarity: Accessor<ResourceRarity>;
};

export const RarityLabel = (props: ParentProps<RarityLabelProps>) => {
    return <span class={`rarityLabel ${styles.rarityVariant[props.rarity()]}`}>{props.children}</span>;
};
