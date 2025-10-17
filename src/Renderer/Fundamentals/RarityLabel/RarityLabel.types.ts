import { Accessor } from "solid-js";

import { ResourceRarity } from "../../../Logic/Abstracts/Resource/Resource.types";

export type RarityLabelProps = {
    rarity: Accessor<ResourceRarity>;
};
