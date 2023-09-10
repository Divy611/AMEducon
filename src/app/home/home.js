angular.module('AMEducon', []).controller('NavbarController', function ($scope) {
    $scope.navbarCollapsed = true;
    $scope.toggleNavbar = function () {
        $scope.$apply(function () {
            $scope.navbarCollapsed = !$scope.navbarCollapsed;
        });
    };
});
