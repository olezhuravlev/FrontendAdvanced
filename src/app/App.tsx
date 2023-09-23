import React from 'react';
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import "./styles/index.scss"
import {myClassNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";


type Props = {};

export function App(props: Props) {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={myClassNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <p></p>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <AppRouter/>
        </div>
    );
};
