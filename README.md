# anotherlog

[![Build Status](https://travis-ci.org/concrete-cc/anotherlog.svg?branch=master)](https://travis-ci.org/concrete-cc/anotherlog)

Another Node.js logging module. It wraps Winston and provides a preconfigured standardised logger for use in our microservices and other projects. Adds a few useful features as well

## Getting started

First, install anotherlog using npm:
```
    npm i anotherlog
```
Then, require the package and use it like so:
```js
    const log = require('anotherlog')
    
    log.setName('MyService')
    log.info('Hello World')
    // returns '09089123812 [INFO] (MyService) Hello Small World'
    // 
    const localLog = log.getInstance('MyLocalLog')
    localLog.warn('Hello Small World')
    // returns '09089123812 [WARN] (MyService:MyLocalLog) Hello Small World'
```
## API

## Contributing

To report bugs or request features, submit issues here on GitHub, [concrete-cc/anotherlog/issues](https://github.com/concrete-cc/anotherlog/issues). Pull requests are also welcome.

## License

MIT
