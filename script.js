/* START DIRECT */
const decryptScreen = document.getElementById("decryptScreen");
const nameScreen = document.getElementById("nameScreen");
const startScreen = document.getElementById("startScreen");

/* START direkt */
window.onload = () => { startDecrypt(); };

/* DECRYPT */
function startDecrypt(){
 decryptScreen.classList.remove("hidden");
 let p=0; const bar=document.getElementById("progress");
 const load=setInterval(()=>{
  p++; bar.style.width=p+"%";
  if(p>=100){clearInterval(load);decryptScreen.style.display="none";showName();}
 },30);
}

/* GLITCH NAME */
function showName(){
 nameScreen.classList.remove("hidden");
 setTimeout(()=>{
  nameScreen.style.display="none";
  startScreen.classList.remove("hidden");
 },2500);
}

/* STORY TE LARGO */
const message=`Dashuria ime e shtrenjtë Nuçi,

Kur të shoh, çdo mendim i gabuar zhduket, çdo frikë largohet. Ti je arsyeja pse zemra ime rreh më fort çdo ditë.

Çdo moment me ty është një poezi, çdo fjalë e jotja një muzikë për shpirtin tim. Nuk ka asnjë vend ku dua të jem më shumë se pranë teje.

Sot dua të të them, nga thellësia e shpirtit tim: nuk ka botë pa ty, nuk ka kuptim pa ty, nuk ka unë pa ty.

Çdo buzëqeshje jote ndez një dritë në ditët e mia më të errëta. Çdo kujtim me ty është një thesar që nuk do harrohet kurrë.

Të dua pafund ❤️
`;

let i=0;
startScreen.onclick=()=>{
 startScreen.style.display="none";
 document.querySelector(".screen").classList.remove("hidden");
 document.getElementById("music").play();
 typeWriter();
};

function typeWriter(){
 if(i<message.length){
  document.getElementById("text").innerHTML+=message.charAt(i);
  i++; setTimeout(typeWriter,40);
 } else startFinale();
}

/* FINALE CINEMATIC ME ANIMACIONE */
function startFinale(){
 document.querySelector(".screen").style.display="none";
 const finale=document.getElementById("finale");
 finale.classList.remove("hidden");
 startEffects();

 setTimeout(()=>{
   const romText = document.getElementById("romantic-text");
   romText.classList.remove("hidden");
   romText.style.opacity=1;

   setTimeout(()=>{
     document.querySelector(".love").style.opacity=1;
     setTimeout(()=>{
       document.getElementById("question").classList.remove("hidden");
     },500);
   },2000);
 },800);
}

/* EFFECTS: ZEMRA, FLUTURA, LULE */
const canvas=document.getElementById("effects");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let items=[];
class Effect{
 constructor(type){
  this.x=Math.random()*canvas.width;
  this.y=-10;
  this.size=Math.random()*10+5;
  this.speed=Math.random()*2+1;
  this.type=type; // 'heart','butterfly','flower'
 }
 draw(){
  if(this.type==='heart') ctx.fillStyle="#ff3366";
  else if(this.type==='flower') ctx.fillStyle="#ff99cc";
  else ctx.fillStyle="#ffd700";
  ctx.beginPath();
  ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
  ctx.fill();
  this.y+=this.speed;
 }
}
function startEffects(){
 setInterval(()=>{
  const types=['heart','butterfly','flower'];
  items.push(new Effect(types[Math.floor(Math.random()*types.length)]));
 },200);
 animate();
}
function animate(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 items.forEach(item=>item.draw());
 requestAnimationFrame(animate);
}

/* BUTONAT */
document.addEventListener("click",(e)=>{
 if(e.target.id==="yes1"||e.target.id==="yes2"){
   document.getElementById("question").classList.add("hidden");
   const finalMsg=document.getElementById("final-message");
   finalMsg.classList.remove("hidden");
 }
});
