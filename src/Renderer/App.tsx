import { For, createMemo, createSignal } from "solid-js";

import { CarComponentUtils } from "../Logic/Abstracts/Car/Component/CarComponent.utils";
import { Surface } from "./Fundamentals/Surface/Surface";
import { Title } from "./Fundamentals/Title/Title";

import "./App.css";

export const App = () => {
    const [getLevel, setLevel] = createSignal(1);

    const getData = createMemo(() => {
        const level = getLevel();
        const componentCosts = CarComponentUtils.getComponentUpgradeCost(level);
        const resourceUse = CarComponentUtils.getUpgradeResourceUse(level);
        const attributeValues = CarComponentUtils.getAttributeValues(level);

        return {
            componentCosts,
            resourceUse,
            attributeValues,
        };
    });

    return (
        <div id="app" class="app">
            <Surface>
                <label>
                    <span>{"Level"}</span>
                    <input
                        type="number"
                        min={0}
                        max={50}
                        step={1}
                        value={getLevel()}
                        onChange={(e) => {
                            setLevel(Math.min(Math.max(Number(e.target.value), 0), 50));
                        }}
                    />
                </label>
            </Surface>

            <Title>{"Component Costs"}</Title>
            <Surface>
                <div
                    class="grid"
                    style={{ "grid-template-columns": `repeat(${Object.keys(getData().componentCosts).length}, 1fr)` }}
                >
                    <For each={Object.keys(getData().componentCosts)}>
                        {(key) => <div>{key.toLocaleUpperCase()}</div>}
                    </For>
                    <For each={Object.values(getData().componentCosts)}>
                        {(value) => (
                            <div>
                                <For each={value.items}>{(item) => <div>{item}</div>}</For>
                                <div style={{ "padding-top": "20px" }}>{`total: ${value.amount}`}</div>
                            </div>
                        )}
                    </For>
                </div>
            </Surface>

            <Title>{"Resource Use"}</Title>
            <Surface>
                <div
                    class="grid"
                    style={{ "grid-template-columns": `repeat(${Object.keys(getData().resourceUse).length}, 1fr)` }}
                >
                    <For each={Object.keys(getData().resourceUse)}>{(key) => <div>{key.toLocaleUpperCase()}</div>}</For>
                    <For each={Object.values(getData().resourceUse)}>{(value) => <div>{value}</div>}</For>
                </div>
            </Surface>

            <Title>{"Attribute Values"}</Title>
            <Surface>
                <div
                    class="grid"
                    style={{ "grid-template-columns": `repeat(${Object.keys(getData().attributeValues).length}, 1fr)` }}
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
