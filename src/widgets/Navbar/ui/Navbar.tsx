import * as React from 'react';
import {myClassNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/Applink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import cls from "./Navbar.module.scss"

interface NavbarProps {
    className?: string;
};

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={myClassNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink to={"/"} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>Main</AppLink>
                <AppLink to={"/abo ut"} theme={AppLinkTheme.RED}>About</AppLink>
            </div>
        </div>
    );
};
