$(document).ready(function () {

    var APIkey = "11aae01829609ac12c0335ac0cc4505c";



    $("button").on("click", function () {


        var userInput = $("#search-box").val();

        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&appid=" + APIkey


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);


            $("$seven-days").empty();

            var weathResults = response.list;

            for (var i = 0; i < 7; i++){

var tempDiv = $("<div>");

var tempP = $("<p>").text("Temperature: " + results[i].main.weather)
tempDiv.append(tempP);
    



            }
        })

    });








});