/**
** change.service-spec.js
**
** @description This class is meant to be the main reference when reviewing a Class mehods implementation
**               and usage. In order to see wich class and object are being tested, follow up the comment
**				 along the test case implementation.
**/

/**
** CLASS UNDER TEST: ChangeService
**/
describe('ChangeService usage', function() {
	/**
	** OBJECT UNDER TEST: ChangeService instance
	**/
	var changeService;
	beforeEach(module('machine'));
	beforeEach(module('machine.cart'));
    beforeEach(function() {
        inject(function($injector){
            changeService=$injector.get('ChangeService');
        });
    });
    it('should return 0.50 as the nearest value for 0.75', function() {
    	var coinValueExpected=0.5;
    	var coinValueReturned;

    	coinValueReturned=changeService.getCoinBetterMatchesGivenAmount(0.55);

    	expect(coinValueReturned).toBe(coinValueExpected);
    });
    it('should return 0.05 when buying 0.45 with 0.5', function() {
            var amountToChange= 0.5-(0.45);
            var expectedChange=[0.05];
            var returnedChange;

            returnedChange=changeService.getChangeGivenAmount(amountToChange);

            expect(returnedChange).toEqual(expectedChange);
    });
    it('should return 0.05 when buying 0.75 with 0.8', function() {
            var amountToChange= 0.8-(0.75);
            var expectedChange=[0.05];
            var returnedChange;

            returnedChange=changeService.getChangeGivenAmount(amountToChange);

            expect(returnedChange).toEqual(expectedChange);
    });
    describe('When the buyer gives 2 euros to buy 0.75', function() {
    	it('should return 3 coins', function() {
    		var amountToChange= 2-(0.75);
    		var expectedTotalCoins=3;
    		var returnedChange;

    		returnedChange=changeService.getChangeGivenAmount(amountToChange);

    		expect(returnedChange.length).toBe(expectedTotalCoins);
    	});
    	it('should return the appropriate change', function() {
    		var amountToChange= 2-(0.75);
    		var expectedChange=[1,0.20,0.05];
    		var returnedChange;

    		returnedChange=changeService.getChangeGivenAmount(amountToChange);

    		expect(returnedChange).toEqual(expectedChange);
    	});
        it('should express the change as a group of coins', function() {
            var expectedGroupOfCoins=[{
                value:0.05,
                quantity:1
            },{
                value:0.20,
                quantity:1
            },{
                value:1,
                quantity:1
            }];
            var returnedGroup,returnedChange;

            returnedChange=changeService.getChangeGivenAmount(2-(0.75));
            returnedGroup=changeService.getGroupOfCoins(returnedChange);

            expect(returnedGroup).toEqual(expectedGroupOfCoins);
        });
    });
    describe('When the buyer gives 1 euro to buy 0.75', function() {
    	it('should return 3 coins', function() {
    		var amountToChange= 1-(0.75);
    		var expectedTotalCoins=2;
    		var returnedChange;

    		returnedChange=changeService.getChangeGivenAmount(amountToChange);

    		expect(returnedChange.length).toBe(expectedTotalCoins);
    	});
    	it('should return the appropriate change', function() {
    		var amountToChange= 1-(0.75);
    		var expectedChange=[0.20,0.05];
    		var returnedChange;

    		returnedChange=changeService.getChangeGivenAmount(amountToChange);

    		expect(returnedChange).toEqual(expectedChange);
    	});
        it('should express the change as a group of coins', function() {
            var expectedGroupOfCoins=[{
                value:0.05,
                quantity:1
            }, {
                value:0.2,
                quantity:1
            }];
            var returnedGroup,returnedChange;

            returnedChange=changeService.getChangeGivenAmount(1-(0.75));
            returnedGroup=changeService.getGroupOfCoins(returnedChange);

            expect(returnedGroup).toEqual(expectedGroupOfCoins);
        });
    });
});