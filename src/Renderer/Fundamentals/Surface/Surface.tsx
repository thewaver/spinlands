import { Accessor, ParentProps } from "solid-js";

import * as styles from "./Surface.css";

export type SurfaceProps = {
    isUnpadded?: Accessor<boolean>;
};

export const Surface = (props: ParentProps<SurfaceProps>) => {
    return (
        <div class={`${styles.surface} ${styles.surfaceVariant[props.isUnpadded?.() ? "unpadded" : "padded"]}`}>
            {props.children}
        </div>
    );
};

