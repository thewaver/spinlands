import { ParentProps } from "solid-js";

import * as styles from "./Title.css";

export type TitleProps = {};

export const Title = (props: ParentProps<TitleProps>) => {
    return <span class={styles.title}>{props.children}</span>;
};

export const SubTitle = (props: ParentProps<TitleProps>) => {
    return <span class={styles.subTitle}>{props.children}</span>;
};

