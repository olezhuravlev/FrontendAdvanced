import React from 'react'
import { useTranslation } from 'react-i18next'
import { myClassNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
    messageKey: string
};

export const LangSwitcher = ({ className, messageKey }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation('translation')

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (
        <Button
            className={myClassNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}>
            {t(messageKey)}
        </Button>
    )
}
