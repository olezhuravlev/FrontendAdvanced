import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import "./styles/index.scss"
import {myClassNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


type Props = {};

export function App(props: Props) {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={myClassNames("app", {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};
