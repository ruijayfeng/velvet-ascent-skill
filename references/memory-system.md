# Memory System

Use this reference when the user asks for 文档记忆, 保存, 整理故事文档, 导出小说, continuity repair, or when context drift is likely.

## Goal

Keep long-running games coherent without slowing the main story. Memory work should be concise, structured, and mostly backstage.

## Workspace (8 Files)

```text
velvet-ascent-runs/
  <game-slug>/
    00-game-bible.md          ⭐ 字段扩展
    01-protagonist.md         ⭐ 字段扩展
    02-character-ledger.md    ⭐ 完全替换为新模板
    03-relationship-web.md    ⭐ 字段扩展
    04-plot-threads.md        保留，加字段
    05-timeline.md            保留
    06-desire-map.md          ⭐ 新增
    07-harem-status.md        ⭐ 新增
    turns/turn-NNN.md         保留
    chapters/chapter-NNN.md   保留
    exports/novel-draft.md    保留
```

If the user upgrades from a pre-0.2 workspace, files `06-desire-map.md` and `07-harem-status.md` are **auto-created** on first entry into the backstage protocol — initialize with the templates below if they do not exist. Old fields in `02-character-ledger.md` are kept (marked deprecated); new fields are appended.

## File Responsibilities

- `00-game-bible.md`: premise, world rules, tone, NSFW level, direction mode, boundaries, global constraints, harem-formation pace.
- `01-protagonist.md`: identity, abilities, resources, reputation, harem roster with stages, unresolved personal hooks.
- `02-character-ledger.md`: full character cards per `references/character-engine.md` (fetish profile and interaction library are part of the card).
- `03-relationship-web.md`: per-pair relationship status, including desire-stand visibility, stage, resistance, and the 角色间 dynamics.
- `04-plot-threads.md`: active hooks, unresolved conflicts, delayed payoffs, foreshadowing, with NSFW-association tags.
- `05-timeline.md`: canonical turn order, time/location changes, scene transitions, retcons.
- `06-desire-map.md`: per-pair desire stance and 显性度 evolution trail.
- `07-harem-status.md`: stage distribution, focal point, harem pattern pressure, integration progress.
- `turns/turn-NNN.md`: raw turn transcript.
- `chapters/chapter-NNN.md`: cleaned prose after 4-6 turns.
- `exports/novel-draft.md`: stitched novel draft.

## Backstage Update Protocol (10 Steps)

After each completed turn, update memory in this order:

```text
1. append raw turn to turns/turn-NNN.md
2. append canonical time/location/scene result to 05-timeline.md
3. update changed character facts in 02-character-ledger.md
4. update relationship shifts in 03-relationship-web.md
5. update 06-desire-map.md if any desire stance/显性度 changed
6. update 07-harem-status.md if 焦点/阶段/格局 changed
7. update hooks in 04-plot-threads.md
8. update 01-protagonist.md only if 后宫位/资源/身份 changed
9. update 00-game-bible.md only if 世界观/规则/边界 changed
10. every 4-6 turns, consolidate into chapter
```

In the main response, only show:

```text
【后台记录】已保存本回合，并更新人物、关系、欲望图谱和后宫状态。
```

Omit this line if it would slow pacing and the user did not ask to see save status.

## New File Templates

`06-desire-map.md`:

```text
# Desire Map

## 主角 × 角色 A
- 当前立场类型：
- 当前显性度：
- 显性度演化轨迹：Turn 001 [...] → Turn 005 [...] → ...
- 触发本演化的关键事件：
- 下一次预期演化：Turn XXX

## 角色 A × 角色 B
- 关系类型：
- 关键事件：
- 演化轨迹：
```

`07-harem-status.md`:

```text
# Harem Status

## 阶段分布
- [角色名]：阶段

## 当前焦点
- 主线焦点：
- 上次焦点切换：Turn XXX
- 焦点分配策略：

## 整体张力
- 角色间冲突点：
- 下一个张力爆发点：
- 暗流：

## 后宫养成进度
- 整体进度：[吸引+试探+暧昧+亲密+入后宫 各几人]
- 平均阶段：
- 推进速度：[快/中/慢/停滞]
```

## Initial File Templates (For First-Run Users)

`00-game-bible.md`:

```text
# Game Bible

世界观：
剧情方向：后宫养成（男性向） / 多男后宫（女性向）
NSFW档位：
用户边界：
女性向/男性向：
记忆策略：
整理策略：
后宫养成节奏：
核心规则：
  - 主轴 = 关系推进
  - 欲望维度 = 关系在不同角色间的属性
  - 角色差异化矩阵 = 6 维
  - 安全边界 = 成年/自愿/合意/虚构
```

`02-character-ledger.md`: see the full card template in `references/character-engine.md`.

`05-timeline.md`:

```text
# Timeline

## Turn 001
时间：
地点：
玩家行动：
结果：
新事实：
下个场景锚点：
```

## Context Drift Reminder

When the conversation is long, the user reports confusion, or the model notices contradictions, say briefly:

```text
这条线已经推进较长。如果你感觉人物关系或剧情细节开始变乱，建议先推进到一个阶段节点，然后让我整理文档/导出当前记录；之后可以重开对话并导入这些文档继续。
```

Do not overuse this reminder. Use it at stage boundaries, after timeline repair, or when memory risk is real.

## Novel Export

When exporting:

1. read chapters first if available
2. use turns to fill missing connective tissue
3. check `05-timeline.md` for order
4. preserve character cards and relationship consequences, including fetish profiles
5. remove gameplay scaffolding unless it belongs in-world
6. end with either a resolved ending or `未完待续`

Export should be a coherent novel draft, not a dump of logs.
