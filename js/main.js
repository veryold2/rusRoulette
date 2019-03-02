
let spin = document.querySelector('.spin');
let fire = document.querySelector('.fire');
let gun = document.querySelector('.revolver');
let you = document.querySelector('.you i');
let com = document.querySelector('.com i');
let msg = document.querySelector('.msg');
let again = document.querySelector('.again button');


function compareRandom(a, b) {
  return Math.random() - 0.5;
}

let arr = [1,2,3,4,5,6];

window.onload = mix;

function mix() {
	arr.sort(compareRandom);
}

spin.addEventListener('click',()=>{
	 let audio = new Audio();
	 audio.src = 'audio/spin.mp3';
	 audio.play();
	 mix();

});

let i = 0;
fire.addEventListener('click',()=>{
    
    if (arr[i] == 5) {
	    let boom = new Audio();
	   	boom.src = 'audio/fire.mp3'
	   	boom.play();

	   	if (you.hasAttribute('data-trig')) {
	   		you.classList.add('blood');
	   	}
	   	if (com.hasAttribute('data-trig')) {
	   		com.classList.add('blood');
	   	}
      
      msg.style.display = 'block';
      again.style.display = 'block';
      spin.setAttribute('disabled','disabled');
      fire.setAttribute('disabled','disabled');
      


      return false;
     
     } else {	

     	  let clack = new Audio();
        clack.src = 'audio/click.mp3';
        clack.play();
        
        window.setTimeout(()=>{

        	gun.classList.toggle('turn');
        	if (you.hasAttribute('data-trig')) {
        		you.removeAttribute('data-trig');
        		com.setAttribute('data-trig',1);
        	} else {
        		com.removeAttribute('data-trig');
        		you.setAttribute('data-trig',1);
        	}


        },1500);
    	  
    	 
    }
    
    if (i == 5) {
    	i = 0;
    } else {
    	i++;
    }

});

again.addEventListener('click',function(){
	msg.style.display = 'none';
  you.classList.remove('blood');
  com.classList.remove('blood');
  spin.removeAttribute('disabled');
  fire.removeAttribute('disabled');
  again.style.display = 'none';
  mix();

});