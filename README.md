# 正一龙虎玄坛真君财神赵公明 - 财神庙

> Virtual Temple of Zhao Gongming - The Orthodox God of Wealth

🌐 **线上地址**: [https://tea0331.github.io/zhao-gongming-temple/](https://tea0331.github.io/zhao-gongming-temple/)

## 功能

- 🙏 **免费上香** — 6种香型，每日3炷免费
- 🏮 **求签** — 60签签诗，AI解签
- ☯ **算卦** — 64卦易经，硬币起卦法
- 🌐 **中英双语** — 一键切换
- 💳 **支付** — 国内微信/支付宝 + 海外Lemon Squeezy
- 📱 **响应式** — 适配手机和桌面

## 技术栈

- 纯静态HTML/CSS/JS
- 零成本部署（GitHub Pages / Cloudflare Pages）
- Cloudflare Workers（API，后续）
- Cloudflare D1（数据库，后续）

## 部署

### GitHub Pages（当前）
自动部署：push到main分支自动触发

### Cloudflare Pages（海外加速）
```bash
npm install -g wrangler
wrangler pages deploy . --project-name=zhao-gongming-temple
```

## 支付配置

### 国内（微信支付/支付宝）
1. 上海公司申请微信商户号
2. 配置回调URL
3. 前端调用微信H5支付

### 海外（Lemon Squeezy）
1. 注册 [lemonsqueezy.com](https://lemonsqueezy.com)
2. 创建产品（Fortune Reading, Membership等）
3. 获取Checkout链接，替换HTML中的placeholder
4. 自动处理全球税务

## 许可

© 2026 Temple of Zhao Gongming. All rights reserved.
