let num1=Math.ceil(Math.random()*10);
let num2=Math.ceil(Math.random()*10);

const btn=document.querySelector('.btn');
let scoreEl=document.getElementById('score');
let titleQA=document.getElementById('question');
let input=document.getElementById('input');


let score=JSON.parse(localStorage.getItem('score'));

if(!score){
	score=0;
} 

scoreEl.innerText=`Score: ${score}`;
titleQA.innerText=`What is ${num1} multiply by ${num2}?`;


let cal=num1*num2;

btn.addEventListener('click',()=>{
	let userAns=+input.value;
	console.log(userAns,cal)
	if(userAns===cal){
		score++;
		updateLocalStorage();
	}else{
		console.log('oi')
		score--;
		updateLocalStorage();
	}

})

function updateLocalStorage(){
	localStorage.setItem('score', JSON.stringify(score));
}
