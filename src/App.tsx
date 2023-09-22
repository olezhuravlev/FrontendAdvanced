import React, {Suspense} from 'react';
import {Counter} from "./components/Counter";
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import "./styles/index.scss"
import {myClassNames} from "./helpers/classNames/classNames";

type Props = {};

export function App(props: Props) {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={myClassNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <p></p>
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
