import * as React from 'react';
import {useState} from 'react';
import css from "./Counter.module.scss";

type Props = {};

export function Counter(props: Props) {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div className={css.btn}>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
};
