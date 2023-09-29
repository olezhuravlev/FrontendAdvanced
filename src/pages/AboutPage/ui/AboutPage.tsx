import * as React from 'react'
import { useTranslation } from 'react-i18next'

export function AboutPage () {
    const { t } = useTranslation('about')

    return (
        <div>
            {t('about')}
        </div>
    )
};

export default AboutPage
