angular.module('conceptProposal').service('conceptProposalServiceAPI',
function conceptProposalServiceAPI($http, $q, conceptProposalFactoryAPICache, oauth2FactoryHeaders) {
    this.messageBundleGroups = function messageBundleGroups(code) {
        var deferred = $q.defer();
        var output = {};

        //end point for messagebundle
        $http.get('/messagebundlegroups/' + code, { cache: conceptProposalFactoryAPICache })
        .then(function then(response) {
            response.data.messages.forEach(function forEach(message) {
                output[message.key] = message.value;
            });
            deferred.resolve(output);
        });
        return deferred.promise;
    };
    this.get = function get(uri) {
        return $http.get(uri, {
            headers: oauth2FactoryHeaders()
        });
    };
    this.post = function post(uri, concept) {
        return $http.post(uri, concept, {
            headers: oauth2FactoryHeaders()
        });
    };
});