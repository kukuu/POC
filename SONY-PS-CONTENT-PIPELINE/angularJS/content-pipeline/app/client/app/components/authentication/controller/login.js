//User Login authentication

angular.module('authentication').controller('authenticationControllerLogin', function (OAuth, oauth2401Redirect) {
    this.login = {
        username:'testuser1@test.co.uk',
        password:'password'
    };
    this.submit = angular.bind(this, function () {
        OAuth.getAccessToken(this.login).then(oauth2401Redirect.back);
    });
});
