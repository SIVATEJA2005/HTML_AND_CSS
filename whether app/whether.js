const apiKey="15a42d53936079ed5bf01d77b7cd2746"
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox=document.querySelector(".city_name")
const searchBtn=document.querySelector(".search button")

const whetherIcon=document.querySelector(".icon")



async function checkWhether(city){

    const response=await fetch(apiURL +city+`&appid=${apiKey}`)

    if(response.status==404){
        document.querySelector(".error").style.display="block";
    }
    // console.log(response)
    var data=await response.json();

    console.log(data)


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+"°c";
    document.querySelector(".humid_value").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind_speed").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main=="Clouds"){

        whetherIcon.src="cloudy_whether.jpeg"


    }
    else if(data.weather[0].main== "Clear"){
        whetherIcon.src="clear_whether.png"
    }
    else if(data.weather[0].main=="Rain"){
        whetherIcon.src="rain_image.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        whetherIcon.src="drizzle_whether.jpeg"
    }
    else if(data.weather[0].main=="Haze"){
        whetherIcon.src="mist_whether.jpeg"
    }


    document.querySelector(".whether").style.display="block";
    document.querySelector(".extra_details").style.display="flex"





}

searchBtn.addEventListener("click",()=>{

    checkWhether(searchBox.value)



})




