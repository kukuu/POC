$(document).ready(function () {

    sonymv.modules.fieldsModule = (function ($) {
            'use strict';

            var myModule = {};

            myModule.loadTriggerUpdate = function (a) {

                //If our input has an attribute for trigger update then
                if ($(a).attr('data-trigger-update')) {

                    //update our model of the change for all fields with triggerUpdate
                    $('[data-trigger-update]').each(function (b, c) {

                        //console.log(c);
                        //console.log($('[data-trigger-update]')[b]);

                        //Depeding on what type of input it is
                        switch ($(c).attr('type')) {
                            case 'checkbox':

                                //Set the model so that is showing the ID of the checkbox and that it is checked
                                sonymv.model.setter($(c).attr('id'), $(c).prop('checked'));

                                break;
                            case 'radio':

                                //Or set the model so that it is showing the Name of the radiobutton set and the radiobutton that has been selected
                                sonymv.model.setter($(c).attr('name'), $("input[name='" + $(c).attr('name') + "']:checked").attr('id'));

                                break;
                            case 'text':

                                //Or to set to Text field
                                sonymv.model.setter($(c).attr('name'), $("#" + $(c).attr('name')).val());
                            default:

                        }

                    });

                }

            };

            myModule.hideField = function (field) {
                $(field).parent('.form-group').addClass('hide');
            };

            myModule.showField = function (field) {
                $(field).parent('.form-group').removeClass('hide');
            };

            myModule.hideOrShowField = function (value) {
                if (value.visible === false) {
                    mv.view.fields.hideField($('#' + value.fieldCode));
                } else if (value.visible === true) {
                    mv.view.fields.showField($('#' + value.fieldCode));
                }
            };

            myModule.requiredNessForField = function (value) {
                //Loops over the response and sets the field's required status
                if (value.required === true) {
                    mv.view.fields.makeRequired($('#' + value.fieldCode));
                } else if (value.required === false) {
                    mv.view.fields.makeNoNRequired($('#' + value.fieldCode));
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

            myModule.fieldUpdate = function (data) {
                //This handles the response from AJAX
                $(data).each(function (index, value) {

                    //Loops over the response and sets the field's visibility
                    if (value.visible === false) {
                        myModule.hideField($('#' + value.fieldCode));
                    } else if (value.visible === true) {
                        myModule.showField($('#' + value.fieldCode));
                    }

                    //Loops over the response and sets the field's required status
                    if (value.required === true) {
                        myModule.makeRequired($('#' + value.fieldCode));
                    } else if (value.required === false) {
                        myModule.makeNonRequired($('#' + value.fieldCode));
                    }

                });
            };


            return myModule;

        })(jQuery);
});