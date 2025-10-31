// Configuration
const CONFIG = {
    API_BASE: '/.netlify/functions',
    ITEM_PRICES: {
        // Tier 3 Godlies
        "Traveler's Gun": 4100,
        "Evergun": 2950,
        "Constellation": 1950,
        "Turkey": 1400,
        "Evergreen": 1350,
        "Raygun": 1200,
        "Vampire's Gun": 1150,
        "Blossom": 940,
        "Sakura": 930,
        "Darkshot": 765,
        "Darksword": 755,
        "Bauble": 500,
        "Alienbeam": 475,
        "Xenoknife": 300,
        "Xenoshot": 300,
        "Soul": 275,
        "Sunrise": 275,
        "Spirit": 270,
        "Rainbow Gun": 250,
        "Bat": 250,
        "Rainbow": 245,
        "Flora": 170,
        "Candy": 170,
        "Bloom": 165,
        "Sunset": 155,
        "Flowerwood Gun": 150,
        "Flowerwood": 145,
        "Ocean": 145,
        "Waves": 140,
        "Watergun": 120,
        "Heartblade": 120,
        "Borealis": 105,
        "Australis": 100,
        "Sugar": 70,

        // Tier 2
        "Iceblaster": 65,
        "Luger": 65,
        "Pearl": 63,
        "Pearlshine": 63,
        "Candleflame": 60,
        "Elderwood Blade": 60,
        "Makeshift": 60,
        "Phantom": 60,
        "Spectre": 60,
        "Darkbringer": 60,
        "Elderwood Revolver": 60,
        "Lightbringer": 50,
        "Swirly Gun": 45,
        "Red Luger": 45,
        "Green Luger": 35,
        "Laser": 28,
        "Hallowgun": 27,
        "Swirly Blade": 25,
        "Amerilaser": 25,
        "Icebeam": 25,
        "Iceflake": 25,
        "Plasmabeam": 25,
        "Plasmablade": 25,
        "Nightblade": 23,
        "Shark": 23,
        "Cookiecane": 22,
        "Pixel": 22,
        "Gingermint": 20,
        "Blaster": 20,
        "Eternalcane": 20,
        "Ginger Luger": 20,
        "Lugercane": 20,
        "Minty": 20,
        "Old Glory": 20,
        "Slasher": 20,

        // Tier 1
        "Virtual": 18,
        "Battleaxe II": 18,
        "Deathshard": 18,
        "Gemstone": 18,
        "Gingerblade": 18,
        "Jinglegun": 17,
        "Nebula": 17,
        "Clockwork": 17,
        "Vampire's Edge": 15,
        "Bioblade": 13,
        "Spider": 13,
        "Chill": 13,
        "Fang": 13,
        "Heat": 13,
        "Tides": 13,
        "Battleaxe": 12,
        "Eternal III": 10,
        "Eternal IV": 10,
        "Frostsaber": 10,
        "Hallow's Blade": 8,
        "Handsaw": 8,
        "Eternal": 8,
        "Eternal II": 8,
        "Hallow's Edge": 8,
        "Pumpking": 8,
        "Xmas": 8,
        "Boneblade": 7,
        "Ghostblade": 7,
        "Flames": 7,
        "Frostbite": 7,
        "Ice Dragon": 7,
        "Ice Shard": 7,
        "Prismatic": 7,
        "Saw": 7,
        "Winter's Edge": 7,
        "Eggblade": 5,
        "Snowflake": 5,

        // Tier 0
        "Peppermint": 4,
        "Cookieblade": 3,
        "Blue Seer": 3,
        "Purple Seer": 3,
        "Red Seer": 3,
        "Seer": 3,
        "Orange Seer": 2,
        "Yellow Seer": 2,

        // Ancients
        "Gingerscope": 11700,
        "Traveler's Axe": 7400,
        "Celestial": 1150,
        "Vampire's Axe": 650,
        "Harvester": 525,
        "Icepiercer": 400,
        "Icebreaker": 125,
        "Swirly Axe": 60,
        "Batwing": 60,
        "Elderwood Scythe": 60,
        "Hallowscythe": 45,
        "Logchopper": 20,
        "Icewing": 15,

        // Vintages
        "Ghost": 10,
        "Blood": 8,
        "Laser (Vintage)": 8,
        "America (Vintage)": 7,
        "Prince": 6,
        "Shadow": 6,
        "Phaser": 5,
        "Cowboy": 4,
        "Golden": 4,
        "Splitter": 3
    }
};

// Weapon tier mapping for folders
const WEAPON_TIERS = {
    // Tier 1 (weapons_t1) - Tier 3 Godlies
    "weapons_t1": [
        "Traveler's Gun", "Evergun", "Constellation", "Turkey", "Evergreen",
        "Raygun", "Vampire's Gun", "Blossom", "Sakura", "Darkshot", "Darksword",
        "Bauble", "Alienbeam", "Xenoknife", "Xenoshot", "Soul", "Sunrise",
        "Spirit", "Rainbow Gun", "Bat", "Rainbow", "Flora", "Candy", "Bloom",
        "Sunset", "Flowerwood Gun", "Flowerwood", "Ocean", "Waves", "Watergun",
        "Heartblade", "Borealis", "Australis", "Sugar"
    ],
    
    // Tier 2 (weapons_t2) - Tier 2
    "weapons_t2": [
        "Iceblaster", "Luger", "Pearl", "Pearlshine", "Candleflame",
        "Elderwood Blade", "Makeshift", "Phantom", "Spectre", "Darkbringer",
        "Elderwood Revolver", "Lightbringer", "Swirly Gun", "Red Luger",
        "Green Luger", "Laser", "Hallowgun", "Swirly Blade", "Amerilaser",
        "Icebeam", "Iceflake", "Plasmabeam", "Plasmablade", "Nightblade",
        "Shark", "Cookiecane", "Pixel", "Gingermint", "Blaster", "Eternalcane",
        "Ginger Luger", "Lugercane", "Minty", "Old Glory", "Slasher"
    ],
    
    // Tier 3 (weapons_t3) - Tier 1
    "weapons_t3": [
        "Virtual", "Battleaxe II", "Deathshard", "Gemstone", "Gingerblade",
        "Jinglegun", "Nebula", "Clockwork", "Vampire's Edge", "Bioblade",
        "Spider", "Chill", "Fang", "Heat", "Tides", "Battleaxe", "Eternal III",
        "Eternal IV", "Frostsaber", "Hallow's Blade", "Handsaw", "Eternal",
        "Eternal II", "Hallow's Edge", "Pumpking", "Xmas", "Boneblade",
        "Ghostblade", "Flames", "Frostbite", "Ice Dragon", "Ice Shard",
        "Prismatic", "Saw", "Winter's Edge", "Eggblade", "Snowflake"
    ]
};

// Global variables
let currentUser = null;
let currentCode = null;
let countdownInterval = null;
let selectedDepositItems = [];
let userInventory = [];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
    loadItemsGrid();
});

// Image path function with folder support
function getImagePath(itemName) {
    // Determine folder based on weapon tier
    let folder = 'weapons_t4/'; // Default for Tier 0 + Ancients + Vintages
    
    for (const [tierFolder, weapons] of Object.entries(WEAPON_TIERS)) {
        if (weapons.includes(itemName)) {
            folder = tierFolder + '/';
            break;
        }
    }
    
    // Create filename
    const filename = itemName.toLowerCase()
        .replace(/'/g, '')
        .replace(/ /g, '_')
        .replace(/\(/g, '')
        .replace(/\)/g, '')
        .replace(/\./g, '') + '.png';
    
    return `images/${folder}${filename}`;
}

// Registration functions
async function generateCode() {
    const username = document.getElementById('robloxUsername').value.trim();
    
    if (!username) {
        alert('Please enter your Roblox username');
        return;
    }
    
    try {
        const response = await fetch(`${CONFIG.API_BASE}/generate-code`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username })
        });
        
        const data = await response.json();
        
        if (data.success) {
            currentCode = data.code;
            document.getElementById('verificationCode').textContent = currentCode;
            document.getElementById('codeSection').style.display = 'block';
            startCountdown(600);
        } else {
            alert('Error generating code: ' + data.error);
        }
    } catch (error) {
        alert('Error generating code. Please try again.');
    }
}

function startCountdown(seconds) {
    let remaining = seconds;
    
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        const minutes = Math.floor(remaining / 60);
        const secs = remaining % 60;
        
        document.getElementById('countdown').textContent = 
            `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        
        if (remaining <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('codeSection').style.display = 'none';
            alert('Code expired! Please generate a new one.');
        }
        
        remaining--;
    }, 1000);
}

async function verifyRegistration() {
    const username = document.getElementById('robloxUsername').value.trim();
    
    if (!username || !currentCode) {
        alert('Please generate a code first');
        return;
    }
    
    try {
        const response = await fetch(`${CONFIG.API_BASE}/verify-registration`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username })
        });
        
        const data = await response.json();
        
        if (data.success) {
            clearInterval(countdownInterval);
            alert('🎉 Registration successful! Welcome to MM2 Casino!');
            loginUser(data.user);
        } else {
            alert(`❌ Registration failed: ${data.error}`);
        }
    } catch (error) {
        alert('Error verifying registration. Please try again.');
    }
}

// User management
function loginUser(user) {
    currentUser = user;
    localStorage.setItem('mm2_user', JSON.stringify(user));
    showCasinoInterface();
    loadUserData();
}

function logout() {
    currentUser = null;
    localStorage.removeItem('mm2_user');
    showRegistrationInterface();
}

function checkLoginStatus() {
    const savedUser = localStorage.getItem('mm2_user');
    if (savedUser) {
        loginUser(JSON.parse(savedUser));
    } else {
        showRegistrationInterface();
    }
}

function showRegistrationInterface() {
    document.getElementById('registrationSection').style.display = 'block';
    document.getElementById('casinoSection').style.display = 'none';
    document.getElementById('userInfo').style.display = 'none';
}

function showCasinoInterface() {
    document.getElementById('registrationSection').style.display = 'none';
    document.getElementById('casinoSection').style.display = 'block';
    document.getElementById('userInfo').style.display = 'flex';
    document.getElementById('usernameDisplay').textContent = currentUser.username;
}

// Items management
function loadItemsGrid() {
    const grid = document.getElementById('itemsGrid');
    grid.innerHTML = '';
    
    Object.entries(CONFIG.ITEM_PRICES).forEach(([itemName, value]) => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        itemCard.onclick = () => toggleItemSelection(itemName, value, itemCard);
        
        const imagePath = getImagePath(itemName);
        
        itemCard.innerHTML = `
            <img src="${imagePath}" 
                 alt="${itemName}" 
                 class="item-image"
                 onerror="this.src='images/ui/default.png'">
            <div class="item-name">${itemName}</div>
            <div class="item-value">${value} value</div>
        `;
        
        grid.appendChild(itemCard);
    });
}

function toggleItemSelection(itemName, value, element) {
    const index = selectedDepositItems.findIndex(item => item.name === itemName);
    
    if (index === -1) {
        selectedDepositItems.push({ name: itemName, value: value });
        element.classList.add('selected');
    } else {
        selectedDepositItems.splice(index, 1);
        element.classList.remove('selected');
    }
    
    updateSelectedItemsDisplay();
}

function updateSelectedItemsDisplay() {
    const totalValue = selectedDepositItems.reduce((sum, item) => sum + item.value, 0);
    document.getElementById('selectedValue').textContent = totalValue;
    
    const list = document.getElementById('selectedItemsList');
    list.innerHTML = selectedDepositItems.map(item => 
        `<div class="inventory-item">
            <img src="${getImagePath(item.name)}" 
                 alt="${item.name}" 
                 class="item-image"
                 onerror="this.src='images/ui/default.png'">
            <div class="item-name">${item.name}</div>
            <div class="item-value">${item.value} value</div>
        </div>`
    ).join('');
}

// Deposit functions
function showDeposit() {
    document.getElementById('depositModal').style.display = 'flex';
    selectedDepositItems = [];
    updateSelectedItemsDisplay();
}

function hideDeposit() {
    document.getElementById('depositModal').style.display = 'none';
}

function joinServer() {
    alert('🚀 Joining VIP server... Make sure to trade with MM2_Casino_Bot');
}

async function prepareDeposit() {
    if (selectedDepositItems.length === 0) {
        alert('Please select items to deposit');
        return;
    }
    
    try {
        const response = await fetch(`${CONFIG.API_BASE}/prepare-deposit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: currentUser.username,
                items: selectedDepositItems
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            alert('✅ Deposit prepared! Join the server and trade with the bot.');
            hideDeposit();
        } else {
            alert('Error preparing deposit: ' + data.error);
        }
    } catch (error) {
        alert('Error preparing deposit. Please try again.');
    }
}

// Game functions
async function startPvP() {
    alert('🎯 Starting PvP game...');
}

async function startUpgrade() {
    alert('⚡ Starting upgrade...');
}

// User data loading
async function loadUserData() {
    try {
        const response = await fetch(`${CONFIG.API_BASE}/user-balance?username=${currentUser.username}`);
        const data = await response.json();
        
        if (data.success) {
            document.getElementById('currentBalance').textContent = data.balance + ' value';
            document.getElementById('balanceDisplay').textContent = 'Balance: ' + data.balance;
            userInventory = data.inventory || [];
            updateInventoryDisplay();
        }
    } catch (error) {
        console.error('Error loading user data:', error);
    }
}

function updateInventoryDisplay() {
    const grid = document.getElementById('inventoryGrid');
    grid.innerHTML = '';
    
    userInventory.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'inventory-item';
        itemElement.innerHTML = `
            <img src="${getImagePath(item.name)}" 
                 alt="${item.name}" 
                 class="item-image"
                 onerror="this.src='images/ui/default.png'">
            <div class="item-name">${item.name}</div>
            <div class="item-value">${item.value} value</div>
        `;
        grid.appendChild(itemElement);
    });
}
