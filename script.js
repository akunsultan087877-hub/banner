const games=[
{name:"Elden Ring",genre:"RPG",rating:"4.8",price:"Rp 599.000",old:"Rp 749.000",icon:"✦",color:"#5b3c18",sale:"-20%",desc:"Petualangan fantasi epik dengan dunia luas, pertarungan intens, dan eksplorasi tanpa batas."},
{name:"Red Dead Redemption 2",genre:"ACTION",rating:"4.7",price:"Rp 499.000",old:"",icon:"♞",color:"#7a2d18",sale:"",desc:"Jelajahi dunia koboi yang luas dengan cerita sinematik dan karakter yang memorable."},
{name:"Forza Horizon 5",genre:"RACING",rating:"4.6",price:"Rp 449.000",old:"Rp 549.000",icon:"♢",color:"#205b72",sale:"-18%",desc:"Balapan open-world dengan mobil impian dan pemandangan spektakuler."},
{name:"Resident Evil 4",genre:"ACTION",rating:"4.9",price:"Rp 399.000",old:"",icon:"☠",color:"#3b4651",sale:"",desc:"Survival horror penuh ketegangan dengan aksi cepat dan atmosfer gelap."},
{name:"God of War Ragnarök",genre:"ADVENTURE",rating:"4.9",price:"Rp 599.000",old:"Rp 749.000",icon:"⚔",color:"#315b72",sale:"-20%",desc:"Ikuti perjalanan Kratos dan Atreus menghadapi takdir di dunia Norse."},
{name:"Horizon Forbidden West",genre:"ADVENTURE",rating:"4.7",price:"Rp 299.000",old:"",icon:"◈",color:"#7b5a35",sale:"",desc:"Eksplorasi dunia futuristik yang indah dan hadapi mesin-mesin raksasa."},
{name:"Sekiro: Shadows Die Twice",genre:"ACTION",rating:"4.8",price:"Rp 499.000",old:"",icon:"忍",color:"#50332c",sale:"",desc:"Pertarungan samurai presisi tinggi dalam perjalanan penuh tantangan."},
{name:"Turbo Kart",genre:"RACING",rating:"4.5",price:"Rp 129.000",old:"",icon:"🏎",color:"#673b72",sale:"",desc:"Balapan arcade seru dengan trek unik dan power-up."}
];

const grid=document.getElementById("gameGrid"),search=document.getElementById("searchInput"),panel=document.getElementById("searchPanel");
let category="ALL",cart=0,current=null;

function render(){
 const q=(search?.value||"").toLowerCase().trim();
 const list=games.filter(g=>(category==="ALL"||g.genre===category)&&`${g.name} ${g.genre}`.toLowerCase().includes(q));
 grid.innerHTML=list.map((g,i)=>`<article class="game-card"><div class="game-cover" style="--c:${g.color}">${g.sale?`<b class="sale">${g.sale}</b>`:""}<span>${g.icon}</span></div><div class="game-info"><span class="genre">${g.genre}</span><h3>${g.name}</h3><div class="game-meta"><span>★★★★★</span><span>${g.rating}</span></div><div class="game-price">${g.price}${g.old?`<del>${g.old}</del>`:""}</div><button class="details" onclick="openGame(${games.indexOf(g)})">LIHAT DETAIL</button></div></article>`).join("");
 document.getElementById("emptyState").hidden=list.length>0;
}
function openGame(i){
 current=games[i];
 document.getElementById("modalArt").textContent=current.icon;
 document.getElementById("modalArt").style.background=`radial-gradient(circle,${current.color},#121016 65%)`;
 document.getElementById("modalCategory").textContent=current.genre;
 document.getElementById("modalTitle").textContent=current.name;
 document.getElementById("modalDescription").textContent=current.desc;
 document.getElementById("modalRating").textContent=current.rating;
 document.getElementById("modalPrice").textContent=current.price;
 document.getElementById("modal").classList.add("show");
}
function closeModal(){document.getElementById("modal").classList.remove("show")}
function toast(t){const x=document.getElementById("toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2200)}
document.getElementById("searchToggle").onclick=()=>panel.classList.toggle("show");
search.oninput=render;
document.getElementById("close").onclick=closeModal;
document.getElementById("modal").onclick=e=>{if(e.target.id==="modal")closeModal()};
document.getElementById("addCart").onclick=()=>{cart++;document.getElementById("cartCount").textContent=cart;toast(current.name+" masuk ke keranjang");closeModal()};
document.getElementById("cartBtn").onclick=()=>toast(cart?`Keranjang: ${cart} item`:"Keranjang masih kosong");
document.getElementById("allBtn").onclick=()=>{category="ALL";document.querySelectorAll(".category-grid button").forEach(b=>b.classList.remove("selected"));render();document.getElementById("games").scrollIntoView()};
document.querySelectorAll(".category-grid button").forEach(b=>b.onclick=()=>{category=b.dataset.category;render();document.getElementById("games").scrollIntoView({behavior:"smooth"})});
render();
