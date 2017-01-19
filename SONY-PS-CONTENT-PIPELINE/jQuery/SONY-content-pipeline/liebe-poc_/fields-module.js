
$(document).ready(function(){

    sonymv.modules.triggerUpdate = (function fieldsModule($) {

        var myModule = {};

        myModule.loadTriggerUpdate = function (a) {

            alert();

            //If our input has an attribute for trigger update then
            if ($(a).attr('data-trigger-update')) {

                //update our model of the change for all fields with triggerUpdate
                $('[data-trigger-update]').each(function () {

                    //Depeding on what type of input it is
                    switch ($(a).attr('type')) {
                        case 'checkbox':

                            //Set the model so that is showing the ID of the checkbox and that it is checked
                            mv.model.fields.setter($(a).attr('id'), $(a).prop('checked'));

                            break;
                        case 'radio':

                            //Or set the model so that it is showing the Name of the radiobutton set and the radiobutton that has been selected
                            mv.model.fields.setter($(a).attr('name'), $("input[name='" + $(a).attr('name') + "']:checked").attr('id'));

                            break;
                        case 'text':

                            //Or to set to Text field
                            mv.model.fields.setter($(a).attr('name'), $("#" + $(a).attr('name')).val());
                        default:

                    }

                });

                //The method that makes the AJAX call
                mv.presenter.fields.ajaxCall();
            }

        };

        myModule.hideField = function (field) {
            $(field).parent('.form-group').addClass('hide');
        };

        myModule.showField = function (field) {
            $(field).parent('.form-group').removeClass('hide');
        };

        myModule.hideOrShowField = function(value) {
            if(value.visible===false){
                mv.view.fields.hideField($('#'+value.fieldCode));
            }else if(value.visible===true){
                mv.view.fields.showField($('#'+value.fieldCode));
            }
        };

        myModule.requiredNessForField = function(value) {
            //Loops over the response and sets the field's required status
            if(value.required===true){
                mv.view.fields.makeRequired($('#'+value.fieldCode));
            }else if(value.required===false){
                mv.view.fields.makeNoNRequired($('#'+value.fieldCode));
            }
        };


        myModule.makeRequired = function (field) {

            field.parent('.form-group').find('.required').removeClass('hide');
            field.prop('required', true);
        };

        myModule.makeNonRequired = function (field) {

            field.parent('.form-group').find('.required').addClass('hide');
            field.prop('required', false);
        };

        return myModule;

    })(jQuery);

});
