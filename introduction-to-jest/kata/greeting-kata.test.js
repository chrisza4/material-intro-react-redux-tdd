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

    it(`given 2 name,
      should greeting person with shouting tone`, () => {
        expect(greeting(['jill', 'jane'])).toEqual('hello, jill and jane.')
    })
    it(`given 3 name,
      should greeting person with shouting tone`, () => {
        expect(greeting(['jill', 'jane', 'brian'])).toEqual('hello, jill, jane and brian.')
    })
    it(`given 3 name with shouting,
      should greeting person with shouting tone`, () => {
        expect(greeting(['amy', 'BRIAN', 'charlotte'])).toEqual('hello, amy and charlotte. AND HELLO BRIAN!')
    })
})