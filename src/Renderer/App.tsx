import { AppStoreProvider } from "./App.store";
import { CarPage } from "./Pages/Car/CarPage";
import { NumbersPage } from "./Pages/Numbers/NumbersPage";

import * as styles from "./App.css";

export const App = () => {
    return (
        <AppStoreProvider>
            <div id="app" class={styles.app}>
                <CarPage />
                <NumbersPage />
            </div>
        </AppStoreProvider>
    );
};

