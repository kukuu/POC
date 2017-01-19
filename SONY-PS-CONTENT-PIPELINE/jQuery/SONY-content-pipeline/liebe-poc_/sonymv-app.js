// this is the app to be used across pages

$(document).ready(function(){

    // the instance of the app
    sonymv = {};

    // set up common objects to be used by the page
    sonymv.model = {};
    sonymv.view = {};
    sonymv.presenter = {};
    sonymv.modules = {};

});



//
// mv.model.fields = {
//
//     data : {},
//
//     setter: function(key, value){
//         //Used to set a certain model and its property
//         mv.model.fields.data[key] = value;
//
//     },
//
//     getter: function(model, key){
//         //Used to retreive a certain model and its property
//         return mv.model.data[model][key];
//
//     }
//
// }