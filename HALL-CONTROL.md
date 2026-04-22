# 财神庙偏殿开放控制

*创建时间：2026-04-22*

## 当前状态

| 偏殿 | 神明 | 状态 | 条件 |
|------|------|------|------|
| 正殿 | 赵公明 | ✅ 已开放 | 老板亲自去上海财神庙请示 |
| 偏殿一 | 土地公土地母 | 🔒 隐藏 | 老板去实体土地庙请示后告知 |
| 偏殿二 | 妈祖 | 🔒 隐藏 | 老板赴湄洲岛天后祖庙请示后告知 |

## 开放操作

当老板告知某位神明已允准，执行以下操作：

### 开放土地公偏殿
1. 编辑 `/workspace/zhao-gongming-temple/index.html`
2. 找到 `<section id="tudi" class="side-hall-section hidden"`，删除 `hidden`
3. 找到导航中的 `class="nav-hidden" data-requires-permission="tudi"`，删除 `nav-hidden`
4. 在开光法会中，将"🔒 待请示"改为"✅ 已允准"
5. 修改每日上香工作流，将土地公标记从"⏳ 待允准"改为"✅ 已燃"
6. git commit & push

### 开放妈祖偏殿
1. 编辑 `/workspace/zhao-gongming-temple/index.html`
2. 找到 `<section id="mazu" class="side-hall-section mazu-section hidden"`，删除 `hidden`
3. 找到导航中的 `class="nav-hidden" data-requires-permission="mazu"`，删除 `nav-hidden`
4. 在开光法会中，将"🔒 待赴湄洲岛请示"改为"✅ 已允准"
5. 修改每日上香工作流，将妈祖标记从"⏳ 待赴湄洲岛"改为"✅ 已燃"
6. git commit & push

## 每日自动上香

- **工作流**：`daily-incense.yml`（asuan-scheduler仓库）
- **时间**：每天北京时间 09:00（UTC 01:00）
- **内容**：
  - 赵公明：3炷香（招财/平安/事业）✅
  - 土地公：3炷香（待允准）⏳
  - 妈祖：3炷香（待赴湄洲岛）⏳
- 老板也会亲自去实体庙上香

## 开光吉日

**选定日期**：2026年5月17日（农历四月初一）星期日

备选吉日：5月5日、5月11日、5月12日、5月29日
