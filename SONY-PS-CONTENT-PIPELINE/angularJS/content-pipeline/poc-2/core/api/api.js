

// All functions in this service are API calls which return promises.
angular.module('poc').service('serviceAPI',
    function conceptProposalServiceAPI(
        $http,
        $q,
        conceptProposalFactoryAPICache,
        oauth2FactoryHeaders,
        sharedAPIConstantURL
    ) {
        var baseUrl = sharedAPIConstantURL + '/concepts';
        function options(obj) {
            return angular.extend({
                headers: oauth2FactoryHeaders()
            }, obj || {});
        }

        this.validate = function validate(concept) {
            return $http.post(baseUrl + '/validate', concept, options());
        };
        this.init = function init() {
            return $http.put(baseUrl + '/init', {}, options());
        };
        this.save = function save(concept) {
            return $http.put(baseUrl + '/save', concept, options());
        };
        this.submit = function submit(concept) {
            return $http.put(baseUrl + '/submit', concept, options());
        };
        
        this.concept = function concept(id) {              
            return $http.get(baseUrl + '/' + id, options());
        };

    });

