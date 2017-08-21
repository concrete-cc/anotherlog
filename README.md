# anotherlog

[![Build Status](https://travis-ci.org/concrete-cc/anotherlog.svg?branch=master)](https://travis-ci.org/concrete-cc/anotherlog)

Another Node.js logging module. For now this wraps Winston and provides a preconfigured standardised logger for use in our microservices and other projects.

## Getting started

First, install anotherlog using npm:
```
    npm i anotherlog
```
Then, require the package and use it like so:
```js
    const log = require('anotherlog')('MyService')
    
    log.info('Hello World')
    // '2017-06-12T16:16:09.222Z (MyService) [INFO] - Hello Small World'
```
## API
### `anotherlog(name, options={level})`
Instantiate a logger. Requires a name (i.e the name of the service).
### `.debug(message, meta)`
Lowest level of logging. Hidden by default. Set log level to 'debug' to see these. Useful for development.
### `.info(message, meta)`
Standard log message. Output to _stdout_
### `.warn(message, meta)`
Non critical errors. Output to _stderr_
### `.error(message, meta)`
Critical errors. Output to _stderr_
### `.intercept(data)`
Debug print data and return. Useful for intercepting promise chains. Requires **debug** level to show.
```js
Promise.resolve({one: 'one', two: 'two'})
  .then(log.intercept) // {"one": "one", "two": "two"}
  .then(data => data.two)
  .then(log.intercept) // "two"
  .then(data => {
    // do something
  })
```
### `.setLevel(level)`
Set the minimum log level to output. If `NODE_ENV` set to **development** defaults to **debug**. Otherwise defaults to **info**

## Notes
`NODE_ENV=development` will change the output emitted by this library. In development mode a warning is printed to the screen and messages are logged in a human readable format. When running in production all messages are logged as machine readable JSON.

## Contributing

To report bugs or request features, submit issues here on GitHub, [concrete-cc/anotherlog/issues](https://github.com/concrete-cc/anotherlog/issues). Pull requests are also welcome.

## License

MIT
