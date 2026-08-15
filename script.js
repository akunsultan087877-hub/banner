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
