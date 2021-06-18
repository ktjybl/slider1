const sliderWrapper=document.querySelector('.slider');
const sliderInner=document.querySelector('.slider-items');
const nextElem=document.querySelector('.btn-nxt');
const prevElem=document.querySelector('.btn-prev');
const slides=document.querySelectorAll('.slide-item');
const dots=document.querySelectorAll('.controll-toggle');

let slideIndex=0;
let width;
let count=0;
let slideToShow=1;
let responsive=[{
  breakpoint:1024,
  slideToShow:3
},
{
 breakpoint:768,
  slideToShow:2
},
{
 breakpoint:576,
  slideToShow:1
}];

const responseInit=()=>{
   const slideToShowDefault=slideToShow;
   const allResponse=responsive.map(item=>item.breakpoint);
   const maxResponse=Math.max(...allResponse);

const checkResponse=()=>{
    const widthWindow=document.documentElement.clientWidth;
    if(widthWindow<maxResponse){
       for( let i=0; i< allResponse.length; i++){ 
         if(widthWindow<allResponse[i]){
         slideToShow=responsive[i].slideToShow; 
         widthSlide=slides.length/slideToShow; 
       }
       }
    }else{ 
         slideToShow=slideToShowDefault; 
         widthSlide=slides.length/slideToShow;
       }
};
checkResponse();
window.addEventListener('resize',checkResponse);
};
responseInit();

const slide=()=>{
for(item of slides){
item.style.height='auto';
item.style.width=width/slideToShow+'px';
};
};

const scroll=()=>{
sliderInner.style.transform='translateX(-'+count*width/slideToShow+'px)';
};

const start=()=>{
  width=sliderWrapper.offsetWidth;
  sliderInner.style.width=width*slides.length/slideToShow+'px';
  
  slide();
  scroll();
};

start();

const nextSlide=()=>{ 
if(count<slides.length/slideToShow-1){
 count++;
}else{ 
  count=0;
}
scroll()
};

const prevSlide=()=>{
count--;   
   if(count<0){
      count=slides.length/slideToShow-1;
    };
 scroll()
};

nextElem.addEventListener('click', nextSlide); 
prevElem.addEventListener('click', prevSlide);

//setInterval(nextSlide, 2500);