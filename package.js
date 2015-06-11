Package.describe({
  summary: "Bunyan",
  name: "ongoworks:bunyan-logger",
  version: "1.4.0",
  git: "https://github.com/ongoworks/meteor-bunyan.git"
});

Npm.depends({'bunyan': '1.4.0','bunyan-pretty': '0.0.1'});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use(['cosmos:browserify@0.3.0'], 'client');

  api.addFiles("bunyan.js",["server"]);
  api.addFiles(['client.browserify.js'], 'client');

  api.export(["logger"]);
  api.export('bunyan', 'client');
  api.export('RotatingFileStream','client'); //see: https://github.com/trentm/node-bunyan/issues/223
});
