import { JSX, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

import { CAR_COMPONENT_TYPES, CarComponentType } from "../Logic/Abstracts/Car/Component/CarComponent.types";
import { RARITY_WEIGHTS } from "../Logic/Abstracts/Rarity/Rarity.const";
import { RESOURCE_DEFS } from "../Logic/Abstracts/Resource/Resource.const";
import { RESOURCE_TYPES, ResourceType } from "../Logic/Abstracts/Resource/Resource.types";

type State = {
    carComponentLevels: Record<CarComponentType, number>;
    resources: Record<ResourceType, number>;
};

type Actions = {
    setCarComponentLevel: (component: CarComponentType, level: number) => void;
    addResource: (resource: ResourceType, amount: number) => void;
};

const initialState: State = {
    carComponentLevels: Object.fromEntries(CAR_COMPONENT_TYPES.map((key) => [key, 1])) as Record<
        CarComponentType,
        number
    >,
    resources: Object.fromEntries(
        [...RESOURCE_TYPES]
            .sort((a, b) => RARITY_WEIGHTS[RESOURCE_DEFS[a].rarity] - RARITY_WEIGHTS[RESOURCE_DEFS[b].rarity])
            .map((key) => [key, 0]),
    ) as Record<ResourceType, number>,
};

const StoreContext = createContext<[State, Actions]>();

export const AppStoreProvider = (props: { children: JSX.Element }) => {
    const [state, setState] = createStore(initialState);

    const actions = {
        setCarComponentLevel: (component: CarComponentType, level: number) =>
            setState("carComponentLevels", component, level),
        addResource: (resource: ResourceType, amount: number) =>
            setState("resources", resource, (state.resources[resource] ?? 0) + amount),
    };

    return <StoreContext.Provider value={[state, actions]}>{props.children}</StoreContext.Provider>;
};

export function useAppStore() {
    const store = useContext(StoreContext);

    if (!store) throw new Error("useStore must be used within StoreProvider");
    return store;
}

