![Repo Banner](https://i.imgur.com/zM5CZhi.jpg)

### Demo
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

### Technical stack

* [VueJS](https://vuejs.org/)
* [Webpack](https://webpack.js.org/)
* [Yarn](https://yarnpkg.com/lang/en/)
* [Node.js](https://nodejs.org/en/)

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v9+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd vueInfiniteScroll
$ yarn
$ yarn dev
```

For production environments...

```sh
$ yarn
$ yarn build
```

### Webpack Plugins & Loaders

| Plugin | DOC |
| ------ | ------ |
| VueLoaderPlugin | [https://vue-loader.vuejs.org/guide/][PlDb] |
| Uglifyjsplugin | [https://webpack.js.org/plugins/uglifyjs-webpack-plugin/][PlGh] |

| Loader | DOC |
| ------ | ------ |
| vue-style-loader | [https://github.com/vuejs/vue-style-loader][PlDb] |
| sass-loader | [https://github.com/webpack-contrib/sass-loader][PlGh] |

License
----

MIT
**Free Software, Hell Yeah!**
