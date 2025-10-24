import { For, createMemo, createSignal } from "solid-js";

import { CAR_COMPONENT_TYPES, CarComponentType } from "../../../Logic/Abstracts/Car/Component/CarComponent.types";
import { CarComponentUtils } from "../../../Logic/Abstracts/Car/Component/CarComponent.utils";
import { MissionUtils } from "../../../Logic/Abstracts/Mission/Mission.utils";
import { RESOURCE_DEFS } from "../../../Logic/Abstracts/Resource/Resource.const";
import { ResourceType } from "../../../Logic/Abstracts/Resource/Resource.types";
import { AmountLabel } from "../../Fundamentals/AmountLabel/AmountLabel";
import { RarityLabel } from "../../Fundamentals/RarityLabel/RarityLabel";
import { Surface } from "../../Fundamentals/Surface/Surface";
import { SubTitle, Title } from "../../Fundamentals/Title/Title";

import * as styles from "./NumbersPage.css";

export const NumbersPage = () => {
    const [getLevel, setLevel] = createSignal(1);

    const getData = createMemo(() => {
        const levels = Object.fromEntries(CAR_COMPONENT_TYPES.map((key) => [key, getLevel()])) as Record<
            CarComponentType,
            number
        >;
        const componentCosts = CarComponentUtils.getComponenstUpgradeCost(levels);
        const timeCosts = CarComponentUtils.getComponentsUpgradeTime(levels);
        const resourceUse = CarComponentUtils.getTotalUpgradeResourcesUsed(levels);
        const carAttributeValues = CarComponentUtils.getAttributesValues(levels);
        const missionAttributeValues = MissionUtils.getCarAttributeUse();

        return {
            componentCosts,
            timeCosts,
            resourceUse,
            carAttributeValues,
            missionAttributeValues,
        };
    });

    return (
        <>
            <Title>{"Settings"}</Title>
            <Surface>
                <label>
                    <span>{"Simulated Car Level"}</span>
                    <input
                        type="number"
                        min={1}
                        max={40}
                        step={1}
                        value={getLevel()}
                        onChange={(e) => {
                            setLevel(Math.min(Math.max(Number(e.target.value), 1), 40));
                        }}
                    />
                </label>
            </Surface>

            <Title>{"Mission Car Attribute Use"}</Title>
            <SubTitle>
                {
                    "Missions rely on certain Car Attributes to compute a score.\nThis is the sum total weight of each Attribute across all missions."
                }
            </SubTitle>
            <Surface>
                <div
                    class={styles.grid}
                    style={{
                        "grid-template-columns": `repeat(${Object.keys(getData().missionAttributeValues).length}, 1fr)`,
                    }}
                >
                    <For each={Object.keys(getData().missionAttributeValues)}>
                        {(key) => <div>{key.toLocaleUpperCase()}</div>}
                    </For>
                    <For each={Object.values(getData().missionAttributeValues)}>
                        {(value) => <AmountLabel amount={() => value} format={() => "quantity"} />}
                    </For>
                </div>
            </Surface>

            <Title>{"Car Attribute Values"}</Title>
            <SubTitle>
                {
                    "Car Components increase or decrease certain Attribute values.\nThis is the sum total of each Car Attribute value when Components are at the configured lovel."
                }
            </SubTitle>
            <Surface>
                <div
                    class={styles.grid}
                    style={{
                        "grid-template-columns": `repeat(${Object.keys(getData().carAttributeValues).length}, 1fr)`,
                    }}
                >
                    <For each={Object.keys(getData().carAttributeValues)}>
                        {(key) => <div>{key.toLocaleUpperCase()}</div>}
                    </For>
                    <For each={Object.values(getData().carAttributeValues)}>
                        {(value) => <AmountLabel amount={() => value} format={() => "quantity"} />}
                    </For>
                </div>
            </Surface>

            <Title>{"Total Car Component Resource Costs"}</Title>
            <SubTitle>
                {
                    "Car Components cost time and Resources to upgrade.\nThis is the (non-cumulative) sum total of all Resources needed to upgrade Components at the configured level."
                }
            </SubTitle>
            <Surface>
                <div
                    class={styles.grid}
                    style={{ "grid-template-columns": `repeat(${Object.keys(getData().resourceUse).length}, 1fr)` }}
                >
                    <For each={Object.keys(getData().resourceUse)}>{(key) => <div>{key.toLocaleUpperCase()}</div>}</For>
                    <For each={Object.entries(getData().resourceUse)}>
                        {([key, value]) => (
                            <RarityLabel rarity={() => RESOURCE_DEFS[key as ResourceType].rarity}>
                                <AmountLabel amount={() => value} format={() => "quantity"} />
                            </RarityLabel>
                        )}
                    </For>
                </div>
            </Surface>

            <Title>{"Car Component Upgrade Costs"}</Title>
            <Surface>
                <div
                    class={styles.grid}
                    style={{
                        "grid-template-columns": `repeat(${Object.keys(getData().componentCosts).length}, 1fr)`,
                        "column-gap": "20px",
                    }}
                >
                    <For each={Object.keys(getData().componentCosts)}>
                        {(key) => <div>{key.toLocaleUpperCase()}</div>}
                    </For>
                    <For each={Object.values(getData().componentCosts)}>
                        {(value) => (
                            <div
                                class={styles.grid}
                                style={{
                                    "grid-template-columns": "2fr 1fr",
                                    "align-self": "start",
                                    "row-gap": 0,
                                }}
                            >
                                <For each={value.items}>
                                    {(item) => (
                                        <>
                                            <RarityLabel rarity={() => RESOURCE_DEFS[item.resource].rarity}>
                                                <span>{`${item.resource} * `}</span>
                                                <AmountLabel amount={() => item.amount} format={() => "quantity"} />
                                            </RarityLabel>
                                            <div style={{ "text-align": "end" }}>
                                                <AmountLabel amount={() => item.total} format={() => "quantity"} />
                                            </div>
                                        </>
                                    )}
                                </For>
                                <div />
                                <div style={{ "text-align": "end", "opacity": "0.5" }}>{"──"}</div>
                                <div>{"total"}</div>
                                <div style={{ "text-align": "end" }}>
                                    <AmountLabel amount={() => value.total} format={() => "quantity"} />
                                </div>
                            </div>
                        )}
                    </For>
                </div>
            </Surface>

            <Title>{"Car Component Upgrade Time"}</Title>
            <Surface>
                <div
                    class={styles.grid}
                    style={{ "grid-template-columns": `repeat(${Object.keys(getData().timeCosts).length}, 1fr)` }}
                >
                    <For each={Object.keys(getData().timeCosts)}>{(key) => <div>{key.toLocaleUpperCase()}</div>}</For>
                    <For each={Object.values(getData().timeCosts)}>
                        {(value) => <AmountLabel amount={() => value} format={() => "duration"} />}
                    </For>
                </div>
            </Surface>
        </>
    );
};

