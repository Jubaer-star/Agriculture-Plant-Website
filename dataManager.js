//Data Manager local storage


function getDataKey() { return currentUser ? `bb_data_${currentUser.username}` : 'bb_data_guest'; }
function loadRecords() { try { return JSON.parse(localStorage.getItem(getDataKey()) || '[]'); } catch(e) { return []; } }
function saveRecords(arr) { localStorage.setItem(getDataKey(), JSON.stringify(arr)); }

function addDataRecord() {
 const name = document.getElementById('dPlantName').value.trim();
 const cat = document.getElementById('dCategory').value;
 const note = document.getElementById('dNote').value.trim();
 if (!name) { showToast(' Please enter a plant name.', true); return; }
 const data = loadRecords();
 data.push({
 id: Date.now(),
 plant: name,
 category: cat || 'Uncategorized',
 note: note || '—',
 date: new Date().toLocaleDateString('en-BD'),
 status: 'Active'
 });
 saveRecords(data);
 document.getElementById('dPlantName').value = '';
 document.getElementById('dCategory').value = '';
 document.getElementById('dNote').value = '';
 renderDataTable();
 showToast(' Record saved!');
}

function deleteRecord(id) {
 if (!confirm('Delete this record?')) return;
 const data = loadRecords().filter(r => r.id !== id);
 saveRecords(data);
 renderDataTable();
 showToast(' Record deleted.');
}

function startEdit(id) {
 const data = loadRecords();
 const r = data.find(x => x.id === id);
 if (!r) return;
 const row = document.getElementById('row_' + id);
 row.innerHTML = `
 <td>${data.indexOf(r)+1}</td>
 <td class="edit-inline"><input value="${r.plant}" id="ep_${id}"></td>
 <td class="edit-inline"><input value="${r.category}" id="ec_${id}"></td>
 <td class="edit-inline" colspan="2"><input value="${r.note}" id="en_${id}"></td>
 <td><select id="es_${id}" style="padding:4px 8px;border-radius:6px;border:1.5px solid var(--green-bright);font-size:0.82rem;">
 <option ${r.status==='Active'?'selected':''}>Active</option>
 <option ${r.status==='Completed'?'selected':''}>Completed</option>
 <option ${r.status==='Pending'?'selected':''}>Pending</option>
 </select></td>
 <td>
 <button class="tbl-edit-btn" onclick="saveEdit(${id})" style="background:var(--green-mid);color:white;"> Save</button>
 <button class="tbl-del-btn" onclick="renderDataTable()"> Cancel</button>
 </td>`;
}

function saveEdit(id) {
 const data = loadRecords();
 const idx = data.findIndex(x => x.id === id);
 if (idx < 0) return;
 data[idx].plant = document.getElementById('ep_'+id).value.trim() || data[idx].plant;
 data[idx].category = document.getElementById('ec_'+id).value.trim() || data[idx].category;
 data[idx].note = document.getElementById('en_'+id).value.trim() || data[idx].note;
 data[idx].status = document.getElementById('es_'+id).value;
 saveRecords(data);
 renderDataTable();
 showToast(' Record updated!');
}

function renderDataTable() {
 const q = (document.getElementById('dataSearch')?.value || '').toLowerCase();
 const all = loadRecords();
 const data = q ? all.filter(r => r.plant.toLowerCase().includes(q) || r.category.toLowerCase().includes(q) || r.note.toLowerCase().includes(q)) : all;
 document.getElementById('dataCount').textContent = `${all.length} record${all.length !== 1 ? 's' : ''}`;
 const tbody = document.getElementById('dataTableBody');
 if (!data.length) {
 tbody.innerHTML = `<tr><td colspan="7"><div class="data-empty">${all.length ? ' No results match your search.' : ' No records yet. Add your first plant note above!'}</div></td></tr>`;
 return;
 }
 const statusColor = { Active: '#d1fae5', Completed: '#dbeafe', Pending: '#fef3c7' };
 const statusText = { Active: '#065f46', Completed: '#1e40af', Pending: '#92400e' };
 tbody.innerHTML = data.map((r,i) => `
 <tr id="row_${r.id}">
 <td style="color:var(--text-muted);font-size:0.78rem;font-family:'DM Mono',monospace;">${i+1}</td>
 <td style="font-weight:600;color:var(--green-deep);">${r.plant}</td>
 <td><span style="background:var(--green-pale);color:var(--green-mid);padding:2px 8px;border-radius:10px;font-size:0.75rem;font-weight:600;">${r.category}</span></td>
 <td style="max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${r.note}">${r.note}</td>
 <td style="color:var(--text-muted);font-size:0.8rem;">${r.date}</td>
 <td><span style="background:${statusColor[r.status]||'#f3f4f6'};color:${statusText[r.status]||'#374151'};padding:2px 8px;border-radius:10px;font-size:0.75rem;font-weight:600;">${r.status}</span></td>
 <td style="white-space:nowrap;">
 <button class="tbl-edit-btn" onclick="startEdit(${r.id})"> Edit</button>
 <button class="tbl-del-btn" onclick="deleteRecord(${r.id})"></button>
 </td>
 </tr>`).join('');
}

function clearAllData() {
 if (!confirm('Delete ALL records? This cannot be undone.')) return;
 saveRecords([]);
 renderDataTable();
 showToast(' All records cleared.');
}

function exportDataCSV() {
 const data = loadRecords();
 if (!data.length) { showToast(' No data to export.', true); return; }
 const header = ['#','Plant Name','Category','Note','Date Saved','Status'];
 const rows = data.map((r,i) => [i+1, r.plant, r.category, `"${r.note.replace(/"/g,'""')}"`, r.date, r.status]);
 const csv = [header, ...rows].map(r => r.join(',')).join('\n');
 const a = Object.assign(document.createElement('a'), { href: 'data:text/csv;charset=utf-8,'+encodeURIComponent(csv), download: 'bangla_botanica_data.csv' });
 a.click();
 showToast(' CSV exported!');
}