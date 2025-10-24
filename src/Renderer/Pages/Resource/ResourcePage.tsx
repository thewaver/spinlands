import { For, Show, createMemo } from "solid-js";

import { RARITY_TYPES } from "../../../Logic/Abstracts/Rarity/Rarity.types";
import { RESOURCE_DEFS } from "../../../Logic/Abstracts/Resource/Resource.const";
import { RESOURCE_USES, ResourceType, ResourceUse } from "../../../Logic/Abstracts/Resource/Resource.types";
import { useAppStore } from "../../App.store";
import { Lootbox } from "../../Components/Lootbox/Lootbox";
import { AmountLabel } from "../../Fundamentals/AmountLabel/AmountLabel";
import { RarityLabel } from "../../Fundamentals/RarityLabel/RarityLabel";
import { Surface } from "../../Fundamentals/Surface/Surface";
import { SubTitle, Title } from "../../Fundamentals/Title/Title";

import * as styles from "./ResourcePage.css";

export const ResourcePage = () => {
    const [state] = useAppStore();

    return (
        <>
            <Title>{"Lootboxes"}</Title>
            <SubTitle>{"( results logged in console )"}</SubTitle>
            <div class={styles.flex}>
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

            <Title>{"Market"}</Title>
            <Surface>
                <div
                    class={styles.grid}
                    style={{
                        "grid-template-columns": "1fr auto auto auto",
                        "column-gap": "40px",
                    }}
                >
                    <div>{"RESOURCE"}</div>
                    <div>{"OWNED"}</div>
                    <div>{"BUY / SELL"}</div>
                    <div>{""}</div>
                    <For each={Object.entries(RESOURCE_DEFS)}>
                        {([key, value]) => {
                            const getAmountOwned = createMemo(() => state.resources[key as ResourceType]);
                            const getBuyCost = createMemo(() => value.value * 1.5);
                            const getSellCost = createMemo(() => value.value * 0.5);
                            const getCredits = createMemo(() => state.resources.credit);

                            return (
                                <Show
                                    when={value.value > 1 && (value.uses.length > 1 || !value.uses.includes("claim"))}
                                >
                                    <RarityLabel rarity={() => value.rarity}>{key}</RarityLabel>
                                    <AmountLabel amount={getAmountOwned} format={() => "quantity"} />
                                    <div>
                                        <AmountLabel amount={getBuyCost} format={() => "quantity"} />
                                        <span>{" / "}</span>
                                        <AmountLabel amount={getSellCost} format={() => "quantity"} />
                                    </div>
                                    <div>
                                        <button disabled={getCredits() < getBuyCost()}>{"BUY"}</button>
                                        <span> </span>
                                        <button disabled={getAmountOwned() < 1}>{"SELL"}</button>
                                    </div>
                                </Show>
                            );
                        }}
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
        </>
    );
};
