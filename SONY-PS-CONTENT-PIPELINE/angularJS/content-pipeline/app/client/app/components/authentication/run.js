angular.module('authentication').run(function ($state, oauth2401Redirect) {
    oauth2401Redirect.url($state.get('index.login').url);
});
