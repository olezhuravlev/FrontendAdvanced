import React from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { myClassNames } from 'shared/lib/classNames/classNames'
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg'
import LightThemeIcon from 'shared/assets/icons/theme-light.svg'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
};

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button theme={ThemeButton.CLEAR}
            className={myClassNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkThemeIcon/> : <LightThemeIcon/>}
        </Button>
    )
}
