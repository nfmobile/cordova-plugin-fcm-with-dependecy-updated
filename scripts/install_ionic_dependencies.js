const { execSync } = require("child_process");

execSync("echo [[Azentio]]->> ionic dependencies start...");
execSync("cd node_modules");
execSync("cd cordova-plugin-fcm-with-dependecy-updated");
execSync("cd ionic");
execSync("npm i --loglevel error --no-progress");
execSync("cd ngx");
execSync("npm i --loglevel error --no-progress");
execSync("cd ..");
execSync("cd v4");
execSync("npm i --loglevel error --no-progress");
execSync("echo [[Azentio]]->> ionic dependencies End...");
