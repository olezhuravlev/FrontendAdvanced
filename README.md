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
