const { exec } = require('child_process');

export default function buildSVGs(cb) {
  exec('./node_modules/.bin/babel-node ./config/icons/index.js', (err) => {
    console.log('icon.json file generated successfully'); // eslint-disable-line no-console

    cb(err);
  });
}
