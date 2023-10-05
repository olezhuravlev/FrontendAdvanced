import React from 'react'
import { useTranslation } from 'react-i18next'
import { myClassNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation()

    return (
        <div className={myClassNames(cls.NotFoundPage, {}, [className])}>
            {t('PageNotFound')}
        </div>
    )
}

export default NotFoundPage
