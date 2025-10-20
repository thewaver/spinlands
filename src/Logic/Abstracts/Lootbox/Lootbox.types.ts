import { ResourceType } from "../Resource/Resource.types";

export type LootboxItemDefs = {
    amount: number;
    probability: number;
};

export type LootboxDefs = {
    items: Partial<Record<ResourceType, LootboxItemDefs>>;
    openCount: number;
};
