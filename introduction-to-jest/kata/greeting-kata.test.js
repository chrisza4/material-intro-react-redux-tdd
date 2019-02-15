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

	it(`given 2 persons`, () => {
		expect(greeting(["attapon","konger"])).toEqual('Hello, attapon and konger')
	})

	it(`given b`, () => {
		expect(greeting(["Attapon","Konger","Pim"])).toEqual('Hello, Attapon, Konger and Pim')
	})

	it(`given c`, () => {
		expect(greeting(["Attapon","KONGER","Pim"])).toEqual('Hello, Attapon, Pim and HELLO KONGER!')
	})
	
})
