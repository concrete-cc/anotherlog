const logger = require('.')

describe('Another Logger', () => {
  it('Should return logger', () => {
    const log = logger('Test')
    expect(log).toHaveProperty('debug')
    expect(log).toHaveProperty('info')
    expect(log).toHaveProperty('warn')
    expect(log).toHaveProperty('error')
    expect(log).toHaveProperty('intercept')
  })
  it('Should require name to be set', () => {
    expect(() => logger()).toThrow()
  })
  it('Should return original object after intercept', () => {
    const log = logger('Test')
    const testObj = { hello: 'world' }
    expect(log.intercept(testObj)).toMatchObject(testObj)
  })
})
