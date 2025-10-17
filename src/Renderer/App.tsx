import { For, createMemo } from "solid-js";

import { CarComponentUtils } from "../Logic/Abstracts/Car/Component/CarComponent.utils";
import { Surface } from "./Fundamentals/Surface/Surface";
import { Title } from "./Fundamentals/Title/Title";

import "./App.css";

export const App = () => {
    const getData = createMemo(() => {
        const componentCosts = CarComponentUtils.getComponentUpgradeCost(1);
        const resourceUse = CarComponentUtils.getUpgradeResourceUse(1);
        const attributeValues = CarComponentUtils.getAttributeValues(1);

        return {
            componentCosts,
            resourceUse,
            attributeValues,
        };
    });

    return (
        <div id="app" class="app">
            <Title>{"Component Costs"}</Title>
            <Surface>
                <div
                    style={{
                        "display": "grid",
                        "grid-template-columns": `repeat(${Object.keys(getData().componentCosts).length}, 1fr)`,
                        "gap": "20px",
                    }}
                >
                    <For each={Object.keys(getData().componentCosts)}>
                        {(key) => <div>{key.toLocaleUpperCase()}</div>}
                    </For>
                    <For each={Object.values(getData().componentCosts)}>
                        {(value) => (
                            <div>
                                <For each={value.items}>{(item) => <div>{item}</div>}</For>
                                <div style={{ "padding-top": "10px" }}>{`total: ${value.amount}`}</div>
                            </div>
                        )}
                    </For>
                </div>
            </Surface>

            <Title>{"Resource Use"}</Title>
            <Surface>
                <div
                    style={{
                        "display": "grid",
                        "grid-template-columns": `repeat(${Object.keys(getData().resourceUse).length}, 1fr)`,
                        "gap": "20px",
                    }}
                >
                    <For each={Object.keys(getData().resourceUse)}>{(key) => <div>{key.toLocaleUpperCase()}</div>}</For>
                    <For each={Object.values(getData().resourceUse)}>{(value) => <div>{value}</div>}</For>
                </div>
            </Surface>

            <Title>{"Attribute Values"}</Title>
            <Surface>
                <div
                    style={{
                        "display": "grid",
                        "grid-template-columns": `repeat(${Object.keys(getData().attributeValues).length}, 1fr)`,
                        "gap": "20px",
                    }}
                >
                    <For each={Object.keys(getData().attributeValues)}>
                        {(key) => <div>{key.toLocaleUpperCase()}</div>}
                    </For>
                    <For each={Object.values(getData().attributeValues)}>{(value) => <div>{value}</div>}</For>
                </div>
            </Surface>
        </div>
    );
};
