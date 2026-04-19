---
title: AI
date: 2026-04-19
created: 2022-12-05
---
2025-06-05
以下是一份个人角度的主观 AI 编年史，记录了我从初识 ChatGPT（2022年12月5日）到 DeepSeek 横空出世的过程，以及期间与 AI 行业相关的种种事件。顺序观看，能看到历史的车轮正在滚滚向前。

关于 AI 编年史，[Artificial Intelligence Timeline](https://nhlocal.github.io/AiTimeline) 整理得更加客观且清晰易读。

---

## 1H26

- 2026-04-19 月初接触到 Hermes Agent 后，冷静尝试使用之，具体在 [[now]] 中有所记录。前几天陷入抄袭风波，但开发者非常刚，强硬否决了自己抄袭的指控。在这半个月里，他的更新频率比同期的 OpenClaw 更快，后者刻意放缓更新进度，重点放在了安全和稳定性上，Hermes Agent 还处于告诉增长期。我安装时版本号仍是 v0.5.0，现在已经 v0.10.0。
- 2026-04-19 Anthropic 的更新发布速度极快。昨天发布了 [Claude Design](https://www.ithome.com/0/940/613.htm)，新晋的 token 消耗大户。这不是我的专业方向，但看市场反应，Figma 之类的企业都受到股价震荡。4月16日发布了 [Opus 4.7](https://www.ithome.com/0/940/099.htm)，距离 4.6 系列只差了两个月。这个迭代速度，很难想象 Anthropic 除了 Mythos 之外还藏着什么。
- 2026-04-08 一周过去，AI 行业又是天翻地覆。今天智谱[发布了 GLM-5.1](https://www.ithome.com/0/936/851.htm)，分数极其高，性能极其强劲，而且如同之前 DeepSeek 发布那样低调，但是抵挡不住这个模型带来的用户的讨论声量，它甚至还开源了！不过我一直以来都买不到 GLM 的额度，也没有机会尝试一下。
	- 同样也是今天，DeepSeek 网页端和 App 端[小小灰度](https://www.ithome.com/0/937/153.htm)了一下，新会话首页变成两个按钮：快速模式和专家模式。稍微尝试了一下专家模式，没有问特别复杂的问题，还没有体会到非常大的变化。V4 迟迟不来，四月已经过去了四分之一。
	- 同样还是今天，Anthopic [发布了传说中的 Mythos](https://www.ithome.com/0/936/760.htm)。根据之前的爆料，这个模型挖出了包括 Linux 内核、FreeBSD、Firefox 在内的数个基建级别软件的 0day 漏洞，光是这个描述就让人感到背后发凉。早期这个模型只给几个基建级企业（亚马逊、Linux 基金会、微软、英伟达、谷歌、思科、博通等）使用。可惜我等普通中国人，没有那个福气和财力可以稳定使用 Claude 系列模型。前两天甚至[封禁](https://www.ithome.com/0/936/065.htm)了用 Plan 使用 OpenClaw 的入口。A社这家企业，卑鄙是真的卑鄙，强也是真的强。
	- 过去这段时间，最震动行业的事件，估计就是 Claude Code 被[“开源”](https://www.ithome.com/0/934/986.htm)了。短短24小时，被泄露出来的源码库被无数人 fork 和 clone，甚至还有用 Python 重写的。我特别喜欢这种场景。广大 AI Coding Agent 有了一位行业最强老师可以学习。我也趁机学习了什么叫做 Harness。向老师致敬。
	- Google 默默[发布并开源](https://www.ithome.com/0/935/537.htm)了 Gemma 4 系列大模型，其中 E2B 和 E4B 两个参数（20亿vs40亿参数）支持在手机上本地离线使用，经过一番尝试，速度居然可以达到 30-40 tokens/s 以及低延迟，可以满足一些基本使用场景。
	- 小米推出的 MiMo Token Plan，性价比实在是太低了。
	- 对了，OpenAI 关停了 Sora，Meta 又有新模型发布，但无人在意。
- 2026-03-30 对 OpenClaw 的使用逐渐系统化。主力模型从 MiniMax M2.7 切换至阶跃星辰的 Step 3.5 Flash，效果出乎意料的好。中间短暂试用过小米的新模型 MiMo V2 Pro，效果也很不错，就是价格实在是有点贵。以我目前的 token 消耗频率，一个月得花四五千。
	- 这段时间，OpenClaw 总算是形成了生产力，vibe 了两个 GitHub 小项目，一个面向个人，一个面向我从事的跨境电商业务。以此为起点，我觉得将来这类 Agent 大有可为。
- 2026-03-17 过去半个月以来，OpenClaw 热度高到有些魔幻，特别是在国内，几乎所有大厂都下场做了自己的类 Claw 项目。这边从3月6日鹅厂在线下免费安装 OpenClaw 开始，各家大小厂接连发布停不下来，从传统互联网大厂到[英伟达](https://www.ithome.com/0/929/687.htm)，甚至[九号电动车](https://www.ithome.com/0/928/398.htm)都接入 OpenClaw；另一边国家应急中心在3月10日发布 [OpenClaw 安全应用的风险提示](https://www.cert.org.cn/publish/main/11/2026/20260312144519429724511/20260312144519429724511_.html)，今天国家安全部[发布“龙虾”安全养殖手册](https://mp.weixin.qq.com/s/VOSy-kWs6zuNIBn40dWGWQ)，场面比想象中要更魔幻些。
	- 因为场面过于魔幻，因此必然要思考这些现象背后的本质。最容易理解的是模型大厂和云服务厂商可以消耗滞销的 token 和云服务器，地方政府推动可以提振消费，中央灭火是为了防范风险。说到风险，360 果然还是保留自身伟大的[企业文化](https://www.ithome.com/0/929/718.htm)。
- 2026-03-04 一个半月人工智能行业能发生许多事。MiniMax Coding Plan 支持 M2.5 之后马上更换，高强度使用的感受是比 M2.1 稍稍变强，但没有特别明显。
	- 2月底，Anthropic 这家公司[发布文章指责](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks)国产几大模型蒸馏 Claude 模型数据。事件一出立刻引发群嘲，所有人都对他冷嘲热讽（[爱范儿](https://mp.weixin.qq.com/s/9rIpBO0KHIzfn32rVpxh3g)，[卡兹克](https://mp.weixin.qq.com/s/1i5iYJKpYi9YvQWn1zrFAg)，[马斯克](https://www.ithome.com/0/923/031.htm)），我也加入了这个行列。然而短短几天过去，Anthropic 又因为[强硬拒绝](https://mp.weixin.qq.com/s/u1heI8-8aKPzl57oTMk-Qg)美国战争部对于将其模型用于所有目的的要求，被战争部列为“供应链风险”，不久后 OpenAI [迅速滑跪](https://www.ithome.com/0/924/704.htm)，导致全球开始了一股[抵制 OpenAI](https://www.ithome.com/0/924/762.htm) 的风潮。甚至还有一个叫做 [QuitGPT](https://quitgpt.org/) 的网站，截止今天已经有250万人加入抵制。
	- 依我看，这两家公司是卧龙凤雏。
- 2026-03-04 OpenClaw 依旧现象级传播。国产几个大小厂迅速跟进，相继发布 [CoPaw](https://copaw.agentscope.io/)，[KimiClaw](https://www.kimi.com/bot)，[MaxClaw](https://agent.minimaxi.com/) 等等本地或云端类 OpenClaw 应用。我想这是今年以及接下来几年大语言模型发展的重要趋势（Agent）。
	- 对了，Peter Steinberger 在2月14日[宣布加入 OpenAI](https://steipete.me/posts/2026/openclaw)。我不知道是好是坏。
- 2026-02-12 短短两天时间，智谱[发布并开源了 GLM-5](https://mp.weixin.qq.com/s/MVo6DIcGNje_YtLgVa4PaQ)，对标 Anthropic Opus 4.5。根据各大 KOL 的反馈，这个模型在 Coding 层面已经妥妥能跟 Opus 4.5 扳扳手腕，甚至有些领取超越。关键的是 GLM-5 基于 MIT 许可开源，2026年又将是精彩的一年。附上大佬赛博禅心用 GLM-5 做的官方 Showcase 页： https://showcase.z.ai
- 同日我注意到 MiniMax 偷偷发布了 M2.5，[网页端](https://agent.minimaxi.com/)可以见到新的模型已经上线，但仍未官宣，也不知道 Coding Plan 是否支持 M2.5 模型。
- 昨日 DeepSeek 灰度上线 V4 版本，上下文达到 1M。昨日我通过升级 app 成功用上 V4，暂未感到明显提升，但在数字计算方面出了严重问题。
	- 2026-03-04 后来发现不是 V4。
	- 还读了这一篇文章：[互联网已死，Agent 永生](https://mp.weixin.qq.com/s/cX3bYrI9Sq7sOJj0E6V9IQ)，来自 AGENT橘
- 2026-02-11 在业界向来比较低调的字节，在7日内测 Seedance 2.0，9日冲上热搜，海内外众多用户开始寻求 Seedance 2.0 的使用方式。这必然是继25年春节 DeepSeek R1 后又一个国产模型爆火全球。这一次，是实实在在的[世界第一](https://mp.weixin.qq.com/s/HIX7YiLRFTwhjk6mCzxcDA)了。冯骥也对此[发表了感想](https://weibo.com/6603744955/Qr1K9dFKm)，顺便在一天后发了《黑神话：钟馗》的6分钟实机预告，不过和游戏本身无关，纯粹炫技。
	- 没多久后，字节把 Seedream 也更新到 5.0 了。
- 2026-02-06 过去十几天，我深度沉浸在 ~~Clawdbot~~ ~~Moltbot~~ OpenClaw 上，以至于看到 AI 行业的大新闻匆匆撇过便忘。有些事件是值得记录的：
	- 1月26日，阿里发布 [Qwen3-Max-Thinking](https://qwen.ai/blog?id=qwen3-max-thinking) 大模型，我一向对阿里大模型无感，且在 OpenClaw 中 Qwen-flash 和 Qwen-Coder 的实际应用效果不佳，因此没有体验。紧接着1月27日，月之暗面发布 [Kimi K2.5 Thinking](https://www.kimi.com/blog/kimi-k2-5.html)，在海外广受好评，有许多大佬倾情推荐。可惜价格仍有些贵。同日 DeepSeek 开源 [DeepSeek-OCR 2](https://www.ithome.com/0/916/812.htm)，对后来多模态应用发展必有加成。1月28日，谷歌开放了去年8月公布的世界模型 [Genie 3](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/)。这也是未来的主要趋势之一，大佬李飞飞非常看好这个趋势，她的 [World Labs](https://www.worldlabs.ai/) 正在积极推进中。
	- 然后到了今天2月6日（当地时间2月5日），OpenAI 和 Anthropic 几乎同时发布重磅新模型：[GPT-5.3-Codex](https://openai.com/index/introducing-gpt-5-3-codex/) 和 [Claude Opus 4.6](https://www.anthropic.com/news/claude-opus-4-6)，时间线上所有人位置疯狂。这二者都走上了智能体编程的道路。两家公司线下产品互打，线上中门对狙，甚至难得看到 Altman [破大防](https://x.com/sama/status/2019139174339928189)。
- 2026-01-26 这两天最大的爆点是 [Clawdbot](https://clawd.bot/)，作者 [Peter Steinberger](https://steipete.me/)，混身肌肉的硅谷大佬。目前还在琢磨这个应用到底是怎么个事。[官方文档](https://docs.clawd.bot/start/getting-started)，[库](https://github.com/clawdbot/clawdbot)，[终极报告](https://docs.google.com/document/d/1Mz4xt1yAqb2gDxjr0Vs_YOu9EeO-6JYQMSx4WWI8KUA/edit?tab=t.0)。
- 2026-01-20 马圣居然开源了 X 的[推荐算法](https://github.com/xai-org/x-algorithm)。进 repo 一看，已经 2.1k star 了。同日隔壁智谱 [GLM-4.7-Flash](https://huggingface.co/zai-org/GLM-4.7-Flash) 也开源了，只有 30B/A3B。
	- OpenAI 已经打算在 ChatGPT 中加入广告，Google 明确表示不会在 Gemini 中加入广告。这不太符合一家广告公司的基因。
- 2026-01-15 今天 Google 发布了 Gemini 的一项新功能：[Personal Intelligence](https://gemini.google/overview/personal-intelligence/)。打开 Gemini App 的第一秒就弹出这个介绍，核心是从 Google 其他服务如 Gmail，Google Photos，Youtube 等应用中获取和用户相关的信息，来向用户提出更具个性化的回答。我第一反应是想到李彦宏那句著名的“用隐私换便利”，但让我感到害怕的是，我竟然愿意付出我的部分“隐私”来换取使用大语言模型更大的便利。我的前提是，我已经有大量隐私被 Google 长年累月获取。既然被获取了，那就让它们发挥对我而言更大的价值吧。经过测试，我发现现在的 Gemini 确实能精确获取我 Gmail 中与具体某人的邮件来往内容，以及数年前在 Google Photos 中同步的照片。
- 2026-01-13 苹果和 Gemini [合作了](https://blog.google/company-news/inside-google/company-announcements/joint-statement-google-apple/)？这下怕是使苹果从最垃圾 AI 一跃成为最强 AI 硬件设备。马斯克[看不下去](https://www.ithome.com/0/912/658.htm)了。
- 2026-01-04 DeepSeek 开年就发布重磅论文，[mHC: Manifold-Constrained Hyper-Connections](https://arxiv.org/abs/2512.24880)，显然以我等平民是无法看懂的。但隔壁卡总通宵学习，给我们贡献了一个[小白易读版](https://mp.weixin.qq.com/s/e9ULrG8RUYkoN8PDrZjiCQ)。感谢各位大佬给开源社区做出的贡献。
- 再往前几天，便是 [Manus 被 Meta 收购](https://www.ithome.com/0/909/567.htm)的大新闻了。我对这两家公司都毫无好感，但没想到在25年3月一码难求的 Manus 泡沫，成功被 Meta 接盘。但我态度依然，不看好 Manus，也不看好 Meta。业界对此的形容是：在 AI 时代，做出一个泡沫产品，然后被大厂收购。Manus 创始人肖弘甚至顺便捞了一个 Meta 副总裁的位置。
## 2H25

- 2025-12-04 对夸克浏览器失去兴趣。DeepSeek 在12月1日[发布了 DeepSeek V3.2 正式版](https://mp.weixin.qq.com/s/ohsU1xRrYu9xcVD7qu5lNw)，Benchmark 赶上了 GPT-5，低于 Gemini 3 Pro。简单的试用，可以体会到思考和输出比以往快了不少，准确度有一点点提升，幻觉也没有以前那么严重了（还是会有）。现在官方 DeepSeek 仍然不支持记忆，好处是隐私问题更加有保证，劣势是一旦一个对话超出上下文限制，就必须另起新对话，记忆很难完全转移。
- 自从 Gemini 3 Pro 发布以来，我像是之前使用 ChatGPT-4o 那样高强度使用。许多方面都满足我的需求，不仅有了记忆能力，长期开启 Pro 模式能让回答更精确、深刻和高效，在工作和日常生活中我都很难离开 Gemini 3 Pro 了。同时引发担忧：我如此高强度使用 Gemini，交出比以前更多的隐私信息，是否是一种更严重的赛博暴露？
- 2025-11-26 紧跟着千问的发布，夸克今天发布了新版夸克 AI 浏览器，版本号6，在 PC 端就把千问助手内置了。除了今年井喷的各类 AI 浏览器必备的侧边栏 ChatBox 外，夸克浏览器还附送全局千问读屏（共享屏幕）、悬浮球，这二者立马引起我的警觉。出于对新事物的好奇心，我下载安装，然后随后强制导入其他浏览器数据和强制设置默认浏览器又引起我的反感，当场卸载了。希望下一次试用时能好好用用。会下载夸克浏览器的主要原因是我使用夸克网盘，看到多个公众号同时推送软广，以及 Qwen 模型风评还可以。结果让人失望。
- 2025-11-25 谷歌在11月19日发布万众期待的 [Gemini 3](https://blog.google/products/gemini/gemini-3/)，顿时行业惊讶声四起，从行业基准测试结果和实际使用体验来看，这就是当今世界最强大语言模型。我的使用体验也同样，发布后的几天连续高强度使用 Gemini 3 Pro，应用在工作、生活和思考写作上，比以往 ChatGPT 4o 等提供的帮助更精确、更有效率以及更有体验感。随之而来的是 Nano Banana Pro，替代原本就已经很强的 Gemini 2.5 Flash，有些生图结果是几乎完全看不出生图痕迹。我想这个效果已经能应用到生产力场景了。
- 2025-11-17 阿里今天发布了[千问](https://www.qianwen.com/) app。前身是通义，23年4月就发布了，但当时使用体验极差，我嘲讽它（通义千问）是文心一言的下联。现在两年多过去，文心一言依旧毫无兴趣，但今天发布的千问似乎有点东西。首次体验，界面清爽简洁，如同早期的夸克；功能非常齐全，该有的都有，但还未全部试用。普通的文字对话和修图功能可以及格但有小 bug（文字对话有概率遗忘上下文，修图功能有概率理解错误），总结 PDF 能力稍逊（读不完全文），生图功能时好时坏，最惊奇的还是图生视频，没有明显生硬的 AI 感。在通用 AI 助理方面，我认为千问是继豆包和 kimi 之后，又一个有力的竞争对手。
	- 很遗憾，深度思考仍有不少错误的数据和信息。
- 2025-11-12 11月6日，月之暗面发布了开源的 [Kimi K2 Thinking](https://www.ithome.com/0/895/484.htm)，引起国内外不少讨论，开发团队还在 reddit 上进行了一场 [AMA](https://www.reddit.com/r/LocalLLaMA/comments/1oth5pw/ama_with_moonshot_ai_the_opensource_frontier_lab/)。今日参考 @aiwarts 老师的推送白嫖了一个月 Kimi Andante 会员。不过目前还没有使用场景，这个月找个机会试试看。 
- 2025-11-04 OpenAI 的撕逼大戏还在继续更新。这次是 Ilya Sutskever 提交给董事会的备忘录，足足52页的 PDF 文件，我自然是没法读完。很高兴 APPSO 再次[帮读者们整理了](https://mp.weixin.qq.com/s/6nSqCUOBkyDlwQme2lY1pA)这一份瓜，并且用了新的叙事方式。
- 2025-11-04 另外是 [nof1.ai](https://nof1.ai) 举办的 AI 交易大赛，国产的 Qwen 3 Max 和 DeepSeek V3.1 Chat 分列一二名，出乎意料的是 GPT-5 亏损62.66%~~，这还不如我呢~~。感谢 APPSO 的[一路](https://mp.weixin.qq.com/s/znz4ST-vjcCpBefTVCkT_A)[记录](https://mp.weixin.qq.com/s/vhKARLnYRRqGUBInG76MBQ)。
- 2025-10-21 昨天（10月20日）DeepSeek 突然开源一个新模型：[DeepSeek-OCR](https://github.com/deepseek-ai/DeepSeek-OCR)，也是带着论文来的。读过 APPSO 的[解析](https://mp.weixin.qq.com/s/Woz0UnaDwgTW92m9NzY-2Q?click_id=8)，我大致理解是用解析图像的方式记忆和处理超长上下文，从而节省 token，本质上还是遵循一贯的性价比路线。不知道对于 C 端用户后期是否有体验增强。
- 2025-10-14 今日在使用 Google 搜索时，突然弹出 **AI 模式** 的介绍，简单使用，立刻让我想起许久未用的 Perplexity。查了一下[官方介绍](https://search.google/ways-to-search/ai-mode)，原来是今年6月25日发布的，近期刚刚推送给大量国际用户。查看用户反馈，发现 AI 模式最大的优势是谷歌庞大的数据库和用户数据，能比其他竞品带给用户更精确的搜索体验。我相信以谷歌搜集用户隐私的能力确实在数值上就碾压其他竞品。因为它的存在，以后也许更加不用使用 Perplexity 了。
- 2025-10-04 OpenAI 在10月1日发布了 [Sora 2](https://openai.com/index/sora-2)，上一次引起比较大震撼的视频生成模型还是 Veo3，不过短短几个月前。由于 Sora by OpenAI 只在 iOS 平台上架，我还没能试用到，尽管我在各种社交媒体已经看到许多邀请码。我天生对邀请码机制反感，于是决定观望一阵。并且“AI 换脸”在历史上并没有很好的名声。
	- 另外，Gemini 3.0 Pro 要发布了，我很期待。
- 2025-09-29 最近半个月，主要新闻是 DeepSeek 发布 [DeepSeek-V3.2-Exp 模型](https://mp.weixin.qq.com/s/6hKi5F_S2zQ4g6SyF0UNow)， 能阅读更长的文本并且速度更快，开源，API 大幅降价。经过短暂使用，我发现这一版本更轻快，更精准，不过比上一代偶尔少了些深度。
- 2025-09-18 今天的大新闻是 [DeepSeek-R1 登上 nature 封面](https://www.huxiu.com/article/4781663.html)。根据引用新闻了解到，R1 的开创之处是在[论文](https://www.nature.com/articles/s41586-025-09422-z)中公开了训练过程、训练成本，以及交给8位同行评审审查，公开审稿意见和作者回复。这注定是在大语言模型甚至 AI 发展史上浓墨重彩的一页。[补充材料](https://static-content.springer.com/esm/art%3A10.1038%2Fs41586-025-09422-z/MediaObjects/41586_2025_9422_MOESM1_ESM.pdf)和[同行评审意见](https://static-content.springer.com/esm/art%3A10.1038%2Fs41586-025-09422-z/MediaObjects/41586_2025_9422_MOESM2_ESM.pdf)
- 2025-09-08 用特殊手段通过 Gemini 学生优惠验证，正式获得 Google AI Pro 一年使用权，自此开始高强度使用 Gemini 2.5 Flash 和 2.5 Pro。令人意外地，这二者都比 ChatGPT 等大模型更加符合我的需求，能够通过短暂调教最高效率获得我想要的结果。不到半个月内我开启了超过一百条对话，生成超过100张图片，用了大约10次 2.5 Pro，解答了数十个快速问题和数个深度分析问题，甚至还用 Python 做了一个符合我使用的[[make a tool with gemini in python|小工具]]并且马上上手。不出意外的话，接下来的一年里我会继续高强度使用 Gemini。
- 2025-09-05 今天最抽象的新闻莫过于 Anthropic 刚刚发布的一篇声明：[Updating restrictions of sales to unsupported regions](https://www.anthropic.com/news/updating-restrictions-of-sales-to-unsupported-regions)，内容用词激进，地缘政治和意识形态意味非常浓厚。了解到 Anthropic 的 CEO 的履历后，更是有了一些新的心得。
- 2025-09-01 那个让人担忧的未来，似乎离我们越来越近了。本来以为普通人对 AI 的理解，不会匮乏到认为 AI 所吐一切为真，但事实确实是有人会选择相信。今天果壳的文章讲述了这个事件：[“ChatBot 精神病”，这两年维基百科最火的词条](https://36kr.com/p/3446704470365832)，同时意外检索到[这篇文章](https://36kr.com/p/3447603000268163)，这是大语言模型近距离影响生死的又一案例。
- 2025-08-28 这几天，近期大放异彩的 Google Gemini 又进化了，这一次是图生图：[Gemini 2.5 Flash Image Preview](https://developers.googleblog.com/zh-hans/introducing-gemini-2-5-flash-image)。我在社交媒体看到一个神奇的 prompt，能把真实照片或其他图片生成桌面手办，背景还有电脑屏幕和柜子的物件，一下子竟然分不清是否真实照片，以往 AI 生图那种 AI 味几乎消失。我马上用霉霉刚发布的专辑海报试了一下，效果竟然出奇的好，需要很仔细才能分辨出来是 AI 生图。这个模型的发布想必会是一个关键节点。[IT之家的新闻](https://www.ithome.com/0/878/269.htm)，[Google AI Studio](https://aistudio.google.com/prompts/new_chat?model=gemini-2.5-flash-image-preview)
- 2025-08-27 自 DeepSeek V3.1 发布后，我使用这个版本的次数增加了，使用体验比 V3 甚至 R1 要好上不少，没有之前那么多幻觉，语言也更加接地气。不过还是没有摆脱过于吹捧用户的倾向。
- 2025-08-22 8月21日，Deepseek 发布了 DeepSeek V3.1 版本，没有传闻中的 R2，扩展了上下文至 128K，似乎合并了推理模式和快速模式。从短暂的使用体验来看，这一版本速度比以往快了一点点，瞎扯皮的现象有所减少，但还是有点对用户谄媚的心态存在。
- 2025-08-13 自8月8日 [OpenAI 发布 GPT-5](https://www.ithome.com/0/873/829.htm) 后，外界对这个版本模型的质疑就没有停止过。我从未得到好的机会试用，只能在官网看到关于 GPT-5 的宣传，询问大模型仍然获得“我是 GPT-4o”的回答。殊不知 GPT-5 的拉胯让更多用户怒喷 OpenAI 放回 4o 模型。这几天 Sam Altman 又跟 Elon Musk 打起嘴仗（后者在7月10日发布 Grok 4 并声称这是世界最强大语言模型），看得实在厌烦。

## 1H25

- 2025-06-26 今天 Google 发布了 [Gemini CLI](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent)，从[量子位](https://www.qbitai.com/2025/06/301735.html)和其他渠道可知，这又是谷歌一次王炸产品发布，重点集中在强大、开源和超高的免费 token 额度。我马上在 [GitHub](https://github.com/google-gemini/gemini-cli) 上 star 了这个项目，然后跟随[段小草的方案](https://zhuanlan.zhihu.com/p/1921330328833857501)设置了一番体验。
- 2025-03-07 春节期间，DeepSeek R1 的低成本高性能迫使其他厂商不是纷纷接入 DeepSeek 就是把自己大语言模型开源，Sam Altman 甚至直接说自己站在历史错误的一边。随之而来的是各类人士对 DeepSeek 表示反感，就如同他们过去对其他类似产品表示反感一样。前一天（3月6日）另一款产品 Manus 又是一夜之间爆火，还没来得及看看它的样子，邀请码已经炒到几万一个。稍加搜索，Manus 是“是一个通用的AI代理”（AI Agent），能自己上手做事情。它并非市面第一家，如今这么大的热度有些不太正常。
- 2025-02-02 自去年圣诞以来，AI 行业又经历一轮大爆发：DeepSeek 接连发布 V3 和 R1。尤其是后者，使用下来效果惊人，公开的思考过程、低廉的部署成本、开源以及无使用门槛大大地给整个 AI 行业祛魅，换来的是硅谷地震，原始 AI 龙头紧急发布各种通报。
## 2H24

- 2024-12-27 [微软和 OpenAI 的 AI 金钱游戏：通用人工智能价码 1000 亿美元](https://www.ithome.com/0/820/526.htm) OpenAI 早已不再是非营利性组织。 ref: [OpenAI 与微软秘密协议曝光，AGI 被标价 1000 亿美元](https://mp.weixin.qq.com/s/rk6TW89FTxSC9sjL2mLH1w) | 吹哨人 Suchir Balaji [离奇自杀](https://www.ithome.com/0/820/611.htm)
- 2024-12-27 国产大模型还在继续进化：[DeepSeek-V3](https://www.ithome.com/0/820/512.htm)
- 2024-12-20 AI 行业还在继续光速更迭。
- 2024-07-19 今天 OpenAI 发布（小）语言模型 [GPT-4o mini](https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence)，性能更强，成本更低，更适合日常使用，对于免费用户开放，但有使用限额。GPT-3.5 退役。[IT之家新闻](https://www.ithome.com/0/782/807.htm)
- 2024-06-27 Evolutionary Scale AI 发布的蛋白质语言模型 [ESM3](https://www.evolutionaryscale.ai/blog/esm3-release)，能够模拟五亿年自然进化史，听起来像是人工智能史上的重要一步。
- 2024-06-25 OpenAI 一个值得注意的信息：[OpenAI 将采取额外措施，停止其不支持的国家和地区的 API 使用](https://www.ithome.com/0/777/481.htm) 源：IT之家
- 2024-06-21 今天 Anthropic [发布了 Claude 3.5 Sonnet](https://www.anthropic.com/news/claude-3-5-sonnet)，号称优于 GPT-4o，比 Claude 3 Opus 快和便宜。Perplexity 很快上线了 3.5 Sonnet，我随口问了[两个九不搭八的问题](https://www.perplexity.ai/search/know-thyself-heqOigw_RmKL25VCDaN9tQ)，竟然回答得有模有样，速度也很快。[APPSO 相关文章](https://mp.weixin.qq.com/s/wS-9TLJHSwH5-tRVyAUlmA)
- 2024-06-11 Apple 姗姗来迟终于乘上 AI 的东风，但又与其他巨头的方式格格不入。在这场 WWDC2024 里，苹果把 AI (Apple Intelligence) 融入到 iOS/iPadOS 的方方面面，但就目前释出的系统版本来看，并没能体验到多少发布会所讲的内容。不少媒体纷纷看好，谨慎看待。
## 1H24

- 2024-05-27 OpenAI 近期重大事件（丑闻）合集：OpenAI 大批员工离职；ChatGPT 声音 Sky 极像斯嘉丽·约翰逊，发布之前与斯嘉丽沟通过配音事宜但寡姐拒绝；奥特曼声称其不知道离职协议中的【禁止批评 OpenAI 否则回收股权】部分，但很快爆出官方文件有其签名；OpenAI 反对大模型开源，奥特曼称不知 Open 为何意。已有不少媒体做整理：[IT之家](https://www.ithome.com/0/770/404.htm)，[差评](https://mp.weixin.qq.com/s/SWfeb2r_Qz9t1GpBczFh_Q)，[酷玩实验室](https://mp.weixin.qq.com/s/6Ddm2xYpLR7EbDX8uZmNbQ)
- 2024-05-15 2023年11月 OpenAI 高层动荡事件是有余温的，今天 Ilya [宣布](https://twitter.com/ilyasut/status/1790517455628198322)离职 OpenAI。
	- 2024-05-18 宫斗剧还在继续，IT之家[做了整理](https://www.ithome.com/0/768/963.htm)。
- 2024-05-14 OpenAI 在今天发布了新的免费大语言模型：[GPT-4o](https://openai.com/index/hello-gpt-4o)（[IT之家新闻](https://www.ithome.com/0/767/693.htm)），很遗憾我的账号还没有被灰度，在 [Poe](https://poe.com/) 上可以免费试用约10条，暂时没有体会到先进之处。
- 2024-04-19 发现一个低调的 AI 应用：[flowith](https://flo.ing/)（或[这个入口](https://try.flowith.io/)，据开发者称，因为精力全部投入到产品上，因此官网基本上没人管……），设计和使用相当让人惊喜：无限画布、提问分支、图谱结构、AI 决策、开放网络搜索、MidJourney 生图，每一步都打在 AI 应用的七寸上。甚至产生比 Perplexity 更重的付费意愿。开发者在推特写了一条很长的 [thread](https://twitter.com/DerekNee/status/1780848075264921711) 来介绍他们的产品。
- 2024-04-17 今天发现 [Perplexity AI](https://perplexity.ai/) 使用港区的 IP 无法访问，提示 `We have detected unusual activity coming from your IP address and blocked your request.` 切换到美区 IP 恢复正常。
- 2024-04-09 [[thoughts on vol 74|关于《Vol.74 思考、反思与观察》的思考]]
- 2024-03-30 AI 行业一个音乐相关的软件：[Suno AI](https://www.suno.ai/)，另广大音乐制作人感到震惊和害怕。这是[张哥破防](https://www.bilibili.com/video/BV1ft421g7pb)，这是一首好听的[连花清瘟](https://www.bilibili.com/video/BV1HA4m1A7x8)（一次 four 粒这句太好听了），还有一首听感像动画 OP 的 [We Go!](https://www.bilibili.com/video/BV1r2421P7kJ)
    - 这是我第一次生成的 [AI 歌曲](https://app.suno.ai/song/de124b4a-9c6c-4eec-8c92-49ce530d9186)，名叫 _Chains of Greed_（连名字都特别带感），使用的 prompt：_a song that a R&B singer would write to curse those evil capitalists_，没有做任何 customization 直接一步到位生成的结果
- 2024-02-16 OpenAI 今天突然发布 [Sora](https://openai.com/sora)，一个文生视频模型，看了演示把我看愣了。现在 AI 的发展已经到人类追不上的程度了吗？[Sam 的 X](https://twitter.com/sama/status/1758193609927721350) 动态，[IT之家新闻](https://www.ithome.com/0/750/453.htm)
- 2024-01-24 GPT-4 获得 [Product Hunt 的 Product of the year](https://www.producthunt.com/golden-kitty-awards/hall-of-fame) 奖项，没有悬念。
- 2024-01-19 在今年的 CES 2024 上，Rabbit 推出了 [Rabbit R1 设备](https://www.ithome.com/0/744/291.htm)，使用 LAM 大动作模型/大型操作模型（Large Action Model），第一天就卖出一万台。从概念上看挺有意思，比去年的 Pin 更实在一点。今天 Perplexity AI [宣布和 Rabbit 正式成为合作伙伴](https://twitter.com/perplexity_ai/status/1748104763470680181)，还提供一年 Pro 账号。有点意思
- 2024-01-11 今天 OpenAI 正式给 [ChatGPT 推出 GPT 商店](https://www.ithome.com/0/744/521.htm)：GPTs。另外还面向小型企业推出了 ChatGPT Team 付费计划。
## 2H23

- 2023-12-07 过去一段时间，AI 行业有又有了一些大新闻。12月6日[谷歌发布了大语言模型 Gemini](https://www.ithome.com/0/737/519.htm)，声称完全领先 GPT-4。果壳的[这篇公众号](https://mp.weixin.qq.com/s/ts31NzjpNd-3V9fAuHJing)显示出在宣传片中的 Gemini 到底有多强大，强大到让人惊讶不已。然而今天 [Gemini 被质疑](https://www.ithome.com/0/737/691.htm)与宣传片相差甚远。ref: [APPSO](https://mp.weixin.qq.com/s/TJiFUqPKj06qfqFw2GYCpg)
    - 英伟达是 AI 行业的幕后，马斯克也在推动他的 xAI。
- 2023-11-23 [Pi AI](https://pi.ai/) 的母公司 Inflection 发布了新模型：[Inflection-2: The Next Step Up](https://inflection.ai/inflection-2)。最近与 Pi 的交流增多，它可以很好解决一些生活上的小问题，可以安抚情绪，也可以教你法语。虽然没有记忆，但是作为一个 AI，它有着快速响应、画面好看、基于 web 的特点。
- 2023-11-22 ChatGPT 今日[面向所有用户开放 ChatGPT Voice](https://www.ithome.com/0/734/164.htm)。
- 2023-11 OpenAI 高层动荡
- 2023-11-15 今日发现一个新的 AI：[Pi AI](https://pi.ai/) by Inflection。对话跟真人几乎一样，目前没有明显限制，可玩性挺高。
    - 2023-11-20 很遗憾缺乏长期记忆功能，使得同时只有一个 thread 的设定失去其意义。
- 2023-11-14 [布道者和扒底裤的](https://mp.weixin.qq.com/s/-u9jk8KWutWThzjwoDPGYA)
- 2023-11-03 OpenAI 几日前发布了一个[新版本](https://www.searchenginejournal.com/new-version-of-chatgpt-gives-access-to-all-gpt-4-tools-at-once/499607)：GPT-4 (All Tools)。该版本已经可以联网访问搜索，并且接收用户发送的图片和 PDF 文件等信息，是今年9月的更新内容之一。
- 2023-10-30 发现一个 ChatGPT/Bing 平替：[Perplexity AI](https://www.perplexity.ai/)，似乎有无限数量的普通问答和有限数量的 Copilot 问答。初步使用体验：响应速度比 Bing 快，时效性比 ChatGPT 高，使用门槛比二者低，界面好看。
    - 2023-11-20 Perplexity 与 ChatGPT 同源，作者是从 OpenAI 离职出来创业的大佬。近期使用体验是这么多 AI 产品里完成度最高的，也是性价比最高的之一。
- 2023-09-25 ChatGPT 迎来巨大升级：可以使用图片和语音输入。OpenAI 在 X 给出[几个案例](https://twitter.com/OpenAI/status/1706280618429141022)，OpenAI 官网的介绍：[ChatGPT can now see, hear, and speak](https://openai.com/blog/chatgpt-can-now-see-hear-and-speak)，让人感慨人工智能的迭代速度。[IT 之家相关新闻](https://www.ithome.com/0/721/590.htm)
## 1H23

- 2023-05 今天读到孙燕姿发的一篇博文：我的 AI（[中文版](http://www.makemusic.sg/new-blog/wodeai) [English Version](https://www.makemusic.sg/blog/wodeai)），感叹【冷门歌手】竟有如此文笔和思想深度以及广阔的胸怀，以及有趣的对人工智能的理解。
	- 一个小彩蛋，这篇博文的英文版标题（和网址 URL）也叫《我的 AI》（~/blog/wodeai），让我想起小时候听孙燕姿的第一首歌：我的爱
	- 2023-05-24 和菜头连续发了两篇相关的公众号文章：[作文老师孙燕姿](https://mp.weixin.qq.com/s/sCdgBTDhkqQsdOvR1ohZtg) | [孙燕姿作文赏析](https://mp.weixin.qq.com/s/IjjtuMK77zhmafcTDsX_mQ) 可以很明确感受到菜头对孙燕姿这篇文章的喜爱。
- 2023-05-24 [微软发布 Windows Copilot AI 助理](https://www.ithome.com/0/694/690.htm)。纪念死去的 Cortana。
- 2023-05-18 **AI 行业的发展指数级增长，目力所及已经跟不上了。不再频繁更新。**
- 2023-04-07 前几天的 ChatGPT 封号事件还没有后续，今天阿里云也发布了自家大模型：[通义千问](https://tongyi.aliyun.com/)，听起来就像是文心一言的下联。
- 2023-04-03 从爱范儿收到的[突发新闻](https://mp.weixin.qq.com/s/sqamuEo9N1hUzbVq8PBI6A)，ChatGPT 开始大面积封禁亚洲账号。目前我的账号暂时是安全状态。
- 2023-03-29 今天的大新闻，科技精英的联名公开信：[Pause Giant AI Experiments: An Open Letter](https://futureoflife.org/open-letter/pause-giant-ai-experiments)，呼吁全球实验室停止研发比 GPT-4 更强的 AI，截至此时已经有1125人签名。相关新闻：[GPT-4 引发担忧，马斯克等千名科技人士呼吁暂停更强 AI 开发](https://www.ithome.com/0/683/051.htm)
- 对了，不久前 New Bing 的每日提问回合继续上升，来到20回合，每日总上限200条。
- 2023-03-25 几天没有仔细关注 AI 新闻，突然 OpenAI 就发布了 GPT-Plugin，MidJourney 版本来到了 v5，Adobe 发布了 Firefly，Mozilla 也开始投资 AI。
- 2023-03-23 文心一言严重翻车，国内最有机会做出来的大厂也不行了。
- 2023-03-22 谷歌开放的 [Bard](https://bard.google.com/) waitlist，申请后第二天就通过了。但在短暂的使用中，完全没有 ChatGPT 或者 New Bing 好使。
- 2023-03-17 微软今天又发布了一个王炸，[GPT-4 将接入 Microsoft 365](https://www.ithome.com/0/680/249.htm)，成为 [Microsoft 365 Copilot](https://blogs.microsoft.com/blog/2023/03/16/introducing-microsoft-365-copilot-your-copilot-for-work)。
- 2023-03-17 百度开放申请[文心一言内测](https://yiyan.baidu.com/welcome)，已提交申请。2023-04-07 申请通过。
- 2023-03-16 今天开始，New Bing 不用邀请可以[直接访问](https://www.ithome.com/0/680/027.htm)了。下午百度文心一言发布，聊胜于无，不在一条赛道上。
- 2023-03-15 OpenAI 最近动作颇多，今天发布了 [GPT-4 新模型](https://www.ithome.com/0/679/661.htm)，[New Bing 用的就是 GPT-4](https://www.ithome.com/0/679/679.htm)。
- 2023-03-14 New Bing 又又提升了对话限制，现在是15回合，总是150条。另外 Microsoft Edge 更新到111版本，工具栏自带一个 New Bing 的快捷方式。
- 2023-03-09 New Bing 又提升了对话限制，现在可以聊10个回合了，总数达到120条。
- 2023-03-07 基于 [ConversationWithNewBing](https://wiki.imzm.im/#ConversationWithNewBing) 重新进行了一次对话：[NewConversationWithNewBing](https://wiki.imzm.im/#NewConversationWithNewBing) 结局让人沉默。
- 2023-03-06 一个[文生图和图生图站点](https://rightbrain.art/text2Image)，速度快模型多，暂时没看到收费点。
- 2023-03-06 New Bing 把每回合对话限制提高到8条。聊胜于无吧。
- 2023-03-02 New Bing 移动端上线了，现在可以通过手机上的 Bing 应用开启聊天了。
- 2023-02-28 前段时间 New Bing 恢复，限制每段交流只有6句。限制更多回答范围，增加三种回答语气：（更多）创造力/平衡/精确。目前一直用的是创造力，另外二者基本没有使用。6句基本上可以解答大部分问题，可惜不能长时间交流了。
- 2023-02-17 今天的 New Bing 无法正常问答了，一直提示`正在尝试重新连接` 还有个 refresh 按钮
- 2023-02-16 [ChatGPTPromptInjection](https://news.mydrivers.com/1/890/890577.htm)
- 2023-02-14 [ConversationWithNewBing](https://wiki.imzm.im/#ConversationWithNewBing) 仿佛把一个 AI 逼急了
- 2023-02-13 经过一天的体验，New Bing 比 ChatGPT 强多了。主要强在以下几个方面：实时结果，不像 ChatGPT 的数据库只截至到2021年；给出数据源，每一个数据的出处很清晰；正确的前提下会坚持自己的说法，ChatGPT 容易低头认错；访问起来比 ChatGPT 轻松，也不需要注册账号。
    - 对了，New Bing 的模型是和 ChatGPT 同源的，但是实际应用上，前者更生产力，其中的关键就是 Bing 作为一个搜索引擎辅助（search engine assistant）更能直接地帮助到使用者，而不是相对独立又有历史数据限制的 ChatGPT。
    - 2023-02-16 更新：在使用 Bing 的过程中，我提了几个工作中的相关问题，他能比较贴合地回答。尚未验证准确性，但这是一个很好的起始。
- 2023-02-13 通过了 New Bing 的 Early Preview，试用一下与 ChatGPT 的对比如何。
- 2023-02-08 微软也急了，[微软正式发布 ChatGPT 版必应搜索和 Edge，在 AI 领域挑战谷歌](https://www.ithome.com/0/671/873.htm)
- 2023-02-07 谷歌急了，ChatGPT 不知何原因重新爆火起来。
    - [ChatGPT 逼急谷歌 CEO：全体员工要拿出黑客精神测试公司新品 Bard](https://www.ithome.com/0/671/627.htm)
    - [谷歌创始人亲自下场改代码，ChatGPT 让谷歌真慌了](https://www.ithome.com/0/671/563.htm)
    - 劈柴直接在官方博客发表了一篇文章：[An important next step on our AI journey](https://blog.google/technology/ai/bard-google-ai-search-updates)
    - 我记得 Google Voice 以前挺喜欢玩的，是人工智能对话的雏形。谷歌完成一个类 ChatGPT 应该不难。
## 2H22

- 2022-12-05 一个强大有趣的文本生成 AI：[ChatGPT](https://chat.openai.com/) 最近火得一塌糊涂
    - 图片生成 AI：[MidJourney](https://www.midjourney.com/) | 开源的：[Disco Diffusion](https://colab.research.google.com/github/alembics/disco-diffusion/blob/main/Disco_Diffusion.ipynb)