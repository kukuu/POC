$(document).ready(function () {

    sonymv.presenter.sonymvPresenterStep1 = {

        triggerUpdate: function (b) {

            sonymv.modules.fieldsModule.loadTriggerUpdate(b);

            $.ajax('http://localhost:3000/triggerUpdate', {
                method: 'POST',
                contentType: 'application/json',
                dataType: "json",
                data: JSON.stringify(sonymv.model.data)
            }).then(function () {

                // get mock response
                var data = getMockData();
                // update the fields
                sonymv.modules.fieldsModule.fieldUpdate(data);
            });
        },

        validate: function () {

            $.ajax('localhost:3000/validate', {
                method: 'GET',
                contentType: 'application/json',
                dataType: "json",
                data: JSON.stringify(sonymv.model.data)
            }).then(function (data) {
                $(data).each(function (index, value) {

                    // show any validation messages

                });

            });
        }
    };

    var visibleFranchise = true;

    var getMockData = function() {

        visibleFranchise = !visibleFranchise;

        return [
            {
                "fieldCode": "conceptNameJP",
                "visible": true,
                "required": true,
                "type": "checkbox"
            },
            {
                "fieldCode": "franchise",
                "visible": visibleFranchise,
                "required": false,
                "type": "radio"
            },
            {
                "fieldCode": "dzGDDJP",
                "visible": false,
                "required": false,
                "type": "multiselect"
            },
            {
                "fieldCode": "dzGDDEN",
                "visible": false,
                "required": false,
                "type": "text"
            }
        ];
    }

});