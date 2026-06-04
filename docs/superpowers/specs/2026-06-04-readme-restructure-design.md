# Velvet Ascent README — Restructure Design Spec

**Date**: 2026-06-04
**Topic**: 重构 README，按"玩家向、社区 skill 仓库主流样式"对齐
**Status**: 设计阶段（待用户复核后进入实施计划）

---

## 0. 概览

### 0.1 目标

当前 README 偏开发者文档风格（13 行核心能力表、详细回合模板、命令表、文档树、仓库结构、本地开发、发布），对"想玩的人"决策路径过长，且文档记忆长说明分散了 genre 描述。本设计的核心目标：

- **主受众 = 玩家**（想玩中文后宫养成 GalGame 的最终用户）
- **表层 ~150 行**——30 秒内看到 hero、demo、安装、特性、边界
- **保留深度**——命令表、文档记忆、仓库结构等用 `<details>` 折叠挂上提示
- **不修改 SKILL.md / 任何 reference / 任何 skill 行为**——只重写 README.md

### 0.2 设计决策汇总

| 决策 | 选择 | 理由 |
|---|---|---|
| 主受众 | 玩家（决策速度优先） | 用户首轮确认 |
| 详细度策略 | 玩家上手内容平铺；其他内容折叠 | 用户首轮确认 |
| 主语言 | 全中文（保持现有风格） | 用户首轮确认 |
| 整体结构 | 方案 A「试玩即真相」 | 用户二轮确认（最贴近社区 skill 仓库主流样式） |
| 快速开始顶部 | 加一句"GM 会先出【可开启功能】和【本局已启用】两个面板" | 用户三轮确认（让玩家预期到 GM 5 句开场） |
| 一回合什么样 | 沿用现有"电梯" demo | 真实样本有说服力，避免虚构 demo |
| 核心特性数量 | 5 条 bullet | 在覆盖度与可扫读之间取平衡 |
| 黄色爽文 定位 | 压缩为「这是什么」里 1 句"结构化升温，不是堆料" | 既不藏掖，也不占独立 section |
| Banner | 保留现有 `assets/velvet-ascent-banner.png` | 不动视觉资产 |
| Badges | 保留 npm + license + agent-ready + 中文 | 与现有风格一致 |
| Hero tagline | "AI Agent 用的中文后宫养成文字游戏 GM，结构化升温，NSFW 档位可控" | 用户首轮确认 |

### 0.3 改动范围

| 文件 | 改动性质 |
|---|---|
| `README.md` | 重写（~150 行） |
| `assets/velvet-ascent-banner.png` | 不动 |
| `SKILL.md` | 不动 |
| `references/*` | 不动 |
| `bin/install.js` | 不动 |
| `package.json` | 不动（版本号、scripts 不变；npm 发布由用户决定） |

---

## 1. 目标受众与决策路径

### 1.1 谁是读者

按优先级：

1. **中文母语玩家**——被 npm 链接、awesome-claude-skills 列表、社交媒体推荐触达；想 30 秒内判断"这玩起来像不像我想玩的"然后 `npx` 试一下
2. **AI Agent 用户**——已经在用 Claude / Cursor / 其他支持 skills 的客户端；想给自己加一个"GM 工具"
3. **技能作者 / 评审者**——少数；他们会跳到仓库 / dev 部分

### 1.2 决策路径（30 秒可见）

```
打开 README
  → 看 banner + tagline：是什么
  → 扫「这是什么」1 段话：定位
  → 扫「核心特性」5 条：差异化卖点
  → 看「一回合什么样」：体验可视化
  → 看「快速开始」4 个 prompt：能否直接复制
  → 看到「安装」一行 npx：决定安装
```

### 1.3 不再承担的事

- **不再承担 SKILL.md 替代品**——SKILL.md 是 Agent 加载的指令源，README 不重复
- **不再承担开发文档**——仓库结构、npm 发布、evals 都在仓库其他位置可见
- **不再承担完整玩法手册**——命令表、文档记忆系统折叠为参考

---

## 2. 最终结构

### 2.1 Section 顺序

| # | Section | 形态 | 行数预算 |
|---|---|---|---|
| 1 | Hero（banner + 标题 + tagline + badges + tags） | 平铺 | ~25 |
| 2 | 这是什么 | 平铺 1 段 | ~10 |
| 3 | 核心特性 | 平铺 5 条 bullet | ~15 |
| 4 | 一回合什么样 | 平铺 + code block | ~30 |
| 5 | 快速开始 | 平铺 4 个 prompt + 顶部提示段 | ~35 |
| 6 | 安装 | 平铺 1 段 + 1 段自定义 | ~12 |
| 7 | 🎮 游戏内命令 | `<details>` 表格 | ~20（折叠时 1 行） |
| 8 | 📚 文档记忆系统 | `<details>` 树状图 | ~22（折叠时 1 行） |
| 9 | 🛠️ 仓库结构 / 本地开发 / 发布 | `<details>` 三段 | ~25（折叠时 1 行） |
| 10 | 内容边界 | 平铺 1 句 | ~3 |
| 11 | License | 平铺 1 句 | ~1 |
| **合计** | | | **~140** |

### 2.2 Section 设计详

#### Hero

```markdown
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
```

**说明**：banner / badges / tags 行保留现有结构（与 npm 页面、GitHub README 渲染一致）。tagline 替换为"AI Agent 用的中文后宫养成文字游戏 GM，结构化升温，NSFW 档位可控"。

#### 这是什么

```markdown
## 这是什么

Velvet Ascent 是给支持 skills 的 AI Agent 装的一个中文文字游戏 GM。它把对话变成一场自由的后宫养成 GalGame——你可以用自然语言指定世界观、人物关系、角色 XP、剧情尺度和长期记忆，前期铺垫、人物有自己的欲望和拒绝，中后期在已有关系上自然释放结构化的 NSFW 张力，而不是无脑堆料。
```

**说明**：
- 2 句话 / ~150 字
- 第一句：是什么（类型 + 用途）
- 第二句：怎么玩 + 黄色爽文定位（"结构化升温，不是堆料"）
- 替换原 `## 项目定位` 的 2 段长说明
- 替换原 `## 后宫养成与黄色爽文` 的 13 行 section（其精神被这句承载）

#### 核心特性

```markdown
## 核心特性

- **后宫养成 6 阶段**：每名角色独立走过 路人 → 吸引 → 试探 → 暧昧 → 亲密 → 入后宫，自然形成后宫格局。
- **角色 XP 与反应序列**：每名角色有 3-5 项具体癖好和对应的"反应序列"，对话和动作中可追溯。
- **欲望图谱 + NSFW 档位**：每名角色对其他角色有独立的"欲望立场"和 4 级显性度；NSFW 0-4 档位与养成阶段双重约束。
- **单时间线推进**：每回合沿当前时间、地点和场景目标推进，场景扰动不再无关跳线。
- **文档记忆 + 小说导出**：8 文件工作区追踪人物、关系、伏笔和时间线；游戏结束后整理为完整小说草稿。
```

**说明**：
- 5 条 bullet
- 替换原 `## 核心能力` 的 13 行表格（保留最具差异化的 5 个）
- 覆盖：后宫养成 / 角色 XP / 欲望图谱 / 单时间线 / 文档记忆
- 不含："女性向入口"（保留在 `## 游戏内命令` 折叠块里的"开启女性向剧情"命令里）

#### 一回合什么样

```markdown
## 一回合什么样

这是普通回合会长这样：

\`\`\`text
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
\`\`\`
```

**说明**：
- 沿用现有 demo（已经是经过 11 任务 hygiene 计划审核的样本）
- 修正：原 README 行 142 有一段"每个普通回合会围绕……"的引导句与下行的重复版本——本次直接重写为单行"这是普通回合会长这样："，消除重复
- 替换原 `## 回合体验` 的重复引导段

#### 快速开始

```markdown
## 快速开始

> 开局时，GM 会先出 【可开启功能】 和 【本局已启用】 两个面板，你可以随时调整。

把你想要的设定发给 Agent，例如：

\`\`\`text
开一个现代都市题材的自然流YY文字游戏，主角普通青年，想要爽文方向，但开局要温和自然一点。
\`\`\`

带 NSFW 档位和角色偏好：

\`\`\`text
开一个现代都市成人向 GalGame，NSFW 档位 3，主角普通青年但有隐藏魅力。
初始女主可以系统生成，但每个人都要有明显性格、XP偏好、关系阻力和着装记忆点。
剧情按单时间线推进，不要并行跳线。
\`\`\`

玄幻宗门成长线：

\`\`\`text
主题玄幻宗门，主角是刚入门的外门弟子。我要高度自由，后期可以有后宫争宠，但前几回合先从吸引力和机缘开始。
\`\`\`

长期剧情记忆：

\`\`\`text
开启文档记忆模式。以后每回合都帮我整理故事文档，人物关系别忘。当前游戏结束后我要导出成完整小说。
\`\`\`
```

**说明**：
- 顶部加 callout：提示玩家 GM 会先出两个面板（来自用户三轮确认）
- 4 个 prompt 选取策略：现代都市（默认调子）/ NSFW 档位（档位 + XP 卖点）/ 玄幻宗门（题材多样性）/ 长期记忆（文档记忆卖点）
- 5 个 → 4 个：放弃"女性向入口"（少数派，进入在折叠的命令表里有 `开启女性向剧情`）
- 移除原 `## 快速开始` 顶部的 `【可开启功能】` 和 `【本局已启用】` 长模板——这些是 GM 规则，已写在 SKILL.md；玩家只需知道面板会出

#### 安装

```markdown
## 安装

\`\`\`powershell
npx @ruizhefeng/velvet-ascent-skill
\`\`\`

默认安装到 `~/.agents/skills/velvet-ascent`。如果你的 Agent 客户端使用不同的 skills 目录，可以指定安装路径：

\`\`\`powershell
npx @ruizhefeng/velvet-ascent-skill --target C:\Users\YourName\.agents\skills
\`\`\`

安装后如果 Agent 没有立刻识别到 skill，重启客户端或重新加载 skills。
```

**说明**：与原 `## 安装` 几乎一致，精简了 "如果" 长句的冗余。

#### 折叠块：🎮 游戏内命令

```markdown
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
```

**说明**：14 行表格与原 `## 游戏内命令` 完全一致；改用 `<details>` 折叠。

#### 折叠块：📚 文档记忆系统

```markdown
<details>
<summary>📚 文档记忆系统</summary>

开启文档记忆后，skill 会按职责拆分故事资料，避免长期游戏中人物关系和伏笔被遗忘：

\`\`\`text
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
\`\`\`
</details>
```

**说明**：树状图与原 `## 文档记忆系统` 一致；折叠。

#### 折叠块：🛠️ 仓库结构 / 本地开发 / 发布

```markdown
<details>
<summary>🛠️ 仓库结构 / 本地开发 / 发布</summary>

**仓库结构**

\`\`\`text
.
├── SKILL.md              # skill 元数据和运行规则
├── bin/install.js        # npx 安装器
├── assets/               # README 封面和可选素材
├── references/           # 长参考文档目录
├── scripts/              # 可选辅助脚本目录
├── evals/evals.json      # 开发测试用例，不随 npm 包安装
├── package.json          # npm 包元数据
├── README.md             # 项目说明
└── LICENSE               # MIT 许可证
\`\`\`

**本地开发**

\`\`\`powershell
node bin\install.js --help
node bin\install.js --target .\tmp-skills
npm pack --dry-run
\`\`\`

\`evals/\` 目录用于开发测试，不会包含在最终 npm 安装包里。

**发布**

更新 `package.json` 里的版本号后发布：

\`\`\`powershell
npm publish --access public
\`\`\`

如果 npm 要求双因素认证，按终端提示完成浏览器验证或输入 OTP。
</details>
```

**说明**：原 `## 仓库结构` + `## 本地开发` + `## 发布` 三段合并为一个折叠块。

#### 内容边界

```markdown
## 内容边界

这个 skill 面向虚构的成人文字冒险。它强调自然推进、成年角色、合意互动和故事后果，不用于生成未成年、非自愿、剥削性或违法性内容。
```

**说明**：与原 `## 内容边界` 完全一致。

#### License

```markdown
## License

MIT
```

**说明**：与原 `## License` 一致。

---

## 3. 移除的部分

| 原 section | 移除理由 |
|---|---|
| `## 项目定位`（2 段） | 已被 `## 这是什么` 替代（更短、玩家向） |
| `## 后宫养成与黄色爽文`（13 行） | 已被 `## 这是什么` 第 2 句 + `## 核心特性` 3 条承载 |
| `## 回合体验` 重复引导段 | 改为单行 "这是普通回合会长这样：" |
| `## 快速开始` 顶部的 `【可开启功能】` + `【本局已启用】` 长模板 | 这是 GM 规则，已在 SKILL.md；玩家只需知道面板会出（callout 句已涵盖） |
| `## 适用场景` | 5 条 bullet 内容已被 `## 核心特性` + `## 这是什么` 覆盖；显式列举不必要 |
| `## 不适合` | 6 条负面清单与"内容边界"+"核心特性"语义重复 |

**保留但形态变化**：

| 原 section | 变化 |
|---|---|
| `## 核心能力`（13 行表） | 压缩为 `## 核心特性` 5 条 bullet |
| `## 快速开始`（5 个 prompt） | 减为 4 个 prompt（去"女性向入口"——已收入命令表） |
| `## 游戏内命令` | 折叠 |
| `## 文档记忆系统` | 折叠 |
| `## 仓库结构` + `## 本地开发` + `## 发布` | 三段合并折叠 |

---

## 4. 实施清单

1. 备份当前 `README.md` 到 `README.md.bak`（不提交）——若实施后回滚方便
2. 用全新内容重写 `README.md`
3. 校对：使用 `cat README.md | wc -l` 验证总行数在 140 附近
4. 校对：使用 `grep -c "##" README.md` 验证 section 数量 = 11
5. 校对：使用 `grep "每个普通回合" README.md` 验证没有重复引导段残留
6. 校对：使用 `grep "<details>" README.md` 验证 = 3
7. 校对：本地 `npx markdownlint README.md`（如有安装）通过
8. 校对：在 GitHub 上预览 README 渲染，hero banner / badges / 折叠块都正常
9. commit：`docs(readme): 重构为玩家向结构（hero + demo + 折叠详情）`
10. push 到 main
11. **npm 发布由用户决定**——README 改动不影响 skill 行为，是否发 0.2.1 patch 由用户决定（不自动发布）

---

## 5. 不在范围内

- 描述优化（description 字段，原 hygiene 计划里的 out-of-scope 项）——本次不动
- 任何 SKILL.md / references 的修改
- 任何 bin/install.js 的修改
- 任何 evals/ 的修改
- 添加新文档（docs/PLAYER.md / docs/DEVELOPER.md 等）——用户排除了方案 C
- 视觉资产（banner、截图、动图）——banner 沿用现有，无新增
- 多语言版本（README.en.md 等）——用户排除了"中英双节块"和"中英分体"方案
- 调整 npm 版本号或发布新版本

---

## 6. 风险与回滚

| 风险 | 缓解 |
|---|---|
| GitHub README 渲染与本地不一致 | 实施后用 GitHub 预览 + 截图核对 |
| `<details>` 在某些 GitHub 客户端不渲染 | GitHub 已支持标准 `<details>` 多年，2026 已稳定 |
| 玩家找不到命令表 / 文档树 | 折叠块的 `<summary>` 用 emoji + 中文明确标签，"游戏内命令" / "文档记忆系统" / "仓库结构 / 本地开发 / 发布" 醒目 |
| 旧 README 引用 / 链接断开 | 本仓库内 README 没有外部文档链接，无回链；外部 npm 页面与 GitHub 仓库 README 内容是同一个 |
| 改动不符合玩家决策预期 | 实施完成后做 1 次自检——"我作为中文玩家打开这页，能不能 30 秒内判断" |

**回滚**：`git revert <commit>` 即可。备份 README.md.bak 仅作本地参考，不提交。
