import { Accessor, ParentProps } from "solid-js";

import * as styles from "./Surface.css";

export type SurfaceProps = {
    className?: Accessor<string>;
};

export const Surface = (props: ParentProps<SurfaceProps>) => {
    return <div class={`${styles.surface} ${props.className?.()}`}>{props.children}</div>;
};

