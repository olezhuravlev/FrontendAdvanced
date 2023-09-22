import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {useTheme} from "app/providers/ThemeProvider";
import "./styles/index.scss"
import {myClassNames} from "shared/lib/classNames/classNames";


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
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/about"} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
            Application!
        </div>
    );
};
