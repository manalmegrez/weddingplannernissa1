const wilayaSelect=document.getElementById("wilayaSelect");
const categoryGrid=document.getElementById("categoryGrid");
const providerGrid=document.getElementById("providerGrid");
const resultsTitle=document.getElementById("resultsTitle");
const selectionNotice=document.getElementById("selectionNotice");
const searchInput=document.getElementById("searchInput");
const modal=document.getElementById("providerModal");
const modalContent=document.getElementById("modalContent");
const closeModal=document.getElementById("closeModal");

WILAYAS.forEach(w=>{
  const o=document.createElement("option");o.value=w;o.textContent=w;wilayaSelect.appendChild(o);
});

CATEGORIES.forEach(c=>{
  const el=document.createElement("article");
  el.className="category";
  el.dataset.category=c.id;
  el.innerHTML=`<div class="cat-icon">${c.icon}</div><h3>${c.name}</h3><p>${c.description}</p>`;
  el.addEventListener("click",()=>selectCategory(c.id));
  categoryGrid.appendChild(el);
});

function currentProviders(){
  const w=wilayaSelect.value;
  const c=document.querySelector(".category.active")?.dataset.category;
  const q=searchInput.value.trim().toLowerCase();
  return DEMO_PROVIDERS.filter(p=>(!w||p.wilaya===w)&&(!c||p.category===c)&&(!q||p.name.toLowerCase().includes(q)));
}

function selectCategory(id){
  document.querySelectorAll(".category").forEach(x=>x.classList.toggle("active",x.dataset.category===id));
  renderProviders();
  document.getElementById("prestataires").scrollIntoView({behavior:"smooth"});
}

wilayaSelect.addEventListener("change",()=>{
  renderProviders();
  if(wilayaSelect.value) document.getElementById("categories").scrollIntoView({behavior:"smooth"});
});
searchInput.addEventListener("input",renderProviders);

function renderProviders(){
  const w=wilayaSelect.value;
  const c=document.querySelector(".category.active")?.dataset.category;
  const cat=CATEGORIES.find(x=>x.id===c);
  resultsTitle.textContent=cat?(cat.name+(w?" — "+w:"")):(w?"Prestataires à "+w:"Prestataires");
  providerGrid.innerHTML="";
  if(!w||!c){
    selectionNotice.style.display="block";
    selectionNotice.textContent="Choisissez une wilaya puis une catégorie pour afficher les prestataires.";
    return;
  }
  selectionNotice.style.display="none";
  const list=currentProviders().sort((a,b)=>(b.rating*0.7+b.reviews/100)-(a.rating*0.7+a.reviews/100));
  if(!list.length){
    providerGrid.innerHTML='<div class="empty">Aucun prestataire de démonstration trouvé pour cette sélection.<br>Vous pourrez ajouter vos vrais prestataires dans <b>js/data.js</b>.</div>';
    return;
  }
  list.forEach(p=>{
    const el=document.createElement("article");
    el.className="provider";
    el.innerHTML=`<div class="provider-top"><span class="badge">Recommandé</span><span class="rating">★ ${p.rating}</span></div>
      <div class="provider cat">${cat.name}</div><h3>${p.name}</h3><p class="desc">${p.description}</p>
      <div class="address">📍 ${p.address} · ${p.reviews} avis</div>`;
    el.addEventListener("click",()=>openProvider(p.id));
    providerGrid.appendChild(el);
  });
}

function openProvider(id){
  const p=DEMO_PROVIDERS.find(x=>x.id===id);
  const c=CATEGORIES.find(x=>x.id===p.category);
  modalContent.innerHTML=`<p class="eyebrow">${c.name} · ${p.wilaya}</p>
    <h2>${p.name}</h2>
    <div class="modal-meta"><span class="badge">Recommandé</span><span class="badge">Présence sociale</span><span>★ ${p.rating} (${p.reviews} avis)</span></div>
    <p>${p.description}</p>
    <div class="info">📍 <b>Adresse :</b> ${p.address}</div>
    <div class="info">📞 <b>Téléphone :</b> ${p.phone}</div>
    <div class="info">📱 <b>Réseau :</b> ${p.social}</div>
    <div class="links"><a href="#" onclick="return false">Instagram</a><a href="#" onclick="return false">Facebook</a></div>
    <div class="reviews"><h3>Avis</h3>${SAMPLE_REVIEWS.map(r=>`<div class="review"><strong>${"★".repeat(r.rating)} · ${r.author}</strong><span>${r.comment}</span></div>`).join("")}</div>`;
  modal.classList.add("open");modal.setAttribute("aria-hidden","false");
}
function close(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}
closeModal.addEventListener("click",close);
modal.addEventListener("click",e=>{if(e.target===modal)close()});
renderProviders();
