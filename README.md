# RhinoStyle <img src="http://rhinogram.github.io/rhinostyle/media/rhinogram-logo.svg" height="30px;">

## Documentation

[http://rhinogram.github.io/rhinostyle/](http://rhinogram.github.io/rhinostyle/)

## Setup

* Make sure you have the following installed:
  * [NodeJS](http://nodejs.org) `>= 6.9.1`
  * [yarn](https://www.npmjs.com/) `>= 0.23.4`
  * [Gulp](http://gulpjs.com) `yarn global add gulp-cli`


## Development Workflow

Rhinostyle dist/build assets are version controlled already, but if you'd like to rebuild at anytime and start a server, you can run `yarn run dev`

Individual gulp tasks can be found in [gulpfile.babel.js](gulpfile.babel.js), but some of the more common ones you will run are:

* `gulp server` Starts BrowserSync instance, watches for file changes, and automatically reloads your browser.
* `gulp docs` Bundles all tasks to rebuild documentation site. _This does not include the animations or audio tasks due to their long-processes._
* `gulp docs:styles` Builds the CSS files for the documentation site (includes framework assets)
* `gulp docs:scripts` Builds the JS files for the documentation site (includes framework assets)
* `gulp docs:site` Builds the static pages for the documentation site

## Production Workflow

Individual gulp tasks can be found in [gulpfile.babel.js](gulpfile.babel.js), but some of the more common ones you will run are:

* `gulp dist` Bundles all tasks to rebuild framework. _This does not include the animations or audio tasks due to their long-processes._
* `gulp dist:styles` Builds the CSS files for the framework
* `gulp dist:scripts` Builds the JS files for the framework

## Releasing

To release a new version of Rhinostyle, run:

```
npm version x.x.x
npm publish
gulp website
```

This does the following:

1. Rebuilds framework and tags new version on GitHub
1. Publishes new version to [npmjs.org](https://www.npmjs.com/)
1. Rebuilds documentation site with latest updates

## Versioning

RhinoStyle is maintained by using the [Semantic Versioning Specification (SemVer)](http://semver.org).

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
![iOS Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png)
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | 11+ ✔ | 7.1+ ✔ | 10+ ✔
