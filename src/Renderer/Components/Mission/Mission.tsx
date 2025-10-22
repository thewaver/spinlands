import { Accessor, For, Show } from "solid-js";

import { MissionDefs } from "../../../Logic/Abstracts/Mission/Mission.types";
import { RESOURCE_DEFS } from "../../../Logic/Abstracts/Resource/Resource.const";
import { ResourceType } from "../../../Logic/Abstracts/Resource/Resource.types";
import { AmountLabel } from "../../Fundamentals/AmountLabel/AmountLabel";
import { RarityLabel } from "../../Fundamentals/RarityLabel/RarityLabel";

import * as styles from "./Mission.css";

export type MissionProps = {
    defs: Accessor<MissionDefs>;
};

export const Mission = (props: MissionProps) => {
    return (
        <div class={styles.root}>
            <div>{props.defs().name.toLocaleUpperCase()}</div>
            <div class={styles.pre}>{props.defs().desc}</div>
            <div>
                {"⏲ "}
                <AmountLabel amount={() => props.defs().timeSeconds} format={() => "duration"} />
            </div>

            <div class={styles.divider}>{"Requires:"}</div>
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

            <div class={styles.divider}>{"Rewards:"}</div>
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

            <div class={styles.divider}>{"Modifiers:"}</div>
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
        </div>
    );
};

