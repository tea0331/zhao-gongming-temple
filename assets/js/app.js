// ============================================
// 正一龙虎玄坛真君财神赵公明 - 主逻辑
// ============================================

(function() {
    'use strict';

    // ============ 状态管理 ============
    const State = {
        user: null,
        lang: 'zh',
        incenseCount: 0,
        incenseLimit: 3,
        meritPoints: 0,
        fortunePoints: 0,
        freeDivinationUsed: false,
        selectedIncenseType: 'wealth',
        stats: {
            totalIncense: 1288446,
            totalBlessings: 86772,
            onlineCount: 326
        }
    };

    // ============ 初始化 ============
    function init() {
        loadState();
        initUI();
        initEvents();
        initIncenseDisplay();
        animateStats();
        createSmokeParticles();

        // Loading screen
        setTimeout(() => {
            const ls = document.getElementById('loading-screen');
            if (ls) ls.classList.add('fade-out');
            setTimeout(() => ls && ls.remove(), 800);
        }, 1500);
    }

    function loadState() {
        // Try load from localStorage
        const saved = localStorage.getItem('temple-state');
        if (saved) {
            try {
                const s = JSON.parse(saved);
                State.incenseCount = s.incenseCount || 0;
                State.meritPoints = s.meritPoints || 0;
                State.fortunePoints = s.fortunePoints || 0;
                State.freeDivinationUsed = s.freeDivinationUsed || false;
                // Reset daily
                const lastDate = s.lastDate || '';
                const today = new Date().toDateString();
                if (lastDate !== today) {
                    State.incenseCount = 0;
                    State.freeDivinationUsed = false;
                }
            } catch(e) {}
        }
        // Language
        const savedLang = localStorage.getItem('temple-lang');
        if (savedLang) State.lang = savedLang;
    }

    function saveState() {
        localStorage.setItem('temple-state', JSON.stringify({
            incenseCount: State.incenseCount,
            meritPoints: State.meritPoints,
            fortunePoints: State.fortunePoints,
            freeDivinationUsed: State.freeDivinationUsed,
            lastDate: new Date().toDateString()
        }));
    }

    // ============ UI初始化 ============
    function initUI() {
        setLang(State.lang);
        updateIncenseUI();
        updateMeritUI();

        // Cylinder sticks
        const cylinderSticks = document.getElementById('cylinder-sticks');
        if (cylinderSticks) {
            for (let i = 0; i < 20; i++) {
                const stick = document.createElement('div');
                stick.className = 'mini-stick';
                stick.style.height = (30 + Math.random() * 30) + 'px';
                cylinderSticks.appendChild(stick);
            }
        }

        // Scroll spy for navbar
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const navbar = document.getElementById('navbar');
            if (navbar) {
                navbar.classList.toggle('scrolled', scrollY > 50);
            }
            // Active section highlight
            sections.forEach(sec => {
                const top = sec.offsetTop - 100;
                const bottom = top + sec.offsetHeight;
                const id = sec.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.toggle('active', scrollY >= top && scrollY < bottom);
                    }
                });
            });
        });
    }

    // ============ 事件绑定 ============
    function initEvents() {
        // Language toggle
        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) langBtn.addEventListener('click', toggleLang);

        // Login
        const loginBtn = document.getElementById('login-btn');
        const loginModal = document.getElementById('login-modal');
        const modalClose = document.getElementById('modal-close');
        const modalBackdrop = document.querySelector('.modal-backdrop');

        if (loginBtn) loginBtn.addEventListener('click', () => {
            loginModal.classList.remove('hidden');
        });
        if (modalClose) modalClose.addEventListener('click', () => {
            loginModal.classList.add('hidden');
        });
        if (modalBackdrop) modalBackdrop.addEventListener('click', () => {
            loginModal.classList.add('hidden');
        });

        // Social login buttons (placeholder)
        document.querySelectorAll('.btn-social').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const provider = btn.id.replace('login-', '');
                handleLogin(provider);
            });
        });

        // Incense type selection
        document.querySelectorAll('.incense-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.incense-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                State.selectedIncenseType = btn.dataset.type;
            });
        });

        // Light incense
        const lightBtn = document.getElementById('light-incense-btn');
        if (lightBtn) lightBtn.addEventListener('click', lightIncense);

        // Draw fortune stick
        const drawBtn = document.getElementById('draw-stick-btn');
        if (drawBtn) drawBtn.addEventListener('click', drawFortuneStick);

        // Deep interpretation
        const deepBtn = document.getElementById('deep-interpret-btn');
        if (deepBtn) deepBtn.addEventListener('click', () => {
            alert(State.lang === 'zh' ? '深度解签功能即将上线，敬请期待！' : 'Deep reading coming soon!');
        });

        // New stick
        const newStickBtn = document.getElementById('new-stick-btn');
        if (newStickBtn) newStickBtn.addEventListener('click', () => {
            document.getElementById('stick-result').classList.add('hidden');
        });

        // Cast hexagram
        const castBtn = document.getElementById('cast-hexagram-btn');
        if (castBtn) castBtn.addEventListener('click', castHexagram);

        // New hexagram
        const newHexBtn = document.getElementById('new-hex-btn');
        if (newHexBtn) newHexBtn.addEventListener('click', () => {
            document.getElementById('hexagram-result').classList.add('hidden');
            resetHexagramDisplay();
        });

        // Membership buttons
        document.querySelectorAll('.plan-card .btn-primary, .plan-card .btn-secondary, .annual-card .btn-primary').forEach(btn => {
            btn.addEventListener('click', () => {
                if (!State.user) {
                    loginModal.classList.remove('hidden');
                } else {
                    alert(State.lang === 'zh' ? '支付功能即将上线！' : 'Payment coming soon!');
                }
            });
        });

        // Mobile menu
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        if (mobileMenu && navLinks) {
            mobileMenu.addEventListener('click', () => {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '60px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'rgba(13,13,26,0.98)';
                navLinks.style.padding = '1rem';
                navLinks.style.gap = '1rem';
                navLinks.style.borderBottom = '1px solid rgba(212,168,67,0.2)';
            });
        }
    }

    // ============ 上香功能 ============
    function lightIncense() {
        if (State.incenseCount >= State.incenseLimit) {
            const msg = t('blessing.limit');
            showBlessingAnimation(msg);
            return;
        }

        State.incenseCount++;
        State.meritPoints += 10;
        State.fortunePoints += 5;

        // Add incense stick to burner
        addIncenseStickToBurner();

        // Show animation
        const blessingKey = 'blessing.' + State.selectedIncenseType;
        showBlessingAnimation(t(blessingKey));

        // Update UI
        updateIncenseUI();
        updateMeritUI();
        saveState();

        // Create particle effects
        createIncenseParticles();
    }

    function addIncenseStickToBurner() {
        const display = document.getElementById('incense-display');
        if (!display) return;
        const stick = document.createElement('div');
        stick.className = 'incense-stick';
        display.appendChild(stick);

        // Limit display to 10 sticks
        const sticks = display.querySelectorAll('.incense-stick');
        if (sticks.length > 10) {
            sticks[0].remove();
        }
    }

    function showBlessingAnimation(message) {
        const overlay = document.getElementById('incense-animation');
        const text = document.getElementById('blessing-text');
        if (!overlay || !text) return;

        text.textContent = message;
        overlay.classList.remove('hidden');

        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 3000);
    }

    function createIncenseParticles() {
        const emojis = ['✨', '🌟', '💫', '⭐', '🏮'];
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            particle.style.left = (30 + Math.random() * 40) + 'vw';
            particle.style.top = (40 + Math.random() * 20) + 'vh';
            particle.style.fontSize = (1 + Math.random()) + 'rem';
            particle.style.animationDelay = (Math.random() * 0.5) + 's';
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 2000);
        }
    }

    function updateIncenseUI() {
        const countEl = document.getElementById('incense-count');
        const limitEl = document.getElementById('incense-limit');
        if (countEl) countEl.textContent = State.incenseCount;
        if (limitEl) limitEl.textContent = State.incenseLimit;
    }

    function updateMeritUI() {
        const meritEl = document.getElementById('merit-points');
        const fortuneEl = document.getElementById('fortune-points');
        if (meritEl) meritEl.textContent = State.meritPoints;
        if (fortuneEl) fortuneEl.textContent = State.fortunePoints;
    }

    function initIncenseDisplay() {
        // Restore previously lit incense
        const display = document.getElementById('incense-display');
        if (!display) return;
        const count = Math.min(State.incenseCount, 10);
        for (let i = 0; i < count; i++) {
            const stick = document.createElement('div');
            stick.className = 'incense-stick';
            display.appendChild(stick);
        }
    }

    // ============ 求签功能 ============
    function drawFortuneStick() {
        // Check if free or paid
        if (State.freeDivinationUsed && !State.user) {
            alert(State.lang === 'zh' ? '今日免费求签已用，请登录后继续' : 'Free draw used today. Please login.');
            return;
        }

        // Shake animation
        const cylinder = document.getElementById('stick-cylinder');
        if (cylinder) {
            cylinder.classList.add('shaking');
            setTimeout(() => cylinder.classList.remove('shaking'), 1500);
        }

        // Draw after shake
        setTimeout(() => {
            const stickIndex = Math.floor(Math.random() * STICKS_DATA.length);
            const stick = STICKS_DATA[stickIndex];

            displayStickResult(stick);

            if (!State.freeDivinationUsed) {
                State.freeDivinationUsed = true;
            }
            State.meritPoints += 5;
            updateMeritUI();
            saveState();
        }, 1600);
    }

    function displayStickResult(stick) {
        const result = document.getElementById('stick-result');
        if (!result) return;

        // Header
        document.getElementById('stick-num').textContent =
            (State.lang === 'zh' ? '第' : 'No.') + stick.number + (State.lang === 'zh' ? '签' : '');

        const levelEl = document.getElementById('stick-level');
        levelEl.textContent = State.lang === 'zh' ? stick.levelZh : stick.levelEn;
        levelEl.className = 'stick-level ' + stick.level;

        // Poem
        const poemLines = stick.poem;
        for (let i = 0; i < 4; i++) {
            const lineEl = document.getElementById('poem-line' + (i + 1));
            if (lineEl) lineEl.textContent = poemLines[i] || '';
        }

        // Interpretation
        const interpEl = document.getElementById('stick-interpretation');
        if (interpEl) interpEl.textContent = State.lang === 'zh' ? stick.interpretation.zh : stick.interpretation.en;

        // Advice
        const adviceEl = document.getElementById('stick-advice');
        if (adviceEl) adviceEl.textContent = State.lang === 'zh' ? stick.advice.zh : stick.advice.en;

        // Show result
        result.classList.remove('hidden');
        result.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // ============ 算卦功能 ============
    function castHexagram() {
        // Generate 6 yao lines using coin method
        const yaos = [];
        for (let i = 0; i < 6; i++) {
            // Three coins: 2=yin, 3=yang
            const coins = [coinFlip(), coinFlip(), coinFlip()];
            const sum = coins.reduce((a, b) => a + b, 0);
            // 6=old yin(changing), 7=young yang, 8=young yin, 9=old yang(changing)
            yaos.push({
                value: sum,
                isYang: sum % 2 === 1,
                isChanging: sum === 6 || sum === 9
            });
        }

        // Display yao lines
        const hexDisplay = document.getElementById('hexagram-display');
        if (hexDisplay) {
            const lines = hexDisplay.querySelectorAll('.yao-line');
            // yaos[0] is bottom (pos 1), lines displayed top-down (pos 6 first)
            for (let i = 0; i < 6; i++) {
                const yao = yaos[i];
                const line = lines[5 - i]; // Reverse order for display
                if (!line) continue;
                line.className = 'yao-line';
                if (yao.isYang) {
                    line.classList.add('yang');
                } else {
                    line.classList.add('yin');
                }
                if (yao.isChanging) {
                    line.classList.add('changing');
                }
            }
        }

        // Find matching hexagram
        const binary = yaos.map(y => y.isYang ? '1' : '0').join('');
        let hexagram = ICHING_DATA.find(h => h.binary === binary);
        if (!hexagram) {
            // Fallback: pick random
            hexagram = ICHING_DATA[Math.floor(Math.random() * ICHING_DATA.length)];
        }

        // Show name
        const nameEl = document.getElementById('hexagram-name');
        if (nameEl) nameEl.textContent = hexagram.name + ' · ' + hexagram.nameEn;

        // Display result after brief delay
        setTimeout(() => {
            displayHexagramResult(hexagram);
            State.meritPoints += 15;
            updateMeritUI();
            saveState();
        }, 500);
    }

    function coinFlip() {
        // Simulates a coin: 2=tails(yin), 3=heads(yang)
        return Math.random() < 0.5 ? 2 : 3;
    }

    function displayHexagramResult(hex) {
        const result = document.getElementById('hexagram-result');
        if (!result) return;

        document.getElementById('hex-num').textContent =
            (State.lang === 'zh' ? '第' : 'No.') + hex.number + (State.lang === 'zh' ? '卦' : '');
        document.getElementById('hex-symbol').textContent = hex.symbol;
        document.getElementById('hex-judgment-text').textContent = State.lang === 'zh' ? hex.judgment : hex.judgmentEn;
        document.getElementById('hex-image-text').textContent = State.lang === 'zh' ? hex.image : hex.imageEn;
        document.getElementById('hex-interpretation').textContent = State.lang === 'zh' ? hex.interpretation.zh : hex.interpretation.en;
        document.getElementById('hex-advice').textContent = State.lang === 'zh' ? hex.advice.zh : hex.advice.en;

        result.classList.remove('hidden');
        result.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function resetHexagramDisplay() {
        const hexDisplay = document.getElementById('hexagram-display');
        if (!hexDisplay) return;
        hexDisplay.querySelectorAll('.yao-line').forEach(line => {
            line.className = 'yao-line';
        });
        const nameEl = document.getElementById('hexagram-name');
        if (nameEl) nameEl.textContent = '—';
    }

    // ============ 登录处理 ============
    function handleLogin(provider) {
        // Placeholder — in production, this would redirect to OAuth
        const providerNames = {
            wechat: '微信',
            xhs: '小红书',
            facebook: 'Facebook',
            twitter: 'Twitter/X',
            google: 'Google',
            apple: 'Apple'
        };

        // Simulate login for MVP
        State.user = {
            id: 'user_' + Date.now(),
            provider: provider,
            name: providerNames[provider] + '用户',
            level: 'believer', // guest → believer → blessed → devoted
            incenseLimit: 5
        };
        State.incenseLimit = 5;

        // Update UI
        const loginBtn = document.getElementById('login-btn');
        if (loginBtn) {
            loginBtn.textContent = '🙏 ' + State.user.name;
            loginBtn.disabled = true;
        }

        // Close modal
        document.getElementById('login-modal').classList.add('hidden');
        updateIncenseUI();
        saveState();
    }

    // ============ 视觉效果 ============
    function animateStats() {
        // Slowly increment stats for atmosphere
        setInterval(() => {
            State.stats.totalIncense += Math.floor(Math.random() * 3);
            State.stats.totalBlessings += Math.random() < 0.3 ? 1 : 0;
            State.stats.onlineCount += Math.floor(Math.random() * 5) - 2;
            State.stats.onlineCount = Math.max(200, Math.min(500, State.stats.onlineCount));

            const ti = document.getElementById('total-incense');
            const tb = document.getElementById('total-blessings');
            const oc = document.getElementById('online-count');
            if (ti) ti.textContent = State.stats.totalIncense.toLocaleString();
            if (tb) tb.textContent = State.stats.totalBlessings.toLocaleString();
            if (oc) oc.textContent = State.stats.onlineCount;
        }, 3000);
    }

    function createSmokeParticles() {
        const container = document.getElementById('smoke-container');
        if (!container) return;
        setInterval(() => {
            const particle = document.createElement('div');
            particle.className = 'smoke-particle';
            particle.style.left = (20 + Math.random() * 40) + 'px';
            particle.style.animationDuration = (2 + Math.random() * 2) + 's';
            container.appendChild(particle);
            setTimeout(() => particle.remove(), 4000);
        }, 500);
    }

    // ============ 启动 ============
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
