import { JSX, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

import { CAR_COMPONENT_TYPES, CarComponentType } from "../Logic/Abstracts/Car/Component/CarComponent.types";

type State = {
    carComponentLevels: Record<CarComponentType, number>;
};

type Actions = {
    setCarComponentLevel: (component: CarComponentType, level: number) => void;
};

const initialState: State = {
    carComponentLevels: Object.fromEntries(CAR_COMPONENT_TYPES.map((key) => [key, 1])) as Record<
        CarComponentType,
        number
    >,
};

const StoreContext = createContext<[State, Actions]>();

export const AppStoreProvider = (props: { children: JSX.Element }) => {
    const [state, setState] = createStore(initialState);

    const actions = {
        setCarComponentLevel: (component: CarComponentType, level: number) =>
            setState("carComponentLevels", component, level),
    };

    return <StoreContext.Provider value={[state, actions]}>{props.children}</StoreContext.Provider>;
};

export function useAppStore() {
    const store = useContext(StoreContext);

    if (!store) throw new Error("useStore must be used within StoreProvider");
    return store;
}

