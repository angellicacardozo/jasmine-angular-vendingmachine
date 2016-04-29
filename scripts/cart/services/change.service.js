/**
** change.service.js
**
** @description Service responsable for returning the appropriate 
**				change with the smallest number of coins
**/
(function() {
'use strict';

angular
	.module('machine.cart')
	.service('ChangeService', ChangeService);

function ChangeService() {
	this.coinList=[0.01,0.02,0.05,0.10,0.20,0.50,1,2];
	this.getChangeGivenAmount= _getChangeGivenAmount;
	this.getCoinBetterMatchesGivenAmount= _getCoinBetterMatchesGivenAmount;
	this.getGroupOfCoins=_getGroupOfCoins;

	///

	function _getCoinBetterMatchesGivenAmount(amount) {
		var min,max;
		var coinIndex;
		amount=_roundNumber(amount,2);
		coinIndex=this.coinList.indexOf(amount);
		if(coinIndex>-1) {
			return this.coinList[coinIndex];
		}

		if(amount>2) {
			return 2;
		}

		min=0;
		max=this.coinList.length;
		coinIndex=min;
		while((max-min)>0) {
			if(this.coinList[min]>amount) {
				coinIndex=min-1;
				min=max;				
			} else {
				min++;
			}
		}

		return this.coinList[coinIndex];
	}

	function _getChangeGivenAmount(amount) {
		var givenCoin;
		var change=[]; // Array of coins

		givenCoin=this.getCoinBetterMatchesGivenAmount(amount);

		amount=_roundNumber(amount-givenCoin,2);
		change.push(givenCoin);

		while(amount>0) {
			givenCoin=this.getCoinBetterMatchesGivenAmount(amount);
			amount=_roundNumber(amount-givenCoin,2);
			change.push(givenCoin);
		}

		return change;
	}

	function _getGroupOfCoins(arrayOfCoins) {
		var coinsToGroup=arrayOfCoins.slice();
		var min,coinIndex,crrCoin,accCoin;
		var grouOfCoins=[];
		min=0;
		while(coinsToGroup.length>0) {
			accCoin=0;
			crrCoin=arrayOfCoins[min];

			while(coinsToGroup.indexOf(crrCoin)>-1) {
				coinIndex=coinsToGroup.indexOf(crrCoin);
				accCoin++;
				coinsToGroup.splice(coinIndex,1);
			}

			if(accCoin>0) {
				grouOfCoins.unshift({
					quantity:accCoin,
					value:crrCoin
				});
			}

			min++;
		}

		return grouOfCoins;
	}

	function _roundNumber(number, precision){
	    precision = Math.abs(parseInt(precision)) || 0;
	    var multiplier = Math.pow(10, precision);
	    return (Math.round(number * multiplier) / multiplier);
	}
}
})();