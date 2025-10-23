import { MissionDefs } from "./Mission.types";

export const MISSION_DEFS = {
    breakthrough: {
        name: "Breakthrough",
        desc: "An vast open field with planted targets. Shoot or run them through - your methods matter not.\n\nKeep your trigger-happy opponents in mind though. They may not entirely play fair.",
        modifiers: {
            attack: 4,
            defense: 2,
            acceleration: 2,
        },
        requirements: {
            ammo: 4,
            gas: 2,
        },
        rewards: {
            "1": {
                alloy: 4,
                scrap: 240,
                rubber: 160,
                wire: 80,
            },
            "2": {
                alloy: 2,
                scrap: 120,
                rubber: 80,
                wire: 40,
            },
            "3": {
                alloy: 1,
                scrap: 120,
                rubber: 40,
                wire: 20,
            },
        },
        timeSeconds: 60 * 30,
    },

    convoy_attack: {
        name: "Convoy Attack",
        desc: "Turtle Tom is moving a large portion of his assets across the open Wasteland. Lots of credits to be made for those foolish enough to approach the convoy.\n\nYou better load up on ammo and put on a thick layer of armor for this one.",
        modifiers: {
            attack: 4,
            defense: 2,
            grip: 1,
            handling: 1,
            speed: 4,
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
        desc: "Turtle Tom is moving a large portion of his assets across the open Wasteland and you've been hired as part of the escort.\n\nExpect some uninvited fools to make an appearance - turn them to a cheap source of scrap. Most kills gets the spoils.",
        modifiers: {
            attack: 4,
            defense: 4,
            grip: 1,
            handling: 1,
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
        timeSeconds: 60 * 60,
    },

    deathmatch: {
        name: "Deathmatch",
        desc: "Scrap or be scrapped to the roar of the arena's crowd.\n\nSecond place is last place, so make sure you have what it takes before diving in.",
        modifiers: {
            attack: 4,
            defense: 4,
            handling: 2,
        },
        requirements: {
            ammo: 4,
            gas: 1,
        },
        rewards: {
            "1": {
                alloy: 8,
                scrap: 480,
                rubber: 320,
                wire: 160,
            },
            "2": {},
            "3": {},
        },
        timeSeconds: 60 * 15,
    },

    drift: {
        name: "Drift",
        desc: "Not everyone is the Wasteland is refined enough to enjoy carnage. Some people just like painting the asphalt with doughnuts.\n\nPut on a good show, pocket some credits. EZ.",
        modifiers: {
            grip: 4,
            handling: 4,
        },
        requirements: {
            gas: 1,
        },
        rewards: {
            "1": {
                credit: 800,
            },
            "2": {
                credit: 400,
            },
            "3": {
                credit: 200,
            },
        },
        timeSeconds: 60 * 5,
    },

    half_mile: {
        name: "Half Mile",
        desc: "Like a Quarter Mile, but with twice the fun - amd a sharp U-turn in the middle.\n\nYou'll actually need to use the steering wheel for this one. Hopefully you'll manage.",
        modifiers: {
            acceleration: 4,
            grip: 2,
            handling: 2,
            speed: 4,
        },
        requirements: {
            gas: 1,
        },
        rewards: {
            "1": {
                "lootbox-rare": 1,
            },
            "2": {
                "lootbox-uncommon": 2,
            },
            "3": {
                "lootbox-common": 3,
            },
        },
        timeSeconds: 60 * 5,
    },

    midnight_raid: {
        name: "Midnight Raid",
        desc: "No weapons for this one. Get it, grab the goods, get out - as fast as you can. If you get caught, run, don't engage.\n\nTravel light, you'll need to move fast and be able to carry the loot.",
        modifiers: {
            acceleration: 2,
            speed: 4,
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
        timeSeconds: 60 * 60,
    },

    mountain_climber: {
        name: "Mountain Climber",
        desc: "Why drive forward when you can drive upward?\n\nA vulgar display of power like no other, but damn if it isn't entertaining.",
        modifiers: {
            acceleration: 4,
            handling: 2,
            grip: 4,
        },
        requirements: {
            gas: 1,
        },
        rewards: {
            "1": {
                "lootbox-rare": 1,
            },
            "2": {
                "lootbox-uncommon": 2,
            },
            "3": {
                "lootbox-common": 3,
            },
        },
        timeSeconds: 60 * 5,
    },

    quarter_mile: {
        name: "Quarter Mile",
        desc: "Turbo Tobias is sponsoring a (relatively) friendly drag race with some rare materials on the line for the best of the best.\n\nDo you have what it takes, or will you go home empty-handed?",
        modifiers: {
            acceleration: 4,
            speed: 4,
        },
        requirements: {
            gas: 1,
        },
        rewards: {
            "1": {
                "lootbox-rare": 1,
            },
            "2": {
                "lootbox-uncommon": 2,
            },
            "3": {
                "lootbox-common": 3,
            },
        },
        timeSeconds: 60 * 5,
    },

    racetrack: {
        name: "Racetrack",
        desc: "Thanks to the efforts of Rocket Robin, the legendary racetrack of a bigone age has been mostly restored to its former glory. Only a true chariot of the gods may kiss the tarmac here.",
        modifiers: {
            acceleration: 2,
            handling: 2,
            grip: 2,
            speed: 4,
        },
        requirements: {
            gas: 2,
        },
        rewards: {
            "1": {
                credit: 1200,
            },
            "2": {
                credit: 800,
            },
            "3": {
                credit: 400,
            },
        },
        timeSeconds: 60 * 30,
    },

    scavenger_hunt: {
        name: "Scavenger Hunt",
        desc: "Things have been quiet lately. Time to go out there and see what may be stirring under the Wasteland's twisted veil.\n\nBe careful though, the area may not be entirely friendly.",
        modifiers: {
            defense: 4,
            grip: 2,
            handling: 2,
        },
        requirements: {
            gas: 2,
        },
        rewards: {
            "1": {
                "credit": 400,
                "lootbox-rare": 2,
            },
            "2": {
                "credit": 200,
                "lootbox-uncommon": 3,
            },
            "3": {
                "credit": 100,
                "lootbox-common": 4,
            },
        },
        timeSeconds: 60 * 60,
    },

    serpentine: {
        name: "Serpentine",
        desc: "Any track can be a racetrack if you're brave - or foolish - enough. The danger draws in the crowd, and with it, sponsors.\n\nTwists and turns, ups and downs, sand and dirt. Can you conquer them all?",
        modifiers: {
            acceleration: 2,
            handling: 4,
            grip: 4,
        },
        requirements: {
            gas: 2,
        },
        rewards: {
            "1": {
                credit: 1200,
            },
            "2": {
                credit: 800,
            },
            "3": {
                credit: 400,
            },
        },
        timeSeconds: 60 * 30,
    },
} as const satisfies Record<string, MissionDefs>;

