
angular.module('poc').controller('View1Controller',
    function View1Controller($scope, view1Model, fieldManager, RadioButonObject, CheckboxObject, DropdownObject ) {

        $scope.nameENfield = fieldManager.getFields( [ 'nameEN'] )[0];


        //sample data
        var conceptTypes = [ "GAME", "NONGAME" ];
        var field = fieldManager.getFields( ['conceptType'] )[0];
        $scope.radioObject = angular.extend( field, new RadioButonObject(conceptTypes) );

        //sample data
        var regions = [ {
                          "code" : "SIEE",
                          "name" : "SIEE"
                       }, {
                          "code" : "SIEA",
                          "name" : "SIEA"
                       }, {
                          "code" : "SIEJA",
                          "name" : "SIEJA"
                       } ];
        field = fieldManager.getFields( ['proposal.regions'] )[0];
        $scope.checkboxObject = angular.extend(new CheckboxObject(regions), field );


        field = fieldManager.getFields( ['superGenre'] )[0];
        $scope.dropdownObject = angular.extend(new DropdownObject(regions), field );
    }
);
