import * as React from 'react'
import { myClassNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/Applink/AppLink'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
};

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('translation')

    return (
        <div className={myClassNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>{t('main-page')}</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.RED}>{t('about-page')}</AppLink>
            </div>
        </div>
    )
}
