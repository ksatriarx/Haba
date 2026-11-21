document.addEventListener("DOMContentLoaded",()=>{
 const dots=[...document.querySelectorAll(".slider-dots button")];let current=0,timer;
 function show(n){if(!dots.length)return;current=(n+dots.length)%dots.length;dots.forEach((d,i)=>d.classList.toggle("active",i===current));}
 dots.forEach((d,i)=>d.addEventListener("click",()=>show(i)));
 document.querySelector(".slider-prev")?.addEventListener("click",()=>show(current-1));
 document.querySelector(".slider-next")?.addEventListener("click",()=>show(current+1));
 const root=document.querySelector(".top-grid");
 function start(){timer=setInterval(()=>show(current+1),6500)}
 function stop(){clearInterval(timer)}
 if(root&&dots.length){start();root.addEventListener("mouseenter",stop);root.addEventListener("mouseleave",start);root.addEventListener("focusin",stop);root.addEventListener("focusout",start);}
 const track=document.querySelector("#ticker-track"),control=document.querySelector(".ticker-control");
 control?.addEventListener("click",()=>{const paused=track.classList.toggle("paused");control.textContent=paused?"▶":"Ⅱ";control.setAttribute("aria-label",paused?"Lanjutkan berita berjalan":"Jeda berita berjalan");});
});