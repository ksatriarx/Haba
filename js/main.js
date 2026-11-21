document.addEventListener("DOMContentLoaded",()=>{
 const grid=document.querySelector("#latest-grid"),load=document.querySelector("#load-more");if(!grid||!window.HABA_NEWS)return;
 let visible=6,filter="all";
 function render(){grid.innerHTML="";const items=window.HABA_NEWS.filter(n=>filter==="all"||n.category===filter).slice(0,visible);items.forEach(n=>{const card=document.createElement("article");card.className="news-card";card.innerHTML=`<a class="news-image" href="pages/article.html"><img src="${n.image}" alt="" loading="lazy"></a><div class="news-card-copy"><span class="category-tag">${n.category.toUpperCase()}</span><h3><a href="pages/article.html">${n.title}</a></h3><p>${n.excerpt}</p><span class="story-meta">${n.time} · HABA</span></div>`;grid.appendChild(card);});load.hidden=items.length>=window.HABA_NEWS.filter(n=>filter==="all"||n.category===filter).length;}
 render();
 document.querySelectorAll(".filter-chip").forEach(btn=>btn.addEventListener("click",()=>{document.querySelector(".filter-chip.active")?.classList.remove("active");btn.classList.add("active");filter=btn.dataset.filter;visible=6;render();}));
 load?.addEventListener("click",()=>{visible+=3;render();});
});