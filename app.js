//api-> tusgai beldsen data-g holboh
//fetch(link/url)->api holboh func
// .then()->promise
//status=>200 approved
// 500,300,404
// .json()=> zambaraagu datag boginoshoh
// []->massive/array
fetch('https://fakestoreapi.com/products').then(
	response => response.json()
).then(
	data=> {
		console.log(data[data.length-1].rating.count);
		console.log(data[0]);
	}
);

fetch('https://fakestoreapi.com/users').then(
	response=> response.json()
).then(
	name=>{
		console.log(name[0].name.firstname);
	}
);

let search=document.getElementsByTagName('input')[0];
let name=document.querySelector('.name');
let desc=document.querySelector('.desc');
let wind=document.querySelector('.wind');
let temp=document.querySelector('.temp');
let btn=document.getElementsByTagName('button')[0];
btn.addEventListener('click',()=>{
	let city=search.value;
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
	response=>response.json()
	).then(
		data=>{
			name.innerText=data.name;
			temp.innerText=data.main.temp;
			wind.innerText=data.wind.speed;
			desc.innerText=data.weather[0].description;	
			if(data.weather[0].main=="Rain"){
				document.getElementsByTagName('img')[0].src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png";
			}else if(data.weather[0].main=="Clouds"){
				document.getElementsByTagName('img')[0].src="https://cdn-icons-png.flaticon.com/512/6122/6122561.png";
			}else if(data.weather[0].main=="Sunny"){
				document.getElementsByTagName('img')[0].src="https://cdn-icons-png.flaticon.com/512/3222/3222691.png";
			}else if(data.weather[0].main=="Snow"){
				document.getElementsByTagName('img')[0].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2UKEKfv331vAgR4JXZt1nwZakGdLS80PLbw&s";
			}else if(data.weather[0].main=="Clear"){
				document.getElementsByTagName('img')[0].src="https://cdn-icons-png.flaticon.com/256/3032/3032894.png";
			}
		}
	);
});
