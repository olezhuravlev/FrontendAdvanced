import * as React from 'react';
import {myClassNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/Applink/AppLink";

interface NavbarProps {
    className?: string;
};

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={myClassNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={"/"} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>Main</AppLink>
                <AppLink to={"/about"} theme={AppLinkTheme.RED}>About</AppLink>
            </div>
        </div>
    );
};
