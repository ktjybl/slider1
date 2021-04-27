const dotts=()=>{
const controllToggles=document.querySelectorAll('.controll-toggle');
const slideItemElems=document.querySelectorAll('.slide-item');
const hide=()=>{
for( let i=0; i<controllToggles.length; i++){
console.log(controllToggles);
controllToggles[i].classlList.remove('active');
   };
}
for(let i=0; i<controllToggles.length; i++){
      controllToggles[i].addEventListener('click', ()=>{
      hide();
      controllToggles[i].classList.add('active'); 
      slideItemElems[i].classList.add('active');
       });
   };
};
dotts();