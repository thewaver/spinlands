import { Accessor, For, createMemo } from "solid-js";

import { CAR_COMPONENT_DEFS } from "../../../../../Logic/Abstracts/Car/Component/CarComponent.const";
import { CarComponentType } from "../../../../../Logic/Abstracts/Car/Component/CarComponent.types";
import { CarComponentUtils } from "../../../../../Logic/Abstracts/Car/Component/CarComponent.utils";
import { RESOURCE_DEFS } from "../../../../../Logic/Abstracts/Resource/Resource.const";
import { ResourceType } from "../../../../../Logic/Abstracts/Resource/Resource.types";
import { useAppStore } from "../../../../App.store";
import { AmountLabel } from "../../../../Fundamentals/AmountLabel/AmountLabel";
import { RarityLabel } from "../../../../Fundamentals/RarityLabel/RarityLabel";
import { Surface } from "../../../../Fundamentals/Surface/Surface";

import * as styles from "./CarComponentInfo.css";

export type CarComponentInfoProps = {
    type: Accessor<CarComponentType>;
};

export const CarComponentInfo = (props: CarComponentInfoProps) => {
    const [state, actions] = useAppStore();

    const getData = createMemo(() => {
        const type = props.type();
        const level = state.carComponentLevels[type];
        const upgradeCost = CAR_COMPONENT_DEFS[type].getUpgradeCost(level).resources;
        const upgradeTime = CAR_COMPONENT_DEFS[type].getUpgradeCost(level).timeSeconds;
        const currentAttributeShift = CAR_COMPONENT_DEFS[type].getAttributeShift(level);
        const nextAttributeShift = CAR_COMPONENT_DEFS[type].getAttributeShift(level + 1);
        const isUpgradeable = CarComponentUtils.isUpgradeable(type, state.carComponentLevels);

        return {
            level,
            upgradeCost,
            upgradeTime,
            currentAttributeShift,
            nextAttributeShift,
            isUpgradeable,
        };
    });

    return (
        <Surface>
            <div class={styles.root}>
                <div class={styles.divider}>{`${props.type().toLocaleUpperCase()} (${getData().level})`}</div>

                <div class={styles.tabulation}>
                    <For each={Object.entries(getData().currentAttributeShift)}>
                        {([key, value]) => (
                            <>
                                <div>{key}</div>
                                <div class={styles.amount}>
                                    <AmountLabel
                                        amount={() => value}
                                        color={value !== 0 ? () => (value > 0 ? "positive" : "negative") : undefined}
                                        format={() => "quantity"}
                                    />
                                </div>
                            </>
                        )}
                    </For>
                </div>

                <div class={styles.divider}>{"NEXT"}</div>

                <div class={styles.tabulation}>
                    <For each={Object.entries(getData().nextAttributeShift)}>
                        {([key, value]) => (
                            <>
                                <div>{key}</div>
                                <div class={styles.amount}>
                                    <AmountLabel
                                        amount={() => value}
                                        color={value !== 0 ? () => (value > 0 ? "positive" : "negative") : undefined}
                                        format={() => "quantity"}
                                    />
                                </div>
                            </>
                        )}
                    </For>
                </div>

                <div class={styles.divider}>{"COST"}</div>

                <div class={styles.tabulation}>
                    <For each={Object.entries(getData().upgradeCost)}>
                        {([key, value]) => (
                            <>
                                <RarityLabel rarity={() => RESOURCE_DEFS[key as ResourceType].rarity}>
                                    {key}
                                </RarityLabel>
                                <div class={styles.amount}>
                                    <AmountLabel amount={() => value} format={() => "quantity"} />
                                </div>
                            </>
                        )}
                    </For>
                </div>

                <button
                    disabled={!getData().isUpgradeable}
                    onClick={() => actions.setCarComponentLevel(props.type(), getData().level + 1)}
                >
                    <span>{"upgrade ("}</span>
                    <AmountLabel amount={() => getData().upgradeTime} format={() => "duration"} />
                    <span>{")"}</span>
                </button>
            </div>
        </Surface>
    );
};
