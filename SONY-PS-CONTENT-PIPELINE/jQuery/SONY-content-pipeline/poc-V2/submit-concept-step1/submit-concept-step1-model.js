
$(document).ready(function(){

    var fields = {};
    sonymv.model.data = {};

    sonymv.model.setter = function (key, value) {
        //Used to set a certain model and its property
        sonymv.model.data[key] = value;
    };

    sonymv.model.getter = function (key) {
        //Used to retreive a certain model and its property
        return sonymv.model.data[key];
    };

});