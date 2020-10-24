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


            $("#seven-days").empty();

            var weathResults = response.list;
            console.log(weathResults);

            // for (var i = 0; i < 7; i++) {
                var dayoneDiv = $("<div>")
                
                var pTemp = $("<p>").text("Temp: " + weathResults[0].main.temp);
                var pWeath = $("<p>").text("Weather: " + weathResults[0].weather[0].icon)
                
                dayoneDiv.append(pTemp, pWeath)
                $("#seven-days").append(dayoneDiv)

            // var dayoneDiv = $("<div>")
            // var pTemp = $("<p>").text("Temp: " + results[0].main.temp);
            // var pWeath = $("<p>").text("Weather: " + results[i].weather[0].icon)
            // dayoneDiv.append(date, pTemp, pWeath, pHumid)





            // }
        })

    });








});