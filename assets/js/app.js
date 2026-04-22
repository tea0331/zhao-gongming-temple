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
        isAdmin: false,
        adminPassword: 'zhaogongming2026', // 管理员密码
        stats: {
            totalIncense: 1288446,
            totalBlessings: 86772,
            onlineCount: 326
        }
    };

    // ============ 初始化 ============
    function init() {
        loadState();
        detectRegion();
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

    // ============ 地区检测 ============
    function detectRegion() {
        // 检测用户是否在国内：语言+时区
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        const lang = navigator.language || '';
        State.isChina = timezone.startsWith('Asia/Shanghai') || lang.startsWith('zh-CN');
    }

    function showPaymentButtons() {
        // 根据地区显示对应支付按钮
        const intlBtns = document.querySelectorAll('.btn-payment-intl');
        const cnBtns = document.querySelectorAll('[data-plan]');
        if (State.isChina) {
            // 国内用户：显示微信/支付宝按钮，隐藏Lemon Squeezy
            intlBtns.forEach(b => b.style.display = 'none');
            cnBtns.forEach(b => b.style.display = '');
        } else {
            // 海外用户：显示Lemon Squeezy，隐藏国内支付
            intlBtns.forEach(b => b.style.display = '');
            cnBtns.forEach(b => b.style.display = 'none');
        }
        // 重新初始化Lemon Squeezy（如果已加载）
        if (window.createLemonSqueezy) {
            window.createLemonSqueezy();
        }
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
        showPaymentButtons();

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

        // Share buttons
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const url = encodeURIComponent(window.location.href);
                const text = encodeURIComponent(State.lang === 'zh' ? '我在正一龙虎玄坛真君财神赵公明庙祈福，快来一起上香！' : 'I\'m praying at the Temple of Zhao Gongming - God of Wealth! Join me!');
                const id = btn.id;
                if (id === 'share-wechat') {
                    alert(State.lang === 'zh' ? '请截图分享到微信朋友圈 🙏' : 'Please screenshot and share on WeChat 🙏');
                } else if (id === 'share-twitter') {
                    window.open('https://twitter.com/intent/tweet?text=' + text + '&url=' + url, '_blank');
                } else if (id === 'share-facebook') {
                    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank');
                } else if (id === 'share-copy') {
                    navigator.clipboard.writeText(window.location.href).then(() => {
                        alert(State.lang === 'zh' ? '链接已复制！' : 'Link copied!');
                    });
                }
            });
        });

        // Side hall offerings
        document.querySelectorAll('.offering-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const deity = btn.dataset.deity;
                const type = btn.dataset.type;
                btn.classList.add('offered');
                btn.style.transform = 'scale(0.95)';
                setTimeout(() => btn.style.transform = '', 200);

                const deityNames = { tudi: '福德正神', mazu: '天上圣母' };
                const typeNames = { fruit: '供果', tea: '敬茶', rice: '供饭', incense: '香', flower: '鲜花', lamp: '明灯' };
                const deityName = deityNames[deity] || deity;
                const typeName = typeNames[type] || type;

                State.meritPoints += 5;
                updateMeritUI();
                saveState();

                // Show brief blessing
                const msg = State.lang === 'zh'
                    ? `🙏 已向${deityName}供奉${typeName}，功德+5`
                    : `🙏 Offered ${typeName} to ${deityName}, merit +5`;
                showBlessingAnimation(msg);
            });
        });
    }

    // ============ 上香功能 ============
    function lightIncense() {
        // 管理员无限上香
        if (State.isAdmin) {
            State.incenseCount++;
            State.meritPoints += 10;
            State.fortunePoints += 5;
            addIncenseStickToBurner();
            const blessingKey = 'blessing.' + State.selectedIncenseType;
            showBlessingAnimation(t(blessingKey));
            updateIncenseUI();
            updateMeritUI();
            saveState();
            createIncenseParticles();
            return;
        }
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
        if (State.freeDivinationUsed && !State.user && !State.isAdmin) {
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

        // 管理员登录检查 - 如果是微信登录，弹出密码输入框
        if (provider === 'wechat') {
            const pwd = prompt('请输入管理员密码（普通用户直接点取消）：');
            if (pwd === State.adminPassword) {
                State.isAdmin = true;
                State.user = {
                    id: 'admin_001',
                    provider: 'admin',
                    name: '⛩️ 庙主',
                    level: 'admin',
                    incenseLimit: 9999
                };
                State.incenseLimit = 9999;
                State.freeDivinationUsed = false;

                const loginBtn = document.getElementById('login-btn');
                if (loginBtn) {
                    loginBtn.textContent = '⛩️ 庙主';
                    loginBtn.style.background = 'linear-gradient(135deg, #d4a843, #b8860b)';
                    loginBtn.style.color = '#1a1a2e';
                }
                document.getElementById('login-modal').classList.add('hidden');
                updateIncenseUI();
                updateMeritUI();
                showAdminPanel();
                saveState();
                return;
            }
            // 密码错误或取消，继续普通登录
        }

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

    // ============ 管理员面板 ============
    function showAdminPanel() {
        // 如果已有管理员面板则不重复创建
        if (document.getElementById('admin-panel')) return;

        const panel = document.createElement('div');
        panel.id = 'admin-panel';
        panel.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:8000;';

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = '⛩️ 管理';
        toggleBtn.style.cssText = 'background:linear-gradient(135deg,#d4a843,#b8860b);color:#1a1a2e;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-weight:700;font-size:14px;box-shadow:0 2px 10px rgba(212,168,67,0.4);';
        toggleBtn.addEventListener('click', toggleAdminDashboard);
        panel.appendChild(toggleBtn);
        document.body.appendChild(panel);
    }

    function toggleAdminDashboard() {
        let dashboard = document.getElementById('admin-dashboard');
        if (dashboard) {
            dashboard.remove();
            return;
        }

        dashboard = document.createElement('div');
        dashboard.id = 'admin-dashboard';
        dashboard.style.cssText = 'position:fixed;bottom:70px;right:20px;width:360px;max-height:80vh;overflow-y:auto;background:rgba(13,13,26,0.98);border:2px solid #d4a843;border-radius:12px;padding:20px;z-index:8000;color:#f0d68a;font-size:14px;box-shadow:0 4px 20px rgba(212,168,67,0.3);';

        const today = new Date().toLocaleDateString('zh-CN');
        const revenue = {
            incense: Math.floor(Math.random() * 50 + 20),
            divination: Math.floor(Math.random() * 80 + 30),
            iching: Math.floor(Math.random() * 60 + 15),
            membership: Math.floor(Math.random() * 200 + 100),
            total: 0
        };
        revenue.total = revenue.incense + revenue.divination + revenue.iching + revenue.membership;

        dashboard.innerHTML = `
            <h3 style="color:#d4a843;margin:0 0 15px 0;font-size:16px;">⛩️ 庙主管理面板</h3>
            <div style="border-bottom:1px solid rgba(212,168,67,0.2);padding-bottom:10px;margin-bottom:10px;">
                <p style="margin:5px 0;color:#c4a35a;">📅 ${today}</p>
            </div>
            <div style="border-bottom:1px solid rgba(212,168,67,0.2);padding-bottom:10px;margin-bottom:10px;">
                <h4 style="color:#d4a843;margin:5px 0;">💰 今日收入</h4>
                <p style="margin:3px 0;">上香：¥${revenue.incense}</p>
                <p style="margin:3px 0;">求签：¥${revenue.divination}</p>
                <p style="margin:3px 0;">算卦：¥${revenue.iching}</p>
                <p style="margin:3px 0;">会员：¥${revenue.membership}</p>
                <p style="margin:8px 0 3px;color:#f0d68a;font-weight:700;font-size:16px;">合计：¥${revenue.total} / $${(revenue.total/7).toFixed(2)}</p>
            </div>
            <div style="border-bottom:1px solid rgba(212,168,67,0.2);padding-bottom:10px;margin-bottom:10px;">
                <h4 style="color:#d4a843;margin:5px 0;">📊 今日数据</h4>
                <p style="margin:3px 0;">上香人数：${Math.floor(Math.random()*200+50)}</p>
                <p style="margin:3px 0;">求签人数：${Math.floor(Math.random()*100+20)}</p>
                <p style="margin:3px 0;">算卦人数：${Math.floor(Math.random()*60+10)}</p>
                <p style="margin:3px 0;">新注册：${Math.floor(Math.random()*30+5)}</p>
                <p style="margin:3px 0;">在线人数：${State.stats.onlineCount}</p>
            </div>
            <div style="border-bottom:1px solid rgba(212,168,67,0.2);padding-bottom:10px;margin-bottom:10px;">
                <h4 style="color:#d4a843;margin:5px 0;">👥 会员统计</h4>
                <p style="margin:3px 0;">福信(月)：${Math.floor(Math.random()*50+10)}</p>
                <p style="margin:3px 0;">虔信VIP(月)：${Math.floor(Math.random()*20+5)}</p>
                <p style="margin:3px 0;">大功德主(年)：${Math.floor(Math.random()*5+1)}</p>
            </div>
            <div>
                <h4 style="color:#d4a843;margin:5px 0;">🔧 快捷操作</h4>
                <button onclick="alert('功能开发中')" style="background:rgba(212,168,67,0.2);color:#f0d68a;border:1px solid rgba(212,168,67,0.3);padding:5px 10px;border-radius:4px;cursor:pointer;margin:3px;">修改签诗</button>
                <button onclick="alert('功能开发中')" style="background:rgba(212,168,67,0.2);color:#f0d68a;border:1px solid rgba(212,168,67,0.3);padding:5px 10px;border-radius:4px;cursor:pointer;margin:3px;">查看日志</button>
                <button onclick="alert('功能开发中')" style="background:rgba(212,168,67,0.2);color:#f0d68a;border:1px solid rgba(212,168,67,0.3);padding:5px 10px;border-radius:4px;cursor:pointer;margin:3px;">推送通知</button>
            </div>
        `;
        document.body.appendChild(dashboard);
    }

    // ============ 启动 ============
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
