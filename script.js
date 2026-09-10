// ==========================================
// 🔥 DEFAULT DATABASE
// ==========================================
const defaultCardsDatabase = {
  visa: [
    { id: 1, tier: "Standard", rawPrice: 750, limit: "₹15,000", last4: "1048", exp: "06/2029", holder: "ETHAN MERCER", discount: 0, bestSeller: false, soldOut: false },
    { id: 2, tier: "Silver", rawPrice: 1220, limit: "₹28,000", last4: "4921", exp: "08/2029", holder: "ALEXANDER VANE", discount: 0, bestSeller: false, soldOut: false },
    { id: 3, tier: "Gold", rawPrice: 1690, limit: "₹42,000", last4: "8832", exp: "11/2029", holder: "MARCUS STERLING", discount: 0, bestSeller: false, soldOut: false },
    { id: 4, tier: "Platinum", rawPrice: 2160, limit: "₹58,000", last4: "3021", exp: "02/2030", holder: "LIAM CROSS", discount: 0, bestSeller: false, soldOut: false },
    { id: 5, tier: "Premium", rawPrice: 2630, limit: "₹75,000", last4: "7104", exp: "05/2030", holder: "DANIEL FROST", discount: 0, bestSeller: false, soldOut: false },
    { id: 6, tier: "Elite", rawPrice: 3100, limit: "₹95,000", last4: "9942", exp: "09/2030", holder: "VICTOR HALE", discount: 0, bestSeller: false, soldOut: false },
    { id: 7, tier: "Royal", rawPrice: 3570, limit: "₹115,000", last4: "5512", exp: "01/2031", holder: "NATHAN DRAKE", discount: 0, bestSeller: false, soldOut: false },
    { id: 8, tier: "Diamond", rawPrice: 4040, limit: "₹135,000", last4: "2094", exp: "04/2031", holder: "JULIAN BARR", discount: 0, bestSeller: false, soldOut: false },
    { id: 9, tier: "VIP", rawPrice: 4520, limit: "₹155,000", last4: "8819", exp: "08/2031", holder: "GABRIEL REED", discount: 0, bestSeller: false, soldOut: false },
    { id: 10, tier: "Ultimate", rawPrice: 5000, limit: "₹180,000", last4: "9999", exp: "12/2032", holder: "BLACK X BLACK", discount: 0, bestSeller: false, soldOut: false }
  ],
  mastercard: [
    { id: 1, tier: "Standard", rawPrice: 900, limit: "₹20,000", last4: "3012", exp: "05/2029", holder: "ARTHUR PENN", discount: 0, bestSeller: false, soldOut: false },
    { id: 2, tier: "Silver", rawPrice: 1380, limit: "₹28,000", last4: "4190", exp: "09/2029", holder: "LUCAS BRIGGS", discount: 0, bestSeller: false, soldOut: false },
    { id: 3, tier: "Gold", rawPrice: 1970, limit: "₹55,000", last4: "7721", exp: "01/2030", holder: "EDWARD KING", discount: 0, bestSeller: false, soldOut: false },
    { id: 4, tier: "Platinum", rawPrice: 2550, limit: "₹75,000", last4: "9902", exp: "06/2030", holder: "SEBASTIAN SHAW", discount: 0, bestSeller: false, soldOut: false },
    { id: 5, tier: "Premium", rawPrice: 3140, limit: "₹95,000", last4: "1428", exp: "10/2030", holder: "XAVIER KNIGHT", discount: 0, bestSeller: false, soldOut: false },
    { id: 6, tier: "Elite", rawPrice: 3730, limit: "₹120,000", last4: "6651", exp: "03/2031", holder: "ZACHARY COLE", discount: 0, bestSeller: false, soldOut: false },
    { id: 7, tier: "Royal", rawPrice: 4320, limit: "₹145,000", last4: "8820", exp: "07/2031", holder: "OLIVER STONE", discount: 0, bestSeller: false, soldOut: false },
    { id: 8, tier: "Diamond", rawPrice: 4910, limit: "₹170,000", last4: "2209", exp: "11/2031", holder: "DAMIAN ROSS", discount: 0, bestSeller: false, soldOut: false },
    { id: 9, tier: "VIP", rawPrice: 5500, limit: "₹195,000", last4: "5501", exp: "04/2032", holder: "ROMAN BLACK", discount: 0, bestSeller: false, soldOut: false },
    { id: 10, tier: "Ultimate", rawPrice: 6200, limit: "₹225,000", last4: "0001", exp: "12/2032", holder: "MASTER PRIME", discount: 0, bestSeller: false, soldOut: false }
  ],
  amex: [
    { id: 1, tier: "Standard", rawPrice: 1200, limit: "₹30,000", last4: "1005", exp: "04/2029", holder: "CARTER HAYES", discount: 0, bestSeller: false, soldOut: false },
    { id: 2, tier: "Silver", rawPrice: 1800, limit: "₹50,000", last4: "2118", exp: "08/2029", holder: "MASON WELLS", discount: 0, bestSeller: false, soldOut: false },
    { id: 3, tier: "Gold", rawPrice: 2500, limit: "₹75,000", last4: "9221", exp: "12/2029", holder: "TRISTAN VALE", discount: 0, bestSeller: false, soldOut: false },
    { id: 4, tier: "Platinum", rawPrice: 3200, limit: "₹100,000", last4: "4002", exp: "04/2030", holder: "HARRISON FORBES", discount: 0, bestSeller: false, soldOut: false },
    { id: 5, tier: "Premium", rawPrice: 4000, limit: "₹130,000", last4: "5549", exp: "08/2030", holder: "MAXWELL ARCHER", discount: 0, bestSeller: false, soldOut: false },
    { id: 6, tier: "Elite", rawPrice: 4800, limit: "₹165,000", last4: "8124", exp: "02/2031", holder: "AUGUSTUS GREY", discount: 0, bestSeller: false, soldOut: false },
    { id: 7, tier: "Royal", rawPrice: 5500, limit: "₹195,000", last4: "6603", exp: "06/2031", holder: "BENEDICT ROYCE", discount: 0, bestSeller: false, soldOut: false },
    { id: 8, tier: "Diamond", rawPrice: 6500, limit: "₹235,000", last4: "7731", exp: "10/2031", holder: "DOMINIC VAUGHN", discount: 0, bestSeller: false, soldOut: false },
    { id: 9, tier: "VIP", rawPrice: 7500, limit: "₹280,000", last4: "3392", exp: "03/2032", holder: "CASSIAN DRAKE", discount: 0, bestSeller: false, soldOut: false },
    { id: 10, tier: "Ultimate", rawPrice: 8500, limit: "₹320,000", last4: "9999", exp: "12/2032", holder: "CENTURION VIP", discount: 0, bestSeller: false, soldOut: false }
  ]
};

// LOAD DYNAMIC DATABASE
let cardsDbDynamic = JSON.parse(localStorage.getItem('bx_cards_db'));
if(!cardsDbDynamic) {
  cardsDbDynamic = defaultCardsDatabase;
  localStorage.setItem('bx_cards_db', JSON.stringify(cardsDbDynamic));
}

// ==========================================
// 🔥 STORE CONFIGURATIONS (UPI, SOUND, SOCIAL)
// ==========================================
let storeConfig = JSON.parse(localStorage.getItem('bx_store_config')) || {
  upiId: "blackxmarket@ybl",
  tgLink: "https://t.me/black_x_owner_ofc",
  soundTheme: "modern"
};

const soundPacks = {
  modern: {
    tap: "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3",
    buy: "https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3",
    error: "https://assets.mixkit.co/active_storage/sfx/2997/2997-preview.mp3",
    notify: "https://assets.mixkit.co/active_storage/sfx/2361/2361-preview.mp3"
  },
  scifi: {
    tap: "https://actions.google.com/sounds/v1/science_fiction/sci_fi_beep.ogg",
    buy: "https://actions.google.com/sounds/v1/science_fiction/sci_fi_positive_notification.ogg",
    error: "https://actions.google.com/sounds/v1/science_fiction/sci_fi_error_alert.ogg",
    notify: "https://actions.google.com/sounds/v1/foley/cassette_tape_button.ogg"
  },
  arcade: {
    tap: "https://actions.google.com/sounds/v1/cartoon/pop.ogg",
    buy: "https://actions.google.com/sounds/v1/cartoon/concussive_hit_guitar_boing.ogg",
    error: "https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg",
    notify: "https://actions.google.com/sounds/v1/cartoon/cartoon_cowbell.ogg"
  }
};

function applyStoreConfig() {
  const pack = soundPacks[storeConfig.soundTheme];
  document.getElementById("tapSound").src = pack.tap;
  document.getElementById("buySound").src = pack.buy;
  document.getElementById("errorSound").src = pack.error;
  document.getElementById("notifySound").src = pack.notify;

  document.getElementById("tgLinkNav").href = storeConfig.tgLink;
  document.getElementById("tgLinkFooter").href = storeConfig.tgLink;
}

const timerIntervals = {};
let selectedCurrentCard = {};

// ==========================================
// 🔥 SOUND SYSTEM
// ==========================================
function playSound(type) {
  let soundId = type === 'tap' ? "tapSound" : type === 'buy' ? "buySound" : type === 'error' ? "errorSound" : "notifySound";
  const sound = document.getElementById(soundId);
  if(sound) { sound.currentTime = 0; let playPromise = sound.play(); if (playPromise !== undefined) playPromise.catch(e => {}); }
}

document.addEventListener('click', function(e) {
  if((e.target.closest('button') || e.target.closest('a') || e.target.closest('.cat-tab') || e.target.closest('.vpa-copy-pill')) && !e.target.closest('.btn-card-buy')) {
    playSound('tap');
  }
});

// ==========================================
// 🔥 VISITOR TRACKING SYSTEM
// ==========================================
function logVisit() {
  let visits = JSON.parse(localStorage.getItem('bx_visits') || '[]');
  let timeStr = new Date().toLocaleString('en-US', { day: 'numeric', month: 'short', hour: '2-digit', minute:'2-digit', second:'2-digit' });
  let userLabel = localStorage.getItem("bx_active_user") || 'Guest Visitor';
  
  visits.unshift({ time: timeStr, user: userLabel });
  if(visits.length > 200) visits.pop(); 
  localStorage.setItem('bx_visits', JSON.stringify(visits));
}

// ==========================================
// 🔥 AUTHENTICATION & SUPER ADMIN
// ==========================================
let usersDb = JSON.parse(localStorage.getItem("bx_users") || "{}");
let currentUser = localStorage.getItem("bx_active_user") || null;
let authMode = "login"; 

function updateNavAuth() {
  const container = document.getElementById("authNavSection");
  if(currentUser === 'BLACKXSTORE') {
    container.innerHTML = `
      <div class="profile-dropdown-wrapper">
        <button class="profile-icon-btn" style="border-color:#ef4444; color:#ef4444; background: rgba(239, 68, 68, 0.1) !important;" onclick="toggleProfileDropdown(event)">
          <i class="fa-solid fa-user-secret"></i>
        </button>
        <div id="profileDropdown" class="profile-dropdown-menu hidden" style="border-color:#ef4444;">
          <div class="profile-name-tag">Super Admin: <br><b style="color:#ef4444;">@BLACKXSTORE</b></div>
          <a onclick="openAdminPanel()" style="color:#10b981;"><i class="fa-solid fa-server"></i> Admin Dashboard</a>
          <a onclick="logout()"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a>
        </div>
      </div>
    `;
  } else if(currentUser) {
    container.innerHTML = `
      <div class="profile-dropdown-wrapper">
        <button class="profile-icon-btn" onclick="toggleProfileDropdown(event)"><i class="fa-solid fa-user"></i></button>
        <div id="profileDropdown" class="profile-dropdown-menu hidden">
          <div class="profile-name-tag">Logged in as: <br><b>@${currentUser}</b></div>
          <a onclick="logout()"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `<button class="nav-pill-btn" style="background: linear-gradient(135deg, #a855f7, #7e22ce); color:#fff; border:none; box-shadow: 0 2px 10px rgba(168,85,247,0.4);" onclick="openAuthModal()"><i class="fa-solid fa-right-to-bracket"></i> Login</button>`;
  }
}

function toggleProfileDropdown(e) { e.stopPropagation(); const dropdown = document.getElementById("profileDropdown"); if(dropdown) dropdown.classList.toggle("hidden"); }
function openAuthModal() { document.getElementById("authModal").style.display = "flex"; switchAuthTab('login'); }
function closeAuthModal() { document.getElementById("authModal").style.display = "none"; document.getElementById("authError").classList.add("hidden"); document.getElementById("authFullName").value = ""; document.getElementById("authUsername").value = ""; document.getElementById("authPassword").value = ""; document.getElementById("authBtnText").classList.remove("hidden"); document.getElementById("authLoader").classList.add("hidden"); }

function switchAuthTab(mode) {
  authMode = mode; document.getElementById("authError").classList.add("hidden");
  if(mode === 'login') {
    document.getElementById("tabLogin").classList.add("active"); document.getElementById("tabRegister").classList.remove("active");
    document.getElementById("authTitle").innerText = "Login"; document.getElementById("authSub").innerText = "Access your encrypted dashboard.";
    document.getElementById("authBtnText").innerText = "Login"; document.getElementById("authNameGroup").classList.add("hidden");
  } else {
    document.getElementById("tabRegister").classList.add("active"); document.getElementById("tabLogin").classList.remove("active");
    document.getElementById("authTitle").innerText = "Create Account"; document.getElementById("authSub").innerText = "Sign up to buy premium virtual cards.";
    document.getElementById("authBtnText").innerText = "Create Account"; document.getElementById("authNameGroup").classList.remove("hidden");
  }
}

function processAuth() {
  const fullNameIn = document.getElementById("authFullName").value.trim();
  const userIn = document.getElementById("authUsername").value.trim();
  const passIn = document.getElementById("authPassword").value.trim();
  const errBox = document.getElementById("authError");
  const btnText = document.getElementById("authBtnText");
  const loader = document.getElementById("authLoader");

  if(userIn.length < 3 || passIn.length < 4) { errBox.innerText = "Username min 3 & Password min 4 chars."; errBox.classList.remove("hidden"); return; }
  if(authMode === 'register' && fullNameIn.length < 3) { errBox.innerText = "Please enter your full name."; errBox.classList.remove("hidden"); return; }

  errBox.classList.add("hidden"); btnText.classList.add("hidden"); loader.classList.remove("hidden");

  setTimeout(() => {
    btnText.classList.remove("hidden"); loader.classList.add("hidden");

    // SUPER ADMIN BYPASS
    if(authMode === 'login' && userIn === 'BLACKXSTORE' && passIn === 'BLACKX') {
       currentUser = 'BLACKXSTORE'; localStorage.setItem("bx_active_user", currentUser); closeAuthModal(); updateNavAuth(); logVisit(); playSound('tap'); return;
    }

    if(authMode === 'register') {
      if(usersDb[userIn] || userIn === 'BLACKXSTORE') { errBox.innerText = "Username already taken! Try another."; errBox.classList.remove("hidden"); playSound('error'); return; }
      usersDb[userIn] = { name: fullNameIn, password: passIn, orders: [] };
      localStorage.setItem("bx_users", JSON.stringify(usersDb));
      currentUser = userIn; localStorage.setItem("bx_active_user", currentUser);
      closeAuthModal(); updateNavAuth(); logVisit(); playSound('buy');
    } else {
      if(!usersDb[userIn] || usersDb[userIn].password !== passIn) { errBox.innerText = "Invalid username or password."; errBox.classList.remove("hidden"); playSound('error'); return; }
      currentUser = userIn; localStorage.setItem("bx_active_user", currentUser);
      closeAuthModal(); updateNavAuth(); logVisit(); playSound('tap');
    }
  }, 800);
}

function logout() {
  currentUser = null; localStorage.removeItem("bx_active_user"); updateNavAuth();
  const pd = document.getElementById("profileDropdown"); if(pd) pd.classList.add("hidden");
  document.getElementById("adminPanelModal").style.display = "none";
}
function checkLoginAction(actionCallback) { if(!currentUser) openAuthModal(); else actionCallback(); }

// ==========================================
// 🔥 SUPER ADMIN: FULL STORE CONTROL
// ==========================================
function openAdminPanel() {
  document.getElementById("adminPanelModal").style.display = "flex";
  const pd = document.getElementById("profileDropdown"); if(pd) pd.classList.add("hidden");
  switchAdminTab('dash');
}
function closeAdminPanel() { document.getElementById("adminPanelModal").style.display = "none"; }

function switchAdminTab(tab) {
  const tabs = ["tabAdminDash", "tabAdminOrders", "tabAdminCards", "tabAdminUsers", "tabAdminVisits", "tabAdminSettings"];
  const views = ["adminDashboardContainer", "adminOrdersContainer", "adminCardsContainer", "adminUsersContainer", "adminVisitsContainer", "adminSettingsContainer"];
  
  tabs.forEach(t => { 
      let btn = document.getElementById(t);
      if(btn) { btn.classList.remove("active"); btn.style.borderColor = "transparent"; }
  });
  views.forEach(v => { 
      let view = document.getElementById(v);
      if(view) view.classList.add("hidden"); 
  });

  const activeBtn = document.getElementById(`tabAdmin${tab.charAt(0).toUpperCase() + tab.slice(1)}`);
  if(activeBtn) { activeBtn.classList.add("active"); activeBtn.style.borderColor = "#ef4444"; }

  if(tab === 'dash') { document.getElementById("adminDashboardContainer").classList.remove("hidden"); renderAdminDashboard(); } 
  else if(tab === 'orders') { document.getElementById("adminOrdersContainer").classList.remove("hidden"); renderAdminOrders(); } 
  else if(tab === 'cards') { document.getElementById("adminCardsContainer").classList.remove("hidden"); renderAdminCards(); } 
  else if(tab === 'users') { document.getElementById("adminUsersContainer").classList.remove("hidden"); renderAdminUsers(); } 
  else if(tab === 'visits') { document.getElementById("adminVisitsContainer").classList.remove("hidden"); renderAdminVisits(); } 
  else if(tab === 'settings') { 
    document.getElementById("adminSettingsContainer").classList.remove("hidden"); 
    document.getElementById("adminSettingUpi").value = storeConfig.upiId;
    document.getElementById("adminSettingTg").value = storeConfig.tgLink;
    document.getElementById("adminSettingSound").value = storeConfig.soundTheme;
  }
}

// 🔥 ADMIN DASHBOARD OVERVIEW
function renderAdminDashboard() {
  let totalRevenue = 0; let totalOrdersCount = 0;
  for (const user in usersDb) {
    totalOrdersCount += usersDb[user].orders.length;
    usersDb[user].orders.forEach(ord => { let amtStr = ord.amount.replace(/[^0-9]/g, ''); totalRevenue += parseInt(amtStr) || 0; });
  }
  let totalUsersCount = Object.keys(usersDb).length;
  let visitsCount = JSON.parse(localStorage.getItem('bx_visits') || '[]').length;

  document.getElementById("adminDashboardContainer").innerHTML = `
    <div class="admin-stats-grid">
      <div class="admin-stat-card"><h4>Total Revenue</h4><div class="stat-value">₹${totalRevenue.toLocaleString('en-IN')}</div></div>
      <div class="admin-stat-card"><h4>Total Orders</h4><div class="stat-value">${totalOrdersCount}</div></div>
      <div class="admin-stat-card"><h4>Active Users</h4><div class="stat-value">${totalUsersCount}</div></div>
      <div class="admin-stat-card"><h4>Total Visits</h4><div class="stat-value">${visitsCount}</div></div>
    </div>
    <div style="background:rgba(239,68,68,0.1); border:1px solid #ef4444; padding:15px; border-radius:10px; text-align:center; color:#ef4444; margin-top:10px; margin-bottom: 20px;">
      <i class="fa-solid fa-satellite-dish fa-spin" style="font-size:24px; margin-bottom:10px;"></i>
      <h3 style="font-size:14px; margin-bottom:5px;">SYSTEM STATUS: ONLINE & SECURE</h3>
      <p style="font-size:11px; color:#cbd5e1;">All monitoring protocols are actively tracking user traffic and transactions.</p>
    </div>
  `;
}

function saveStoreSettings() {
  storeConfig.upiId = document.getElementById("adminSettingUpi").value || "blackxmarket@ybl";
  storeConfig.tgLink = document.getElementById("adminSettingTg").value || "https://t.me/black_x_owner_ofc";
  storeConfig.soundTheme = document.getElementById("adminSettingSound").value;
  
  localStorage.setItem('bx_store_config', JSON.stringify(storeConfig));
  applyStoreConfig();
  playSound('buy');
  alert("Store Settings Saved! Theme and UPI updated.");
}

// ADMIN: Edit Cards Logic
let currentAdminCardTab = 'visa';
function renderAdminCards() {
  const container = document.getElementById("adminCardsContainer");
  container.innerHTML = `
    <div style="display:flex; gap:5px; margin-bottom:12px;">
      <button onclick="changeAdminCardTab('visa')" style="flex:1; padding:8px; background:${currentAdminCardTab==='visa'?'#ef4444':'#334155'}; color:#fff; border:none; border-radius:4px; font-size:11px; font-weight:bold; cursor:pointer;">VISA</button>
      <button onclick="changeAdminCardTab('mastercard')" style="flex:1; padding:8px; background:${currentAdminCardTab==='mastercard'?'#ef4444':'#334155'}; color:#fff; border:none; border-radius:4px; font-size:11px; font-weight:bold; cursor:pointer;">MASTERCARD</button>
      <button onclick="changeAdminCardTab('amex')" style="flex:1; padding:8px; background:${currentAdminCardTab==='amex'?'#ef4444':'#334155'}; color:#fff; border:none; border-radius:4px; font-size:11px; font-weight:bold; cursor:pointer;">AMEX</button>
    </div>
    <button onclick="openAddCardForm()" class="btn-add-card"><i class="fa-solid fa-plus"></i> Create Custom Card</button>
    <div id="adminAddCardWrap" class="hidden" style="background:#0b0514; border:1px solid #a855f7; padding:15px; border-radius:10px; margin-bottom:15px;">
        <h4 style="color:#c084fc; font-size:12px; margin-bottom:10px;">ADD NEW ${currentAdminCardTab.toUpperCase()}</h4>
        <input type="text" id="addCardTier" placeholder="Tier Name (e.g. Infinity)" style="width:100%; background:#000; color:#fff; border:1px solid #a855f7; padding:8px; margin-bottom:8px; border-radius:4px; font-size:12px;">
        <div style="display:flex; gap:10px; margin-bottom:10px;">
           <input type="number" id="addCardPrice" placeholder="Price (₹)" style="width:50%; background:#000; color:#fff; border:1px solid #a855f7; padding:8px; border-radius:4px; font-size:12px;">
           <input type="text" id="addCardLimit" placeholder="Limit (e.g. ₹500,000)" style="width:50%; background:#000; color:#fff; border:1px solid #a855f7; padding:8px; border-radius:4px; font-size:12px;">
        </div>
        <button onclick="submitNewCard()" style="width:100%; background:#a855f7; color:#fff; border:none; padding:8px; border-radius:4px; cursor:pointer; font-weight:bold; font-size:12px;">Save Card</button>
    </div>
    <div id="adminCardListWrap"></div>
  `;
  renderAdminCardList();
}

function openAddCardForm() { document.getElementById("adminAddCardWrap").classList.remove("hidden"); }

function submitNewCard() {
  let tier = document.getElementById("addCardTier").value;
  let price = parseInt(document.getElementById("addCardPrice").value);
  let limit = document.getElementById("addCardLimit").value;
  if(!tier || !price || !limit) return alert("Fill all fields");

  let newId = cardsDbDynamic[currentAdminCardTab].length ? Math.max(...cardsDbDynamic[currentAdminCardTab].map(c=>c.id)) + 1 : 1;
  let newCard = { id: newId, tier: tier, rawPrice: price, limit: limit, last4: Math.floor(1000 + Math.random()*9000).toString(), exp: "12/2035", holder: "VIP CUSTOMER", discount: 0, bestSeller: true, soldOut: false };
  cardsDbDynamic[currentAdminCardTab].push(newCard);
  localStorage.setItem('bx_cards_db', JSON.stringify(cardsDbDynamic));
  playSound('buy');
  renderAdminCards();
  let activeTab = document.querySelector('.cat-tab.active').innerText.trim().toLowerCase().split(' ')[0];
  if(activeTab === currentAdminCardTab) renderCardsFeed(activeTab);
}

function changeAdminCardTab(tab) { currentAdminCardTab = tab; renderAdminCards(); }

function renderAdminCardList() {
  const wrap = document.getElementById("adminCardListWrap"); wrap.innerHTML = "";
  cardsDbDynamic[currentAdminCardTab].forEach(card => {
    const item = document.createElement("div"); item.className = "admin-visit-card"; item.style.flexDirection = "column"; item.style.alignItems = "stretch"; item.style.marginBottom = "15px";
    item.innerHTML = `
      <div style="display:flex; justify-content:space-between;">
        <strong style="color:#c084fc; margin-bottom:8px; font-size: 14px;">${currentAdminCardTab.toUpperCase()} - ${card.tier}</strong>
        <button onclick="deleteCard('${currentAdminCardTab}', ${card.id})" style="background:transparent; border:none; color:#ef4444; cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
      </div>
      <div class="admin-card-edit-row">
        <div style="flex:1;"><label>Raw Price (₹)</label><input type="number" id="edit_price_${currentAdminCardTab}_${card.id}" value="${card.rawPrice}"></div>
        <div style="flex:1;"><label>Discount (%)</label><input type="number" id="edit_disc_${currentAdminCardTab}_${card.id}" value="${card.discount||0}"></div>
      </div>
      <div style="display:flex; gap:15px; margin-top:8px; margin-bottom:12px; align-items:center; font-size:12px; color:#cbd5e1;">
        <label style="cursor:pointer;"><input type="checkbox" id="edit_best_${currentAdminCardTab}_${card.id}" ${card.bestSeller?'checked':''}> Best Seller Badge</label>
        <label style="cursor:pointer; color:#ef4444;"><input type="checkbox" id="edit_sold_${currentAdminCardTab}_${card.id}" ${card.soldOut?'checked':''}> Mark Sold Out</label>
      </div>
      <button onclick="saveCardData('${currentAdminCardTab}', ${card.id})" style="background:#10b981; color:#fff; border:none; padding:10px; border-radius:6px; font-weight:bold; cursor:pointer; width:100%;">Save Changes</button>
    `;
    wrap.appendChild(item);
  });
}

function saveCardData(network, id) {
  const newPrice = document.getElementById(`edit_price_${network}_${id}`).value;
  const newDisc = document.getElementById(`edit_disc_${network}_${id}`).value;
  const isBest = document.getElementById(`edit_best_${network}_${id}`).checked;
  const isSold = document.getElementById(`edit_sold_${network}_${id}`).checked;
  let cardIndex = cardsDbDynamic[network].findIndex(c => c.id === id);
  if(cardIndex !== -1) {
    cardsDbDynamic[network][cardIndex].rawPrice = parseInt(newPrice) || 0;
    cardsDbDynamic[network][cardIndex].discount = parseInt(newDisc) || 0;
    cardsDbDynamic[network][cardIndex].bestSeller = isBest;
    cardsDbDynamic[network][cardIndex].soldOut = isSold;
    localStorage.setItem('bx_cards_db', JSON.stringify(cardsDbDynamic));
    playSound('buy'); alert("Card Updated Successfully!");
    let activeTab = document.querySelector('.cat-tab.active').innerText.trim().toLowerCase().split(' ')[0];
    if(activeTab === network || (activeTab === 'visa' && network==='visa') || (activeTab === 'mastercard' && network==='mastercard') || (activeTab === 'amex' && network==='amex')) { renderCardsFeed(network); }
  }
}

function deleteCard(network, id) {
  if(confirm("Delete this card?")) {
    cardsDbDynamic[network] = cardsDbDynamic[network].filter(c => c.id !== id);
    localStorage.setItem('bx_cards_db', JSON.stringify(cardsDbDynamic));
    playSound('error'); renderAdminCards();
    let activeTab = document.querySelector('.cat-tab.active').innerText.trim().toLowerCase().split(' ')[0];
    if(activeTab === network) renderCardsFeed(network);
  }
}

// ADMIN: Orders Logic
function renderAdminOrders() {
  const container = document.getElementById("adminOrdersContainer"); container.innerHTML = ""; let allOrders = [];
  for (const user in usersDb) { usersDb[user].orders.forEach(ord => { allOrders.push({ username: user, ...ord }); }); }
  if(allOrders.length === 0) { container.innerHTML = `<p style="text-align:center; color:#94a3b8; font-size:12px; margin-top:20px;">No user orders found.</p>`; return; }
  allOrders.reverse().forEach(ord => {
    let statColor = ord.status === 'Approved' ? '#10b981' : ord.status === 'Rejected' ? '#ef4444' : '#f59e0b';
    const item = document.createElement("div"); item.className = "order-history-card"; item.style.borderColor = "rgba(239, 68, 68, 0.4)";
    item.innerHTML = `
      <div class="ord-head"><strong style="color:#38bdf8;">@${ord.username}</strong><span style="background: rgba(255,255,255,0.1); color:${statColor}; font-size: 10px; padding: 3px 8px; border-radius: 6px; font-weight: 700;">${ord.status}</span></div>
      <div class="ord-body"><p><strong>Order ID:</strong> ${ord.orderId}</p><p><strong>Card:</strong> ${ord.cardTier} (${ord.amount})</p><p><strong>UTR:</strong> <b style="color:#10b981;">${ord.utr}</b></p><p><strong>Time:</strong> ${ord.date}</p></div>
      <div style="margin-top:10px; display:flex; gap:5px; border-top:1px solid rgba(255,255,255,0.1); padding-top:8px;">
        <button onclick="changeOrderStatus('${ord.username}', '${ord.orderId}', 'Approved')" style="flex:1; background:#10b981; color:#fff; border:none; padding:6px; border-radius:4px; font-size:10px; cursor:pointer;">Approve</button>
        <button onclick="changeOrderStatus('${ord.username}', '${ord.orderId}', 'Rejected')" style="flex:1; background:#ef4444; color:#fff; border:none; padding:6px; border-radius:4px; font-size:10px; cursor:pointer;">Reject</button>
        <button onclick="changeOrderStatus('${ord.username}', '${ord.orderId}', 'Pending')" style="flex:1; background:#f59e0b; color:#fff; border:none; padding:6px; border-radius:4px; font-size:10px; cursor:pointer;">Pending</button>
        <button onclick="deleteOrder('${ord.username}', '${ord.orderId}')" style="background:#334155; color:#fff; border:none; padding:6px 10px; border-radius:4px; font-size:10px; cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
    container.appendChild(item);
  });
}
function changeOrderStatus(username, orderId, status) {
  let user = usersDb[username]; if(user) { let order = user.orders.find(o => o.orderId === orderId); if(order) { order.status = status; localStorage.setItem("bx_users", JSON.stringify(usersDb)); playSound('tap'); renderAdminOrders(); } }
}
function deleteOrder(username, orderId) {
  if(confirm("Permanently delete this order?")) { let user = usersDb[username]; if(user) { user.orders = user.orders.filter(o => o.orderId !== orderId); localStorage.setItem("bx_users", JSON.stringify(usersDb)); playSound('error'); renderAdminOrders(); } }
}

// ADMIN: Users Logic
function renderAdminUsers() {
  const container = document.getElementById("adminUsersContainer"); container.innerHTML = "";
  if(Object.keys(usersDb).length === 0) { container.innerHTML = `<p style="text-align:center; color:#94a3b8; font-size:12px; margin-top:20px;">No registered users.</p>`; return; }
  for(let u in usersDb) {
      let pwd = usersDb[u].password; let name = usersDb[u].name; let orderCount = usersDb[u].orders.length;
      const item = document.createElement("div"); item.className = "admin-visit-card"; item.style.flexDirection = "column"; item.style.alignItems = "flex-start";
      item.innerHTML = `<div style="display:flex; justify-content:space-between; width:100%; margin-bottom:6px;"><span style="color:#38bdf8; font-size:13px;"><b>@${u}</b> <span style="color:#cbd5e1; font-size:10px;">(${name})</span></span><button onclick="deleteUser('${u}')" style="background:#ef4444; color:#fff; border:none; padding:4px 8px; border-radius:4px; font-size:10px; cursor:pointer;"><i class="fa-solid fa-trash"></i> Delete</button></div><div style="color:#94a3b8; font-size:11px; margin-bottom:3px;">Password: <b style="color:#f59e0b;">${pwd}</b></div><div style="color:#94a3b8; font-size:11px;">Total Orders: <b style="color:#fff;">${orderCount}</b></div>`;
      container.appendChild(item);
  }
}
function deleteUser(username) {
  if(confirm(`Delete user @${username}? All their orders will be lost.`)) { delete usersDb[username]; localStorage.setItem("bx_users", JSON.stringify(usersDb)); playSound('error'); renderAdminUsers(); }
}

// ADMIN: Logs Logic
function renderAdminVisits() {
  const container = document.getElementById("adminVisitsContainer");
  container.innerHTML = `<button onclick="clearVisitorLogs()" style="width:100%; background:#334155; color:#fff; border:none; padding:10px; border-radius:8px; font-size:11px; font-weight:bold; cursor:pointer; margin-bottom:10px;"><i class="fa-solid fa-broom"></i> Clear Logs</button>`;
  let visits = JSON.parse(localStorage.getItem('bx_visits') || '[]');
  if(visits.length === 0) { container.innerHTML += `<p style="text-align:center; color:#94a3b8; font-size:12px; margin-top:20px;">No visitors logged yet.</p>`; return; }
  visits.forEach(v => {
    const item = document.createElement("div"); item.className = "admin-visit-card";
    item.innerHTML = `<div style="color:#d8b4fe;"><i class="fa-solid fa-eye"></i> <b>${v.user}</b></div><div style="color:#94a3b8;">${v.time}</div>`;
    container.appendChild(item);
  });
}
function clearVisitorLogs() { if(confirm("Clear all visitor logs?")) { localStorage.setItem("bx_visits", "[]"); playSound('error'); renderAdminVisits(); } }
function factoryResetDB() {
  if(confirm("DANGER! This will delete ALL users, orders, and logs. Are you absolutely sure?")) {
    localStorage.removeItem("bx_users"); localStorage.removeItem("bx_visits"); localStorage.removeItem("bx_cards_db"); localStorage.removeItem("bx_active_user"); localStorage.removeItem("bx_store_config");
    alert("Database Wiped Clean."); location.reload();
  }
}

// ==========================================
// 🔥 RENDER FRONTEND CARDS
// ==========================================
function renderCardsFeed(provider) {
  const container = document.getElementById("cardsList"); container.innerHTML = "";
  const brandIcon = provider === 'visa' ? 'fa-cc-visa' : provider === 'mastercard' ? 'fa-cc-mastercard' : 'fa-cc-amex';

  // Update Badges Count dynamically
  if(document.getElementById("badgeVisa")) document.getElementById("badgeVisa").innerText = cardsDbDynamic.visa.length;
  if(document.getElementById("badgeMc")) document.getElementById("badgeMc").innerText = cardsDbDynamic.mastercard.length;
  if(document.getElementById("badgeAmex")) document.getElementById("badgeAmex").innerText = cardsDbDynamic.amex.length;

  cardsDbDynamic[provider].forEach(card => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = `card-unit-container ${card.soldOut ? 'is-sold-out' : ''}`;
    
    // Dynamic Discount Math
    let finalPrice = card.rawPrice;
    let priceDisplayHTML = `<div class="entry-amount">₹${finalPrice.toLocaleString('en-IN')}</div>`;
    if(card.discount && card.discount > 0 && card.discount <= 100) {
      finalPrice = Math.floor(card.rawPrice - (card.rawPrice * card.discount / 100));
      priceDisplayHTML = `
        <div style="display:flex; align-items:center; gap:6px;">
          <del style="color:#ef4444; font-size:14px; font-weight:700;">₹${card.rawPrice.toLocaleString('en-IN')}</del>
          <span style="background:rgba(16,185,129,0.2); color:#10b981; padding:2px 6px; border-radius:4px; font-size:10px; font-weight:bold;">-${card.discount}%</span>
        </div>
        <div class="entry-amount">₹${finalPrice.toLocaleString('en-IN')}</div>
      `;
    }

    cardWrapper.innerHTML = `
      ${card.bestSeller ? '<span class="badge-fire"><i class="fa-solid fa-fire"></i> BEST SELLER</span>' : ''}
      <div class="status-available" style="color: ${card.soldOut?'#ef4444':'#34d399'}">
        <span class="status-dot" style="background:${card.soldOut?'#ef4444':'#10b981'}; box-shadow:0 0 8px ${card.soldOut?'#ef4444':'#10b981'}"></span> 
        ${card.soldOut ? 'OUT OF STOCK' : 'AVAILABLE'}
      </div>
      <div class="real-card-design">
        <div class="card-shine"></div>
        <div class="fc-top">
          <div class="chip-contactless"><div class="premium-chip"></div><i class="fa-solid fa-wifi fa-rotate-90 contactless-icon"></i></div>
          <div class="fc-logo"><i class="fa-brands ${brandIcon}"></i> ${provider.toUpperCase()}</div>
        </div>
        <div class="fc-number">•••• &nbsp; •••• &nbsp; •••• &nbsp; ${card.last4}</div>
        <div class="fc-bottom">
          <div class="fc-meta"><label>CARDHOLDER NAME</label><span>${card.holder}</span></div>
          <div class="fc-meta text-right"><label>VALID THRU</label><span>${card.exp}</span></div>
        </div>
      </div>
      <div class="spec-list">
        <div class="spec-item"><span>Limit</span><span class="spec-val">${card.limit}</span></div>
        <div class="spec-item"><span>Network</span><span class="spec-val" style="text-transform: capitalize;">${provider}</span></div>
        <div class="spec-item"><span>Refund</span><span class="spec-val" style="color: #38bdf8;">Available</span></div>
        <div class="spec-item"><span>Delivery</span><span class="spec-val" style="color: #34d399;">10 Mins</span></div>
      </div>
      <div class="price-buy-section">
        <div class="entry-fee-box">
          <div class="entry-label">ENTRY FEE</div>
          ${priceDisplayHTML}
        </div>
        ${card.soldOut 
          ? `<button class="btn-card-buy btn-sold-out" disabled>SOLD OUT</button>`
          : `<button class="btn-card-buy" onclick="handleBuyClick('${card.tier}', '₹${finalPrice.toLocaleString('en-IN')}', ${finalPrice})">BUY NOW</button>`
        }
      </div>
    `;
    container.appendChild(cardWrapper);
  });
}

function filterCards(provider, tabElement) {
  document.querySelectorAll(".cat-tab").forEach(tab => tab.classList.remove("active"));
  tabElement.classList.add("active");
  renderCardsFeed(provider);
}
function toggleAdminDropdown(event) { event.stopPropagation(); document.getElementById("adminDropdown").classList.toggle("hidden"); }
function handleBuyClick(tier, formattedFee, rawPrice) { checkLoginAction(() => openPaymentModal(tier, formattedFee, rawPrice)); }

// ==========================================
// 🔥 PAYMENT SYSTEM & ADMIN VIP CHECKOUT
// ==========================================
function openPaymentModal(tier, formattedFee, rawPrice) {
  playSound('buy'); 
  selectedCurrentCard = { tier, formattedFee, rawPrice };
  document.getElementById("payCardName").innerText = tier + " Virtual Card";
  document.getElementById("payCardFee").innerText = rawPrice;
  document.getElementById("lockedAmount").innerText = formattedFee;
  document.getElementById("manualAmount").innerText = rawPrice;

  // Use Dynamic UPI ID from storeConfig
  const cleanUPI = `upi://pay?pa=${storeConfig.upiId}&pn=BLACKXSTORE&cu=INR`;
  const qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(cleanUPI)}`;
  document.getElementById("dynamicQrImg").src = qrApi;
  document.getElementById("linkGpay").href = `intent://pay?pa=${storeConfig.upiId}&pn=BLACKXSTORE&cu=INR#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;
  document.getElementById("linkPhonePe").href = `intent://pay?pa=${storeConfig.upiId}&pn=BLACKXSTORE&cu=INR#Intent;scheme=upi;package=com.phonepe.app;end`;
  document.getElementById("linkPaytm").href = `intent://pay?pa=${storeConfig.upiId}&pn=BLACKXSTORE&cu=INR#Intent;scheme=upi;package=net.one97.paytm;end`;
  document.getElementById("linkGeneric").href = cleanUPI;
  document.getElementById("vpaTextDisplay").innerText = storeConfig.upiId;

  goToStep1();
  document.getElementById("utrInput").value = "";
  document.getElementById("paymentModal").style.display = "flex";
  startCountdownTimer("payTimer", 600);
}

function switchPayMode(mode) {
  const btnQr = document.getElementById("btnModeQr"); const btnUpi = document.getElementById("btnModeUpi");
  const qrArea = document.getElementById("qrDisplay"); const upiArea = document.getElementById("upiDisplay");
  if(mode === 'qr') { btnQr.classList.add("active"); btnUpi.classList.remove("active"); qrArea.classList.remove("hidden"); upiArea.classList.add("hidden"); } 
  else { btnUpi.classList.add("active"); btnQr.classList.remove("active"); upiArea.classList.remove("hidden"); qrArea.classList.add("hidden"); }
}

function copyVpaAddress() { navigator.clipboard.writeText(storeConfig.upiId); alert("UPI VPA Copied: " + storeConfig.upiId); }

function startCountdownTimer(elementId, seconds) {
  if(timerIntervals[elementId]) clearInterval(timerIntervals[elementId]);
  let timeRemaining = seconds; const timerEl = document.getElementById(elementId);
  timerIntervals[elementId] = setInterval(() => {
    let mins = Math.floor(timeRemaining / 60); let secs = timeRemaining % 60;
    timerEl.innerText = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    if (--timeRemaining < 0) { clearInterval(timerIntervals[elementId]); timerEl.innerText = "EXPIRED"; }
  }, 1000);
}

function goToStep1() { 
  document.getElementById("paymentStep1").classList.remove("hidden"); 
  document.getElementById("paymentStep2").classList.add("hidden"); 
  document.getElementById("paymentStepLoader").classList.add("hidden"); 
  document.getElementById("paymentStep3").classList.add("hidden"); 
  document.getElementById("paymentStepSuccessAdmin").classList.add("hidden");
}
function goToStep2() { 
  document.getElementById("paymentStep1").classList.add("hidden"); 
  document.getElementById("paymentStep2").classList.remove("hidden"); 
  document.getElementById("paymentStep3").classList.add("hidden"); 
}
function validateUtrInput(input) { input.value = input.value.replace(/[^0-9]/g, ''); }

function startUtrVerification() {
  const utr = document.getElementById("utrInput").value.trim();
  if(utr.length !== 12) { alert("Please enter a valid 12-digit UTR/Transaction ID number."); return; }

  document.getElementById("paymentStep2").classList.add("hidden");
  document.getElementById("paymentStepLoader").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("paymentStepLoader").classList.add("hidden");

    if(currentUser === 'BLACKXSTORE') {
      playSound('buy'); 
      const order = {
        orderId: "BX" + Math.floor(100000 + Math.random() * 900000),
        status: "Approved", cardTier: selectedCurrentCard.tier, amount: selectedCurrentCard.formattedFee, utr: utr,
        date: new Date().toLocaleString(), deliveryTime: Date.now() + (10 * 60 * 1000), 
        cardDetails: { number: "4191 8803 0108 5540", cvv: "743", exp: "01/2032", name: "JAMES SMITH", country: "UNITED STATES" }
      };
      if(!usersDb[currentUser]) usersDb[currentUser] = { name: "Admin", password: "N/A", orders: [] };
      usersDb[currentUser].orders.unshift(order); localStorage.setItem("bx_users", JSON.stringify(usersDb));
      document.getElementById("paymentStepSuccessAdmin").classList.remove("hidden");
    } 
    else {
      playSound('error'); 
      const order = {
        orderId: "BX" + Math.floor(100000 + Math.random() * 900000),
        status: "Rejected", cardTier: selectedCurrentCard.tier, amount: selectedCurrentCard.formattedFee, utr: utr, date: new Date().toLocaleString()
      };
      usersDb[currentUser].orders.unshift(order); localStorage.setItem("bx_users", JSON.stringify(usersDb));
      document.getElementById("paymentStep3").classList.remove("hidden");
    }
  }, 2500);
}

function closeModal() { document.getElementById("paymentModal").style.display = "none"; }

// ==========================================
// 🔥 MY ORDERS
// ==========================================
function openOrdersModal() {
  checkLoginAction(() => {
    if(currentUser === 'BLACKXSTORE') { openAdminPanel(); return; }
    renderMyOrders(); document.getElementById("myOrdersSub").innerText = `Purchases for account: @${currentUser}`; document.getElementById("ordersModal").style.display = "flex";
  });
}
function closeOrdersModal() { document.getElementById("ordersModal").style.display = "none"; }

function renderMyOrders() {
  const container = document.getElementById("ordersListContainer"); container.innerHTML = "";
  if(currentUser === 'BLACKXSTORE') return;
  if(!usersDb[currentUser]) { container.innerHTML = `<div class="no-orders" style="text-align: center; color: #94a3b8;"><i class="fa-solid fa-box-open" style="font-size: 26px; margin-bottom: 8px;"></i><p style="font-size: 11px;">No placed orders found.</p></div>`; return; }
  const userSpecificOrders = usersDb[currentUser].orders;
  if(userSpecificOrders.length === 0) { container.innerHTML = `<div class="no-orders" style="text-align: center; color: #94a3b8;"><i class="fa-solid fa-box-open" style="font-size: 26px; margin-bottom: 8px;"></i><p style="font-size: 11px;">No placed orders found.</p></div>`; return; }

  userSpecificOrders.forEach(ord => {
    let statColor = ord.status === 'Approved' ? '#10b981' : ord.status === 'Rejected' ? '#ef4444' : '#f59e0b';
    let extraDetailsHTML = "";
    if(ord.status === 'Approved' && ord.cardDetails) {
      let minsLeft = Math.ceil((ord.deliveryTime - Date.now()) / 60000);
      if(minsLeft > 0) {
        extraDetailsHTML = `<div style="background: rgba(245, 158, 11, 0.1); border: 1px solid #f59e0b; padding: 10px; border-radius: 8px; margin-top: 12px; text-align:center;"><span style="color:#f59e0b; font-size: 11px; font-weight:bold;"><i class="fa-solid fa-clock fa-spin"></i> Card generating... Available in ${minsLeft} mins.</span></div>`;
      } else {
        extraDetailsHTML = `<div style="background: linear-gradient(135deg, #1e1e1e, #0a0a0a); border: 1px solid #a855f7; padding: 14px; border-radius: 8px; margin-top: 12px; box-shadow: 0 5px 15px rgba(168,85,247,0.2);"><div style="color:#fff; font-family:'Space Grotesk', monospace; font-size:16px; letter-spacing:2px; text-align:center; margin-bottom:10px;">${ord.cardDetails.number}</div><div style="display:flex; justify-content:space-between; font-size:12px; color:#cbd5e1; margin-bottom:8px;"><span>CVV: <b style="color:#10b981;">${ord.cardDetails.cvv}</b></span><span>EXP: <b>${ord.cardDetails.exp}</b></span></div><div style="text-align:center; font-size:11px; color:#c084fc; text-transform:uppercase; font-weight:bold;">${ord.cardDetails.name} • ${ord.cardDetails.country}</div></div>`;
      }
    }
    const item = document.createElement("div"); item.className = "order-history-card";
    item.innerHTML = `<div class="ord-head"><strong>${ord.orderId}</strong><span style="background: rgba(255,255,255,0.1); color:${statColor}; font-size: 10px; padding: 3px 8px; border-radius: 6px; font-weight: 700;">${ord.status}</span></div><div class="ord-body"><p><strong>Card Tier:</strong> ${ord.cardTier}</p><p><strong>Amount:</strong> ${ord.amount}</p><p><strong>UTR ID:</strong> ${ord.utr}</p><p><strong>Time:</strong> ${ord.date}</p></div>${extraDetailsHTML}${!extraDetailsHTML ? `<a href="${storeConfig.tgLink}" target="_blank" class="btn-ord-contact"><i class="fa-brands fa-telegram"></i> Contact Admin</a>` : ''}`;
    container.appendChild(item);
  });
}

// ==========================================
// 🔥 LIVE SALES FEED
// ==========================================
let generatedSalesData = [];
const firstNames = ["James", "Robert", "John", "Michael", "David", "William", "Richard", "Joseph", "Thomas", "Charles", "Christopher", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Joshua"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor"];
const cardsList = [ { name: "Visa Standard", amt: "₹750" }, { name: "Visa Silver", amt: "₹1,220" }, { name: "Visa Gold", amt: "₹1,690" }, { name: "Mastercard Standard", amt: "₹900" }, { name: "Mastercard Silver", amt: "₹1,380" }, { name: "Amex Standard", amt: "₹1,200" }, { name: "Visa Premium", amt: "₹2,630" }, { name: "Mastercard Elite", amt: "₹3,730" } ];

function getDisplayTimeStr(dateObj) {
  let diffMins = Math.floor((new Date().getTime() - dateObj.getTime()) / 60000);
  if(diffMins < 60) return diffMins <= 1 ? "Just now" : `${diffMins} mins ago`;
  if(diffMins < 1440) { let hrs = Math.floor(diffMins/60); return hrs === 1 ? "1 hour ago" : `${hrs} hours ago`; }
  return dateObj.toLocaleString('en-US', { day: 'numeric', month: 'short', hour: '2-digit', minute:'2-digit' });
}

function generateInitialSales() {
  let now = new Date();
  for(let i=0; i<15; i++) { let recentDate = new Date(now.getTime() - (Math.random() * 3 * 60 * 60 * 1000)); createDummySaleEntry(recentDate); }
  let startAug = new Date("2026-08-01T00:00:00").getTime(); let timeNow = now.getTime();
  for(let i=0; i<485; i++) { let randomTime = startAug + Math.random() * (timeNow - startAug); createDummySaleEntry(new Date(randomTime)); }
  generatedSalesData.sort((a, b) => b.dateObj - a.dateObj);
}
function createDummySaleEntry(dateObj) {
  const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
  const randomCard = cardsList[Math.floor(Math.random() * cardsList.length)];
  generatedSalesData.push({ buyer: `${randomFirst} ${randomLast}`, card: randomCard.name, amount: randomCard.amt, dateObj: dateObj, dateStr: getDisplayTimeStr(dateObj) });
}
function renderSalesList() {
  const container = document.getElementById("allSalesListContainer"); container.innerHTML = "";
  generatedSalesData.forEach(sale => {
    const item = document.createElement("div"); item.className = "order-history-card";
    item.innerHTML = `<div class="ord-head"><strong><i class="fa-regular fa-user"></i> ${sale.buyer}</strong><span class="status-success">Delivered</span></div><div class="ord-body"><p><strong>Item:</strong> ${sale.card}</p><p><strong>Amount:</strong> ${sale.amount}</p><p><strong>Time:</strong> <span style="color:#c084fc">${sale.dateStr}</span></p></div>`;
    container.appendChild(item);
  });
}
function openSalesModal() { generatedSalesData.forEach(s => s.dateStr = getDisplayTimeStr(s.dateObj)); renderSalesList(); document.getElementById("salesModal").style.display = "flex"; }
function closeSalesModal() { document.getElementById("salesModal").style.display = "none"; }

// 🔥 NOTIFICATIONS 
let lastBuyerIndex = -1;
async function showSingleNotification() {
  return new Promise(resolve => {
    const toast = document.getElementById("liveBuyerToast");
    let randomIndex; do { randomIndex = Math.floor(Math.random() * firstNames.length); } while (randomIndex === lastBuyerIndex); 
    lastBuyerIndex = randomIndex;
    const fullName = `${firstNames[randomIndex]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
    const randomCard = cardsList[Math.floor(Math.random() * cardsList.length)];
    document.getElementById("toastName").innerText = fullName; document.getElementById("toastAction").innerText = `Bought ${randomCard.name}`; document.getElementById("toastAmount").innerText = `+${randomCard.amt}`;
    toast.style.opacity = "1"; toast.style.transform = "translateY(0)"; playSound('notify');
    const newSale = { buyer: fullName, card: randomCard.name, amount: randomCard.amt, dateObj: new Date(), dateStr: "Just now" };
    generatedSalesData.unshift(newSale);
    if(document.getElementById("salesModal").style.display === "flex") renderSalesList();
    setTimeout(() => { toast.style.opacity = "0"; toast.style.transform = "translateY(15px)"; setTimeout(resolve, 600); }, 3500);
  });
}
async function triggerRandomBuyerNotification() {
  let isBurst = Math.random() < 0.15; let burstCount = isBurst ? (Math.floor(Math.random() * 2) + 2) : 1; 
  for(let i=0; i<burstCount; i++) { await showSingleNotification(); if(i < burstCount - 1) { await new Promise(r => setTimeout(r, 1000)); } }
  let nextDelay; let randChance = Math.random();
  if (randChance < 0.15) nextDelay = Math.floor(Math.random() * 60000) + 60000; else if (randChance < 0.85) nextDelay = Math.floor(Math.random() * 120000) + 300000; else nextDelay = Math.floor(Math.random() * 180000) + 420000;
  setTimeout(triggerRandomBuyerNotification, nextDelay);
}

// ==========================================
// 🔥 INIT
// ==========================================
window.onclick = function(e) {
  if (e.target === document.getElementById("paymentModal")) closeModal();
  if (e.target === document.getElementById("ordersModal")) closeOrdersModal();
  if (e.target === document.getElementById("salesModal")) closeSalesModal();
  if (e.target === document.getElementById("authModal")) closeAuthModal();
  if (e.target === document.getElementById("adminPanelModal")) closeAdminPanel();
  
  if (!e.target.closest('.admin-dropdown-wrapper')) { const ad = document.getElementById("adminDropdown"); if(ad) ad.classList.add("hidden"); }
  if (!e.target.closest('.profile-dropdown-wrapper')) { const pd = document.getElementById("profileDropdown"); if(pd) pd.classList.add("hidden"); }
};

window.onload = () => {
  applyStoreConfig();
  logVisit(); 
  updateNavAuth();
  generateInitialSales();
  renderCardsFeed("visa");
  setTimeout(triggerRandomBuyerNotification, 4000); 
};
