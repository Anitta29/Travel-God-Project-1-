$(document).ready(function () {

    var APIkey = "11aae01829609ac12c0335ac0cc4505c";

    $(".search").on("click", function () {

        var userInput = $("#search-box").val();

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + APIkey + "&units=imperial"


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
            var pTemp = $("<p>").text("Temperature: " + temp + "F");
            // var pWeath = $("<p>").text("Weather: " + weather);
            var weathIcon = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
            curDiv.append(pTemp, weathIcon)

            $("#current").append(curDiv)

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


            var daily = response.daily


            for (var i = 0; i < daily.length; i++) {
                var unixTime = daily[i].dt
                var date = moment.unix(unixTime).format("MM, DD, YYYY")
                console.log(date);

            }
            // moment(daily[0].dt_txt).format('MMMM Do YYYY')
                $("#seven-days").empty();

                for (var i = 0; i < daily.length; i++) {

                    var dayoneDiv = $("<div>")
                    

                    // var date = $("<p>").text(moment(daily[0].dt_txt).format('MMMM Do YYYY'));
                    var pTemp = $("<p>").text(response.daily[i].temp.day + "F");
                    var pWeath = $("<img>").attr("src", "http://openweathermap.org/img/w/" + daily[i].weather[0].icon + ".png")
                    dayoneDiv.append(pTemp, pWeath)
                    $("#seven-days").prepend(dayoneDiv)

                    console.log(daily[i].temp.day)

                }
            


        })


    };



});