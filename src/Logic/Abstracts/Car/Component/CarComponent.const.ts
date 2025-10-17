import { CarComponentDefs, CarComponentType } from "./CarComponent.types";

export const CAR_COMPONENT_DEFS: Record<CarComponentType, CarComponentDefs> = {
    armor: {
        getAttributeShift: (level: number) => ({
            defense: 5 * level,
            acceleration: -2 * level,
            handling: -1 * level,
            power: -2 * level,
            speed: -2 * level,
        }),
        getUpgradeCost: (level: number) => ({
            timeSeconds: 30 * level,
            resources: {
                scrap: 20 * level,
                epoxy: 2 * level,
                alloy: 2 * level,
            },
        }),
    },
    brakes: {
        getAttributeShift: (level: number) => ({
            handling: 3 * level,
        }),
        getUpgradeCost: (level: number) => ({
            timeSeconds: 20 * level,
            resources: {
                credit: 40 * level,
                rubber: 4 * level,
                scrap: 8 * level,
                wire: 2 * level,
                lubricant: 1 * level,
            },
        }),
    },
    engine: {
        getAttributeShift: (level: number) => ({
            acceleration: 4 * level,
            power: 9 * level,
            speed: 4 * level,
            cooling: -3 * level,
        }),
        getUpgradeCost: (level: number) => ({
            timeSeconds: 45 * level,
            resources: {
                credit: 120 * level,
                rubber: 1 * level,
                scrap: 8 * level,
                wire: 3 * level,
                epoxy: 3 * level,
                lubricant: 3 * level,
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
            cooling: 5 * level,
        }),
        getUpgradeCost: (level: number) => ({
            timeSeconds: 25 * level,
            resources: {
                credit: 60 * level,
                scrap: 16 * level,
                rubber: 2 * level,
                wire: 2 * level,
                epoxy: 2 * level,
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
            handling: 4 * level,
            power: -1 * level,
        }),
        getUpgradeCost: (level: number) => ({
            timeSeconds: 35 * level,
            resources: {
                credit: 60 * level,
                rubber: 2 * level,
                scrap: 8 * level,
                epoxy: 1 * level,
                lubricant: 2 * level,
                alloy: 1 * level,
                ...(level % 20 === 0
                    ? {
                          mechanical: Math.floor(level / 20),
                      }
                    : {}),
            },
        }),
    },
    tires: {
        getAttributeShift: (level: number) => ({
            grip: 5 * level,
        }),
        getUpgradeCost: (level: number) => ({
            timeSeconds: 10 * level,
            resources: {
                credit: 60 * level,
                rubber: 20 * level,
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
            timeSeconds: 40 * level,
            resources: {
                credit: 100 * level,
                scrap: 8 * level,
                wire: 2 * level,
                epoxy: 1 * level,
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
    weapons: {
        getAttributeShift: (level: number) => ({
            attack: 5 * level,
            acceleration: -1 * level,
            cooling: -1 * level,
            handling: -1 * level,
            power: -3 * level,
            speed: -1 * level,
        }),
        getUpgradeCost: (level: number) => ({
            timeSeconds: 15 * level,
            resources: {
                credit: 60 * level,
                scrap: 8 * level,
                rubber: 1 * level,
                wire: 1 * level,
                epoxy: 1 * level,
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
