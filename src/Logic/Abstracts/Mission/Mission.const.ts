import { MissionDefs } from "./Mission.types";

export const MISSION_DEFS = {
    convoy_attack: {
        name: "Convoy Attack",
        desc: "Turtle Tom is moving a large portion of his assets across the open Wasteland. Lots of credits to be made for those foolish enough to approach the convoy. You better load up on ammo and put on a thick layer of armor for this one.\n\nOh, and in case it wasn't obvious - you're not the only dog chasing after this bone, and it's first come, first served.",
        modifiers: {
            attack: 4,
            defense: 2,
            grip: 2,
            speed: 2,
        },
        requirements: {
            ammo: 4,
            gas: 2,
        },
        rewards: {
            "1": {
                "credit": 1200,
                "lootbox-rare": 2,
            },
            "2": {
                "credit": 800,
                "lootbox-uncommon": 3,
            },
            "3": {
                "credit": 400,
                "lootbox-common": 4,
            },
        },
        timeSeconds: 60 * 15,
    },

    convoy_defense: {
        name: "Convoy Defense",
        desc: "Turtle Tom is moving a large portion of his assets across the open Wasteland and you've been hired as part of the escort. Expect some uninvited fools to make an appearance - turn them to a cheap source of scrap. Most kills gets the spoils.",
        modifiers: {
            attack: 4,
            defense: 4,
            grip: 2,
        },
        requirements: {
            ammo: 4,
            gas: 4,
        },
        rewards: {
            "1": {
                credit: 1600,
            },
            "2": {
                credit: 1200,
            },
            "3": {
                credit: 800,
            },
        },
        timeSeconds: 60 * 30,
    },

    quarter_mile: {
        name: "Quarter Mile",
        desc: "Turbo Tiberius is sponsoring a (relatively) friendly drag race with some rare materials on the line for the best of the best. Do you have what it takes, or will you go home empty-handed?",
        modifiers: {
            acceleration: 4,
            speed: 4,
        },
        requirements: {
            gas: 1,
        },
        rewards: {
            "1": {
                "lootbox-rare": 2,
            },
            "2": {},
            "3": {},
        },
        timeSeconds: 60 * 1,
    },

    scavenger_hunt: {
        name: "Scavenger Hunt",
        desc: "Things have been quiet lately. Time to go out there and see what may be stirring under the Wasteland's veil. Better make sure that your ride can handle the uneven terrain though.",
        modifiers: {
            grip: 4,
            handling: 4,
        },
        requirements: {
            gas: 2,
        },
        rewards: {
            "1": {
                "lootbox-rare": 2,
            },
            "2": {
                "lootbox-uncommon": 3,
            },
            "3": {
                "lootbox-common": 4,
            },
        },
        timeSeconds: 60 * 15,
    },
} as const satisfies Record<string, MissionDefs>;
