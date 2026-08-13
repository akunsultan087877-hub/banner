<!-- Google tag (gtag.js) - AW-18355823633 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-18355823633"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-18355823633');
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied'
  });
</script>

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
-webkit-tap-highlight-color:transparent;
}

body{
display:flex;
justify-content:center;
align-items:center;
min-height:100vh;
min-height:100dvh;
overflow:hidden;
background:#0d0518;
padding:15px;
position:relative;
}

/* ===== SPLASH SCREEN (TANPA FOTO) ===== */
.splash{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:#0d0518;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
z-index:100;
transition: opacity 0.8s ease, visibility 0.8s ease;
}
.splash.hide{
opacity:0;
visibility:hidden;
pointer-events:none;
}
.splash-text{
color:#ff0066;
font-size:32px;
font-weight:800;
letter-spacing:2px;
background:linear-gradient(90deg,#ff0066,#ff3399,#ff66cc);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
background-clip:text;
animation: splashText 1.5s ease-in-out infinite alternate;
}
@keyframes splashText{
0%{ opacity:0.75; transform:scale(1); filter:drop-shadow(0 0 10px rgba(255,0,102,0.4)); }
100%{ opacity:1; transform:scale(1.05); filter:drop-shadow(0 0 25px rgba(255,51,153,0.8)); }
}
.splash-sub{
margin-top:12px;
color:rgba(255,180,200,0.75);
font-size:14px;
letter-spacing:3px;
text-transform:uppercase;
animation: splashSub 1.5s ease-in-out infinite alternate;
}
@keyframes splashSub{
0%{ opacity:0.5; }
100%{ opacity:1; }
}

/* ===== LATAR MERAH TUA ===== */
.bg-animation{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
z-index:-3;
background:
radial-gradient(circle at 20% 30%, rgba(255,20,40,0.4) 0%, transparent 45%),
radial-gradient(circle at 80% 20%, rgba(255,60,80,0.3) 0%, transparent 40%),
radial-gradient(circle at 70% 80%, rgba(200,20,40,0.35) 0%, transparent 45%),
radial-gradient(circle at 30% 70%, rgba(255,50,70,0.25) 0%, transparent 40%),
#0d0518;
animation: bgPulse 8s ease-in-out infinite alternate;
}
@keyframes bgPulse{
0%{ filter:hue-rotate(0deg) brightness(1); }
100%{ filter:hue-rotate(8deg) brightness(1.12); }
}

/* Grid merah */
.web{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
z-index:-2;
background-image:
linear-gradient(rgba(255,30,60,0.07) 1px, transparent 1px),
linear-gradient(90deg, rgba(255,30,60,0.07) 1px, transparent 1px);
background-size:55px 55px;
animation: webMove 20s linear infinite;
opacity:0.7;
}
@keyframes webMove{
0%{ background-position:0 0; }
100%{ background-position:55px 55px; }
}

/* Cahaya merah bergerak */
.glow{
position:fixed;
width:300px;
height:300px;
border-radius:50%;
filter:blur(80px);
z-index:-1;
opacity:0.5;
animation: floatGlow 12s ease-in-out infinite;
}
.glow.red{
background:#ff0066;
top:8%;
left:5%;
}
.glow.blue{
background:#ff3399;
bottom:8%;
right:5%;
animation-delay:4s;
}
@keyframes floatGlow{
0%,100%{ transform:translate(0,0) scale(1); }
50%{ transform:translate(35px,28px) scale(1.2); }
}

/* ===== EFEK PETIR LAYAR ===== */
.lightning{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
pointer-events:none;
z-index:2;
opacity:0;
background:transparent;
}
.lightning.flash{
animation: lightningFlash 0.4s ease-out;
}
@keyframes lightningFlash{
0%{ opacity:0; background:rgba(255,50,100,0); }
8%{ opacity:1; background:rgba(255,150,180,0.45); }
18%{ opacity:0.2; background:rgba(255,80,110,0.12); }
28%{ opacity:0.95; background:rgba(255,220,240,0.5); }
45%{ opacity:0.15; background:rgba(255,70,100,0.08); }
100%{ opacity:0; background:transparent; }
}

/* Garis petir panjang & realistis */
.bolt{
position:fixed;
pointer-events:none;
z-index:3;
opacity:0;
filter:drop-shadow(0 0 6px #ff99bb) drop-shadow(0 0 18px #ff3366) drop-shadow(0 0 35px #cc0066);
}
.bolt.show{
animation: boltAppear 0.45s ease-out forwards;
}
@keyframes boltAppear{
0%{ opacity:0; }
12%{ opacity:1; }
75%{ opacity:0.85; }
100%{ opacity:0; }
}

/* ===== SALJU ===== */
.snowflake{
position:fixed;
top:-20px;
color:#f0e6ff;
font-size:12px;
opacity:0.7;
pointer-events:none;
z-index:0;
user-select:none;
animation: snowfall linear infinite;
text-shadow:0 0 6px rgba(255,150,180,0.8);
}
@keyframes snowfall{
0%{
transform:translateY(-10vh) translateX(0) rotate(0deg);
opacity:0;
}
10%{
opacity:0.75;
}
90%{
opacity:0.5;
}
100%{
transform:translateY(110vh) translateX(var(--drift, 20px)) rotate(360deg);
opacity:0;
}
}
}

.container{
width:100%;
max-width:400px;
padding:10px 5px;
text-align:center;
position:relative;
z-index:5;
}

/* ===== ANIMASI MASUK DARI ARAK ===== */
.enter-item{
opacity:0;
transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.enter-item.from-left{ transform: translateX(-80px) scale(0.9); }
.enter-item.from-right{ transform: translateX(80px) scale(0.9); }
.enter-item.from-top{ transform: translateY(-60px) scale(0.9); }
.enter-item.from-bottom{ transform: translateY(60px) scale(0.9); }
.enter-item.from-scale{ transform: scale(0.5); }
.enter-item.show{
opacity:1;
transform: translate(0,0) scale(1);
}

/* Foto */
.photo{
width:160px;
height:160px;
object-fit:cover;
border-radius:20px;
margin:0 auto 18px;
border:3px solid rgba(255,50,100,0.45);
box-shadow: 0 0 20px rgba(255,30,80,0.5), 0 0 40px rgba(180,20,60,0.3);
display:block;
}

/* ===== JUDUL + PETIR DARI TULISAN ===== */
.welcome{
color:#ff0066;
font-size:24px;
font-weight:bold;
margin-bottom:25px;
text-shadow:0 0 12px rgba(255,0,102,0.75), 0 0 25px rgba(180,20,60,0.45);
letter-spacing:0.5px;
line-height:1.35;
position:relative;
}
.welcome span{
display:block;
font-size:20px;
font-weight:800;
margin-top:6px;
background:linear-gradient(90deg,#ff0066,#ff3399,#ff66cc);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
background-clip:text;
position:relative;
}

/* Petir realistis dari tulisan */
.text-bolt{
position:absolute;
pointer-events:none;
z-index:6;
opacity:0;
filter:drop-shadow(0 0 5px #ff99bb) drop-shadow(0 0 12px #ff3366) drop-shadow(0 0 22px #cc0066);
}
.text-bolt.show{
animation: textBolt 0.5s ease-out forwards;
}
@keyframes textBolt{
0%{ opacity:0; }
15%{ opacity:1; }
70%{ opacity:0.9; }
100%{ opacity:0; }
}

/* Kilat di tulisan */
.welcome.flash-text{
animation: textFlash 0.4s ease-out;
}
@keyframes textFlash{
0%{ filter:brightness(1); text-shadow:0 0 12px rgba(255,0,102,0.75); }
15%{ filter:brightness(1.8); text-shadow:0 0 20px #ff99bb, 0 0 40px #ff3366, 0 0 60px #cc0066; }
30%{ filter:brightness(1.2); }
50%{ filter:brightness(1.6); text-shadow:0 0 25px #ffccdd, 0 0 50px #ff6699; }
100%{ filter:brightness(1); text-shadow:0 0 12px rgba(255,0,102,0.75), 0 0 25px rgba(180,20,60,0.45); }
}

/* Tombol */
.btn{
display:flex;
justify-content:space-between;
align-items:center;
padding:16px 18px;
margin:14px 0;
text-decoration:none;
color:white;
border-radius:16px;
font-size:16px;
font-weight:bold;
background:linear-gradient(135deg,#ff0066,#ff3399);
box-shadow:0 0 14px rgba(255,30,80,0.5), 0 4px 12px rgba(180,20,60,0.35);
transition: all 0.3s ease, opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
position:relative;
overflow:hidden;
user-select:none;
}
.btn:nth-child(2){ background:linear-gradient(135deg,#e61a44,#ff6699); }
.btn:nth-child(3){ background:linear-gradient(135deg,#ff3366,#ff99cc); }
.btn:nth-child(4){ background:linear-gradient(135deg,#cc0066,#ff5588); }
.btn:nth-child(5){ background:linear-gradient(135deg,#aa0055,#ff4488); }

/* TOMBOL MENYALA SAAT PETIR */
.btn.lightning-glow{
animation: btnLightning 0.5s ease-out;
}
@keyframes btnLightning{
0%{
filter:brightness(1);
box-shadow:0 0 14px rgba(255,30,80,0.5), 0 4px 12px rgba(180,20,60,0.35);
}
20%{
filter:brightness(1.7);
box-shadow:0 0 30px #ff99bb, 0 0 50px #ff3366, 0 0 70px #cc0066, 0 4px 20px rgba(255,100,140,0.8);
transform:scale(1.04);
}
40%{
filter:brightness(1.3);
}
60%{
filter:brightness(1.6);
box-shadow:0 0 35px #ffccdd, 0 0 55px #ff6699, 0 0 80px #ff4488;
}
100%{
filter:brightness(1);
box-shadow:0 0 14px rgba(255,30,80,0.5), 0 4px 12px rgba(180,20,60,0.35);
transform:scale(1);
}
}

/* HOVER */
.btn:hover{
transform: scale(1.06);
box-shadow:0 0 22px rgba(255,100,140,0.65), 0 8px 20px rgba(200,40,80,0.45);
filter:brightness(1.12);
}
.btn:hover .arrow{
background:rgba(255,255,255,.35);
transform:scale(1.15);
}
.btn:active{
transform: scale(0.96);
filter:brightness(1.05);
}

/* RIPPLE */
.ripple{
position:absolute;
border-radius:50%;
background:rgba(255,255,255,0.4);
transform:scale(0);
animation:ripple-animation 0.6s linear;
pointer-events:none;
}
@keyframes ripple-animation{
to{
transform:scale(4);
opacity:0;
}
}
.arrow{
width:40px;
height:40px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
background:rgba(255,255,255,.18);
font-size:20px;
flex-shrink:0;
transition:0.3s;
}
.btn:active .arrow{
background:rgba(255,255,255,.3);
transform:scale(1.1);
}

/* Responsive */
@media (max-width:380px){
.photo{ width:140px; height:140px; }
.welcome{ font-size:21px; }
.welcome span{ font-size:18px; }
.splash-text{ font-size:26px; }
.btn{ padding:15px 16px; font-size:15px; }
.arrow{ width:36px; height:36px; font-size:18px; }
}
@media (min-width:420px){
.photo{ width:175px; height:175px; }
.welcome{ font-size:26px; }
.splash-text{ font-size:36px; }
}
</style>

</head>
<body>
<!-- ===== SPLASH / LOGO PENYAMBUTAN (TANPA FOTO) ===== -->
<div class="splash" id="splash">
  <div class="splash-text">selamat datang</div>
  <div class="splash-sub">selamat bermain</div>
</div>

<!-- LATAR MERAH TUA -->
<div class="bg-animation"></div>
<div class="web"></div>
<div class="glow red"></div>
<div class="glow blue"></div>

<!-- Layer petir layar -->
<div class="lightning" id="lightning"></div>

<!-- ===== HALAMAN UTAMA ===== -->
<div class="container" id="mainPage">
  <div class="brand-badge enter-item">✦ PREMIUM STORE</div>
  <div class="hero enter-item">
    <div class="hero-orb"></div>
    <div class="hero-kicker">SELAMAT DATANG</div>
    <h1>bermain <span>Lebih Elegan</span></h1>
    <p>Pilih menu favoritmu dan temukan penawaran terbaik dengan tampilan modern yang nyaman digunakan.</p>
  </div>

  <!-- ===== LINK TAUTAN ===== -->
  <div class="menu-grid">
    <a class="menu-card enter-item" href="https://a1.azkabetgg.com/?ref=gantengkali2" aria-label="Menu utama">
      <div class="card-icon">⌂</div>
      <div class="card-copy">
        <strong>AZKA</strong>
        <small>Jelajahi pilihan terbaru</small>
      </div>
      <div class="card-arrow">→</div>
    </a>
    <a class="menu-card enter-item" href="https://tampanslot1.lat/daftar?ref=gantengkali2" aria-label="Promo">
      <div class="card-icon">✦</div>
      <div class="card-copy">
        <strong>TAMPAN</strong>
        <small>Lihat penawaran pilihan</small>
      </div>
      <div class="card-arrow">→</div>
    </a>
    <a class="menu-card enter-item" href="https://silitoto2.net/register?referral_code=gantengkali2" aria-label="Koleksi">
      <div class="card-icon">◇</div>
      <div class="card-copy">
        <strong>SILIT0T0</strong>
        <small>Produk yang sedang populer</small>
      </div>
      <div class="card-arrow">→</div>
    </a>
    <a class="menu-card enter-item" href="https://tampanslot1.lat/daftar?ref=gantengkali2" aria-label="Hubungi kami">
      <div class="card-icon">✉</div>
      <div class="card-copy">
        <strong>Hubungi Kami</strong>
        <small>Butuh bantuan? Kami siap</small>
      </div>
      <div class="card-arrow">→</div>
    </a>
  </div>

  <div class="trust-row enter-item">
    <span>● Tampilan responsif</span>
    <span>● Cepat & ringan</span>
    <span>● Nyaman di mobile</span>
  </div>
  <div class="footer-note enter-item">© 2026 Premium Store · Semua hak dilindungi</div>
</div>

<script>
// ===== SPLASH 5 DETIK LALU MASUK HALAMAN UTAMA =====
setTimeout(() => {
  document.getElementById('splash').classList.add('hide');
  animateEnterItems();
}, 5000);

// ===== ANIMASI MASUK DARI ARAK =====
function animateEnterItems() {
  const items = document.querySelectorAll('.enter-item');
  const directions = ['from-left', 'from-right', 'from-top', 'from-bottom', 'from-scale'];
  items.forEach((item, index) => {
    const dir = directions[Math.floor(Math.random() * directions.length)];
    item.classList.add(dir);
    setTimeout(() => {
      item.classList.add('show');
    }, 150 + index * 120);
  });
}

// ===== SALJU =====
function createSnowflakes() {
  const snowCount = 60;
  const symbols = ['❄', '❅', '❆', '•', '·'];
  for (let i = 0; i < snowCount; i++) {
    const flake = document.createElement('div');
    flake.classList.add('snowflake');
    flake.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    flake.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 14 + 8;
    flake.style.fontSize = size + 'px';
    flake.style.opacity = Math.random() * 0.5 + 0.3;
    const duration = Math.random() * 12 + 10;
    flake.style.animationDuration = duration + 's';
    flake.style.animationDelay = Math.random() * 15 + 's';
    const drift = (Math.random() * 60 - 30) + 'px';
    flake.style.setProperty('--drift', drift);
    document.body.appendChild(flake);
  }
}
createSnowflakes();

// ===== FUNGSI PEMBUAT JALUR PETIR REALISTIS =====
function generateLightningPath(height, width = 40) {
  let path = `M ${width/2} 0`;
  let x = width / 2;
  let y = 0;
  const segments = 10 + Math.floor(Math.random() * 8);
  const stepY = height / segments;
  for (let i = 0; i < segments; i++) {
    const offsetX = (Math.random() - 0.5) * (width * 0.85);
    x = Math.max(3, Math.min(width - 3, x + offsetX));
    y += stepY * (0.65 + Math.random() * 0.7);
    path += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return path;
}

// ===== PETIR REALISTIS DARI TULISAN =====
function createTextBolt() {
  const welcome = document.getElementById('welcomeText');
  if (!welcome) return;
  const rect = welcome.getBoundingClientRect();
  const bolt = document.createElement('div');
  bolt.classList.add('text-bolt');
  const height = 90 + Math.random() * 110;
  const width = 36;
  const pathMain = generateLightningPath(height, width);
  const pathBranch = generateLightningPath(height * 0.4, width * 0.7);
  bolt.innerHTML = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" style="overflow:visible">
      <path d="${pathMain}" stroke="#ff99bb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="${pathMain}" stroke="#ff3366" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.9"/>
      <path d="${pathBranch}" stroke="#ff99bb" stroke-width="1.3" stroke-linecap="round" fill="none" opacity="0.75" transform="translate(6, ${height * 0.2})"/>
    </svg>
  `;
  const offsetX = (Math.random() - 0.5) * rect.width * 1.1;
  const offsetY = -10 + Math.random() * 15;
  bolt.style.left = (rect.left + rect.width / 2 + offsetX - width / 2) + 'px';
  bolt.style.top = (rect.top + offsetY) + 'px';
  document.body.appendChild(bolt);
  requestAnimationFrame(() => bolt.classList.add('show'));
  setTimeout(() => bolt.remove(), 550);
}

function flashText() {
  const welcome = document.getElementById('welcomeText');
  if (!welcome) return;
  welcome.classList.remove('flash-text');
  void welcome.offsetWidth;
  welcome.classList.add('flash-text');
  const count = 2 + Math.floor(Math.random() * 3);
  for (let i = 0; i < count; i++) {
    setTimeout(createTextBolt, i * 70);
  }
}

// ===== TOMBUL MENYALA BERGANTIAN ACAK =====
function flashButtonsRandom() {
  const buttons = Array.from(document.querySelectorAll('.btn'));
  if (!buttons.length) return;
  const shuffled = buttons.sort(() => Math.random() - 0.5);
  const howMany = 1 + Math.floor(Math.random() * 3);
  shuffled.slice(0, howMany).forEach((btn, index) => {
    setTimeout(() => {
      btn.classList.remove('lightning-glow');
      void btn.offsetWidth;
      btn.classList.add('lightning-glow');
    }, index * 90);
  });
}

// ===== PETIR LAYAR PANJANG & REALISTIS =====
function createBolt() {
  const bolt = document.createElement('div');
  bolt.classList.add('bolt');
  const height = 320 + Math.random() * 280;
  const startX = 5 + Math.random() * 90;
  const pathMain = generateLightningPath(height, 60);
  const pathBranch = generateLightningPath(height * 0.45, 40);
  bolt.innerHTML = `
    <svg width="60" height="${height}" viewBox="0 0 60 ${height}" fill="none" style="overflow:visible">
      <path d="${pathMain}" stroke="#ff99bb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="${pathMain}" stroke="#ff3366" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.9"/>
      <path d="${pathBranch}" stroke="#ff99bb" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.7" transform="translate(8, ${height * 0.25})"/>
    </svg>
  `;
  bolt.style.left = startX + 'vw';
  bolt.style.top = (Math.random() * 8 - 2) + 'vh';
  document.body.appendChild(bolt);
  requestAnimationFrame(() => bolt.classList.add('show'));
  setTimeout(() => bolt.remove(), 500);
}

function triggerLightning() {
  const lightning = document.getElementById('lightning');
  lightning.classList.remove('flash');
  void lightning.offsetWidth;
  lightning.classList.add('flash');
  const count = 1 + Math.floor(Math.random() * 3);
  for (let i = 0; i < count; i++) {
    setTimeout(createBolt, i * 60);
  }
}

function scheduleLightning() {
  const delay = 2800 + Math.random() * 4500;
  setTimeout(() => {
    triggerLightning();
    scheduleLightning();
  }, delay);
}

triggerLightning();
scheduleLightning();

// ===== RIPPLE =====
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const oldRipple = this.querySelector('.ripple');
    if (oldRipple) oldRipple.remove();
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    this.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
</script>
</body>
</html>
