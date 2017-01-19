// ajaxCall: function(){
//
//     // POST adds a random id to the object sent
//     $.ajax('http://10.33.38.184:8080//sonycpocc/v2/sonycp/poc/validate', {
//         method: 'POST',
//         contentType: 'application/json',
//         dataType:"json",
//         data: JSON.stringify(mv.model.fields.data)
//     }).then(function(data) {
//         mv.presenter.fields.fieldUpdate(data.formFields);
//     });
//
//     //mocking an AJAX response
//     // mv.presenter.fields.fieldUpdate(mv.presenter.fields.ajaxResponse().formFields);
//
// },
//
// ajaxResponse: function(){
//     //This method is used when we recieve a AJAX response to set the fields to hidden or show etc
//
//     var data =
//
//     {
//         "formFields": [
//             {
//                 "fieldCode": "conceptNameEN",
//                 "visible": true,
//                 "required": false
//             },
//             {
//                 "fieldCode": "conceptNameJP",
//                 "visible": false
//             }
//         ]
//     };
//
//     alert();
//
//     return data;
//
// },
//
// fieldUpdate: function(data){
//     //This handles the response from AJAX
//     $(data).each(function(index,value){
//
//         //Loops over the response and sets the field's visibility
//         if(value.visible===false){
//             mv.view.fields.hideField($('#'+value.fieldCode));
//         }else if(value.visible===true){
//             mv.view.fields.showField($('#'+value.fieldCode));
//         }
//
//         //Loops over the response and sets the field's required status
//         if(value.required===true){
//             mv.view.fields.makeRequired($('#'+value.fieldCode));
//         }else if(value.required===false){
//             mv.view.fields.makeNoNRequired($('#'+value.fieldCode));
//         }
//
//     });
//
// }
