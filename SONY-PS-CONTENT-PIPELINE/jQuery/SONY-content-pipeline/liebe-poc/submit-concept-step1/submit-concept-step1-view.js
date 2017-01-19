
'use strict';

$(document).ready(function () {

    $('input').on('change', function (e) {
        sonymv.presenter.sonymvPresenterStep1.triggerUpdate(e.target);
    });

    $('nextStep').on('click', function(e) {
        sonymv.presenter.sonymvPresenterStep1.validate($('body').data());
    });

});


