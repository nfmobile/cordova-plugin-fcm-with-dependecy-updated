import {series} from 'async';
const {exec} = require('child_process');

series([
 () => exec('cd node_modules'),
 () => exec('cd cordova-plugin-fcm-with-dependecy-updated'),
 () => exec('cd ionic'),
 () => exec('npm i --loglevel error --no-progress'),
 () => exec('cd ngx'),
 () => exec('npm i --loglevel error --no-progress'),
 () => exec('cd ..'),
 () => exec('cd v4'),
 () => exec('npm i --loglevel error --no-progress')
]);