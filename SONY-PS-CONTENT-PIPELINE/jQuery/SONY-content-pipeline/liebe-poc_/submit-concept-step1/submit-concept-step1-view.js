//var submitConceptStep1 = (function($, fieldsModule) {
'use strict';


$(document).ready(function () {

    $('body').on('click', function (e) {
        sonymv.presenter.sonymvPresenterStep1.triggerUpdate(e.target);
    });

});


//})(jQuery, fieldsModule);

