---
title: ACOS 公式推导与分析
created: 2023-08-03
date: 2026-04-13
---
亚马逊平台以及类似电商平台有较通用的指标，几个核心指标形成固定公式，公式推导过程可以让我们分析特定指标对销售和推广的影响。

## ACoS 公式推导

| 名词    | 含义                              | 释义                                              |
| ----- | ------------------------------- | ----------------------------------------------- |
| ACoS  | Advertising Cost of Sales       | Ad Spend / Ad Revenue × 100% 广告花费与广告销售额的比值      |
| ROAS  | Return on Ad Spend              | Ad Revenue / Ad Spend 广告销售额与广告花费的比值，与 ACoS 互为倒数 |
| TACoS | Total Advertising Cost of Sales | Ad Spend / Total Sales 广告花费与总销售额的比值             |
| CPC   | Cost Per Click                  | Spend/Click 每产生一次有效点击的成本                        |
| CTR   | Click Through Rate              | Click / Impression × 100% 点击率，点击量占曝光量的比例        |
| CR    | Conversion Rate                 | Order / Click × 100% 转化率，订单量与点击量的比值             |

同时我们知道：

广告总花费 = CPC × 点击量
广告销售额 = 订单量 × 客单价
订单量 = 点击量 × 转化率

根据上述指标，我们可以推导：

ACoS = 广告总花费 / 广告销售额

替换上述一个公式：

ACoS = （CPC × 点击量）/（订单量 × 客单价）
ACoS = （CPC × 点击量）/（点击量 × 转化率 × 客单价）

两边同时约掉点击量，得出：

ACoS = CPC /（转化率 × 客单价）

由上可得，我们能够控制的指标分别是：CPC、转化率和客单价。因此，想要降低 ACoS，我们就要控制 CPC、转化率或产品的客单价（降低 CPC，提升转化率或优化客单价）。其中，CPC 越高，ACoS 越高；客单价越低，ACoS  越高；转化率越低，ACoS 越高。

在有些情况下，CPC 与转化率正相关。

新品无销售记录的 listing 有新品保护期，但 CPC 会相对比有销售记录的 listing 更高。

小类目的核心大词平均转化率约等于小类目整体转化率。（查询路径：菜单 - 增长 - 商机探测器）

在深耕一个类目时，转化率不应低于小类目整体转化率。优秀的新品转化率可以达到小类目整体转化率的1.5倍或以上。当转化率指标优秀时，稍高的 ACoS 是可以接受的（稍高的 CPC 或稍低的平均销售额）。