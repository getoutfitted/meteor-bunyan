Implements the [Bunyan](https://github.com/trentm/node-bunyan) logging module for Meteor

    `meteor add ongoworks:bunyan`

Also adds [bunyan-pretty](https://www.npmjs.com/package/bunyan-pretty) for pretty-printed bunyon Meteor console output.

The package exports `logger.bunyan`, `logger.bunyanLogstash` and `logger.bunyanPretty`.

```
logger = {};
logger.bunyan = Npm.require('bunyan');
logger.bunyanPretty = Npm.require('bunyan-pretty');
```

Example pure bunyan implementation in your application:
```
log = logger.bunyan.createLogger({name:'your-app'});
```

Example bunyan-pretty implemention in your application as:
```
log = logger.bunyan.createLogger({
  name: 'your-app',
  stream: process.stdout.isTTY || Meteor.settings.isDebug ? logger.bunyanPretty() : process.stdout,
  level: 'info'
})
```

And add logging:

`log.info("Something informative");`