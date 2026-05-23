function openAuth() { document.getElementById('authOverlay').classList.add('open'); switchAuth('login'); }
function closeAuth() { document.getElementById('authOverlay').classList.remove('open'); }
function closeAuthOutside(e) { if (e.target === document.getElementById('authOverlay')) closeAuth(); }
function switchAuth(tab) {
 document.getElementById('loginPanel').classList.toggle('active', tab === 'login');
 document.getElementById('signupPanel').classList.toggle('active', tab === 'signup');
 document.getElementById('tabLogin').classList.toggle('active', tab === 'login');
 document.getElementById('tabSignup').classList.toggle('active', tab === 'signup');
 document.getElementById('loginMsg').className = 'auth-msg';
 document.getElementById('signupMsg').className = 'auth-msg';
 document.getElementById('authTitle').textContent = tab === 'login' ? ' Welcome Back' : ' Join BanglaBotanica';
 document.getElementById('authSub').textContent = tab === 'login' ? 'Sign in to manage your plant data.' : 'Create a free account to get started.';
}

function doLogin() {
 const u = document.getElementById('loginUser').value.trim();
 const p = document.getElementById('loginPass').value;
 const msg = document.getElementById('loginMsg');
 if (!u || !p) { msg.className = 'auth-msg error'; msg.textContent = ' Please enter username and password.'; return; }
 const users = JSON.parse(localStorage.getItem('bb_users') || '[]');
 const found = users.find(x => (x.username === u || x.email === u) && x.password === p);
 if (!found) { msg.className = 'auth-msg error'; msg.textContent = ' Invalid credentials. Try again or sign up.'; return; }
 currentUser = found;
 localStorage.setItem('bb_session', JSON.stringify(found));
 if (document.getElementById('rememberMe').checked) localStorage.setItem('bb_remember', JSON.stringify(found));
 msg.className = 'auth-msg success'; msg.textContent = ` Welcome back, ${found.name}!`;
 setTimeout(() => { closeAuth(); updateNavAuth(); renderDataTable(); }, 900);
}

function doSignup() {
 const name = document.getElementById('signupName').value.trim();
 const email = document.getElementById('signupEmail').value.trim();
 const username = document.getElementById('signupUser2').value.trim();
 const pass = document.getElementById('signupPass').value;
 const msg = document.getElementById('signupMsg');
 if (!name || !email || !username || !pass) { msg.className = 'auth-msg error'; msg.textContent = ' All fields are required.'; return; }
 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg.className = 'auth-msg error'; msg.textContent = ' Enter a valid email address.'; return; }
 if (pass.length < 6) { msg.className = 'auth-msg error'; msg.textContent = ' Password must be at least 6 characters.'; return; }
 const users = JSON.parse(localStorage.getItem('bb_users') || '[]');
 if (users.find(x => x.username === username)) { msg.className = 'auth-msg error'; msg.textContent = ' Username already taken.'; return; }
 if (users.find(x => x.email === email)) { msg.className = 'auth-msg error'; msg.textContent = ' Email already registered.'; return; }
 const newUser = { name, email, username, password: pass, joined: new Date().toLocaleDateString() };
 users.push(newUser);
 localStorage.setItem('bb_users', JSON.stringify(users));
 currentUser = newUser;
 localStorage.setItem('bb_session', JSON.stringify(newUser));
 msg.className = 'auth-msg success'; msg.textContent = ` Account created! Welcome, ${name}!`;
 setTimeout(() => { closeAuth(); updateNavAuth(); renderDataTable(); }, 900);
}

function doLogout() {
 currentUser = null;
 localStorage.removeItem('bb_session');
 localStorage.removeItem('bb_remember');
 updateNavAuth();
 renderDataTable();
 showToast(' Logged out successfully.');
}

function showForgotMsg() {
 const msg = document.getElementById('loginMsg');
 msg.className = 'auth-msg success';
 msg.textContent = ' Password reset: Please contact admin or re-register.';
}

function updateNavAuth() {
 const area = document.getElementById('navAuthArea');
 if (currentUser) {
 area.innerHTML = `<span class="nav-user" onclick="doLogout()" title="Click to logout"> ${currentUser.name} &nbsp;·&nbsp; Logout</span>`;
 } else {
 area.innerHTML = `<button class="nav-login-btn" onclick="openAuth()"> Login</button>`;
 }
}

// Auto-restore session (called from index.html after data loads)
function restoreSession() {
 const sess = localStorage.getItem('bb_session') || localStorage.getItem('bb_remember');
 if (sess) { try { currentUser = JSON.parse(sess); updateNavAuth(); } catch(e){} }
}
