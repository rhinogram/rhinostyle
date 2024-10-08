# RhinoStyle <img src="http://rhinogram.github.io/rhinostyle/media/rhinogram-logo.svg" height="30px;">

## Documentation

[https://rhinogram.github.io/rhinostyle/](https://rhinogram.github.io/rhinostyle/)

## Setup

Make sure you have the following installed:
  * [NodeJS](http://nodejs.org) `14.x`
  * [yarn](https://www.npmjs.com/) `>= 0.23.4`
  * [Gulp](http://gulpjs.com) `yarn global add gulp-cli`


---
## Development Workflow

Individual gulp tasks are in [gulpfile.babel.js](gulpfile.babel.js), but for development run:

* `yarn start` Starts BrowserSync instance, watches for file changes, and automatically reloads your browser

* If adding / deleting any of the media, audio, or animation files, run `yarn build` to capture the changes
### Yarn link
Develop locally without having to push changes to Github using `yarn link`. From the rhinostyle directory, run: `yarn link`. Go to the directory of your project (rhinofront) and run: `yarn link rhinostyle`.

### Yalc
Alternatively, `yalc` can be used to develop locally without having to push changes to Github. Follow steps 1-3 here: [Shared library local development with Yalc](https://rhinogram.atlassian.net/wiki/spaces/EN/pages/694714476/Shared+library+rhinotilities+rhinosecure+etc.+local+development+with+Docker)


---
## Releasing
Run `yarn build` and commit before creating a new release.

Once merged into `master`, publish a new release in GitHub following the rules of [semantic versioning](https://semver.org).

---
## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
![iOS Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png)
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | 11+ ✔ | 9+ ✔ | 10+ ✔
