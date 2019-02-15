const { greeting } = require('./greeting-kata')

describe('greeting', () => {
  it('given person name, should greeting person with hello', () => {
    expect(greeting('Chris')).toEqual('Hello, Chris')
  })
  it('given null, should greeting friends', () => {
    expect(greeting(null)).toEqual('Hello, my friend')
  })
  it(`given person name which upper case,
      should greeting person with shouting tone`, () => {
    expect(greeting('CHRIS')).toEqual('HELLO CHRIS!')
  })

  it(`given a`, () => {
    expect(greeting('a')).toEqual('Hello, a')
  })

  it('given two names', () => {
    expect(greeting(['Jill', 'Jane'])).toEqual('Hello, Jill and Jane')
  })

  it('given three names', () => {
    expect(greeting(['Jill', 'Jane', 'John'])).toEqual('Hello, Jill, Jane and John');
  })

  it('given two lower-cased names and one upper-cased name', () => {
    expect(greeting(['Jill', 'Jane', 'BRIAN'])).toEqual('Hello, Jill and Jane. AND HELLO BRIAN')
  })

  it('given one lower-cased name and two upper-cased names', () => {
    expect(greeting(['Jill', 'JAMES', 'BRIAN'])).toEqual('Hello Jill. AND HELLO, JAMES AND BRIAN')
  })

  it('given one lower-cased name and two names concatinated in one string', () => {
    expect(greeting(['Jill', 'James, Brian'])).toEqual('Hello, Jill, James and Brian')
  })

  it('given one lower-cased name and one CSV manner string', () => {
    expect(greeting(['Jill', '\"James, Brian\"'])).toEqual('Hello, Jill, James and Brian')
  })
})
