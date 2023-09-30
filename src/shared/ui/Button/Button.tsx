import { myClassNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import React, { type ButtonHTMLAttributes } from 'react'

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button = (props: ButtonProps) => {
    const { className, onClick, children, theme, ...otherProps } = props

    return (
        <button className={myClassNames(cls.Button, {}, [className, cls[theme]])}
            onClick={onClick}
            {...otherProps}>
            {children}
        </button>
    )
}
