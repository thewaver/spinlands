import { CarComponentDefs, CarComponentType } from "./CarComponent.types";

const expLevel = (level: number) => Math.pow(level, 1 + 0.05 * level);

export const CAR_COMPONENT_DEFS: Record<CarComponentType, CarComponentDefs> = {
    armor: {
        getAttributeShift: (level: number) => ({
            defense: 4 * level,
            acceleration: -2 * level,
            handling: -2 * level,
            speed: -2 * level,
        }),
        getUpgradeCost: (level: number) => ({
            timeSeconds: 45 * expLevel(level),
            resources: {
                rubber: 4 * level,
                scrap: 12 * level,
                epoxy: 4 * level,
                alloy: 1 * level,
            },
        }),
    },
    brakes: {
        getAttributeShift: (level: number) => ({
            handling: 3 * level,
        }),
        getUpgradeCost: (level: number) => ({
            timeSeconds: 30 * expLevel(level),
            resources: {
                rubber: 4 * level,
                scrap: 4 * level,
                wire: 4 * level,
                lubricant: 4 * level,
            },
        }),
    },
    engine: {
        getAttributeShift: (level: number) => ({
            acceleration: 4 * level,
            power: 5 * level,
            speed: 4 * level,
            cooling: -3 * level,
        }),
        getUpgradeCost: (level: number) => ({
            timeSeconds: 60 * expLevel(level),
            resources: {
                rubber: 2 * level,
                scrap: 4 * level,
                wire: 2 * level,
                epoxy: 2 * level,
                lubricant: 2 * level,
                alloy: 3 * level,
                ...(level % 5 === 0
                    ? {
                          electronic: Math.floor(level / 10),
                          mechanical: Math.floor(level / 5),
                      }
                    : {}),
            },
        }),
    },
    radiator: {
        getAttributeShift: (level: number) => ({
            cooling: 6 * level,
            acceleration: -1 * level,
            speed: -1 * level,
        }),
        getUpgradeCost: (level: number) => ({
            timeSeconds: 45 * expLevel(level),
            resources: {
                rubber: 2 * level,
                scrap: 12 * level,
                wire: 2 * level,
                epoxy: 4 * level,
                ...(level % 20 === 0
                    ? {
                          electronic: Math.floor(level / 20),
                      }
                    : {}),
            },
        }),
    },
    suspension: {
        getAttributeShift: (level: number) => ({
            grip: 1 * level,
            handling: 4 * level,
        }),
        getUpgradeCost: (level: number) => ({
            timeSeconds: 45 * expLevel(level),
            resources: {
                rubber: 2 * level,
                scrap: 4 * level,
                wire: 2 * level,
                epoxy: 2 * level,
                lubricant: 6 * level,
                alloy: 1 * level,
                ...(level % 10 === 0
                    ? {
                          mechanical: Math.floor(level / 10),
                      }
                    : {}),
            },
        }),
    },
    tires: {
        getAttributeShift: (level: number) => ({
            grip: 3 * level,
        }),
        getUpgradeCost: (level: number) => ({
            timeSeconds: 30 * expLevel(level),
            resources: {
                rubber: 16 * level,
                scrap: 4 * level,
            },
        }),
    },
    transmission: {
        getAttributeShift: (level: number) => ({
            acceleration: 4 * level,
            speed: 4 * level,
            power: -2 * level,
        }),
        getUpgradeCost: (level: number) => ({
            timeSeconds: 60 * expLevel(level),
            resources: {
                scrap: 4 * level,
                wire: 4 * level,
                epoxy: 2 * level,
                lubricant: 2 * level,
                alloy: 2 * level,
                ...(level % 5 === 0
                    ? {
                          electronic: Math.floor(level / 10),
                          mechanical: Math.floor(level / 5),
                      }
                    : {}),
            },
        }),
    },
    weapons: {
        getAttributeShift: (level: number) => ({
            attack: 4 * level,
            acceleration: -1 * level,
            cooling: -1 * level,
            handling: -1 * level,
            power: -1 * level,
            speed: -1 * level,
        }),
        getUpgradeCost: (level: number) => ({
            timeSeconds: 30 * expLevel(level),
            resources: {
                rubber: 2 * level,
                scrap: 4 * level,
                wire: 2 * level,
                epoxy: 2 * level,
                lubricant: 2 * level,
                alloy: 1 * level,
                ...(level % 10 === 0
                    ? {
                          electronic: Math.floor(level / 20),
                          mechanical: Math.floor(level / 10),
                      }
                    : {}),
            },
        }),
    },
};

