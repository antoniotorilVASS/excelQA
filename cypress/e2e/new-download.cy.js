// type definitions for Cypress object "cy"
/// <reference types="cypress" />

Cypress.Server.defaults({
	delay: 500,
	force404: false,
	ignore: () => {
		return true
	},
})
const tiendas = ["002", "004", "005", "006", "007", "008", "009", "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "020", "021", "022", "024", "025", "027", "029", "033", "034", "035", "036", "037", "038", "039", "040", "041", "042", "043", "044", "045", "046", "047", "048", "049", "050", "051", "052", "053", "054", "056", "057", "058", "059", "060", "061", "062", "063", "064", "067", "068", "069", "070", "071", "073", "074", "079", "081", "083", "085", "086", "089", "097", "101", "102", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "257", "258", "259", "260", "261", "263", "265", "266", "268", "269", "271", "272", "275", "276", "277", "278", "279", "280", "282", "283", "284", "285", "286", "287", "288", "289", "290", "291", "292", "293", "294", "295", "296", "297", "298", "299", "301", "302", "304", "305", "308", "309", "311", "312", "313", "316", "318"]
describe('Descarga de datos por tienda', () => {
	afterEach(function stopTest() {
		if (this.currentTest.state === 'failed') {
			cy.log('Algo ha fallado')
			Cypress.runner.stop()
		} else {
			cy.log('Test realizado')
		}
	})
	context('Descarga de datos', () => {
		tiendas.forEach((i) => {
			it(`Visito la tienda ${i}`, () => {
				cy.visit('/')
				cy.log('I run before every test in every spec file!!!!!!')
				cy.get('input[id="userName"]').clear().type('30094971')
				cy.get('input[id="userPassword"]').clear().type('EyJ2023..')
				cy.get('.login-btn').should('be.visible').click()
				cy.get('.select').select(i)
				cy.wait(5000)
				cy.get('.mx-input').clear({ force: true }).type('2022-08-01 ~ 2022-08-15')
				cy.get('.mx-datepicker-btn').click()
				cy.wait(5000)
				cy.get('.button').should('be.visible').click()
			})
		})
	})
})
