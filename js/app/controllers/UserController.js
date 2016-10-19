function UserController($scope) {
	var ctrl = this;
	ctrl.username = '';

	ctrl.country = {
		name: {

		}
	};

	$scope.$watch(function () {
		return ctrl.username;
	}, function(newValue, oldValue){
			console.log('Username updated')
		});

	$scope.$watch(function () {
        return ctrl.country;
    }, function (newValue, oldValue) {
        console.log('Country updated!');
    }, true);

	$scope.$watchCollection(function(){
		return ctrl.country.name.full && ctrl.country.name.short;
	}, function(newValue, oldValue){
		console.log('country full and short name updated!');
	})
}

angular
	.module('app')
	.controller('UserController', UserController);
