import { Accessor, For, Show, createMemo } from "solid-js";

import { CarComponentUtils } from "../../../Logic/Abstracts/Car/Component/CarComponent.utils";
import { MissionDefs } from "../../../Logic/Abstracts/Mission/Mission.types";
import { MissionUtils } from "../../../Logic/Abstracts/Mission/Mission.utils";
import { RESOURCE_DEFS } from "../../../Logic/Abstracts/Resource/Resource.const";
import { ResourceType } from "../../../Logic/Abstracts/Resource/Resource.types";
import { useAppStore } from "../../App.store";
import { AmountLabel } from "../../Fundamentals/AmountLabel/AmountLabel";
import { RarityLabel } from "../../Fundamentals/RarityLabel/RarityLabel";

import * as styles from "./Mission.css";

export type MissionProps = {
    defs: Accessor<MissionDefs>;
    onClick?: (score: number) => void;
};

export const Mission = (props: MissionProps) => {
    const [state] = useAppStore();

    const getData = createMemo(() => {
        const carAttributeValues = CarComponentUtils.getAttributesValues(state.carComponentLevels);

        return {
            carAttributeValues,
        };
    });

    return (
        <div class={styles.root}>
            <div>{props.defs().name.toLocaleUpperCase()}</div>
            <div class={styles.pre}>{props.defs().desc}</div>

            <div class={styles.divider}>{"REQUIRES"}</div>
            <div class={styles.tabulation}>
                <For each={Object.entries(props.defs().requirements)}>
                    {([key, value]) => (
                        <>
                            <div>{key}</div>
                            <div class={styles.amount}>
                                <AmountLabel amount={() => value} format={() => "quantity"} />
                            </div>
                        </>
                    )}
                </For>
            </div>

            <div class={styles.divider}>{"REWARDS"}</div>
            <div class={styles.tabulation} style={{ "grid-template-columns": "auto 1fr auto" }}>
                <For each={Object.entries(props.defs().rewards)}>
                    {([position, positionRewards]) => (
                        <Show when={Object.entries(positionRewards).length > 0}>
                            <For each={Object.entries(positionRewards)}>
                                {([reward, amount], getIndex) => (
                                    <>
                                        <div>{getIndex() === 0 ? `🏅 ${position}` : ""}</div>
                                        <RarityLabel rarity={() => RESOURCE_DEFS[reward as ResourceType].rarity}>
                                            {reward}
                                        </RarityLabel>
                                        <div class={styles.amount}>
                                            <AmountLabel amount={() => amount} format={() => "quantity"} />
                                        </div>
                                    </>
                                )}
                            </For>
                        </Show>
                    )}
                </For>
            </div>

            <div class={styles.divider}>{"MODIFIERS"}</div>
            <div class={styles.tabulation}>
                <For each={Object.entries(props.defs().modifiers)}>
                    {([key, value]) => (
                        <>
                            <div>{key}</div>
                            <div class={styles.attributeGauge}>
                                <For each={Array.from({ length: 4 }, (_, index) => index)}>
                                    {(item) => (
                                        <div class={styles.attributeVariants[item + 1 <= value ? "full" : "empty"]} />
                                    )}
                                </For>
                            </div>
                        </>
                    )}
                </For>
            </div>

            <button
                onClick={() => {
                    const score = MissionUtils.getMissionScore(props.defs().modifiers, getData().carAttributeValues);

                    props.onClick?.(score);
                }}
            >
                <span>{"BEGIN ("}</span>
                <AmountLabel amount={() => props.defs().timeSeconds} format={() => "duration"} />
                <span>{")"}</span>
            </button>
        </div>
    );
};

