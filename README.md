````bash
$ npm init -y
$ mkdir src
$ mkdir build
$ touch src/index.js
$ touch src/test.js
$ npm i -D webpack webpack-cli
$ touch webpack.config.js
$ npx webpack
````

````bash
$ mkdir public
$ touch public/index.html
$ npm i -D html-webpack-plugin progress-webpack-plugin
````

````bash
$ npm i -D typescript ts-loader
$ touch tsconfig.json
````

````bash
$ npm i -D ts-node @types/node @types/webpack @types/webpack-dev-server
````

````bash
$ mkdir config/build config/eslint config/jest config/build/types -p
$ touch config/build/buildPlugins.ts
$ touch config/build/buildLoaders.ts 
$ touch config/build/buildResolvers.ts
$ touch config/build/buildWebpackConfig.ts
$ touch config/build/types/config.ts
````

````bash
$ touch config/build/buildDev.server.ts
$ npm i -D webpack-dev-server
````

````bash
$ npm i react react-dom
$ npm i -D @types/react @types/react-dom
$ mkdir src/components
$ npm i -D sass-loader sass webpack style-loader css-loader
$ npm i -D mini-css-extract-plugin
````

````bash
$ npm i react-router-dom
$ npm i -D @types/react-router-dom
$ mkdir src/pages/AboutPage src/pages/MainPage -p
$ touch src/pages/AboutPage/AboutPage.tsx src/pages/MainPage/MainPage.tsx
$ touch src/pages/AboutPage/AboutPage.async.tsx src/pages/MainPage/MainPage.async.tsx
````

````bash
$ mkdir src/styles
$ touch src/styles/index.scss src/styles/reset.scss

$ mkdir src/styles/variables
$ touch src/styles/variables/global.scss

$ mkdir src/styles/themes
$ touch src/styles/themes/dark.scss src/styles/themes/normal.css
````

````bash
$ mkdir src/app src/widgets src/features src/shared src/entities
$ mkdir src/app/types
$ mv src/App.tsx src/app
$ mv src/styles src/app
$ mv src/global.d.ts src/app/types
$ rm src/components -r

$ mkdir src/app/providers/ThemeProvider/ui -p
$ mv src/theme/ThemeProvider.tsx src/app/providers/ThemeProvider/ui
$ touch src/app/providers/ThemeProvider/intex.tsx
$ mkdir src/shared/config
$ mv src/theme src/shared/config

$ mkdir src/app/providers/ThemeProvider/lib
$ mv src/shared/config/theme/useTheme.tsx src/app/providers/ThemeProvider/lib
$ mv src/shared/config/theme/ThemeContext.tsx src/app/providers/ThemeProvider/lib

$ rm src/shared/config/theme -r

$ touch src/pages/AboutPage/index.ts
$ mkdir src/pages/AboutPage/ui
$ mv src/pages/AboutPage/AboutPage.tsx src/pages/AboutPage/ui
$ mv src/pages/AboutPage/AboutPage.async.tsx src/pages/AboutPage/ui

$ touch src/pages/MainPage/index.ts
$ mkdir src/pages/MainPage/ui
$ mv src/pages/MainPage/MainPage.tsx src/pages/MainPage/ui
$ mv src/pages/MainPage/MainPage.async.tsx src/pages/MainPage/ui

$ mkdir src/shared/lib
$ mv src/helpers/classNames src/shared/lib
$ rm src/helpers -r
````

````bash
$ mkdir src/app/providers/router/ui
$ touch src/app/providers/router/index.ts
$ touch src/app/providers/router/ui/AppRouter.tsx
$ mkdir src/shared/config/routeConfig   
$ touch src/shared/config/routeConfig/routeConfig.tsx
````

````bash
$ mkdir src/widgets/Navbar/ui -p
$ touch src/widgets/Navbar/index.ts src/widgets/Navbar/ui/Navbar.tsx src/widgets/Navbar/ui/Navbar.module.scss
$ mkdir src/shared/ui/Applink -p
$ touch src/shared/ui/Applink/Applink.tsx src/shared/ui/Applink/Applink.module.css 
````

````bash
$ npm i -D @svgr/webpack
$ npm i -D file-loader

$ mkdir src/shared/ui/ThemeSwitcher/ui -p
$ touch src/shared/ui/ThemeSwitcher/index.tsx src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.tsx src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.modules.scss
$ mkdir src/shared/assets/icons -p

$ mkdir src/shared/ui/Button
$ touch src/shared/ui/Button/Button.tsx src/shared/ui/Button/Button.module.scss
````

````bash
$ mkdir src/widgets/Sidebar/ui/Sidebar -p
$ touch src/widgets/Sidebar/index.ts src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss
````

````bash
$ npm i react-i18next i18next
$ npm i i18next-http-backend i18next-browser-languagedetector

$ mkdir src/shared/config/i18n
$ touch src/shared/config/i18n/i18n.ts

$ mkdir public/locales/ru public/locales/en -p
$ touch public/locales/ru/translation.json public/locales/en/translation.json

$ mkdir src/shared/ui/LangSwitcher/ui -p
$ touch src/shared/ui/LangSwitcher/index.tsx src/shared/ui/LangSwitcher/ui/LangSwitcher.tsx src/shared/ui/LangSwitcher/ui/LangSwitcher.module.scss
````
