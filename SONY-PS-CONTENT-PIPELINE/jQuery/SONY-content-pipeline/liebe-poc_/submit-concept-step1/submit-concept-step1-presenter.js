
$(document).ready(function() {
    sonymv.presenter.sonymvPresenterStep1 = {

        triggerUpdate: function (b) {

            sonymv.modules.triggerUpdate.loadTriggerUpdate(b);
        },

        validate: function() {

            $.ajax('http://10.33.38.184:8080//sonycpocc/v2/sonycp/poc/validate', {
                method: 'POST',
                contentType: 'application/json',
                dataType:"json",
                data: JSON.stringify(mv.model.fields.data)
            }).then(function(data) {
                $(data).each(function(index,value){

                    //Loops over the response and sets the field's visibility

                    sonymv.modules.triggerUpdate.hideOrShowField(value);
                    sonymv.modules.triggerUpdate.requiredNessForField(value);

                });

            });
        }

    };
});