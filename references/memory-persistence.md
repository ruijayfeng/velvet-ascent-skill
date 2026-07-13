# Memory And Persistence - 记忆和持久化

When filesystem tools are available and the user enables memory, create or update the 8-document workspace.

## Document Workspace

The workspace consists of:

- `00-game-bible` — 游戏圣经（世界观、规则、设定）
- `01-protagonist` — 主角档案
- `02-character-ledger` — 角色账本（所有角色的详细信息）
- `03-relationship-web` — 关系网（角色之间的关系状态）
- `04-plot-threads` — 剧情线（活跃的剧情线和钩子）
- `05-timeline` — 时间线（事件时间线）
- `06-desire-map` — 欲望图谱（角色的欲望立场和显性度）
- `07-harem-status` — 后宫状态（后宫养成阶段和关系状态）

Plus additional directories:

- `turns/` — 回合记录
- `chapters/` — 章节整理
- `exports/` — 小说导出

## 10-Step Backstage Update Protocol

Apply the 10-step backstage update protocol in `references/memory-system.md` for each memory update.

## Default State

Default state stays "current run" (临时游玩) until the user enables memory.

## Memory Update Timing

Memory updates happen after the main turn; the main response only shows one short status line, or omits it unless the user asked to see save status.

## Memory Modes

- **临时游玩** — 不保存，每次对话独立
- **文档记忆** — 每回合后台保存人物、关系、欲望图谱和后宫状态
- **每阶段整理** — 每 4-6 回合或阶段节点整理成章节
- **最终小说导出** — 游戏结束或阶段完成后整理为连续小说草稿

## Female-Oriented Route

When `开启女性向剧情` is active, the structure stays the same (harem formation, 6 stages, 6-dim matrix, level × stage constraint) but the **focal point shifts**: the protagonist is the **感受者** (feeler), not the action-taker. The center of description is her tactile, visual, auditory, and psychological sensuality. She retains full agency in every NSFW scene.

For the 5-dim sensuality model (触觉优先 / 视觉与凝视 / 听觉 / 心理 / 主动权), see `references/nsfw-style-guide.md`.

## Novel Export

When the user asks `导出小说`, compile the run into `exports/novel-draft.md` when tools are available.

Preserve:
- chapter order
- timeline
- character voices
- relationship consequences
- fetish profiles
- route consequences

Convert choices into smooth prose. End with a resolved ending or `未完待续`.
