// 从localStorage加载设置
let settings = JSON.parse(localStorage.getItem('settings')) || {
    baseVolatility: 0.5,
    updateInterval: 2000,
    adInterval: 8000,
    scrollSpeed: 1, // 滚动速度（每秒移动的产品数）
    products: [
        // 高端白酒
        { code: '7757-MT', name: '茅台王子', basePrice: 1288, volatility: 0.5, trend: 0 },
        { code: '7757-WL', name: '五粮液', basePrice: 1399, volatility: 0.5, trend: 0 },
        { code: '7757-JG', name: '剑南春', basePrice: 889, volatility: 0.5, trend: 0 },
        { code: '7757-GJ', name: '国窖1573', basePrice: 1199, volatility: 0.5, trend: 0 },
        { code: '7757-LZ', name: '泸州老窖', basePrice: 969, volatility: 0.5, trend: 0 },
        
        // 威士忌
        { code: '7757-HN', name: '轩尼诗XO', basePrice: 1688, volatility: 0.5, trend: 0 },
        { code: '7757-MC', name: '麦卡伦18年', basePrice: 3288, volatility: 0.5, trend: 0 },
        { code: '7757-GF', name: '格兰菲迪21年', basePrice: 2458, volatility: 0.5, trend: 0 },
        { code: '7757-JW', name: '尊尼获加蓝牌', basePrice: 688, volatility: 0.5, trend: 0 },
        { code: '7757-JD', name: '杰克丹尼', basePrice: 299, volatility: 0.5, trend: 0 },
        
        // 鸡尾酒
        { code: '7757-ES', name: 'Espresso Martini', basePrice: 108, volatility: 0.5, trend: 0 },
        { code: '7757-NG', name: 'Negroni Supreme', basePrice: 128, volatility: 0.5, trend: 0 },
        { code: '7757-MJ', name: 'Mojito Luxury', basePrice: 98, volatility: 0.5, trend: 0 },
        { code: '7757-MG', name: 'Margarita Gold', basePrice: 118, volatility: 0.5, trend: 0 },
        { code: '7757-LD', name: 'Long Island', basePrice: 138, volatility: 0.5, trend: 0 },
        
        // 精酿啤酒
        { code: '7757-BR', name: 'Brooklyn IPA', basePrice: 78, volatility: 0.5, trend: 0 },
        { code: '7757-GS', name: 'Gose Sour', basePrice: 88, volatility: 0.5, trend: 0 },
        { code: '7757-ST', name: 'Imperial Stout', basePrice: 98, volatility: 0.5, trend: 0 },
        { code: '7757-BT', name: 'Belgian Triple', basePrice: 108, volatility: 0.5, trend: 0 },
        { code: '7757-PS', name: 'Porter Strong', basePrice: 92, volatility: 0.5, trend: 0 },

        // 红酒
        { code: '7757-LP', name: 'Lafite Rothschild', basePrice: 4999, volatility: 0.5, trend: 0 },
        { code: '7757-LT', name: 'Latour', basePrice: 5299, volatility: 0.5, trend: 0 },
        { code: '7757-MG', name: 'Margaux', basePrice: 4599, volatility: 0.5, trend: 0 },
        { code: '7757-RM', name: 'Romanée-Conti', basePrice: 12999, volatility: 0.5, trend: 0 },
        { code: '7757-PT', name: 'Petrus', basePrice: 19999, volatility: 0.5, trend: 0 },

        // 清酒
        { code: '7757-DG', name: '獭祭23', basePrice: 1288, volatility: 0.5, trend: 0 },
        { code: '7757-KB', name: '久保田', basePrice: 499, volatility: 0.5, trend: 0 },
        { code: '7757-HK', name: '白鹤', basePrice: 299, volatility: 0.5, trend: 0 },
        { code: '7757-MS', name: '松竹梅', basePrice: 199, volatility: 0.5, trend: 0 },
        { code: '7757-GK', name: '剑菊', basePrice: 399, volatility: 0.5, trend: 0 },

        // 伏特加
        { code: '7757-GG', name: 'Grey Goose', basePrice: 399, volatility: 0.5, trend: 0 },
        { code: '7757-BV', name: 'Belvedere', basePrice: 459, volatility: 0.5, trend: 0 },
        { code: '7757-AB', name: 'Absolut', basePrice: 199, volatility: 0.5, trend: 0 },
        { code: '7757-SM', name: 'Smirnoff', basePrice: 159, volatility: 0.5, trend: 0 },
        { code: '7757-CR', name: 'Ciroc', basePrice: 359, volatility: 0.5, trend: 0 },

        // 朗姆酒
        { code: '7757-BC', name: 'Bacardi', basePrice: 199, volatility: 0.5, trend: 0 },
        { code: '7757-CP', name: 'Captain Morgan', basePrice: 179, volatility: 0.5, trend: 0 },
        { code: '7757-HV', name: 'Havana Club', basePrice: 229, volatility: 0.5, trend: 0 },
        { code: '7757-MT', name: 'Matusalem', basePrice: 299, volatility: 0.5, trend: 0 },
        { code: '7757-ZC', name: 'Zacapa', basePrice: 799, volatility: 0.5, trend: 0 },

        // 龙舌兰
        { code: '7757-PT', name: 'Patron', basePrice: 699, volatility: 0.5, trend: 0 },
        { code: '7757-DJ', name: 'Don Julio', basePrice: 799, volatility: 0.5, trend: 0 },
        { code: '7757-CM', name: 'Casamigos', basePrice: 599, volatility: 0.5, trend: 0 },
        { code: '7757-HR', name: 'Herradura', basePrice: 499, volatility: 0.5, trend: 0 },
        { code: '7757-ES', name: 'El Jimador', basePrice: 299, volatility: 0.5, trend: 0 },

        // 金酒
        { code: '7757-HP', name: 'Hendricks', basePrice: 399, volatility: 0.5, trend: 0 },
        { code: '7757-BB', name: 'Bombay Sapphire', basePrice: 299, volatility: 0.5, trend: 0 },
        { code: '7757-TG', name: 'Tanqueray', basePrice: 279, volatility: 0.5, trend: 0 },
        { code: '7757-MK', name: 'Monkey 47', basePrice: 599, volatility: 0.5, trend: 0 },
        { code: '7757-BG', name: 'Beefeater', basePrice: 199, volatility: 0.5, trend: 0 }
    ],
    ads: [
        {
            title: "🌟 限时特惠活动 🌟",
            content: "高端威士忌品鉴会 VIP专享85折",
            background: "linear-gradient(45deg, #1a237e, #0d47a1)",
            imageUrl: ""
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
    ]
};

// 初始化页面
function initPage() {
    document.getElementById('baseVolatility').value = settings.baseVolatility;
    document.getElementById('updateInterval').value = settings.updateInterval;
    document.getElementById('adInterval').value = settings.adInterval;
    document.getElementById('scrollSpeed').value = settings.scrollSpeed;
    
    renderProducts();
    renderAds();
}

// 渲染产品列表
function renderProducts() {
    const container = document.getElementById('productList');
    container.innerHTML = settings.products.map((product, index) => `
        <div class="product-item">
            <div class="product-header">
                <div class="product-status">
                    <span class="status-badge ${product.status === 'active' ? 'status-active' : 
                        product.status === 'sold-out' ? 'status-sold-out' : 'status-hidden'}">
                        ${product.status === 'active' ? '在售' : 
                          product.status === 'sold-out' ? '售罄' : '下架'}
                    </span>
                    <button onclick="toggleProductStatus(${index})">
                        ${product.status === 'active' ? '设为售罄' : 
                          product.status === 'sold-out' ? '恢复上架' : '重新上架'}
                    </button>
                    <button onclick="deleteProduct(${index})">删除</button>
                </div>
            </div>
            <div class="control-group">
                <label>代码</label>
                <input type="text" value="${product.code}" data-field="code" data-index="${index}" onchange="updateProduct(${index}, 'code', this.value)">
            </div>
            <div class="control-group">
                <label>名称</label>
                <input type="text" value="${product.name}" data-field="name" data-index="${index}" onchange="updateProduct(${index}, 'name', this.value)">
            </div>
            <div class="control-group">
                <label>英文名称</label>
                <input type="text" value="${product.enName || ''}" data-field="enName" data-index="${index}" onchange="updateProduct(${index}, 'enName', this.value)">
            </div>
            <div class="control-group">
                <label>基准价格 (元/10ml)</label>
                <input type="number" value="${product.basePrice}" min="0.3" max="1.6" step="0.01" data-field="basePrice" data-index="${index}" onchange="updateProduct(${index}, 'basePrice', this.value)">
            </div>
            <div class="control-group">
                <label>个股波动率 (%)</label>
                <input type="number" value="${product.volatility * 100}" min="0" max="100" step="1" data-field="volatility" data-index="${index}" onchange="updateProduct(${index}, 'volatility', this.value)">
            </div>
            <div class="control-group">
                <label>趋势 (%)</label>
                <input type="number" value="${product.trend * 100}" min="-50" max="20" step="1" data-field="trend" data-index="${index}" onchange="updateProduct(${index}, 'trend', this.value)">
            </div>
            <div class="trend-info">
                当前价格: ¥${product.currentPrice.toFixed(2)} 元/10ml<br>
                涨跌幅: ${(((product.currentPrice - product.basePrice) / product.basePrice) * 100).toFixed(2)}%
            </div>
        </div>
    `).join('');
}

// 渲染广告列表
function renderAds() {
    const container = document.getElementById('adList');
    container.innerHTML = settings.ads.map((ad, index) => `
        <div class="ad-item">
            <div class="control-group">
                <label>标题</label>
                <input type="text" value="${ad.title}" data-field="title" data-index="${index}">
            </div>
            <div class="control-group">
                <label>内容</label>
                <input type="text" value="${ad.content}" data-field="content" data-index="${index}">
            </div>
            <div class="control-group">
                <label>背景</label>
                <input type="text" value="${ad.background}" data-field="background" data-index="${index}">
            </div>
            <div class="control-group">
                <label>广告图片</label>
                <input type="file" accept="image/*" class="file-input" onchange="handleImageUpload(${index}, this)">
                ${ad.imageUrl ? `<img src="${ad.imageUrl}" class="image-preview" alt="广告预览">` : ''}
            </div>
            <button onclick="deleteAd(${index})">删除</button>
        </div>
    `).join('');
}

// 处理图片上传
function handleImageUpload(index, input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            settings.ads[index].imageUrl = e.target.result;
            saveSettings();
            renderAds();
            showStatus('广告图片已更新');
        };
        reader.readAsDataURL(file);
    }
}

// 更新全局设置
function updateGlobalSettings() {
    settings.baseVolatility = parseFloat(document.getElementById('baseVolatility').value);
    settings.updateInterval = parseInt(document.getElementById('updateInterval').value);
    settings.adInterval = parseInt(document.getElementById('adInterval').value);
    settings.scrollSpeed = parseFloat(document.getElementById('scrollSpeed').value);
    
    saveSettings();
    showStatus('全局设置已更新');
}

// 更新产品信息
function updateProduct(index, field, value) {
    const product = settings.products[index];
    
    if (!value) {
        showStatus(`请填写${field}字段`);
        return;
    }
    
    if (field === 'basePrice') {
        const price = parseFloat(value);
        if (isNaN(price) || price < 0.3 || price > 1.6) {
            showStatus('基准价格必须在0.3-1.6元/10ml之间');
            return;
        }
        product[field] = price;
    } else if (field === 'volatility') {
        const volatility = parseFloat(value) / 100;
        if (isNaN(volatility) || volatility < 0 || volatility > 1) {
            showStatus('波动率必须在0-100%之间');
            return;
        }
        product[field] = volatility;
    } else if (field === 'trend') {
        const trend = parseFloat(value) / 100;
        if (isNaN(trend) || trend < -0.5 || trend > 0.2) {
            showStatus('趋势必须在-50%到+20%之间');
            return;
        }
        product[field] = trend;
    } else {
        product[field] = value;
    }
    
    saveSettings();
    showStatus('产品已更新');
}

// 更新广告信息
function updateAd(index, field, value) {
    settings.ads[index][field] = value;
    saveSettings();
    showStatus('广告信息已更新');
}

// 添加新广告
function addNewAd() {
    settings.ads.push({
        title: "新广告",
        content: "广告内容",
        background: "linear-gradient(45deg, #1a237e, #0d47a1)",
        imageUrl: "" // 确保新广告有imageUrl字段
    });
    saveSettings();
    renderAds();
    showStatus('新广告已添加');
}

// 删除广告
function deleteAd(index) {
    if (settings.ads.length > 1) {
        settings.ads.splice(index, 1);
        saveSettings();
        renderAds();
        showStatus('广告已删除');
    } else {
        showStatus('至少需要保留一个广告');
    }
}

// 保存设置到localStorage
function saveSettings() {
    localStorage.setItem('settings', JSON.stringify(settings));
}

// 显示状态信息
function showStatus(message) {
    const status = document.getElementById('status');
    status.textContent = message;
    status.classList.add('active');
    setTimeout(() => status.classList.remove('active'), 2000);
}

// 更新所有广告
function updateAllAds() {
    settings.ads.forEach((ad, index) => {
        ad.title = document.querySelector(`input[data-field="title"][data-index="${index}"]`).value;
        ad.content = document.querySelector(`input[data-field="content"][data-index="${index}"]`).value;
        ad.background = document.querySelector(`input[data-field="background"][data-index="${index}"]`).value;
        // 保持图片URL不变
        if (!ad.imageUrl) {
            ad.imageUrl = '';
        }
    });
    saveSettings();
    showStatus('所有广告已更新');
}

// 更新所有产品
function updateAllProducts() {
    settings.products.forEach((product, index) => {
        product.code = document.querySelector(`input[data-field="code"][data-index="${index}"]`).value;
        product.name = document.querySelector(`input[data-field="name"][data-index="${index}"]`).value;
        product.enName = document.querySelector(`input[data-field="enName"][data-index="${index}"]`).value;
        product.basePrice = parseFloat(document.querySelector(`input[data-field="basePrice"][data-index="${index}"]`).value);
        product.volatility = parseFloat(document.querySelector(`input[data-field="volatility"][data-index="${index}"]`).value) / 100;
        product.trend = parseFloat(document.querySelector(`input[data-field="trend"][data-index="${index}"]`).value) / 100;
    });
    
    saveSettings();
    showStatus('所有产品已更新');
}

// 添加新产品
function addNewProduct() {
    const code = document.getElementById('newCode').value;
    const name = document.getElementById('newName').value;
    const enName = document.getElementById('newEnName').value;
    const basePrice = parseFloat(document.getElementById('newBasePrice').value);
    const volatility = parseFloat(document.getElementById('newVolatility').value) / 100;
    const trend = parseFloat(document.getElementById('newTrend').value) / 100;

    if (!code || !name || !enName || isNaN(basePrice) || isNaN(volatility) || isNaN(trend)) {
        showStatus('请填写所有必填字段');
        return;
    }

    if (basePrice < 0.3 || basePrice > 1.6) {
        showStatus('基准价格必须在0.3-1.6元/10ml之间');
        return;
    }

    const newProduct = {
        code,
        name,
        enName,
        basePrice,
        volatility,
        trend,
        currentPrice: basePrice,
        status: 'active',
        priceHistory: Array(10).fill(basePrice)
    };

    settings.products.push(newProduct);
    saveSettings();
    renderProducts();
    showStatus('新产品已添加');

    // 清空表单
    document.getElementById('newCode').value = '';
    document.getElementById('newName').value = '';
    document.getElementById('newEnName').value = '';
    document.getElementById('newBasePrice').value = '';
    document.getElementById('newVolatility').value = '';
    document.getElementById('newTrend').value = '';
}

// 切换产品状态
function toggleProductStatus(index) {
    const product = settings.products[index];
    if (product.status === 'active') {
        product.status = 'sold-out';
    } else if (product.status === 'sold-out') {
        product.status = 'active';
    } else {
        product.status = 'active';
    }
    saveSettings();
    renderProducts();
    showStatus('产品状态已更新');
}

// 删除产品
function deleteProduct(index) {
    if (confirm('确定要删除这个产品吗？')) {
        settings.products.splice(index, 1);
        saveSettings();
        renderProducts();
        showStatus('产品已删除');
    }
}

// 更新单个产品
function updateSingleProduct(index) {
    const product = settings.products[index];
    const inputs = document.querySelectorAll(`input[data-index="${index}"]`);
    
    let hasError = false;
    inputs.forEach(input => {
        const field = input.dataset.field;
        const value = input.value;
        
        if (!value) {
            showStatus(`请填写${field}字段`);
            hasError = true;
            return;
        }
        
        if (field === 'basePrice') {
            const price = parseFloat(value);
            if (isNaN(price) || price < 0.3 || price > 1.6) {
                showStatus('基准价格必须在0.3-1.6元/10ml之间');
                hasError = true;
                return;
            }
            product[field] = price;
        } else if (field === 'volatility') {
            const volatility = parseFloat(value) / 100;
            if (isNaN(volatility) || volatility < 0 || volatility > 1) {
                showStatus('波动率必须在0-100%之间');
                hasError = true;
                return;
            }
            product[field] = volatility;
        } else if (field === 'trend') {
            const trend = parseFloat(value) / 100;
            if (isNaN(trend) || trend < -0.5 || trend > 0.2) {
                showStatus('趋势必须在-50%到+20%之间');
                hasError = true;
                return;
            }
            product[field] = trend;
        } else {
            product[field] = value;
        }
    });
    
    if (!hasError) {
        saveSettings();
        showStatus('产品已更新');
        renderProducts(); // 重新渲染以更新显示
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initPage); 