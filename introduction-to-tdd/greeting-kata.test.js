const { greeting } = require('./greeting-kata-step-1')

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
  it(`given person name which array two names,
      should greeting person with two names`, () => {
    expect(greeting(["Jill", "Jane"])).toEqual('Hello, Jill and Jane')
  })
  it(`given person name which array names,
      should greeting person with grammaly names`, () => {
    expect(greeting(["Amy", "Brian", "Charlotte"])).toEqual('Hello, Amy, Brian and Charlotte')
  })
  it(`given person name which array names and upper case,
      should greeting person with names and upper case`, () => {
    expect(greeting(["Amy", "BRIAN", "Charlotte"])).toEqual('Hello, Amy and Charlotte AND HELLO BRIAN')
  })
})
