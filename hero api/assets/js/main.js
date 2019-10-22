window.addEventListener('DOMContentLoaded', function () {

// loadData();

attachEvent();

});



function attachEvent(){

    $("#searchButton").off("click").on("click", function(){
        loadData($("#city").val());
    });
    $("#city").keypress(function(e){
        if(e.keyCode ==13){
            loadData($("#city").val());
        }
    });

}

function loadData(){

    let city= $("#city").val();

    // $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" +city +"&appid=67806b2115f39d25e8ef06337e1ad972", 
    // function(data){

    // console.log(data);
    // // console.log(data.name);
    // // $(".weather").append(data.name);

    // let icon= "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    // let temp= data.main.temp;
    // let weather= data.weather[0].description;

    // $(".icon").attr("src", icon);
    // $(".weather").append(Math.floor((temp - 273.15) * 9/5 + 32));
    // $(".temp").append(weather);

    // console.log(temp)

    // });

if(city != ''){
    $.ajax({

        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=67806b2115f39d25e8ef06337e1ad972",
        type: "GET",
        dataType: "json",
        success: function(data){
            console.log(data);

            $(".icon").empty();
            $(".weather").empty();
            $(".temp").empty();

            let icon= "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
            let temp= data.main.temp;
            let weather= data.weather[0].description;

            $(".icon").attr("src", icon);
            $(".weather").append(Math.floor((temp - 273.15) * 9/5 + 32));
            $(".temp").append(weather);
        }

    });
} else{
    $("#error").html("What??");
}
}