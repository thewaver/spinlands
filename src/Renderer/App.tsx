import { For, createMemo } from "solid-js";
import { createStore } from "solid-js/store";

import { CAR_COMPONENT_TYPES, CarComponentType } from "../Logic/Abstracts/Car/Component/CarComponent.types";
import { CarComponentUtils } from "../Logic/Abstracts/Car/Component/CarComponent.utils";
import { RESOURCE_DEFS } from "../Logic/Abstracts/Resource/Resource.const";
import { ResourceType } from "../Logic/Abstracts/Resource/Resource.types";
import { formatDuration, formatLargeNumber } from "../Logic/Utils/format";
import { RarityLabel } from "./Fundamentals/RarityLabel/RarityLabel";
import { Surface } from "./Fundamentals/Surface/Surface";
import { Title } from "./Fundamentals/Title/Title";

import "./App.css";

export const App = () => {
    const [levels, setLevels] = createStore(
        Object.fromEntries(CAR_COMPONENT_TYPES.map((key) => [key, 1])) as Record<CarComponentType, number>,
    );

    const getData = createMemo(() => {
        const componentCosts = CarComponentUtils.getComponentUpgradeCost(levels);
        const timeCosts = CarComponentUtils.getComponentUpgradeTime(levels);
        const resourceUse = CarComponentUtils.getUpgradeResourceUse(levels);
        const attributeValues = CarComponentUtils.getAttributeValues(levels);

        return {
            componentCosts,
            timeCosts,
            resourceUse,
            attributeValues,
        };
    });

    return (
        <div id="app" class="app">
            <Surface>
                <div class="flex" style={{ "justify-content": "center" }}>
                    <For each={Object.keys(levels)}>
                        {(key) => {
                            const getIsDisabled = createMemo(
                                () => !CarComponentUtils.isUpgradeable(key as CarComponentType, levels),
                            );

                            return (
                                <label aria-disabled={getIsDisabled()}>
                                    <span style={{ opacity: getIsDisabled() ? "0.5" : "1" }}>
                                        {key.toLocaleUpperCase()}
                                    </span>
                                    <input
                                        type="number"
                                        min={1}
                                        max={40}
                                        step={1}
                                        value={levels[key as CarComponentType]}
                                        disabled={getIsDisabled()}
                                        onChange={(e) => {
                                            setLevels(
                                                key as CarComponentType,
                                                Math.min(Math.max(Number(e.target.value), 1), 40),
                                            );
                                        }}
                                    />
                                </label>
                            );
                        }}
                    </For>
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
                    <For each={Object.values(getData().attributeValues)}>
                        {(value) => <div>{formatLargeNumber(value)}</div>}
                    </For>
                </div>
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
                            <div
                                class="grid"
                                style={{
                                    "grid-template-columns": "2fr 1fr",
                                    "align-self": "start",
                                    "row-gap": "0",
                                }}
                            >
                                <For each={value.items}>
                                    {(item) => (
                                        <>
                                            <RarityLabel
                                                rarity={() => RESOURCE_DEFS[item.resource].rarity}
                                            >{`${item.resource} * ${formatLargeNumber(item.amount)}`}</RarityLabel>
                                            <div style={{ "text-align": "end" }}>{formatLargeNumber(item.total)}</div>
                                        </>
                                    )}
                                </For>
                                <div />
                                <div style={{ "text-align": "end", "opacity": "0.5" }}>{"───"}</div>
                                <div>{"total"}</div>
                                <div style={{ "text-align": "end" }}>{formatLargeNumber(value.total)}</div>
                            </div>
                        )}
                    </For>
                </div>
            </Surface>

            <Title>{"Upgrade Time"}</Title>
            <Surface>
                <div
                    class="grid"
                    style={{ "grid-template-columns": `repeat(${Object.keys(getData().timeCosts).length}, 1fr)` }}
                >
                    <For each={Object.keys(getData().timeCosts)}>{(key) => <div>{key.toLocaleUpperCase()}</div>}</For>
                    <For each={Object.values(getData().timeCosts)}>{(value) => <div>{formatDuration(value)}</div>}</For>
                </div>
            </Surface>

            <Title>{"Resource Use"}</Title>
            <Surface>
                <div
                    class="grid"
                    style={{ "grid-template-columns": `repeat(${Object.keys(getData().resourceUse).length}, 1fr)` }}
                >
                    <For each={Object.keys(getData().resourceUse)}>{(key) => <div>{key.toLocaleUpperCase()}</div>}</For>
                    <For each={Object.entries(getData().resourceUse)}>
                        {([key, value]) => (
                            <RarityLabel rarity={() => RESOURCE_DEFS[key as ResourceType].rarity}>
                                {formatLargeNumber(value)}
                            </RarityLabel>
                        )}
                    </For>
                </div>
            </Surface>
        </div>
    );
};

