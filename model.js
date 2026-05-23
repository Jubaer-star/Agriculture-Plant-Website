function switchTab(n) {
 document.querySelectorAll('.modal-tab').forEach((t,i) => t.classList.toggle('active', i === n));
 document.querySelectorAll('.modal-tab-panel').forEach((p,i) => p.classList.toggle('active', i === n));
}

function openModal(id) {
 const p = plants.find(x => x.id === id);
 if (!p) return;

 // Reset to first tab
 switchTab(0);

 // Header
 const mEmoji = document.getElementById('mEmoji');
 mEmoji.textContent = '';
 loadPlantImage(p.id, p.sci).then(imgUrl => {
 if (imgUrl) mEmoji.innerHTML = `<img src="${imgUrl}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;" onerror="this.style.display='none'">`;
 });
 document.getElementById('mName').textContent = p.name;
 document.getElementById('mSci').textContent = p.sci;
 document.getElementById('mTags').innerHTML = `<span class="tag tag-${p.type}">${p.type}</span>`;

 // Tab 0: Overview
 document.getElementById('mBengali').textContent = p.bengali;
 document.getElementById('mFamily').textContent = p.family;
 document.getElementById('mHabitat').textContent = p.habitat;
 document.getElementById('mSeason').textContent = p.season;
 document.getElementById('mHeight').textContent = p.height;
 document.getElementById('mDist').textContent = p.dist;
 document.getElementById('mDesc').textContent = p.desc;
 document.getElementById('mUses').textContent = p.uses;
 document.getElementById('mConservation').textContent = p.conservation;

 // Get extra data
 const ex = plantExtra[id] || getDefaultExtra(p);

 // Tab 1: Production
 document.getElementById('mProdGrid').innerHTML = ex.production.map(item => `
 <div class="prod-card">
 <div class="prod-icon">${item.icon}</div>
 <div class="prod-label">${item.label}</div>
 <div class="prod-val">${item.val}</div>
 </div>
 `).join('');

 // Tab 2: Varieties
 const totalV = ex.varieties.length;
 document.getElementById('mVarietyCount').textContent = `${totalV} known ${totalV === 1 ? 'variety' : 'varieties'} — = recommended best variety`;
 document.getElementById('mVarietyGrid').innerHTML = ex.varieties.map(v => `
 <div class="variety-card ${v.best ? 'best' : ''}">
 ${v.best ? '<span class="variety-badge"> Best</span>' : ''}
 <div class="variety-name">${v.name}</div>
 <div class="variety-why">${v.why}</div>
 </div>
 `).join('');

 // Tab 3: Care
 document.getElementById('mCareSteps').innerHTML = ex.care.map(c => `
 <div class="care-step">
 <span class="care-step-icon">${c.icon}</span>
 <div><div class="care-step-label">${c.label}</div><div class="care-step-text">${c.text}</div></div>
 </div>
 `).join('');

 // Tab 4: Cure
 document.getElementById('mCureSteps').innerHTML = ex.cure.map(c => `
 <div class="cure-step">
 <span class="cure-step-icon">${c.icon}</span>
 <div><div class="cure-step-label">${c.label}</div><div class="cure-step-text">${c.text}</div></div>
 </div>
 `).join('');

 document.getElementById('modalOverlay').classList.add('open');
 document.body.style.overflow = 'hidden';
 sessionExplored++;
 document.getElementById('sessionNum').textContent = sessionExplored;
}

function closeModal(e) {
 if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}
function closeModalDirect() {
 document.getElementById('modalOverlay').classList.remove('open');
 document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalDirect(); });
