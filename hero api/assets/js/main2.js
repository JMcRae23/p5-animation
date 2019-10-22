window.addEventListener('DOMContentLoaded', function () {

// loadData();

attachEvent();

});



function attachEvent(){

    $("#searchButton").off("click").on("click", function(){
        loadData($("#id").val());
    });
    $("#id").keypress(function(e){
        if(e.keyCode ==13){
            loadData($("#id").val());
        }
    });

}

function loadData(){

    let id= $("#id").val();

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

if(name != ''){
    $.ajax({

        url: "https://superheroapi.com/api/&appid=10218071624934164/" + id,
        type: "GET",
        dataType: "json",
        success: function(data){ 

            $(".image").empty();
            $(".id").empty();

            let image= "https://superheroapi.com/api/&appid=10218071624934164/" + id + "/image";

            $(".image").attr("src", image);
        }

    });
} else{
    $("#error").html("What??");
}
}