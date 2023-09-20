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
