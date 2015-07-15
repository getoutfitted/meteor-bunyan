Add and export the [Bunyan](https://github.com/trentm/node-bunyan) logging module, also add the browserify client and bunyan-prettystream.

    `meteor add ongoworks:bunyan-logger`

Adds [bunyan-prettystream](https://www.npmjs.com/package/bunyan-prettystream) for pretty-printed bunyan Meteor output.

## Server

The package exports `logger.bunyan` and `logger.bunyanPrettyStream`.

```
logger = {};
logger.bunyan = Npm.require('bunyan');
logger.bunyanPrettyStream = Npm.require('bunyan-prettystream');
```

Example pure bunyan implementation in your application:
```
log = logger.bunyan.createLogger({name:'your-app'});
```

Example bunyan-pretty implemention in your application as:
```
log = logger.bunyan.createLogger({
  name: 'your-app',
  stream: process.stdout.isTTY ? new logger.bunyanPrettyStream(process.stdout) : process.stdout,
  level: 'info'
})
```

And add logging:

`log.info("Something informative");`

## Client
The package exports `bunyan` to the `client`.

    var log = bunyan.createLogger({name: 'play', level: 'debug'});
    log.trace('this one does not emit');
    log.debug('hi on debug');   // console.log
