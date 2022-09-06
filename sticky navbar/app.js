const nav=document.querySelector('.navbar');
const bottomCtn=document.querySelector('#bottom-ctn');

window.addEventListener('scroll', ()=>{
	if(window.scrollY > bottomCtn.offsetTop - nav.offsetHeight - 50){
		nav.classList.add('active');
		console.log('ok'+nav);
	}else{
		nav.classList.remove('active');
	}
	console.log(nav);
})