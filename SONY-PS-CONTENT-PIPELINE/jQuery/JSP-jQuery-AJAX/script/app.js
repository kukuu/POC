//Name: Author Alexander Adu-Sarkodie
//Date: October 2016
//What this form does:
//i. Captures form data and sendS to the Server using AJAX request
//ii. Intercepts the request before it is sent and also adds some extra parameters
//iii. Checks if the request to server was successful or not
//iv. Displays the JSON response from the Server
//v. Sets up connection to MySQL from a Tomcat Server
//vi. Create Java Servlets to process the AJAX request and access MySQL database

$(document).ready(function() {

    //Stops the submit request
    $("#myAjaxRequestForm").submit(function(e){
           e.preventDefault();
    });
   
    //checks for the button click event
    $("#myButton").click(function(e){
          
            //get the form data and then serialize that
            dataString = $("#myAjaxRequestForm").serialize();
           
            //get the form data using another method 
            var countryCode = $("input#countryCode").val(); 
            dataString = "countryCode=" + countryCode;
           
            //make the AJAX request, dataType is set to json
            //meaning we are expecting JSON data in response from the server
            $.ajax({
                type: "POST",
                url: "CountryInformation",
                data: dataString,
                dataType: "json",
               
                //if received a response from the server
                success: function( data, textStatus, jqXHR) {
                    //based on  decision tree, if country code is correct we display some information
                     if(data.success){
                         $("#ajaxResponse").html("");
                         $("#ajaxResponse").append("<b>Country Code:</b> " + data.countryInfo.code + "<br/>");
                         $("#ajaxResponse").append("<b>Country Name:</b> " + data.countryInfo.name + "<br/>");
                         $("#ajaxResponse").append("<b>Continent:</b> " + data.countryInfo.continent + "<br/>");
                         $("#ajaxResponse").append("<b>Region:</b> " + data.countryInfo.region + "<br/>");
                         $("#ajaxResponse").append("<b>Life Expectancy:</b> " + data.countryInfo.lifeExpectancy + "<br/>");
                         $("#ajaxResponse").append("<b>GNP:</b> " + data.countryInfo.gnp + "<br/>");
                     } 

                     //**********************************
                     //***************ERROR HANDLING******
                     //***********************//************

                     //Display error message if invalid country code is suggested
                     else {
                         $("#ajaxResponse").html("<div><b>Country code in Invalid!</b></div>");
                     }
                },
               
                //If there was no resonse from the server
                error: function(jqXHR, textStatus, errorThrown){
                     console.log("Something really bad happened " + textStatus);
                      $("#ajaxResponse").html(jqXHR.responseText);
                },
               
                //Capture the request before it was sent to server
                beforeSend: function(jqXHR, settings){
                    //adding some Dummy data to the request
                    settings.data += "&dummyData=whatever";

                    //Manipulate and disable the button until we get the response
                    $('#myButton').attr("disabled", true);
                },
               
                //this is called after the response or error functions are finsihed
                //so that we can take some action
                complete: function(jqXHR, textStatus){
                    //enable the button 
                    $('#myButton').attr("disabled", false);
                }
     
            });        
    });

});