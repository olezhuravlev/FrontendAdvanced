import React, { Suspense } from 'react'
import './styles/index.scss'
import { myClassNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { useTheme } from 'app/providers/ThemeProvider'
import { Sidebar } from 'widgets/Sidebar'

export function App () {
    const { theme } = useTheme()

    return (
        <div className={myClassNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}
