let hours=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');
let ampmElement=document.getElementById('ampm');

let weekEl=document.querySelector('.week');
let dateEl=document.querySelector('.data');

let city=document.querySelector('.city');
let temp=document.querySelector('.temp');
let umidity=document.querySelector('.umidity');

let smartWeather=document.querySelector('.smart-weather');

function clock(){
	let h= new Date().getHours();
	let m=new Date().getMinutes();
	let s=new Date().getSeconds();
	let ampm='';
	if(h > 12){
		ampm='pm';
	}else{
		ampm='am';
	}

	h=h < 10 ? '0' + h : h;
	m=m < 10 ? '0' + m : m;
	s=s < 10 ? '0' + s : s;

	hours.textContent=h;
	minutes.textContent=m;
	seconds.textContent=s;
	ampmElement.textContent=ampm;
	setTimeout(()=>{
		clock();
	},1000);
}

function getDate(){
	let date= new Date();
	let weekDays=date.getDay();
	let day=date.getDate();
	let month=date.getMonth()+1;
	let year=date.getFullYear();

	day=day < 10 ? '0' + day : day;
	month=month < 10 ? '0' + month : month;
	year=year < 10 ? '0' + year : year;

	let srtWeek= new String(weekDays);

	switch(weekDays){
		case 0:
		weekDays='DOM'
		break;
		case 1:
		weekDays='SEG'
		break;
		case 2:
		weekDays='TER'
		break;
		case 3:
		weekDays='QUAR'
		break;
		case 4:
		weekDays='QUIN'
		break;
		case 5:
		weekDays='SEX'
		break;
		case 6:
		weekDays='SAB'
		break;
	}

	weekEl.textContent=weekDays;
	dateEl.textContent=day + '/' + month + '/' + year;
}

var options={
	weekDay: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric'
}

let teste=new Date();
console.log(teste.toLocaleTimeString('pt-BR'), options);

function getUserLocation(){
	let url ='';
	navigator.geolocation.getCurrentPosition((pos)=>{
		let lat=pos.coords.latitude;
		let long=pos.coords.longitude;
		url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=622296cd4fda08b69c46ccfa980f968d`;
		fetchApi(url);
		smartWeather.classList.remove('hide');
	})
}

function fetchApi(url){
	fetch(url)
	.then((data)=>{
		return data.json();
	}).then((data)=>{
		let tempCelsiues=((5/9) * (data.main.temp-32)).toFixed(1);
		city.textContent=data.name;
		temp.innerHTML=tempCelsiues;
		umidity.innerHTML=data.main.humidity;
	})
	.catch((error)=>{
		city.innerText=`Impossível acessar o OpenWeather. Verifique a sua conexão.`;
		temp.innerHTML='-';
	})
}

function unblockSmart(){
	getDate();
	getUserLocation();
};