import { For, createMemo } from "solid-js";

import { CAR_COMPONENT_TYPES } from "../../../Logic/Abstracts/Car/Component/CarComponent.types";
import { CarComponentUtils } from "../../../Logic/Abstracts/Car/Component/CarComponent.utils";
import { RESOURCE_DEFS } from "../../../Logic/Abstracts/Resource/Resource.const";
import { RESOURCE_RARITIES, ResourceType } from "../../../Logic/Abstracts/Resource/Resource.types";
import { getWeightedRandom } from "../../../Logic/Utils/number";
import { useAppStore } from "../../App.store";
import { CarComponentInfo } from "../../Components/Car/Component/Info/CarComponentInfo";
import { Lootbox } from "../../Components/Lootbox/Lootbox";
import { AmountLabel } from "../../Fundamentals/AmountLabel/AmountLabel";
import { Surface } from "../../Fundamentals/Surface/Surface";
import { Title } from "../../Fundamentals/Title/Title";

import * as styles from "./CarPage.css";

export type CarPageProps = {};

export const CarPage = (props: CarPageProps) => {
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
                        "grid-template-columns": `repeat(${RESOURCE_RARITIES.length}, 1fr)`,
                        "justify-items": "center",
                    }}
                >
                    <For each={RESOURCE_RARITIES}>
                        {(rarity) => (
                            <Lootbox
                                rarity={() => rarity}
                                onClick={() => {
                                    const candidates = Object.fromEntries(
                                        Object.entries(RESOURCE_DEFS)
                                            .filter(([, value]) => value.rarity === rarity)
                                            .map(([key, value]) => [key, value.probability]),
                                    );

                                    const items = Array.from({ length: 5 }, () => getWeightedRandom(candidates));

                                    alert(items.join(" + "));
                                }}
                            />
                        )}
                    </For>
                </div>
            </Surface>

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
