let entities = [{
	url:'images/room1.png',
	link: 'Rostov-on-Don, Admiral'
},
{
	url: 'images/room2.png',
	link: 'Sochi Thieves'
},
{
	url: 'images/room3.png',
	link: 'Rostov-on-Don Patriotic'
}
];


let texts = [{
    text01: 'Rostov-on-Don\nLCD admiral',
	text02: '81 m2',
    text03: '3.5 months',
	text04: 'Upon request'
},
{
	text01: 'Sochi\nThieves',
	text02: '105 m2',
	text03: '4 months',
	text04: 'Upon request'
},
{
	text01: 'Rostov-on-Don\nPatriotic',
	text02: '93 m2',
	text03: '3 months',
	text04: 'Upon request'
}
];


function initSlider() {
    if (!entities || !entities.length) return;

    let sliderFoto = document.querySelector('.slider-foto');
    let sliderArrows = document.querySelector('.slider-arrows');
    let sliderDots = document.querySelector('.slider__dots');
    




    let sliderText01 = document.querySelector('.text01');
	let sliderText02 = document.querySelector('.text02');
	let sliderText03 = document.querySelector('.text03');
	let sliderText04 = document.querySelector('.text04');
    
    

    initEntities();
    initArrows();
    initDots();
    initLinks();
    
    // initTexts();
    


    function initEntities() {
    	entities.forEach((entity, index) => {
    		let entityDiv = `<div class="entity n${index} ${index === 0? "active" : ""}" style="background-image:url(${entities[index].url});" data-index="${index}"></div>`;
    		sliderFoto.innerHTML += entityDiv;
    	});
    }

    function  initArrows() {
    	sliderArrows.querySelectorAll('.slider-arrow').forEach(arrow => {
            arrow.addEventListener('click', function() {
            	let curNumber = +sliderFoto.querySelector('.active').dataset.index;
            	let nextNumber;
		        if (arrow.classList.contains("left")) {
		          nextNumber = curNumber === 0? entities.length - 1 : curNumber - 1;
		        } else {
		          nextNumber = curNumber === entities.length - 1? 0 : curNumber + 1;
		        }
		        moveSlider(nextNumber);
            });
    	});
    }

    function initDots() {
    	entities.forEach((entity, index) => {
            let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
		    sliderDots.innerHTML += dot;
		});
		sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
		    dot.addEventListener("click", function() {
		        moveSlider(this.dataset.index);
    	    });
    	});    
    }

    
    function moveSlider(num) {
    	sliderFoto.querySelector(".active").classList.remove("active");
    	sliderFoto.querySelector(".n" + num).classList.add("active");

    	sliderDots.querySelector('.active').classList.remove('active');
		sliderDots.querySelector(".n" + num).classList.add('active');
    }
 
   

    //  function initTexts() {
    //  	texts.forEach((text, index) => {
    //   		let textDiv = `<div class="text n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
    //   		sliderText01.innerHTML += textDiv;
    //  		sliderText02.innerHTML += textDiv;
    // 		sliderText03.innerHTML += textDiv;
    //  		sliderText04.innerHTML += textDiv;

   	//     });
    //  }




  



 




}

document.addEventListener("DOMContentLoaded", initSlider);


