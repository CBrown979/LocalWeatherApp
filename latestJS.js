/*global $ */  

var weatherSummary = {
    city: "",
    tempF: "",
    tempC: "",
    descript: "",
    getQuote: function(){
        $.ajax({
            method: "GET",
            url: "https://api.wunderground.com/api/08a41fa5c2c65a78/conditions/geolookup/q/autoip.json",
            format: "json", 
            success: function(data){
                console.log(data);
                this.city=data.location.city;
                this.tempF=data.current_observation.temp_f;
                this.tempC=data.current_observation.temp_c;
                this.descript=data.current_observation.weather;
                // this.displaySummary();
            }
        });
    },
    displaySummary: function(){
        console.log("start");
        document.getElementById("insertCity").innerHTML=weatherSummary.city;
        document.getElementById("insertTempF").innerHTML=weatherSummary.tempF;
        document.getElementById("insertTempC").innerHTML=weatherSummary.tempC;
        document.getElementById("insertDescript").innerHTML=weatherSummary.descript;
        console.log("stop");
    }
};

document.getElementById("getUrs").onclick=function(){ 
    weatherSummary.displaySummary();
};
