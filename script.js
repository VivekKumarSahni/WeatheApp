
// let text_start1=document.getElementsByClassName("text-start1
// document.getElementsByClassName("text-start").removeAttribute("id");

// document.getElementsByTagName("td")[0].removeAttribute("id")
// document.getElementById("a1").remove();
// document.getElementById("a2").remove();
// document.getElementById("a3").remove();
// document.getElementById("a4").remove();
// document.getElementById("a5").remove();
// document.getElementById("a6").remove();
// document.getElementById("a7").remove();
// document.getElementById("a8").remove();
// document.getElementById("a9").remove();
// document.getElementById("a10").remove();

const submit = document.getElementById('submit');



var count =0;
const cityArr=[];

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc622e38abmsh3d614dde2142774p19942ajsn36189a654a22',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather= (city)=>{
count++;
cityName.innerHTML =city;

if(count>=4){
	cityArr[3]=cityArr[2]
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cityArr[3], options)
	.then(response => response.json())
	.then( (response) => {
         
		
		dd.innerHTML = cityArr[3];
		//sunset.innerHTML = response.sunset
		d1.innerHTML=response.cloud_pct;
		d2.innerHTML=response.feels_like;
		d3.innerHTML=response.humidity;
		d4.innerHTML=response.max_temp;
		d5.innerHTML=response.min_temp;
		d6.innerHTML=response.sunrise;
		d7.innerHTML=response.sunset;
		d8.innerHTML=response.temp;
		d9.innerHTML=response.wind_degrees;
		d10.innerHTML=response.wind_speed;
		

	})
	.catch(err => console.error(err));
}

if(count>=3){
	cityArr[2]=cityArr[1]
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cityArr[2], options)
	.then(response => response.json())
	.then( (response) => {
         
		
		cc.innerHTML = cityArr[2];
		//sunset.innerHTML = response.sunset
		c1.innerHTML=response.cloud_pct;
		c2.innerHTML=response.feels_like;
		c3.innerHTML=response.humidity;
		c4.innerHTML=response.max_temp;
		c5.innerHTML=response.min_temp;
		c6.innerHTML=response.sunrise;
		c7.innerHTML=response.sunset;
		c8.innerHTML=response.temp;
		c9.innerHTML=response.wind_degrees;
		c10.innerHTML=response.wind_speed;
		

	})
	.catch(err => console.error(err));
}

if(count>=2){
	cityArr[1]=cityArr[0]
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cityArr[1], options)
	.then(response => response.json())
	.then( (response) => {
         
		
		bb.innerHTML = cityArr[1];
		//sunset.innerHTML = response.sunset
		b1.innerHTML=response.cloud_pct;
		b2.innerHTML=response.feels_like;
		b3.innerHTML=response.humidity;
		b4.innerHTML=response.max_temp;
		b5.innerHTML=response.min_temp;
		b6.innerHTML=response.sunrise;
		b7.innerHTML=response.sunset;
		b8.innerHTML=response.temp;
		b9.innerHTML=response.wind_degrees;
		b10.innerHTML=response.wind_speed;
		

	})
	.catch(err => console.error(err));
}
cityArr[0]=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cityArr[0], options)
	.then(response => response.json())
	.then( (response) => {

		aa.innerHTML = cityArr[0];
		console.log(response)
		console.log(typeof(city))
		cloud_pct.innerHTML = response.cloud_pct;
		temp.innerHTML = response.temp;
		temp2.innerHTML = response.temp;
		feels_like.innerHTML = response.feels_like;
		humidity.innerHTML = response.humidity;
		humidity2.innerHTML = response.humidity;
		min_temp.innerHTML = response.min_temp;
		max_temp.innerHTML = response.max_temp;
		wind_speed.innerHTML = response.wind_speed;
		wind_speed2.innerHTML = response.wind_speed;
		wind_degrees.innerHTML = response.wind_degrees;
		sunrise.innerHTML = response.sunrise;
		//sunset.innerHTML = response.sunset
		a1.innerHTML=response.cloud_pct;
		a2.innerHTML=response.feels_like;
		a3.innerHTML=response.humidity;
		a4.innerHTML=response.max_temp;
		a5.innerHTML=response.min_temp;
		a6.innerHTML=response.sunrise;
		a7.innerHTML=response.sunset;
		a8.innerHTML=response.temp;
		a9.innerHTML=response.wind_degrees;
		a10.innerHTML=response.wind_speed;
		

	})
	.catch(err => console.error(err));

}


submit.addEventListener("click", (e)=>{
	console.log(e)
        e.preventDefault()
	getWeather(city.value)// e.target.value  --> point to be noted my lord that .value rturns the data inputted from the input tag
})
getWeather("Silchar");
