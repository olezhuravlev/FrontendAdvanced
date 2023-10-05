import * as React from 'react'
import { useTranslation } from 'react-i18next'

import cls from './PageLoader.module.scss'
import { myClassNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'widgets/Loader'

interface PageLoaderProps {
    className?: string
};

export const PageLoader = ({ className }: PageLoaderProps) => {
    const { t } = useTranslation('translation')

    return (
        <div className={myClassNames(cls.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    )
}
