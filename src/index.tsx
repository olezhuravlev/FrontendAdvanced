import ReactDOM from 'react-dom/client'
import { App } from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import './shared/config/i18n/i18n'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BrowserRouter>
    <ThemeProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>
</BrowserRouter>)
