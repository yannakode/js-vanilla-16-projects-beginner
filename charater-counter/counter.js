const textArea=document.getElementById('textArea');
const totalCharacters=document.getElementById('numCharaters');
const remainingEl=document.getElementById('remaining');

textArea.addEventListener('keyup', ()=>{
	counter();
});

function counter(){
	let textAreaLength=textArea.value.length;
	totalCharacters.innerText=textAreaLength;
	remainingEl.innerText=textArea.getAttribute('maxLength') - textAreaLength;
}

