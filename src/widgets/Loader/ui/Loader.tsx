import * as React from 'react'
import { useTranslation } from 'react-i18next'

import './Loader.scss'
import { myClassNames } from 'shared/lib/classNames/classNames'

interface PageLoaderProps {
    className?: string
};

export const Loader = ({ className }: PageLoaderProps) => {
    const { t } = useTranslation('translation')

    return (
        <div className={myClassNames('lds-ellipsis', {}, [className])}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    )
}
