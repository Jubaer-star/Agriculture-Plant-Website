function renderPlants() {
 const grid = document.getElementById('plantsGrid');
 const noResults = document.getElementById('noResults');
 const resultsInfo = document.getElementById('resultsInfo');
 const start = (currentPage - 1) * ITEMS_PER_PAGE;
 const page = filtered.slice(start, start + ITEMS_PER_PAGE);

 if (filtered.length === 0) {
 grid.innerHTML = '';
 noResults.classList.remove('hidden');
 resultsInfo.textContent = 'No results found';
 renderPagination();
 return;
 }
 noResults.classList.add('hidden');
 resultsInfo.textContent = `Showing ${start + 1}–${Math.min(start + ITEMS_PER_PAGE, filtered.length)} of ${filtered.length} plants`;

 grid.innerHTML = page.map(p => `
 <div class="plant-card" onclick="openModal(${p.id})" style="cursor:pointer;">
 <div class="plant-card-img" style="background:${p.bg}" id="card-img-${p.id}">
 <span class="plant-card-badge">#${String(p.id).padStart(3,'0')}</span>
 </div>
 <div class="plant-card-body">
 <div class="plant-card-name">${p.name}</div>
 <div class="plant-card-sci">${p.sci}</div>
 <div class="plant-tags">
 <span class="tag tag-${p.type}">${p.type}</span>
 ${p.type === 'medicinal' ? '<span class="tag tag-medicinal"> Medicinal</span>' : ''}
 </div>
 <div class="plant-card-desc">${p.desc.substring(0, 90)}…</div>
 </div>
 </div>
 `).join('');

 renderPagination();
 applyPlantImages(page);
}

function renderPagination() {
 const total = Math.ceil(filtered.length / ITEMS_PER_PAGE);
 const pg = document.getElementById('pagination');
 if (total <= 1) { pg.innerHTML = ''; return; }
 let html = `<button class="page-btn" onclick="goPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>‹</button>`;
 for (let i = 1; i <= total; i++) {
 if (i === 1 || i === total || Math.abs(i - currentPage) <= 1) {
 html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
 } else if (Math.abs(i - currentPage) === 2) {
 html += `<span style="padding:0 4px;color:var(--text-muted)">…</span>`;
 }
 }
 html += `<button class="page-btn" onclick="goPage(${currentPage + 1})" ${currentPage === total ? 'disabled' : ''}>›</button>`;
 pg.innerHTML = html;
}

function goPage(n) {
 const total = Math.ceil(filtered.length / ITEMS_PER_PAGE);
 if (n < 1 || n > total) return;
 currentPage = n;
 renderPlants();
 document.getElementById('encyclopedia').scrollIntoView({behavior: 'smooth'});
}
