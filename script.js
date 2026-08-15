const canvas=document.querySelector('#stars'),ctx=canvas.getContext('2d');let stars=[];
function resize(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);stars=Array.from({length:Math.min(100,Math.floor(innerWidth/12))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,s:Math.random()*1.4+.2,v:Math.random()*.3+.08}))}
function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);for(const s of stars){s.y+=s.v;if(s.y>innerHeight){s.y=0;s.x=Math.random()*innerWidth}ctx.fillStyle=Math.random()>.88?'#c9ff18':'rgba(90,115,255,.75)';ctx.fillRect(s.x,s.y,s.s,s.s*3)}requestAnimationFrame(draw)}
resize();draw();addEventListener('resize',resize);
const glow=document.querySelector('.cursor-glow');addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));
const counters=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target,target=+el.dataset.count,start=performance.now(),duration=1300;function tick(now){const p=Math.min((now-start)/duration,1);el.textContent=Math.round(target*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);counters.unobserve(el)}),{threshold:.7});document.querySelectorAll('[data-count]').forEach(el=>counters.observe(el));
document.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
const gifs=[...document.querySelectorAll('.hero-gif')],dots=[...document.querySelectorAll('.gif-dots button')];let activeGif=0;
function showGif(next){gifs[activeGif].classList.remove('active');dots[activeGif].classList.remove('active');activeGif=next;gifs[activeGif].classList.add('active');dots[activeGif].classList.add('active')}
dots.forEach((dot,index)=>dot.addEventListener('click',()=>showGif(index)));setInterval(()=>showGif((activeGif+1)%gifs.length),5000);
