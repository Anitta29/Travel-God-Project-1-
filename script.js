$(document).ready(function () {

    var APIkey = "11aae01829609ac12c0335ac0cc4505c";

    $("button").on("click", function () {

        var userInput = $("#search-box").val();

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + APIkey
        // "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}



        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var weathResults = response;
            console.log(weathResults);

            var lat = response.coord.lat;
            var lon = response.coord.lon;
            var temp = response.main.temp;
            var weather = response.weather[0].icon;

            console.log(lat, lon);

            var curDiv = $("<div>");
            var pTemp = $("<p>").text("Temperature: " + temp);
            var pWeath = $("<p>").text("Weather: " + weather);
            curDiv.append(pTemp, pWeath)

            $("#seven-days").append(curDiv)

            sevenDay(lat, lon)

        })
    });
    function sevenDay(lat, lon) {

        var userInput = $("#search-box").val();

        var sevDURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={current}" + "&appid=" + APIkey + "&units=imperial"

        console.log(lat, lon)


        $.ajax({
            url: sevDURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(response.daily)
            // var sevResults = response.list;
            // console.log(sevResults);


            var daily = response.daily
            

                for (var i = 0; i < daily.length; i++) {
                    var unixTime = daily[i].dt
                    var date = moment.unix(unixTime).format("MM, DD, YYYY")
                    console.log(date);


                    

                }
            


        })


    };










});