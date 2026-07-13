# Normal Turn Format - 正常回合格式

Use this format for each normal turn. For 7-segment detail and the desire-dimension annotation rules, see `references/narrative-engine.md`.

```text
【标题】
当前时间：...
当前地点：...
当前场景目标：...
本回合涉及角色：[列出在场角色]

【当前状态】
（阶段、欲望立场显性度、NSFW档位；只显示本回合相关状态）

【主线推进】
（关系推进 = 主轴。关系层面 + 欲望层面 + 身体张力三层都要写。）

【欲望维度注记】
（哪一角色欲望立场显性度上升/转化？哪个性癖被触发？身体张力的具体表现？）

【场景扰动】
（与当前时间/地点相关的可观测事件；最好留出欲望维度的推进空间，但不强行触发 NSFW）

【关系/状态变化】
（同时更新涉及到的所有角色）

【行动选项】
（命名按当前阶段自适应：早期（路人/吸引/试探）用"搭话/观察/退让/自定义"等中性标签；
中后期（暧昧/亲密/入后宫）才使用"欲望推进/关系压力/风险代价/自由行动"四类。）
1. ...
2. ...
3. ...
4. ...
```

## Scene Disturbance Rules

Use `场景扰动`, not unrelated `随机事件`. A scene disturbance may be:

- another character arriving at the wrong moment
- an ambiguous message or innuendo
- a body-distance compression (elevator, crowded subway, narrow hallway)
- a found private object
- a harem-pattern pressure (another harem member appearing at an intimate moment)

See `references/narrative-engine.md` for more details.

## NSFW Escalation Control

Do not use this skill's pacing as a reason to force NSFW escalation. If a character is at stage 暧昧 and the user has set level 3, the maximum you may write this turn is level 3 — but the actual writing should fit what the scene has earned.

See `references/nsfw-style-guide.md` for the level × stage matrix.

## Adult Escalation Rules

Escalation is driven by the **level × stage cross-constraint**: the actual level you may write ≤ min(user-set level, stage-cap level). The stage caps are:

- 路人 = 0
- 吸引 = 1
- 试探 = 2
- 暧昧 = 3
- 亲密 = 4
- 入后宫 = 4

### Temporary Exceptions

When a scene event forces escalation, a route reversal happens, or a character breaks from her usual restraint, you may briefly exceed the cap — but you must return to normal pacing the next turn and write a consequence (the character may pull back, become colder, become more aggressive, or the relationship may shift).

For level-by-level writing thresholds (dialogue / body / scene / atmosphere scales), see `references/nsfw-style-guide.md`.

## Character And Dialogue Rules

Every important character must have a complete card, including:

- 6-dim differentiation matrix entry
- fetish profile (3-5 items, each with a specific trigger → body reaction → tell)
- fetish interaction library

See `references/character-engine.md` and `references/character-fetish.md`.

### Dialogue Guidelines

Dialogue should reveal personality and desire, not just advance plot. Before writing dialogue, decide:

- what the character wants in this moment
- what she refuses to say directly
- what desire leaks through body language, voice, distance, hand placement, eye contact
- how her speech pattern differs from other characters

Use longer exchanges when intimacy or conflict matters. Short lines are fine for impact, but not every line should be clipped.

Do not make every character instantly love the protagonist. Attraction grows through specific events, remembered details, mutual risk, status change, rivalry, jealousy, and private choices.
