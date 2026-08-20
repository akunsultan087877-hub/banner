(() => {
  const canvas = document.getElementById('fireworksCanvas');
  const ctx = canvas.getContext('2d', { alpha: true });

  let W = 0, H = 0, DPR = 1;
  const rockets = [];
  const particles = [];
  const colors = [
    [255,50,50], [255,215,70], [255,255,255],
    [255,95,30], [255,35,130], [120,190,255]
  ];

  function resize(){
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.floor(W * DPR);
    canvas.height = Math.floor(H * DPR);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(DPR,0,0,DPR,0,0);
  }
  window.addEventListener('resize', resize, {passive:true});
  resize();

  function rand(min,max){ return Math.random()*(max-min)+min; }

  class Rocket{
    constructor(){
      this.x = rand(W*0.08, W*0.92);
      this.y = H + 20;
      this.tx = rand(W*0.08, W*0.92);
      this.ty = rand(H*0.10, H*0.52);
      this.vx = (this.tx-this.x)/rand(42,58);
      this.vy = -rand(9.5,13.5);
      this.gravity = 0.075;
      this.life = 0;
      this.color = colors[(Math.random()*colors.length)|0];
      this.trail = [];
    }
    update(){
      this.trail.push({x:this.x,y:this.y,a:1});
      if(this.trail.length>14) this.trail.shift();
      this.x += this.vx;
      this.y += this.vy;
      this.vy += this.gravity;
      this.life++;
      if(this.y <= this.ty || this.vy >= -1.2 || this.life > 100){
        explode(this.x,this.y,this.color);
        return false;
      }
      return true;
    }
    draw(){
      for(let i=0;i<this.trail.length;i++){
        const t=this.trail[i];
        const a=(i+1)/this.trail.length;
        ctx.beginPath();
        ctx.fillStyle=`rgba(${this.color[0]},${this.color[1]},${this.color[2]},${a*0.32})`;
        ctx.arc(t.x,t.y,1.25*a,0,Math.PI*2);
        ctx.fill();
      }
      ctx.shadowBlur=14;
      ctx.shadowColor=`rgb(${this.color.join(',')})`;
      ctx.beginPath();
      ctx.fillStyle='rgba(255,245,220,.95)';
      ctx.arc(this.x,this.y,2.2,0,Math.PI*2);
      ctx.fill();
      ctx.shadowBlur=0;
    }
  }

  class Particle{
    constructor(x,y,color,angle,speed,size,life){
      this.x=x; this.y=y;
      this.vx=Math.cos(angle)*speed;
      this.vy=Math.sin(angle)*speed;
      this.color=color;
      this.size=size;
      this.life=life;
      this.maxLife=life;
      this.gravity=0.055;
      this.drag=0.985;
      this.trail=[];
      this.twinkle=Math.random()*Math.PI*2;
    }
    update(){
      this.trail.push({x:this.x,y:this.y});
      if(this.trail.length>7) this.trail.shift();
      this.vx*=this.drag;
      this.vy=this.vy*this.drag+this.gravity;
      this.x+=this.vx;
      this.y+=this.vy;
      this.life--;
      this.twinkle+=0.25;
      return this.life>0;
    }
    draw(){
      const a=Math.max(0,this.life/this.maxLife);
      for(let i=0;i<this.trail.length;i++){
        const t=this.trail[i];
        const ta=a*(i+1)/this.trail.length*.28;
        ctx.beginPath();
        ctx.fillStyle=`rgba(${this.color[0]},${this.color[1]},${this.color[2]},${ta})`;
        ctx.arc(t.x,t.y,this.size*.55,0,Math.PI*2);
        ctx.fill();
      }
      const sparkle=.75+.25*Math.sin(this.twinkle);
      ctx.shadowBlur=12;
      ctx.shadowColor=`rgba(${this.color[0]},${this.color[1]},${this.color[2]},${a})`;
      ctx.beginPath();
      ctx.fillStyle=`rgba(${this.color[0]},${this.color[1]},${this.color[2]},${a*sparkle})`;
      ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
      ctx.fill();
      ctx.shadowBlur=0;
    }
  }

  function explode(x,y,base){
    const count = Math.floor(rand(70,115));
    const ring = Math.random() < .38;
    for(let i=0;i<count;i++){
      const angle = ring
        ? (Math.PI*2)*(i/count)+rand(-.035,.035)
        : rand(0,Math.PI*2);
      const speed = ring ? rand(3.7,6.2) : Math.pow(Math.random(),.35)*6.5+.7;
      let c = base;
      if(Math.random()<.24) c = [255,255,255];
      particles.push(new Particle(
        x,y,c,angle,speed,rand(.75,1.75),Math.floor(rand(58,96))
      ));
    }
    for(let i=0;i<18;i++){
      particles.push(new Particle(
        x,y,[255,220,135],rand(0,Math.PI*2),
        rand(.5,2.4),rand(.6,1.25),Math.floor(rand(24,44))
      ));
    }
  }

  let nextLaunch = 0;
  function animate(t){
    ctx.clearRect(0,0,W,H);

    if(t > nextLaunch){
      rockets.push(new Rocket());
      if(Math.random()<.28) setTimeout(()=>rockets.push(new Rocket()), rand(120,360));
      nextLaunch = t + rand(900,1800);
    }

    for(let i=rockets.length-1;i>=0;i--){
      if(!rockets[i].update()) rockets.splice(i,1);
      else rockets[i].draw();
    }
    for(let i=particles.length-1;i>=0;i--){
      if(!particles[i].update()) particles.splice(i,1);
      else particles[i].draw();
    }

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
})();
