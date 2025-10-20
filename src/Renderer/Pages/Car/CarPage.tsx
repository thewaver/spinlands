import { For, Show, createMemo } from "solid-js";

import { CAR_COMPONENT_TYPES } from "../../../Logic/Abstracts/Car/Component/CarComponent.types";
import { CarComponentUtils } from "../../../Logic/Abstracts/Car/Component/CarComponent.utils";
import { RARITY_TYPES } from "../../../Logic/Abstracts/Rarity/Rarity.types";
import { RESOURCE_DEFS } from "../../../Logic/Abstracts/Resource/Resource.const";
import { RESOURCE_USES, ResourceType, ResourceUse } from "../../../Logic/Abstracts/Resource/Resource.types";
import { useAppStore } from "../../App.store";
import { CarComponentInfo } from "../../Components/Car/Component/Info/CarComponentInfo";
import { Lootbox } from "../../Components/Lootbox/Lootbox";
import { AmountLabel } from "../../Fundamentals/AmountLabel/AmountLabel";
import { RarityLabel } from "../../Fundamentals/RarityLabel/RarityLabel";
import { Surface } from "../../Fundamentals/Surface/Surface";
import { Title } from "../../Fundamentals/Title/Title";

import * as styles from "./CarPage.css";

export const CarPage = () => {
    const [state] = useAppStore();

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
                                onClick={(items) => {
                                    const pickedDesc = Object.entries(items)
                                        .map(([key, value]) => `${key} * ${value}`)
                                        .join(" + ");

                                    console.log(pickedDesc);
                                }}
                            />
                        )}
                    </For>
                </div>
            </Surface>

            <Title>{"Resource Counts"}</Title>
            <div
                class={styles.grid}
                style={{
                    "grid-template-columns": "auto 1fr",
                    "align-items": "center",
                    "column-gap": "40px",
                }}
            >
                <For each={RESOURCE_USES}>
                    {(use) => {
                        const getResources = createMemo(() =>
                            Object.entries(state.resources).filter(([key]) =>
                                RESOURCE_DEFS[key as ResourceType].uses.includes(use as ResourceUse),
                            ),
                        );

                        return (
                            <Show when={use !== "claim"}>
                                <div>{use.toLocaleUpperCase()}</div>
                                <Surface>
                                    <div
                                        class={styles.grid}
                                        style={{
                                            "grid-template-columns": `repeat(${getResources().length}, 1fr)`,
                                        }}
                                    >
                                        <For each={getResources()}>
                                            {([key]) => <div>{key.toLocaleUpperCase()}</div>}
                                        </For>
                                        <For each={getResources()}>
                                            {([key, value]) => (
                                                <RarityLabel rarity={() => RESOURCE_DEFS[key as ResourceType].rarity}>
                                                    <AmountLabel amount={() => value} format={() => "quantity"} />
                                                </RarityLabel>
                                            )}
                                        </For>
                                    </div>
                                </Surface>
                            </Show>
                        );
                    }}
                </For>
            </div>

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
