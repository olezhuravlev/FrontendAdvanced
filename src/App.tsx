// @flow
import * as React from 'react';
import {Suspense} from 'react';
import {Counter} from "./components/Counter";
import "./index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";

type Props = {};

export function App(props: Props) {
    return (
        <div className={"app"}>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPageAsync/>}/>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
            Application!
            <Counter/>
        </div>
    );
};
