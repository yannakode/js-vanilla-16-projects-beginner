let hours=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');
let ampmElement=document.getElementById('ampm');

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

clock();
console.log(hours.innerText)