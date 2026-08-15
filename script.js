const slides=[...document.querySelectorAll(".slide")];
const dots=[...document.querySelectorAll(".progress i")];
let current=0,startX=0;
function show(index){
  current=(index+slides.length)%slides.length;
  slides.forEach((item,i)=>item.classList.toggle("active",i===current));
  dots.forEach((dot,i)=>dot.classList.toggle("active",i===current));
  const slide=slides[current];
  document.documentElement.style.setProperty("--bg",slide.dataset.color);
  document.documentElement.style.setProperty("--soft",slide.dataset.soft);
}
document.querySelector("#next").addEventListener("click",()=>show(current+1));
document.querySelector("#prev").addEventListener("click",()=>show(current-1));
dots.forEach((dot,i)=>dot.addEventListener("click",()=>show(i)));
const windowEl=document.querySelector(".product-window");
windowEl.addEventListener("pointerdown",e=>{startX=e.clientX;windowEl.setPointerCapture?.(e.pointerId)});
windowEl.addEventListener("pointerup",e=>{const distance=e.clientX-startX;if(Math.abs(distance)>35)show(distance<0?current+1:current-1)});
show(0);