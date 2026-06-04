# velvet-ascent README Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite `README.md` from a 290-line developer-doc style into a 150-line player-first showcase (hero + 1-paragraph 这是什么 + 5 core features + turn demo + 4 quick-start prompts + install, with command table / memory tree / dev info folded into `<details>`), per the design spec at `docs/superpowers/specs/2026-06-04-readme-restructure-design.md`.

**Architecture:** Single-file rewrite. No code logic, no test framework. The "verification" is mechanical grep / wc checks against the spec's invariants. Two atomic tasks: (1) write the new README, (2) self-verify and commit. Push is deferred to the user (matches prior hygiene-plan convention).

**Tech Stack:** Markdown, Git. No npm changes, no SKILL.md changes, no reference changes.

**Quality invariant (binding):** After this change, `README.md` must (a) contain the 7 H2 sections from spec §2.1 in order (这是什么, 核心特性, 一回合什么样, 快速开始, 安装, 内容边界, License), (b) total ~150 lines (range 130-170 acceptable), (c) include exactly 3 `<details>` blocks (游戏内命令, 文档记忆系统, 仓库结构 / 本地开发 / 发布), (d) not contain the duplicate `每个普通回合会围绕...` line that exists in the current README at lines 142-143, and (e) preserve the banner image at `assets/velvet-ascent-banner.png` and all 4 existing badges (npm / license / agent-ready / Chinese).

**Rollback:** If the change needs to be undone post-push, the controller or user can run `git revert <commit-hash>`. The local `README.md.bak` is kept until Task 2 Step 4 for quick reference during the push decision window.

---

## File Map

**Modified:**
- `README.md` — full rewrite (replaces 290 lines with ~150)

**Created (local only, not committed):**
- `README.md.bak` — backup of the pre-rewrite content for quick local reference if rollback is needed

**Untouched (preserve everything):**
- `SKILL.md`, `references/*`, `bin/install.js`, `assets/*`, `scripts/*`, `evals/*`, `package.json`, `LICENSE`, `CHANGELOG.md`, `tests/*`
- All 18 eval `prompt` and `expected_output` strings — never edited
- `assets/velvet-ascent-banner.png` — kept as-is, referenced in the new README

---

## Task 1: Rewrite README.md

**Files:**
- Modify: `README.md` (full content replacement, 290 lines → ~150 lines)
- Create: `README.md.bak` (local backup, do NOT commit)

- [ ] **Step 1: Backup the current README locally**

```bash
cp README.md README.md.bak
```

Verify the backup exists:

```bash
ls -la README.md.bak README.md
```

Expected: both files exist, `README.md.bak` and `README.md` have the same size and timestamp.

- [ ] **Step 2: Confirm the pre-state matches the spec's invariants**

Run these checks against the CURRENT `README.md` (before rewriting). They establish the baseline so the post-state can be compared:

```bash
echo "=== current line count ==="
wc -l README.md

echo "=== current section headings ==="
grep -n "^## " README.md

echo "=== current details blocks ==="
grep -c "<details>" README.md

echo "=== current duplicate-line check (should report lines 142-143) ==="
grep -n "每个普通回合会围绕" README.md
```

Expected:
- Line count: 290-300
- Section headings: list of 13 sections (项目定位, 核心能力, 后宫养成与黄色爽文, 安装, 快速开始, 回合体验, 游戏内命令, 文档记忆系统, Skill 设计结构, 适用场景, 不适合, 仓库结构, 本地开发, 发布, 内容边界, License — 16 actually, including sub-`### `)
- `<details>` count: 0
- `每个普通回合会围绕`: 2 matches (the duplicate at lines 142-143)

If any of these don't match, stop and report to the user before proceeding.

- [ ] **Step 3: Replace README.md with the new content**

The new `README.md` is exactly the 11-section structure drafted in spec §2.2. Write the full file content:

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

## 安装

\`\`\`powershell
npx @ruizhefeng/velvet-ascent-skill
\`\`\`

默认安装到 `~/.agents/skills/velvet-ascent`。如果你的 Agent 客户端使用不同的 skills 目录，可以指定安装路径：

\`\`\`powershell
npx @ruizhefeng/velvet-ascent-skill --target C:\Users\YourName\.agents\skills
\`\`\`

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

## 内容边界

这个 skill 面向虚构的成人文字冒险。它强调自然推进、成年角色、合意互动和故事后果，不用于生成未成年、非自愿、剥削性或违法性内容。

## License

MIT
```

Write the file:

```bash
# Use the Write tool with the exact content above (no shell heredoc — multi-line is brittle).
```

After writing, verify the file is well-formed:

```bash
wc -l README.md
```

Expected: 130-170 lines.

- [ ] **Step 4: Run all 5 spec invariants**

```bash
echo "=== INV-1: H2 section headings (expect 7) ==="
grep -c "^## " README.md

echo "=== INV-2: details blocks (expect 3) ==="
grep -c "<details>" README.md

echo "=== INV-3: duplicate-line check (expect 0) ==="
grep -c "每个普通回合会围绕" README.md

echo "=== INV-4: banner preserved (expect 1) ==="
grep -c "velvet-ascent-banner.png" README.md

echo "=== INV-5: all 4 badges preserved (expect 4) ==="
grep -c "img.shields.io" README.md
```

Expected:
- INV-1: **7** — the 7 H2 headings: 这是什么, 核心特性, 一回合什么样, 快速开始, 安装, 内容边界, License. The 3 `<details>` blocks are inline foldable sections with `<summary>` markup, NOT H2 headings — they are checked separately by INV-2. (The spec's §2.1 "11 sections" counts hero block + 7 H2 + 3 details = 11 conceptual units; hero is not a heading, and details use `<summary>`, so `grep -c "^## "` returns 7.)
- INV-2: **3** — the three `<details>` blocks (游戏内命令, 文档记忆系统, 仓库结构 / 本地开发 / 发布)
- INV-3: **0** — the duplicate `每个普通回合会围绕...` line is gone
- INV-4: **1** — exactly one banner image reference
- INV-5: **4** — npm version, license, agent-ready, Chinese (4 shields.io badges)

If any invariant fails, fix the file before committing. Do not commit a failing state.

- [ ] **Step 5: Spot-check the section order**

```bash
grep -n "^## " README.md
```

Expected output (line numbers approximate, content exact):

```
...:## 这是什么
...:## 核心特性
...:## 一回合什么样
...:## 快速开始
...:## 安装
...:## 内容边界
...:## License
```

The 3 `<details>` blocks do NOT show as `^## ` lines. They are inline collapsible blocks between 安装 and 内容边界. Confirm that the order 是什么 → 核心特性 → 一回合什么样 → 快速开始 → 安装 → 内容边界 → License is preserved (3 details blocks should be present between 安装 and 内容边界 — verify by reading the relevant lines).

- [ ] **Step 6: Sanity check: tag/badge HTML still renders**

```bash
echo "=== Hero block sanity ==="
grep -n "h1 align=\"center\"\|<img src=\"./assets" README.md
```

Expected: at least 2 matches — the `<img src="./assets/velvet-ascent-banner.png"` line and the `<h1 align="center">` line.

- [ ] **Step 7: Confirm `README.md.bak` exists locally and is NOT staged**

```bash
ls -la README.md.bak
git status --short
```

Expected:
- `README.md.bak` exists
- `git status --short` shows two entries: `M README.md` (modified) and `?? README.md.bak` (untracked backup)
- The `?? README.md.bak` is expected and harmless — `git add README.md` in the next step is path-specific, so the backup will not be staged

Do NOT add the backup to `.gitignore` or `.git/info/exclude` (keep the change footprint to a single file). The backup is cleaned up in Task 2 Step 4.

- [ ] **Step 8: Commit**

```bash
git add README.md
git status --short
git commit -m "$(cat <<'EOF'
docs(readme): 重构为玩家向结构（hero + demo + 折叠详情）

- 11 section 重组为 hero / 这是什么 / 核心特性 / 一回合什么样 /
  快速开始 / 安装 + 3 个 <details> 折叠块 / 内容边界 / License
- 表层 ~150 行（原 290 行）
- 核心特性 13 行表 → 5 条 bullet
- 快速开始 5 个 prompt → 4 个
- 修复原 README 行 142-143 '每个普通回合会围绕' 重复引导句
- 详情参见 docs/superpowers/specs/2026-06-04-readme-restructure-design.md
EOF
)"
git log -1 --oneline
```

Expected:
- `git status --short` after `git add` shows `M README.md` (only)
- Commit message matches the heredoc above
- `git log -1` shows the new commit

- [ ] **Step 9: Report back to controller**

Report the following:
- `wc -l` result for the new README (target: 130-170)
- All 5 INV results
- The commit hash
- The `git log -1 --oneline` line

Do NOT push to remote. Do NOT run `npm publish`. Both are deferred to the user (matches prior hygiene-plan convention).

---

## Task 2: Final acceptance — git log + diff sanity (controller runs after subagent)

**Files:**
- Read-only: `git log`, `git show`, `git diff` (no edits)

- [ ] **Step 1: Confirm commit landed on main**

```bash
git log -1 --oneline
git log -1 --stat
```

Expected: the commit from Task 1 Step 8 with `README.md` as the only changed file.

- [ ] **Step 2: Spot-check the diff for the 5 spec invariants**

```bash
git show HEAD --stat
git show HEAD:README.md | head -50
```

Expected:
- `git show HEAD --stat`: only `README.md` listed
- `git show HEAD:README.md | head -50`: opens with the `<p align="center"><img src="./assets/velvet-ascent-banner.png"`, the H1, the tagline, the 4 badges, then the tags line, then `---`, then `## 这是什么`

- [ ] **Step 3: Push instructions for the user**

The plan does NOT push automatically. The controller reports back to the user with the commit hash and asks them to run, if they want it on the remote:

```bash
git push origin main
```

Whether to publish a new npm version (`npm version patch && npm publish --access public`) is a separate user decision — the README change does not affect skill behavior, so a patch is optional and at the user's discretion.

- [ ] **Step 4: Cleanup local backup (after user confirms push OR decline)**

```bash
rm -f README.md.bak
```

If the user wants to defer push or publish, the backup can stay locally until they decide. Do not delete it before user confirmation.

---

## Out of scope (do not touch)

- `SKILL.md`, `references/*` — content is canonical
- `bin/install.js` — no logic change
- `assets/velvet-ascent-banner.png` — kept as-is
- `evals/evals.json`, `evals/eval-metadata/*`, `tests/*` — no test changes
- `package.json` — version, scripts, deps unchanged
- `CHANGELOG.md` — README restructure is a doc-only change, no version bump implied
- Description field optimization (was an out-of-scope item in the prior hygiene plan; remains so)
