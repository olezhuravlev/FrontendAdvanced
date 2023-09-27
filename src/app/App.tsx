import React from 'react';
import "./styles/index.scss"
import {myClassNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {useTheme} from "app/providers/ThemeProvider";


type Props = {};

export function App(props: Props) {

    const {theme} = useTheme();

    return (
        <div className={myClassNames("app", {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};
