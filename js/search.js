document.addEventListener("DOMContentLoaded",()=>{
 const input=document.querySelector("#site-search"),box=document.querySelector("#search-suggestions");if(!input||!box)return;
 const terms=["Nasional","Internasional","Aceh","Politik","Ekonomi","Teknologi","Olahraga","Hiburan","Lifestyle","Berita daerah"];
 input.addEventListener("input",()=>{const q=input.value.trim().toLowerCase();box.innerHTML="";if(!q)return;terms.filter(t=>t.toLowerCase().includes(q)).slice(0,5).forEach(t=>{const a=document.createElement("a");a.href="category.html?q="+encodeURIComponent(t);a.textContent=t;box.appendChild(a);});});
 input.addEventListener("keydown",e=>{if(e.key==="Enter"&&input.value.trim()){const history=JSON.parse(localStorage.getItem("haba-search-history")||"[]");history.unshift(input.value.trim());localStorage.setItem("haba-search-history",JSON.stringify([...new Set(history)].slice(0,8)));}});
});