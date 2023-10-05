import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Cash } from 'widgets/Cash'

export function MainPage () {
    const { t } = useTranslation('main')

    return (
        <div>
            {t('main-page-title')}
            <Cash/>
        </div>
    )
};

export default MainPage
