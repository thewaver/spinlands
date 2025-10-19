import { For, createMemo } from "solid-js";

import { CAR_COMPONENT_TYPES, CarComponentType } from "../../../Logic/Abstracts/Car/Component/CarComponent.types";
import { CarComponentUtils } from "../../../Logic/Abstracts/Car/Component/CarComponent.utils";
import { useAppStore } from "../../App.store";
import { CarComponentInfo } from "../../Components/Car/Component/Info/CarComponentInfo";
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
        <div class={styles.root}>
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
                <For each={CAR_COMPONENT_TYPES}>
                    {(key) => <CarComponentInfo type={() => key as CarComponentType} />}
                </For>
            </div>
        </div>
    );
};
