/** 
** cart-spec.js
**
** @describe This is an E2E test specification for the module COMMENT with tests cases 
**           wich reflects uses interaction and spectation.
**           Usage recommendation: This class is meant to be a guide for FE code reviews in first place.
**			 If a team developer is not able to understand the story implementation by its tests,
**			 so it cannot be understood at all. Cause of tests are the reflection of a developer 
**			 interpretation of the problem. Code implemented must be testable and readable by 
**			 anyone who undestands the basic of its domain.
**/
describe('Vending Machine Cart usage', function() {
	beforeEach(function() {
		browser.get('/');
	});
	describe('Given I am buying a Kitkat', function() {
		it('Should show kitkat as a cart option', function() {
			var kitkatInput=element.all(by.css('md-radio-button[aria-label="KitKat"]'));
			expect(kitkatInput.count()).toBe(1);
		});
		describe('When I push the buy button', function() {
			beforeEach(function(){
				var kitkatInput=element.all(by.css('md-radio-button[aria-label="KitKat"]'));
				var inputAmount=element.all(by.model('cartVm.received'));
				var buyButton=element.all(by.buttonText('Buy'));
				inputAmount.sendKeys(2.00);
				kitkatInput.click();
				buyButton.click();
			});
			it('Should then give the change with the smallest number of coins', function() {
				var expectedOutputAmount='Give 1 coin(s) of 5 cents, 1 coin(s) of 20 cents and 1 coin(s) of 1 euro';
				var outputAmount=element.all(by.css('p[change="cartVm.change"]'));
				expect(outputAmount.getText()).toBe(expectedOutputAmount);
			});
		});
	});
});