import { myClassNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
    className?: string
};

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation('translation')
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={myClassNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>{t('toggle')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang} messageKey={'switch-locale'}/>
            </div>
        </div>
    )
}
