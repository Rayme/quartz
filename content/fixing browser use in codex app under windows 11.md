---
title: Windows 11 下修复 Codex 的 Browser Use
created: 2026-05-05
date: 2026-05-11
---
在 Windows 11 下，安装 Microsoft Store 中的官方 Codex App 有可能出现 Codex 的 Browser Use 功能无法使用的情况。起初以为是权限问题，但以管理员模式打开软件或在项目中勾选完全访问权限并未解决此问题。最终我搜索到 Reddit 的[这个帖子](https://www.reddit.com/r/codex/comments/1sx6omi/windows_native_browser_use_fix/)，里面详细描述了问题的表现、起因和解决方案。现整理分享。

## 情况分析

当我们在 Codex 中选择或者自然语言描述使用 Browser Use 功能时，可能会收到这样的报错：

`failed to execute Node: 拒绝访问。 (os error 5)`

具体表现为：

- Browser Use 插件技能文件可读取。
- `node_repl` 无法启动。
- `%LOCALAPPDATA%\OpenAI\Codex\bin` 目录不存在。
- 但 Codex Windows Store 应用包目录内存在 `node.exe`、`node_repl.exe`、`codex.exe` 等辅助程序。

根据错误描述和经验，我们可以知道在某些 Windows 环境下，从 `WindowsApps` 应用包目录直接启动这些程序会被系统权限拦截，于是出现 `拒绝访问`。

## 解决思路

解决方案就是**把辅助程序复制到用户目录下**，具体位置： `%LOCALAPPDATA%\OpenAI\Codex\bin`

从而使 Codex 可以从用户目录启动它们。

## Powershell 解法

在 Powershell 中使用 `Get-AppxPackage -Name OpenAI.Codex | Select-Object Name,PackageFullName,InstallLocation` 命令获取 Codex 当前安装路径，然后运行如下 Powershell 命令（把其中的 `<InstallLocation>` 换成 Codex 安装路径）：

```Powershell
$src = "<InstallLocation>\app\resources"
$dst = "$env:LOCALAPPDATA\OpenAI\Codex\bin"

New-Item -ItemType Directory -Force -Path $dst | Out-Null

$files = @(
  "codex.exe",
  "node.exe",
  "node_repl.exe",
  "codex-command-runner.exe",
  "codex-windows-sandbox-setup.exe",
  "rg.exe"
)

foreach ($file in $files) {
  Copy-Item -LiteralPath (Join-Path $src $file) -Destination $dst -Force
}

Get-ChildItem -LiteralPath $dst
```

运行完后重启 Codex 即可在 Codex 中正常使用 Browser Use 功能。