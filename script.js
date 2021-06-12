const sliderWrapper=document.querySelector('.slider');
const sliderInner=document.querySelector('.slider-items');
const nextElem=document.querySelector('.btn-nxt');
const prevElem=document.querySelector('.btn-prev');
const slides=document.querySelectorAll('.slide-item');

let width;
let count=0;
let slideToShow=1;



const slide=()=>{
for(item of slides){
item.style.height='auto';
item.style.width=width+'px';
};
};

const scroll=()=>{
   sliderInner.style.transform='translate(-'+count*width / slideToShow+'px)';
};



const start=()=>{
  width=sliderWrapper.offsetWidth;
  sliderInner.style.width=width*slides.length / slideToShow +'px';
  slide();
  
  scroll();
};
const setEvent=()=>{
window.addEventListener('resize', start);
};
const destroyEvent=()=>{
window.removeEventListener('resize', start);
};
setEvent();
destroyEvent();
start();

nextElem.addEventListener('click', ()=>{ 
count++;
if(count>=slides.length){
  count=0;
}
scroll()});

prevElem.addEventListener('click', ()=>{ 
count--;
if(count<0){
  count=slides.length-1;
}
scroll()
});
