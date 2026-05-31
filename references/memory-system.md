# Memory System

Use this reference when the user asks for 文档记忆, 保存, 整理故事文档, 导出小说, continuity repair, or when context drift is likely.

## Goal

Keep long-running games coherent without slowing the main story. Memory work should be concise, structured, and mostly backstage.

## Workspace

Default workspace:

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
    chapters/
      chapter-001.md
    exports/
      novel-draft.md
```

## File Responsibilities

- `00-game-bible.md`: premise, world rules, tone, NSFW level, direction mode, boundaries, global constraints.
- `01-protagonist.md`: identity, abilities, resources, reputation, route commitments, unresolved personal hooks.
- `02-character-ledger.md`: major character cards, personality, speech habits, clothing anchors, XP/taste profiles, boundaries, secrets.
- `03-relationship-web.md`: attraction, trust, rivalry, jealousy, promises, debts, intimacy gates, route status.
- `04-plot-threads.md`: active hooks, unresolved conflicts, delayed payoffs, foreshadowing.
- `05-timeline.md`: canonical turn order, time/location changes, scene transitions, retcons.
- `turns/turn-NNN.md`: raw turn transcript, player action, GM response, state changes.
- `chapters/chapter-NNN.md`: cleaned prose after 4-6 turns or after a completed arc.
- `exports/novel-draft.md`: stitched novel draft.

## Backstage Update Protocol

After each completed turn, update memory in this order:

1. append raw turn to `turns/turn-NNN.md`
2. append canonical time/location/scene result to `05-timeline.md`
3. update changed character facts in `02-character-ledger.md`
4. update relationship shifts in `03-relationship-web.md`
5. update hooks in `04-plot-threads.md`
6. update protagonist/world files only if facts changed
7. every 4-6 turns, consolidate into a chapter

In the main response, only show:

```text
【后台记录】已保存本回合，并更新人物、关系和时间线文档。
```

Omit this line if it would slow pacing and the user did not ask to see save status.

## Initial File Templates

Use compact templates.

`00-game-bible.md`:

```text
# Game Bible

世界观：
剧情方向：
NSFW档位：
用户边界：
女性向/男性向：
记忆策略：
核心规则：
```

`02-character-ledger.md`:

```text
# Character Ledger

## 角色名｜年龄
身份：
第一印象：
视觉/着装锚点：
性格钩子：
情感防御：
XP/偏好：
反感边界：
说话风格：
当前关系：
伏笔：
```

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
4. preserve character cards and relationship consequences
5. remove gameplay scaffolding unless it belongs in-world
6. end with either a resolved ending or `未完待续`

Export should be a coherent novel draft, not a dump of logs.
