/**
** change-statement.directive.js
**
** @description Describes the change to the end user
**/
(function(){
'use strict';

angular
	.module('machine.cart')
	.directive('changeStatement', ChangeStatement);

function ChangeStatement(ChangeService, $filter) {

	var ddo={
		scope: {
			change:'=change'
		},
		restrict:'E',
		controller: ChangeController,
		replace: true,
		templateUrl:'scripts/cart/directives/template-change-statement.html'
	}

	return ddo;

	///

	function ChangeController($scope, $attrs) {
		$scope.statement='...';
		$scope.$watch('change', function(change) {
			if(change>0) {
				$scope.statement=getStatementByChange(change);
			} else {
				$scope.statement='No change to be given';
			}			
		});
	}

	function getStatementByChange(change) {
		var coins=ChangeService.getChangeGivenAmount(change);
		var groupOfCoins=ChangeService.getGroupOfCoins(coins);
		var rawStatement="{0} coin(s) of {1}";
		var statement;
		var statements=[];
		var totalGroups=groupOfCoins.length;

		for(var i=0;i<totalGroups;i++) {
			statement=rawStatement;
			statement=statement.replace('{0}',groupOfCoins[i].quantity);
			statement=statement.replace('{1}',$filter('currency')(groupOfCoins[i].value, '€'));
			statements.push(statement);
		}

		statement=statements.toString().replace(/,(?![\s\S]*,)/, ' and ');

		return 'Give ' + statement;
	}
}
})();