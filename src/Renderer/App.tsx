import { ParentProps } from "solid-js";

import { A, Navigate, Route, Router } from "@solidjs/router";

import { AppStoreProvider } from "./App.store";
import { CarPage } from "./Pages/Car/CarPage";
import { MissionPage } from "./Pages/Mission/MissionPage";
import { NumbersPage } from "./Pages/Numbers/NumbersPage";
import { ResourcePage } from "./Pages/Resource/ResourcePage";

import * as styles from "./App.css";

const Layout = (props: ParentProps<{}>) => {
    return (
        <>
            <div class={styles.navWrapper}>
                <nav class={styles.nav}>
                    <A href="/car">{"Car Simulator"}</A>
                    <A href="/resources">{"Resources"}</A>
                    <A href="/missions">{"Missions"}</A>
                    <A href="/numbers">{"Number Breakdown"}</A>
                </nav>
            </div>
            <div class={styles.layoutContent}>{props.children}</div>
        </>
    );
};

export const App = () => {
    return (
        <AppStoreProvider>
            <div id="app">
                <Router>
                    <Route path="/" component={Layout}>
                        <Route path="/" component={() => <Navigate href="/numbers" />} />
                        <Route path="/car" component={CarPage} />
                        <Route path="/resources" component={ResourcePage} />
                        <Route path="/missions" component={MissionPage} />
                        <Route path="/numbers" component={NumbersPage} />
                    </Route>
                </Router>
            </div>
        </AppStoreProvider>
    );
};

