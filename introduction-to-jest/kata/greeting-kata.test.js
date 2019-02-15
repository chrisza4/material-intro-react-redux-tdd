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
  it(`test4 `, () => {
    expect(greeting(["Jill", "Jane"])).toEqual("Hello, Jill and Jane.")
  })
  it(`test5 `, () => {
    expect(greeting(["Amy", "Brian", "Charlotte"])).toEqual("Hello, Amy, Brian and Charlotte.")
  })
  it(`test6 `, () => {
    expect(greeting(["Amy", "BRIAN", "Charlotte"])).toEqual("Hello, Amy and Charlotte. AND HELLO BRIAN!")
  })
})
