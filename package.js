Package.describe({
  summary: "Bunyan",
  name: "ongoworks:bunyan-logger",
  version: "1.0.0",
  git: "https://github.com/ongoworks/meteor-bunyan.git"
});

Npm.depends({'bunyan': '1.2.3', 'bunyan-pretty': '0.0.1'});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles("bunyan.js",["server"]); // server methods
  api.export(["logger"]);
});
