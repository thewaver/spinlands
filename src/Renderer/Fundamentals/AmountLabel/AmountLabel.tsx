import { Accessor, createMemo } from "solid-js";

import { formatDuration, formatLargeNumber } from "../../../Logic/Utils/format";
import { AMOUNT_COLORS } from "../../Abstracts/Color/Color.const";

import * as styles from "./AmountLabel.css";

export type AmountLabelProps = {
    amount: Accessor<number>;
    color?: Accessor<keyof typeof AMOUNT_COLORS>;
    format?: Accessor<"duration" | "quantity">;
};

export const AmountLabel = (props: AmountLabelProps) => {
    const getFormatter = createMemo(() => {
        if (props.format?.() === "duration") return formatDuration;
        if (props.format?.() === "quantity") return formatLargeNumber;
        return (value: number) => value;
    });

    return (
        <span class={`rarityLabel ${props.color?.() ? styles.amountVariant[props.color()] : ""}`}>
            {getFormatter()(props.amount())}
        </span>
    );
};
