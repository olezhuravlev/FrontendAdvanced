// @flow
import * as React from 'react';
import {Counter} from "./components/Counter";
import "./index.scss"
type Props = {};

export function App(props: Props) {
    return (
        <div className={"app"}>
            Application!
            <Counter/>
        </div>
    );
};
