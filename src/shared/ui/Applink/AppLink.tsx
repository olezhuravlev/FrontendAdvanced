import { myClassNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
};

export const AppLink = (props: AppLinkProps) => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props

    return (
        <Link to={to} className={myClassNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    )
}
