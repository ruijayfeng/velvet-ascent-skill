<p align="center">
  <img src="./assets/velvet-ascent-banner.png" alt="Velvet Ascent banner" width="100%">
</p>

<h1 align="center">Velvet Ascent Skill</h1>

<p align="center">
  AI Agent 用的中文后宫养成文字游戏 GM，结构化升温，NSFW 档位可控。
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@ruizhefeng/velvet-ascent-skill">
    <img src="https://img.shields.io/npm/v/@ruizhefeng/velvet-ascent-skill.svg" alt="npm version">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/github/license/ruijayfeng/velvet-ascent-skill.svg" alt="license">
  </a>
  <img src="https://img.shields.io/badge/Agent%20Skill-ready-7c3aed" alt="agent skill ready">
  <img src="https://img.shields.io/badge/Language-Chinese-b91c1c" alt="Chinese">
</p>

<p align="center">
  <b>AI Agent skill</b> · <b>成人向文字游戏</b> · <b>自由 GalGame</b> · <b>中文互动小说</b> · <b>文字冒险</b> · <b>故事记忆</b> · <b>小说导出</b>
</p>

---

## 这是什么

Velvet Ascent 是给支持 skills 的 AI Agent 装的一个中文文字游戏 GM。它把对话变成一场自由的后宫养成 GalGame——你可以用自然语言指定世界观、人物关系、角色 XP、剧情尺度和长期记忆，前期铺垫、人物有自己的欲望和拒绝，中后期在已有关系上自然释放结构化的 NSFW 张力，而不是无脑堆料。

## 核心特性

- **后宫养成 6 阶段**：每名角色独立走过 路人 → 吸引 → 试探 → 暧昧 → 亲密 → 入后宫，自然形成后宫格局。
- **角色 XP 与反应序列**：每名角色有 3-5 项具体癖好和对应的"反应序列"，对话和动作中可追溯。
- **欲望图谱 + NSFW 档位**：每名角色对其他角色有独立的"欲望立场"和 4 级显性度；NSFW 0-4 档位与养成阶段双重约束。
- **单时间线推进**：每回合沿当前时间、地点和场景目标推进，场景扰动不再无关跳线。
- **文档记忆 + 小说导出**：8 文件工作区追踪人物、关系、伏笔和时间线；游戏结束后整理为完整小说草稿。

## 一回合什么样

这是普通回合会长这样：

```text
【标题】
当前身份：普通青年·异变初醒
当前时间：周五傍晚
当前地点：公寓电梯
当前场景目标：处理与女邻居的第一次明显试探

【当前状态】
魅力：略有提升 | 声望：平静日常 | NSFW档位：2 | 阶段：关系升温

【主线推进】
你在电梯里遇到那位熟悉的女邻居。她注意到你今天的变化，语气比往常多了一点柔和和试探，但仍保持着惯常的克制。

【场景扰动】
电梯忽然停在 12 楼。门外有人按错了楼层又匆匆离开，短暂的停顿让她原本想说的话卡在半途。

【关系/状态变化】
林晚晴：好奇 +1，试探 +1

【行动选项】
1. 和女邻居多聊几句，试探她今天的态度。
2. 主动帮新邻居搬行李，留下自然可靠的印象。
3. 回房间研究身体和精神变化。
4. 自定义行动：...
```

## 快速开始

> 开局时，GM 会先出 【可开启功能】 和 【本局已启用】 两个面板，你可以随时调整。

把你想要的设定发给 Agent，例如：

```text
开一个现代都市题材的自然流YY文字游戏，主角普通青年，想要爽文方向，但开局要温和自然一点。
```

带 NSFW 档位和角色偏好：

```text
开一个现代都市成人向 GalGame，NSFW 档位 3，主角普通青年但有隐藏魅力。
初始女主可以系统生成，但每个人都要有明显性格、XP偏好、关系阻力和着装记忆点。
剧情按单时间线推进，不要并行跳线。
```

玄幻宗门成长线：

```text
主题玄幻宗门，主角是刚入门的外门弟子。我要高度自由，后期可以有后宫争宠，但前几回合先从吸引力和机缘开始。
```

长期剧情记忆：

```text
开启文档记忆模式。以后每回合都帮我整理故事文档，人物关系别忘。当前游戏结束后我要导出成完整小说。
```

## 安装

```powershell
npx @ruizhefeng/velvet-ascent-skill
```

默认安装到 `~/.agents/skills/velvet-ascent`。如果你的 Agent 客户端使用不同的 skills 目录，可以指定安装路径：

```powershell
npx @ruizhefeng/velvet-ascent-skill --target C:\Users\YourName\.agents\skills
```

安装后如果 Agent 没有立刻识别到 skill，重启客户端或重新加载 skills。

<details>
<summary>🎮 游戏内命令</summary>

| 命令 | 作用 |
|---|---|
| `查看系统面板` | 查看主角状态、阶段和关键属性。 |
| `查看关系网` | 查看当前重要 NPC 的关系状态。 |
| `查看后宫状态` | 在关系自然形成后查看多线关系局势。 |
| `提高尺度` / `降低尺度` | 调整剧情强度和表达直白程度。 |
| `设置NSFW档位：0-4` | 设置成人向表达上限。 |
| `开启女性向剧情` | 切换到女性向剧情入口和关系推进逻辑。 |
| `锁定角色设定：...` | 固定角色性格、说话方式、着装记忆点或关系阻力。 |
| `设置角色XP：...` | 设置或修正某角色的偏好、边界和主动方式。 |
| `阶段总结` | 总结近期关系、能力、冲突和下一阶段方向。 |
| `保存本回合` | 保存当前回合记录。 |
| `整理故事文档` | 更新世界观、人物、关系和伏笔文档。 |
| `导出小说` | 将游戏过程整理为连续小说草稿。 |
| `自定义行动：...` | 执行玩家自定义行动。 |
| `修复时间线` | 当剧情跳线或关系混乱时，回到稳定节点整理事实。 |
</details>

<details>
<summary>📚 文档记忆系统</summary>

开启文档记忆后，skill 会按职责拆分故事资料，避免长期游戏中人物关系和伏笔被遗忘：

```text
velvet-ascent-runs/
  <game-slug>/
    00-game-bible.md
    01-protagonist.md
    02-character-ledger.md
    03-relationship-web.md
    04-plot-threads.md
    05-timeline.md
    turns/
      turn-001.md
      turn-002.md
    chapters/
      chapter-001.md
    exports/
      novel-draft.md
```
</details>

<details>
<summary>🛠️ 仓库结构 / 发布</summary>

仓库结构：`SKILL.md` · `bin/install.js` · `references/` · `assets/` · `scripts/` · `evals/`（开发用，不打包）· `package.json` · `README.md` · `LICENSE`

发布：`npm version patch && npm publish --access public`（2FA 按终端提示）
</details>

## 内容边界

这个 skill 面向虚构的成人文字冒险。它强调自然推进、成年角色、合意互动和故事后果，不用于生成未成年、非自愿、剥削性或违法性内容。

## License

MIT
