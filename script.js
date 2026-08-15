const slides=[...document.querySelectorAll(".slide")];
const dots=[...document.querySelectorAll(".progress i")];
let current=0, timer;
function show(index){
  current=(index+slides.length)%slides.length;
  const slide=slides[current];
  slides.forEach((item,i)=>item.classList.toggle("active",i===current));
  dots.forEach((dot,i)=>dot.classList.toggle("active",i===current));
  document.documentElement.style.setProperty("--bg",slide.dataset.color);
  document.documentElement.style.setProperty("--soft",slide.dataset.soft);
  clearInterval(timer); timer=setInterval(()=>show(current+1),5500);
}
document.querySelector("#next").addEventListener("click",()=>show(current+1));
document.querySelector("#prev").addEventListener("click",()=>show(current-1));
dots.forEach((dot,i)=>dot.addEventListener("click",()=>show(i)));
let startX=0;
document.querySelector(".product-window").addEventListener("pointerdown",e=>startX=e.clientX);
document.querySelector(".product-window").addEventListener("pointerup",e=>{if(Math.abs(e.clientX-startX)>40)show(e.clientX<startX?current+1:current-1)});
show(0);