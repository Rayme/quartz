---
title: 用 Gemini 2.5 Flash 制作一个小工具
date: 2025-09-17
---
我的电脑里有一个专门的硬盘用来放置我下载好的影视剧，分为电影和电视剧两个大分类。在电影文件夹中，我把电影区分类【看过】和【未看】两个大类目，前者用来时不时重温喜欢的老电影，后者用来保存我在各个渠道获得的有意思的电影。【未看】中分为五个电影类型：动画、动作、惊悚、剧情、科幻，这五个类型是从最初的十几部电影中大致得来的，多了复杂，少了不好区分，这五个刚刚好。

截止今天，我下载好但未看的电影已经有118部，我无法一眼看出我所有的电影名称。我的命名遵循 `电影名 + 年份` 的规则，如 `绝境盟约 La sociedad de la nieve 2023.mp4`。我想到一个方式可以让我一眼看到所有电影文件，紧接着想到 AI 可以帮上这个忙，Gemini 正好有这个能力，于是我把我的需求告诉 Gemini 2.5 Flash：

> 请帮我生成一个python小工具，用来做如下事情：
> 遍历指定文件夹以及该文件夹下所有子文件夹
> 把所有文件夹和文件找出来整理按照时间排序
> 生成为一个 .md 纯文本文件

几秒钟后，Gemini 马上生成一个带注释的 Python 片段，顺便告诉我这个小工具的使用方法和限制前提。结果自然是最小可用，不到一秒钟时间就把我所有电影文件遍历出来，还标记出修改时间。第一版还有些需求没有达到，我继续向 Gemini 沟通，经过几次迭代，最后获得了一个我最满意的版本：

```Python
import os
import datetime

def generate_sorted_file_list(output_filename='sorted_files.md'):
    """
    遍历当前工作目录及其子文件夹，按修改时间排序并生成Markdown文件。

    :param output_filename: 输出的Markdown文件名。
    """
    # 自动获取脚本运行时所在的目录
    folder_path = os.getcwd()

    if not os.path.isdir(folder_path):
        # 理论上此情况不会发生，除非工作目录被删除
        print(f"错误：当前工作目录 '{folder_path}' 不存在或不是一个有效的文件夹。")
        return

    all_items = []
    print(f"正在扫描当前目录及其子目录: {folder_path}...")

    # 遍历所有文件和文件夹，并收集路径和修改时间
    for root, dirs, files in os.walk(folder_path):
        for name in dirs:
            path = os.path.join(root, name)
            # 跳过软链接，避免循环
            if os.path.islink(path):
                continue
            try:
                mod_time = os.path.getmtime(path)
                all_items.append({'path': path, 'mod_time': mod_time, 'type': 'directory'})
            except FileNotFoundError:
                continue  # 忽略在遍历过程中被删除的条目

        for name in files:
            path = os.path.join(root, name)
            try:
                mod_time = os.path.getmtime(path)
                all_items.append({'path': path, 'mod_time': mod_time, 'type': 'file'})
            except FileNotFoundError:
                continue  # 忽略在遍历过程中被删除的条目

    # 根据修改时间进行排序
    all_items.sort(key=lambda x: x['mod_time'], reverse=True) # reverse=True 为降序，最新的在最前

    # 写入Markdown文件
    try:
        with open(output_filename, 'w', encoding='utf-8') as f:
            f.write(f"# 文件夹内容列表（按修改时间排序）\n\n")
            f.write(f"**起始路径**: `{folder_path}`\n")
            f.write(f"**生成时间**: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")

            f.write("---\n\n")
            for item in all_items:
                mod_time_str = datetime.datetime.fromtimestamp(item['mod_time']).strftime('%Y-%m-%d %H:%M:%S')
                item_type = '📁 文件夹' if item['type'] == 'directory' else '📄 文件'
                # 构建相对路径
                relative_path = os.path.relpath(item['path'], folder_path)
                f.write(f"- **{item_type}** `{relative_path}`\n  - **修改时间**: `{mod_time_str}`\n\n")
        
        print(f"已成功生成文件: {output_filename}")

    except Exception as e:
        print(f"写入文件时发生错误: {e}")

# 示例用法
if __name__ == '__main__':
    generate_sorted_file_list()
```

这个版本的工具可以放在任何文件夹下运行，自动遍历该文件夹所有文件和子文件夹，用 Markdown 二级标题区分文件夹，以目录树形式显示所有文件名，忽略掉工具本身这个文件（Gemini 给这个工具起了名字：list_generator.py），输出为一个 `folder_content.md` 文本文件。这个小工具可以在 Windows 系统任何文件夹下使用，预计也可以在 MacOS 和 Linux 下运行。

最终这个小工具在我的硬盘生成的文件内容如下（有做删减）：

```markdown
# 文件夹内容列表

**起始路径**: `D:\movies\未看`

## 未看

- folder_content.md

## 剧情

- 2002 荒唐周五夜 Vendredi soir 2002.mp4
- Hello！树先生 2011.mkv
- 两小无猜 Jeux d'enfants 2003.mkv
- 乌鸦：重生 The Crow 2024.mp4
- 互联网之子 The Internet's Own Boy 2014.rmvb
- 他的三个女儿 His Three Daughters 2024.mkv
- 低俗小说 Pulp Fiction 1994.mp4
...

## 剧情\Jeanne.Dielman.23.Commerce.Quay.1080.Brussels.1975.FRENCH.1080p.BluRay.x265-VXT

- Jeanne.Dielman.23.Commerce.Quay.1080.Brussels.1975.FRENCH.1080p.BluRay.x265-VXT.mp4

## 剧情\出租车司机 Taxi Driver 1976

- 出租车司机(蓝光特效中英双字).Taxi.Driver.1976.BD-1080p.X265.10bit.AAC5.1.CHS.ENG-UUMp4.mp4

## 剧情\阳光灿烂的日子 1994

- 未公映的140分钟版本的《阳光灿烂的日子》里一些扩充片段.mp4
- 阳光灿烂的日子.In.the.Heat.of.the.Sun.1994.FRA.BluRay.1080p.HEVC.10bit.MiniFHD-MOMOHD.mkv

## 动作

- 东北警察故事2.mp4
- 刑房 GrindHouse 2007.mp4
- 女王神剑 Red Sonja 2025.mp4
- 智齿 2021.mp4
- 杀手 The Killer 2023.mp4
- 疾速剧痛 Wick Is Pain 2025.mp4
...

## 动作\三方国界 Triple Frontier 2019

- Triple.Frontier.2019.2160p.4K.WEB.x265.10bit.AAC5.1-[YTS.MX].mkv
- Triple.Frontier.2019.原版字幕.srt
- Triple.Frontier.2019.简体字幕.ass

## 动作\巴比龙 Papillon 2017

- 巴比龙.papillon.2017.ass
- 巴比龙.papillon.2017.mkv

## 动作\暂告安全 Safe 2012

- Safe.2012.1080p.BluRay.x264.DTS.ass
- Safe.2012.1080p.BluRay.x264.DTS.mkv
- Safe.2012.1080p.BluRay.x264.DTS.nfo

## 动作\洛奇

- 洛奇.1976.BD1080p.中英双字.mp4
- 洛奇2.1979.BD1080p.中英双字.mp4
- 洛奇3.1982.BD1080p.中英双字.mp4

## 动作\落水狗 Reservoir Dogs 1992

- Reservoir.Dogs.1992.2160p.WEB-DL.x265.10bit.HDR.DTS-HD.MA.TrueHD.5.1-NOGRP.ass
- Reservoir.Dogs.1992.2160p.WEB-DL.x265.10bit.HDR.DTS-HD.MA.TrueHD.5.1-NOGRP.mkv

## 动画

- Ghost.in.the.Shell.1995.2160p.UHD.BDRip.x265.DV.TrueHD.7.1.Atmos-CoolFansSub.mkv
- 新·福音战士剧场版：终.Neon Genesis Evangelion│▌.2021.HD1080P.日语官方中字.mp4
- 火星特快 Mars Express 2023.mp4
- 猎魔女团 K-POP 2025.mp4
- 红辣椒 パプリカPaprika (2006).BD1080P.国粤台日四语.中英双字.mp4
- 超人总动员 The Incredibles 2004.mp4

## 动画\攻壳机动队

- 攻壳机动队 (1995) - 1008p.chi.zh-cn.ass
- 攻壳机动队 (1995) - 1008p.mkv

## 动画\未麻的部屋 (1998) 1080P

- Perfect.Blue.1998.REPACK.1080p.BluRay.x264.DTS.mkv
- cover.jpg

## 惊悚

- 囚徒 Prisoners 2013.rmvb
- 堕入地狱 Drag Me to Hell 2009.mp4
- 大开眼戒 Eyes Wide Shut 1999.mp4
- 完美伴侣 Companion 2025.mp4
- 巴黎深渊 Sous la Seine 2024.mp4
...


## 惊悚\催眠 Hypnotic 2023

- Hypnotic.2023.2160p.AMZN.WEB-DL.DDP5.1.H.265-FLUX.ass
- Hypnotic.2023.2160p.AMZN.WEB-DL.DDP5.1.H.265-FLUX.mkv
- Hypnotic.2023.2160p.AMZN.WEB-DL.DDP5.1.H.265-FLUX.srt

## 惊悚\机动杀人 Taking Lives 2004

- Taking.Lives.2004.1080p.BluRay.H264.AAC-RARBG.1.ass
...
- Taking.Lives.2004.1080p.BluRay.H264.AAC-RARBG.9.srt
- Taking.Lives.2004.1080p.BluRay.H264.AAC-RARBG.mp4

## 科幻

- Mulholland.Dr.2001.2160p.UHD.BluRay.x265.10bit.HDR.DDP5.1-RARBG.mkv
- [银翼杀手].Blade.Runner.1982.The.Final.Cut.BluRay.1080p.x264.DTS.2Audios-CMCT.mkv
- 十二猴子 Twelve.Monkeys.1995.mkv
- 千钧一发 Gattaca 1997.mp4
- 大都会 Metropolis 1927.mp4
...

## 科幻\异次元骇客 The Thirteenth Floor 1997

- The.Thirteenth.Floor.1999.1080p.BluRay.x264-CiNEFiLE.ass
- The.Thirteenth.Floor.1999.1080p.BluRay.x264-CiNEFiLE.mkv

## 科幻\时空罪恶 Timecrimes 2007

- Timecrimes.2007.Bluray.1080p.DTS-HD.x264.mkv
- Timecrimes.2007.Bluray.1080p.DTS-HD.x264.srt

```

可以看到我的列表并没有完全按照格式设置，有些电影作为一个文件夹存在，内涵外挂字幕或者其他信息。这样的列表可以让我非常方便地遍历所有资料，根据我的需要再做调整。后续如果有需要，我可以把电影名和上映年份甚至导演等信息整理成 YAML，用 Obsidian 的 bases 功能展开。

我用了不到十分钟解决了一个小问题，如果从零开始从学会 Python 到徒手写出这个工具，以我的智商，也许需要好几周时间。最后突然一想，这何尝不是一种 Vide Coding？