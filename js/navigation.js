document.addEventListener("DOMContentLoaded",()=>{
 const menu=document.querySelector(".mobile-menu-button"),nav=document.querySelector(".primary-nav");
 if(menu&&nav){menu.addEventListener("click",()=>{const open=nav.classList.toggle("is-open");menu.setAttribute("aria-expanded",String(open));});}
 const searchToggle=document.querySelector(".search-toggle"),panel=document.querySelector("#search-panel"),close=document.querySelector(".search-close");
 if(searchToggle&&panel){searchToggle.addEventListener("click",()=>{panel.hidden=!panel.hidden;searchToggle.setAttribute("aria-expanded",String(!panel.hidden));if(!panel.hidden)document.querySelector("#site-search")?.focus();});}
 close?.addEventListener("click",()=>{panel.hidden=true;searchToggle?.setAttribute("aria-expanded","false");});
 let ticking=false;window.addEventListener("scroll",()=>{if(!ticking){window.requestAnimationFrame(()=>{document.body.classList.toggle("scrolled",window.scrollY>140);document.body.classList.toggle("body-scrolled",window.scrollY>140);ticking=false;});ticking=true;}},{passive:true});
});