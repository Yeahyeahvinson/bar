// 从localStorage加载设置
let settings = {
    baseVolatility: 0.5,
    updateInterval: 2000,
    scrollSpeed: 1, // 每秒滚动的行数
    products: [
        // 精酿啤酒 (20个)
        { code: 'BC01', name: '机车小麦', enName: 'Locomotive Wheat', basePrice: 0.6, volatility: 0.8, trend: -0.3, currentPrice: 0.6 },
        { code: 'BC02', name: '淡色皮尔森', enName: 'Pale Pilsner', basePrice: 0.5, volatility: 0.7, trend: -0.2, currentPrice: 0.5 },
        { code: 'BC03', name: '热带水果IPA', enName: 'Tropical IPA', basePrice: 0.8, volatility: 0.9, trend: 0.1, currentPrice: 0.8 },
        { code: 'BC04', name: '浊色小麦', enName: 'Hazy Wheat', basePrice: 0.55, volatility: 0.6, trend: -0.1, currentPrice: 0.55 },
        { code: 'BC05', name: '比利时修道院', enName: 'Belgian Abbey', basePrice: 0.9, volatility: 0.7, trend: 0.2, currentPrice: 0.9 },
        { code: 'BC06', name: '樱桃酸啤', enName: 'Cherry Sour', basePrice: 0.75, volatility: 0.8, trend: -0.2, currentPrice: 0.75 },
        { code: 'BC07', name: '帝国世涛', enName: 'Imperial Stout', basePrice: 0.85, volatility: 0.7, trend: 0.1, currentPrice: 0.85 },
        { code: 'BC08', name: '波特黑啤', enName: 'Porter', basePrice: 0.7, volatility: 0.6, trend: -0.1, currentPrice: 0.7 },
        { code: 'BC09', name: '柏林酸啤', enName: 'Berliner Weisse', basePrice: 0.65, volatility: 0.8, trend: -0.3, currentPrice: 0.65 },
        { code: 'BC10', name: '双倍IPA', enName: 'Double IPA', basePrice: 0.95, volatility: 0.9, trend: 0.2, currentPrice: 0.95 },
        { code: 'BC11', name: '小麦白啤', enName: 'Witbier', basePrice: 0.6, volatility: 0.5, trend: 0.1, currentPrice: 0.6 },
        { code: 'BC12', name: '赛森啤酒', enName: 'Saison', basePrice: 0.75, volatility: 0.7, trend: -0.2, currentPrice: 0.75 },
        { code: 'BC13', name: '琥珀拉格', enName: 'Amber Lager', basePrice: 0.55, volatility: 0.6, trend: 0.1, currentPrice: 0.55 },
        { code: 'BC14', name: '三倍IPA', enName: 'Triple IPA', basePrice: 1.1, volatility: 0.9, trend: 0.3, currentPrice: 1.1 },
        { code: 'BC15', name: '烟熏波特', enName: 'Smoked Porter', basePrice: 0.8, volatility: 0.7, trend: -0.1, currentPrice: 0.8 },
        { code: 'BC16', name: '水果酸啤', enName: 'Fruit Sour', basePrice: 0.85, volatility: 0.8, trend: 0.2, currentPrice: 0.85 },
        { code: 'BC17', name: '金色艾尔', enName: 'Golden Ale', basePrice: 0.65, volatility: 0.6, trend: 0.1, currentPrice: 0.65 },
        { code: 'BC18', name: '棕色艾尔', enName: 'Brown Ale', basePrice: 0.7, volatility: 0.7, trend: -0.2, currentPrice: 0.7 },
        { code: 'BC19', name: '红色艾尔', enName: 'Red Ale', basePrice: 0.75, volatility: 0.6, trend: 0.1, currentPrice: 0.75 },
        { code: 'BC20', name: '黑麦IPA', enName: 'Rye IPA', basePrice: 0.9, volatility: 0.8, trend: 0.2, currentPrice: 0.9 },
        
        // 鸡尾酒 (15个)
        { code: 'CT01', name: '莓果冰茶', enName: 'Berry Iced Tea', basePrice: 0.65, volatility: 0.6, trend: 0.1, currentPrice: 0.65 },
        { code: 'CT02', name: '百香果气泡', enName: 'Passion Fruit Spritz', basePrice: 0.7, volatility: 0.7, trend: -0.1, currentPrice: 0.7 },
        { code: 'CT03', name: '青柠薄荷', enName: 'Lime Mint', basePrice: 0.6, volatility: 0.5, trend: 0.1, currentPrice: 0.6 },
        { code: 'CT04', name: '椰香芒果', enName: 'Coconut Mango', basePrice: 0.85, volatility: 0.8, trend: -0.3, currentPrice: 0.85 },
        { code: 'CT05', name: '蜜桃气泡', enName: 'Peach Spritz', basePrice: 0.75, volatility: 0.6, trend: 0.2, currentPrice: 0.75 },
        { code: 'CT06', name: '蓝莓莫吉托', enName: 'Blueberry Mojito', basePrice: 0.8, volatility: 0.7, trend: 0.1, currentPrice: 0.8 },
        { code: 'CT07', name: '草莓玛格丽特', enName: 'Strawberry Margarita', basePrice: 0.9, volatility: 0.8, trend: -0.2, currentPrice: 0.9 },
        { code: 'CT08', name: '柠檬金汤力', enName: 'Lemon Gin Tonic', basePrice: 0.7, volatility: 0.6, trend: 0.1, currentPrice: 0.7 },
        { code: 'CT09', name: '西瓜伏特加', enName: 'Watermelon Vodka', basePrice: 0.75, volatility: 0.7, trend: -0.1, currentPrice: 0.75 },
        { code: 'CT10', name: '橙子威士忌', enName: 'Orange Whiskey', basePrice: 0.85, volatility: 0.8, trend: 0.2, currentPrice: 0.85 },
        { code: 'CT11', name: '石榴马天尼', enName: 'Pomegranate Martini', basePrice: 0.9, volatility: 0.7, trend: 0.1, currentPrice: 0.9 },
        { code: 'CT12', name: '菠萝朗姆', enName: 'Pineapple Rum', basePrice: 0.8, volatility: 0.6, trend: -0.2, currentPrice: 0.8 },
        { code: 'CT13', name: '葡萄桑格利亚', enName: 'Grape Sangria', basePrice: 0.75, volatility: 0.7, trend: 0.1, currentPrice: 0.75 },
        { code: 'CT14', name: '樱桃白兰地', enName: 'Cherry Brandy', basePrice: 0.95, volatility: 0.8, trend: 0.2, currentPrice: 0.95 },
        { code: 'CT15', name: '芒果龙舌兰', enName: 'Mango Tequila', basePrice: 0.85, volatility: 0.7, trend: -0.1, currentPrice: 0.85 },
        
        // 无酒精茶饮 (15个)
        { code: 'DT01', name: '冷萃茉莉', enName: 'Cold Brew Jasmine', basePrice: 0.45, volatility: 0.4, trend: 0.1, currentPrice: 0.45 },
        { code: 'DT02', name: '抹茶拿铁', enName: 'Matcha Latte', basePrice: 0.55, volatility: 0.5, trend: -0.1, currentPrice: 0.55 },
        { code: 'DT03', name: '乌龙奶盖', enName: 'Oolong Milk Tea', basePrice: 0.5, volatility: 0.4, trend: 0.1, currentPrice: 0.5 },
        { code: 'DT04', name: '红茶拿铁', enName: 'Black Tea Latte', basePrice: 0.48, volatility: 0.3, trend: -0.2, currentPrice: 0.48 },
        { code: 'DT05', name: '青柠檬茶', enName: 'Lime Tea', basePrice: 0.42, volatility: 0.5, trend: 0.1, currentPrice: 0.42 },
        { code: 'DT06', name: '玫瑰红茶', enName: 'Rose Black Tea', basePrice: 0.5, volatility: 0.4, trend: 0.1, currentPrice: 0.5 },
        { code: 'DT07', name: '桂花乌龙', enName: 'Osmanthus Oolong', basePrice: 0.55, volatility: 0.5, trend: -0.1, currentPrice: 0.55 },
        { code: 'DT08', name: '蜜桃绿茶', enName: 'Peach Green Tea', basePrice: 0.48, volatility: 0.4, trend: 0.1, currentPrice: 0.48 },
        { code: 'DT09', name: '柠檬红茶', enName: 'Lemon Black Tea', basePrice: 0.45, volatility: 0.3, trend: -0.2, currentPrice: 0.45 },
        { code: 'DT10', name: '芒果绿茶', enName: 'Mango Green Tea', basePrice: 0.52, volatility: 0.5, trend: 0.1, currentPrice: 0.52 },
        { code: 'DT11', name: '草莓红茶', enName: 'Strawberry Black Tea', basePrice: 0.55, volatility: 0.4, trend: 0.1, currentPrice: 0.55 },
        { code: 'DT12', name: '蓝莓绿茶', enName: 'Blueberry Green Tea', basePrice: 0.5, volatility: 0.5, trend: -0.1, currentPrice: 0.5 },
        { code: 'DT13', name: '葡萄乌龙', enName: 'Grape Oolong', basePrice: 0.52, volatility: 0.4, trend: 0.1, currentPrice: 0.52 },
        { code: 'DT14', name: '橙子红茶', enName: 'Orange Black Tea', basePrice: 0.48, volatility: 0.3, trend: -0.2, currentPrice: 0.48 },
        { code: 'DT15', name: '西瓜绿茶', enName: 'Watermelon Green Tea', basePrice: 0.5, volatility: 0.5, trend: 0.1, currentPrice: 0.5 }
    ]
};

// 为每个产品初始化价格历史
settings.products.forEach(product => {
    product.priceHistory = [];
    let lastPrice = product.basePrice;
    for (let i = 0; i < 10; i++) {
        // 增加初始波动范围
        const change = (Math.random() - 0.6) * 0.1; // 偏向下跌的波动
        lastPrice = lastPrice * (1 + change);
        product.priceHistory.push(lastPrice);
    }
});

// 保存设置到localStorage
localStorage.setItem('settings', JSON.stringify(settings));

// 产品数据
const products = (JSON.parse(localStorage.getItem('settings')) || {}).products || [
    // 高端烈酒
    { code: '7757-MT', name: '茅台王子', basePrice: 1288, volatility: 0.5, trend: 0 },
    { code: '7757-HN', name: '轩尼诗XO', basePrice: 1688, volatility: 0.5, trend: 0 },
    { code: '7757-GF', name: '格兰菲迪21年', basePrice: 2458, volatility: 0.5, trend: 0 },
    { code: '7757-MC', name: '麦卡伦18年', basePrice: 3288, volatility: 0.5, trend: 0 },
    
    // 潮流鸡尾酒
    { code: '7757-ES', name: 'Espresso Martini', basePrice: 108, volatility: 0.5, trend: 0 },
    { code: '7757-NG', name: 'Negroni Supreme', basePrice: 128, volatility: 0.5, trend: 0 },
    { code: '7757-MJ', name: 'Mojito Luxury', basePrice: 98, volatility: 0.5, trend: 0 },
    { code: '7757-MG', name: 'Margarita Gold', basePrice: 118, volatility: 0.5, trend: 0 },
    
    // 精酿啤酒
    { code: '7757-BR', name: 'Brooklyn IPA', basePrice: 78, volatility: 0.5, trend: 0 },
    { code: '7757-GS', name: 'Gose Sour', basePrice: 88, volatility: 0.5, trend: 0 },
    { code: '7757-ST', name: 'Imperial Stout', basePrice: 98, volatility: 0.5, trend: 0 },
    { code: '7757-BT', name: 'Belgian Triple', basePrice: 108, volatility: 0.5, trend: 0 }
];

// 广告内容
const ads = (JSON.parse(localStorage.getItem('settings')) || {}).ads || [
    {
        title: "🌟 限时特惠活动 🌟",
        content: "高端威士忌品鉴会 VIP专享85折",
        background: "linear-gradient(45deg, #1a237e, #0d47a1)"
    },
    {
        title: "🎉 新品上市 🎉",
        content: "Espresso Martini 独家配方",
        background: "linear-gradient(45deg, #4a148c, #311b92)"
    },
    {
        title: "⚡️ 闪购特惠 ⚡️",
        content: "精酿啤酒节 买二送一",
        background: "linear-gradient(45deg, #004d40, #006064)"
    },
    {
        title: "🎊 周末狂欢 🎊",
        content: "全场洋酒 第二件半价",
        background: "linear-gradient(45deg, #b71c1c, #880e4f)"
    },
    {
        title: "🌈 会员专享 🌈",
        content: "积分双倍 限时24小时",
        background: "linear-gradient(45deg, #006064, #00796b)"
    }
];

// 为每个产品添加价格历史
products.forEach(product => {
    product.currentPrice = product.basePrice;
    // 生成更平滑的初始价格历史
    product.priceHistory = [];
    let lastPrice = product.basePrice;
    for (let i = 0; i < 100; i++) {
        const change = (Math.random() - 0.5) * 0.004; // 最大0.2%波动
        lastPrice = lastPrice * (1 + change);
        product.priceHistory.push(lastPrice);
    }
});

// 当前选中的产品
let selectedProduct = null;

// 更新计时器
let timeLeft = 30;
function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.querySelector('.timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timeLeft = (timeLeft - 1 + 30) % 30;
}

// 更新所有产品的价格和图表
function updateAllProducts() {
    const container = document.getElementById('products-grid');
    if (!container) return;

    // 创建或获取滚动容器
    let scrollContainer = container.querySelector('.scroll-container');
    if (!scrollContainer) {
        scrollContainer = document.createElement('div');
        scrollContainer.className = 'scroll-container';
        container.appendChild(scrollContainer);
    }

    // 更新所有产品数据
    settings.products.forEach(product => {
        if (!product.status) product.status = 'active'; // 确保有状态字段
        const oldPrice = product.currentPrice || product.basePrice;
        const baseVolatility = settings.baseVolatility / 100;
        const volatility = (product.volatility / 100) + baseVolatility;
        const trend = product.trend / 100;
        
        const randomFactor = (Math.random() - 0.5) * 2 * volatility;
        const trendFactor = trend;
        const newPrice = oldPrice * (1 + randomFactor + trendFactor);
        
        product.currentPrice = newPrice;
        if (!product.priceHistory) {
            product.priceHistory = Array(10).fill(product.basePrice);
        }
        product.priceHistory.push(newPrice);
        if (product.priceHistory.length > 10) {
            product.priceHistory.shift();
        }
    });

    // 更新DOM
    scrollContainer.innerHTML = settings.products.map(product => {
        if (product.status !== 'active') return ''; // 只显示在售产品
        
        const change = ((product.currentPrice - product.basePrice) / product.basePrice) * 100;
        const priceChange = Math.abs(product.currentPrice - product.basePrice).toFixed(2);
        
        // 生成价格走势图
        const prices = product.priceHistory;
        const max = Math.max(...prices);
        const min = Math.min(...prices);
        const range = max - min || 1;
        
        // 计算SVG路径点
        const points = prices.map((price, index) => {
            const x = (index / (prices.length - 1)) * 100;
            const y = 40 - ((price - min) / range) * 35;
            return `${x},${y}`;
        }).join(' ');
        
        return `
            <div class="item">
                <div class="item-content">
                    <div class="chart">
                        <svg width="100" height="40" viewBox="0 0 100 40">
                            <polyline
                                points="${points}"
                                fill="none"
                                stroke="${change >= 0 ? 'var(--up-color)' : 'var(--down-color)'}"
                                stroke-width="2.5"
                                vector-effect="non-scaling-stroke"
                            />
                        </svg>
                    </div>
                    <div class="item-info">
                        <div>
                            <div class="item-name">${product.name}</div>
                            <div class="en-name">${product.enName || ''}</div>
                        </div>
                        <div class="price-info">
                            <div class="price ${change >= 0 ? 'up' : 'down'}">
                                ¥${product.currentPrice.toFixed(2)}
                            </div>
                            <div class="change ${change >= 0 ? 'up' : 'down'}">
                                ${change >= 0 ? '▲' : '▼'} ${Math.abs(change).toFixed(1)}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // 计算滚动位置
    const itemHeight = 91; // 90px height + 1px gap
    const visibleRows = Math.floor(container.clientHeight / itemHeight);
    const totalRows = Math.ceil(settings.products.length / 3); // 3列布局
    const maxScroll = itemHeight * (totalRows - visibleRows);
    
    // 获取当前滚动位置
    const currentScroll = parseFloat(scrollContainer.style.transform?.match(/-?\d+\.?\d*/)?.[0] || 0);
    let newScroll = currentScroll - (settings.scrollSpeed * itemHeight / (settings.updateInterval / 1000));
    
    // 如果滚动到底部，重置到顶部
    if (-newScroll >= maxScroll) {
        newScroll = 0;
    }
    
    // 应用滚动
    scrollContainer.style.transform = `translateY(${newScroll}px)`;

    // 更新新闻滚动条
    updateNewsTicker();
}

// 更新新闻滚动条
function updateNewsTicker() {
    const newsContent = document.getElementById('news-content');
    if (!newsContent) return;

    // 确保所有产品都有状态字段
    settings.products.forEach(product => {
        if (!product.status) product.status = 'active';
    });

    // 过滤并生成新闻内容，降低波动阈值到0.5%
    const newsItems = settings.products
        .filter(product => {
            const change = ((product.currentPrice - product.basePrice) / product.basePrice) * 100;
            return Math.abs(change) > 0.5 && product.status === 'active';
        })
        .map(product => {
            const change = ((product.currentPrice - product.basePrice) / product.basePrice) * 100;
            const direction = change > 0 ? '↑' : '↓';
            return `${product.name} <span class="${change >= 0 ? 'up' : 'down'}">${direction}${Math.abs(change).toFixed(1)}%</span>`;
        });

    if (newsItems.length > 0) {
        // 添加分隔符并重复内容
        const newsText = newsItems.join('<span class="separator"> · </span>');
        const repeatedNews = `${newsText}<span class="separator">     </span>`.repeat(3);
        
        // 只在内容发生变化时更新
        if (newsContent.innerHTML !== repeatedNews) {
            // 保存当前动画状态
            const currentTransform = getComputedStyle(newsContent).transform;
            const match = currentTransform.match(/matrix.*\((.*)\)/);
            const currentX = match ? parseFloat(match[1].split(', ')[4]) : 0;
            
            // 创建新的内容元素
            const newElement = document.createElement('div');
            newElement.className = 'news-content';
            newElement.innerHTML = repeatedNews;
            newElement.style.transform = `translateX(${currentX}px)`;
            
            // 平滑过渡
            newsContent.parentNode.appendChild(newElement);
            setTimeout(() => {
                newsContent.remove();
            }, 100);
        }
    } else {
        // 只在内容发生变化时更新
        const defaultNews = '市场稳定 · 暂无大幅波动 · '.repeat(3);
        if (newsContent.innerHTML !== defaultNews) {
            // 保存当前动画状态
            const currentTransform = getComputedStyle(newsContent).transform;
            const match = currentTransform.match(/matrix.*\((.*)\)/);
            const currentX = match ? parseFloat(match[1].split(', ')[4]) : 0;
            
            // 创建新的内容元素
            const newElement = document.createElement('div');
            newElement.className = 'news-content';
            newElement.innerHTML = defaultNews;
            newElement.style.transform = `translateX(${currentX}px)`;
            
            // 平滑过渡
            newsContent.parentNode.appendChild(newElement);
            setTimeout(() => {
                newsContent.remove();
            }, 100);
        }
    }
}

// 广告轮播
let currentAdIndex = 0;
function updateAd() {
    const container = document.getElementById('ad-container');
    if (!container) return;

    const newAd = settings.ads[currentAdIndex];
    
    const slide = document.createElement('div');
    slide.className = 'ad-slide';
    
    if (newAd.imageUrl) {
        slide.style.backgroundImage = `url(${newAd.imageUrl})`;
        slide.style.backgroundSize = 'cover';
        slide.style.backgroundPosition = 'center';
    } else {
        slide.style.background = newAd.background;
    }
    
    slide.innerHTML = `
        <div class="ad-content">
            <div>${newAd.title}</div>
            <div>${newAd.content}</div>
        </div>
    `;

    const oldSlides = container.getElementsByClassName('ad-slide');
    if (oldSlides.length > 0) {
        oldSlides[0].classList.remove('active');
        setTimeout(() => oldSlides[0].remove(), 1000);
    }

    container.appendChild(slide);
    setTimeout(() => slide.classList.add('active'), 100);

    currentAdIndex = (currentAdIndex + 1) % settings.ads.length;
}

// 显示详细视图
function showDetailView(product) {
    selectedProduct = product;
    document.getElementById('grid-view').classList.remove('active');
    document.getElementById('detail-view').classList.add('active');
    updateDetailView();
}

// 更新详细视图
function updateDetailView() {
    if (!selectedProduct) return;

    const product = selectedProduct;
    const change = ((product.currentPrice - product.basePrice) / product.basePrice) * 100;

    document.getElementById('detail-code').textContent = product.code;
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-price').textContent = `¥${product.currentPrice.toFixed(2)}`;
    document.getElementById('detail-price').className = change >= 0 ? 'detail-price up' : 'detail-price down';
    document.getElementById('detail-change').textContent = `${change >= 0 ? '↑' : '↓'} ${Math.abs(change).toFixed(2)}%`;
    document.getElementById('detail-change').className = change >= 0 ? 'detail-change up' : 'detail-change down';

    const chartContainer = document.getElementById('detail-chart');
    const prices = product.priceHistory;
    const max = Math.max(...prices);
    const min = Math.min(...prices);
    const range = max - min || 1;

    const points = prices.map((price, index) => {
        const x = (index / (prices.length - 1)) * 100;
        const y = 100 - ((price - min) / range) * 60 - 20;
        return `${x},${y}`;
    }).join(' ');

    chartContainer.innerHTML = `
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <polyline
                points="${points}"
                stroke="${change >= 0 ? 'var(--up-color)' : 'var(--down-color)'}"
            />
        </svg>
    `;
}

// 切换视图
function toggleView() {
    const gridView = document.getElementById('grid-view');
    const detailView = document.getElementById('detail-view');
    
    if (gridView.classList.contains('active')) {
        if (selectedProduct) {
            gridView.classList.remove('active');
            detailView.classList.add('active');
        }
    } else {
        gridView.classList.add('active');
        detailView.classList.remove('active');
    }
}

// 监听localStorage变化
window.addEventListener('storage', (e) => {
    if (e.key === 'settings') {
        const newSettings = JSON.parse(e.newValue);
        settings = newSettings;
        // 更新定时器
        clearInterval(priceUpdateInterval);
        clearInterval(adUpdateInterval);
        startIntervals();
    }
});

let priceUpdateInterval;
let adUpdateInterval;

// 启动定时器
function startIntervals() {
    priceUpdateInterval = setInterval(updateAllProducts, settings.updateInterval);
    adUpdateInterval = setInterval(updateAd, settings.adInterval);
}

// 初始化
function init() {
    // 如果没有产品数据，从admin.js加载
    if (settings.products.length === 0 && window.adminSettings) {
        settings = window.adminSettings;
    }

    // 开始定时更新
    setInterval(updateAllProducts, settings.updateInterval);
    setInterval(updateTimer, 1000);

    // 初始更新
    updateAllProducts();
    updateTimer();
    updateNewsTicker(); // 初始更新新闻
    
    // 每10秒更新一次新闻
    setInterval(updateNewsTicker, 10000);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init); 