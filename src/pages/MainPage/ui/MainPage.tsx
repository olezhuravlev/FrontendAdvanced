import * as React from 'react'
import { useTranslation } from 'react-i18next'

export function MainPage () {
    const { t } = useTranslation('main')

    return (
        <div>
            {t('main-page-title')}
        </div>
    )
};

export default MainPage
