import { For } from "solid-js";

import { MISSION_DEFS } from "../../../Logic/Abstracts/Mission/Mission.const";
import { MissionDefs } from "../../../Logic/Abstracts/Mission/Mission.types";
import { Mission } from "../../Components/Mission/Mission";
import { Surface } from "../../Fundamentals/Surface/Surface";
import { SubTitle, Title } from "../../Fundamentals/Title/Title";

import * as styles from "./MissionPage.css";

export const MissionPage = () => {
    return (
        <>
            <Title>{"Missions"}</Title>
            <SubTitle>{"( results logged in console )"}</SubTitle>
            <div
                class={styles.grid}
                style={{
                    "grid-template-columns": `repeat(6, 1fr)`,
                }}
            >
                <For each={Object.values(MISSION_DEFS)}>
                    {(mission) => (
                        <Surface>
                            <Mission
                                defs={() => mission as MissionDefs}
                                onClick={(score) => {
                                    console.log("Mission score", score);
                                }}
                            />
                        </Surface>
                    )}
                </For>
            </div>
        </>
    );
};
