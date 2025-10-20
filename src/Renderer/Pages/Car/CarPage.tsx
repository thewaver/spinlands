import { For, createMemo } from "solid-js";

import { CAR_COMPONENT_TYPES } from "../../../Logic/Abstracts/Car/Component/CarComponent.types";
import { CarComponentUtils } from "../../../Logic/Abstracts/Car/Component/CarComponent.utils";
import { LootboxUtils } from "../../../Logic/Abstracts/Lootbox/Lootbox.utls";
import { RARITY_TYPES } from "../../../Logic/Abstracts/Rarity/Rarity.types";
import { RESOURCE_DEFS } from "../../../Logic/Abstracts/Resource/Resource.const";
import { RESOURCE_USES, ResourceType, ResourceUse } from "../../../Logic/Abstracts/Resource/Resource.types";
import { useAppStore } from "../../App.store";
import { CarComponentInfo } from "../../Components/Car/Component/Info/CarComponentInfo";
import { Lootbox } from "../../Components/Lootbox/Lootbox";
import { AmountLabel } from "../../Fundamentals/AmountLabel/AmountLabel";
import { RarityLabel } from "../../Fundamentals/RarityLabel/RarityLabel";
import { Surface } from "../../Fundamentals/Surface/Surface";
import { SubTitle, Title } from "../../Fundamentals/Title/Title";

import * as styles from "./CarPage.css";

export type CarPageProps = {};

export const CarPage = (props: CarPageProps) => {
    const [state, actions] = useAppStore();

    console.log(state.resources);

    const getData = createMemo(() => {
        const levels = state.carComponentLevels;
        const attributeValues = CarComponentUtils.getAttributesValues(levels);

        return {
            attributeValues,
        };
    });

    return (
        <>
            <Title>{"Lootboxes"}</Title>
            <Surface>
                <div
                    class={styles.grid}
                    style={{
                        "grid-template-columns": `repeat(${RARITY_TYPES.length}, 1fr)`,
                        "justify-items": "center",
                    }}
                >
                    <For each={RARITY_TYPES}>
                        {(rarity) => (
                            <Lootbox
                                rarity={() => rarity}
                                onClick={() => {
                                    const picked = LootboxUtils.open(5, rarity);
                                    const pickedDesc = Object.entries(picked)
                                        .map(([key, value]) => `${key} * ${value}`)
                                        .join(" + ");

                                    alert(pickedDesc);

                                    Object.entries(picked).forEach(([key, value]) => {
                                        actions.addResource(key as ResourceType, value);
                                    });
                                }}
                            />
                        )}
                    </For>
                </div>
            </Surface>

            <Title>{"Resource Counts"}</Title>
            <For each={RESOURCE_USES}>
                {(use) => {
                    const getResources = createMemo(() =>
                        Object.entries(state.resources).filter(([key]) =>
                            RESOURCE_DEFS[key as ResourceType].uses.includes(use as ResourceUse),
                        ),
                    );

                    return (
                        <>
                            <SubTitle>{use.toLocaleUpperCase()}</SubTitle>
                            <Surface>
                                <div
                                    class={styles.grid}
                                    style={{
                                        "grid-template-columns": `repeat(${getResources().length}, 1fr)`,
                                    }}
                                >
                                    <For each={getResources()}>{([key]) => <div>{key.toLocaleUpperCase()}</div>}</For>
                                    <For each={getResources()}>
                                        {([key, value]) => (
                                            <RarityLabel rarity={() => RESOURCE_DEFS[key as ResourceType].rarity}>
                                                <AmountLabel amount={() => value} format={() => "quantity"} />
                                            </RarityLabel>
                                        )}
                                    </For>
                                </div>
                            </Surface>
                        </>
                    );
                }}
            </For>

            <Title>{"Attribute Values"}</Title>
            <Surface>
                <div
                    class={styles.grid}
                    style={{
                        "grid-template-columns": `repeat(${Object.keys(getData().attributeValues).length}, 1fr)`,
                    }}
                >
                    <For each={Object.keys(getData().attributeValues)}>
                        {(key) => <div>{key.toLocaleUpperCase()}</div>}
                    </For>
                    <For each={Object.values(getData().attributeValues)}>
                        {(value) => <AmountLabel amount={() => value} format={() => "quantity"} />}
                    </For>
                </div>
            </Surface>

            <Title>{"Components"}</Title>
            <div
                class={styles.grid}
                style={{
                    "grid-template-columns": `repeat(${CAR_COMPONENT_TYPES.length}, 1fr)`,
                }}
            >
                <For each={CAR_COMPONENT_TYPES}>{(key) => <CarComponentInfo type={() => key} />}</For>
            </div>
        </>
    );
};
