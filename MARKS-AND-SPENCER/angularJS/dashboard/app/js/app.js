angular.module('App.filters', []).filter('companyFilter', [function () {
    return function (clients, selectedDepartment) {
        if (!angular.isUndefined(clients) && !angular.isUndefined(selectedDepartment) && selectedDepartment.length > 0) {
            var tempClients = [];
            angular.forEach(selectedDepartment, function (id) {
                angular.forEach(clients, function (client) {
                    if (angular.equals(client.department.id, id)) {
                        tempClients.push(client);
                    }
                });
            });
            return tempClients;
        } else {
            return clients;
        }
    };
}]);