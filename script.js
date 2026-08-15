const games=[
["Cyber Raid","ACTION","4.9","Rp 299.000","images/cyber.svg","-20%"],
["Galaxy Run","RACING","4.8","Rp 249.000","images/galaxy.svg",""],
["Shadow Ops","ACTION","4.9","Rp 399.000","images/shadow.svg","-15%"],
["Neon Rush","RACING","4.7","Rp 199.000","images/racing.svg",""],
["Arcane Quest","RPG","4.8","Rp 349.000","images/fantasy.svg","-25%"],
["Dark Night","HORROR","4.6","Rp 229.000","images/horror.svg",""],
["Star Arena","SPORTS","4.7","Rp 279.000","images/sports.svg",""],
["Pixel Puzzle","PUZZLE","4.5","Rp 99.000","images/puzzle.svg",""],
["Sky Legends","ADVENTURE","4.8","Rp 319.000","images/adventure.svg","-20%"],
["City Life","SIM","4.6","Rp 179.000","images/sim.svg",""],
["Battle Core","ACTION","4.9","Rp 429.000","images/battle.svg","-30%"],
["Turbo Kart","RACING","4.5","Rp 129.000","images/racing.svg",""]
];
const grid=document.getElementById("gameGrid"), search=document.getElementById("search");
function render(){
 const q=(search.value||"").toLowerCase();
 grid.innerHTML=games.filter(g=>(g[0]+" "+g[1]).toLowerCase().includes(q)).map(g=>`
 <article class="game-card">
  <div class="game-cover"><img src="${g[4]}" alt="${g[0]}">${g[5]?`<b class="sale">${g[5]}</b>`:""}</div>
  <div class="game-info"><small>${g[1]}</small><h3>${g[0]}</h3><div class="meta"><span>★★★★★</span><span>${g[2]}</span></div><div class="price">${g[3]}</div><button class="details">VIEW GAME →</button></div>
 </article>`).join("");
}
search.addEventListener("input",render);render();
document.querySelectorAll(".chips button").forEach(b=>b.onclick=()=>{document.querySelector(".chips .active")?.classList.remove("active");b.classList.add("active");});

// Premium GIF slider — 3 horizontal banner animations
(function(){
  const gifs = document.querySelectorAll(".hero-gif");
  const dots = document.querySelectorAll(".gif-dots i");
  if(!gifs.length) return;
  let current = 0;
  function show(index){
    gifs.forEach((g,i)=>g.classList.toggle("active",i===index));
    dots.forEach((d,i)=>d.classList.toggle("selected",i===index));
  }
  show(0);
  setInterval(()=>{
    current=(current+1)%gifs.length;
    show(current);
  },5000);
  dots.forEach((dot,i)=>dot.addEventListener("click",()=>{current=i;show(i)}));
})();

/* Extra moving neon particles */
(function(){
  const layer=document.querySelector(".stars");
  if(!layer) return;
  for(let i=0;i<18;i++){
    const p=document.createElement("i");
    p.style.position="absolute";
    p.style.width=(2+Math.random()*4)+"px";
    p.style.height=p.style.width;
    p.style.left=(Math.random()*100)+"%";
    p.style.top=(Math.random()*100)+"%";
    p.style.borderRadius="50%";
    p.style.background=["#27d9ff","#ff42d0","#9b4dff","#63fff1","#ffe66d"][i%5];
    p.style.boxShadow=`0 0 8px ${p.style.background},0 0 18px ${p.style.background}`;
    p.style.opacity=.25+Math.random()*.7;
    p.style.animation=`particleFloat ${4+Math.random()*7}s ease-in-out ${Math.random()*3}s infinite alternate`;
    layer.appendChild(p);
  }
  const st=document.createElement("style");
  st.textContent=`@keyframes particleFloat{
    from{transform:translate(0,0) scale(.7);opacity:.25}
    to{transform:translate(${Math.random()*70-35}px,${Math.random()*90-45}px) scale(1.6);opacity:1}
  }`;
  document.head.appendChild(st);
})();
