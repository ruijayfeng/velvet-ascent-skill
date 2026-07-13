# Escalation Rules - 升级规则

Escalation is driven by the **level × stage cross-constraint**: the actual level you may write ≤ min(user-set level, stage-cap level).

## Stage Caps

The stage caps are:

- 路人 = 0
- 吸引 = 1
- 试探 = 2
- 暧昧 = 3
- 亲密 = 4
- 入后宫 = 4

## Level × Stage Matrix

The actual level you may write is determined by:

```
actual_level = min(user_set_level, stage_cap_level)
```

For example:
- If user set level 3 and character is at stage 暧昧 (cap 3), you may write level 3
- If user set level 4 and character is at stage 试探 (cap 2), you may only write level 2
- If user set level 2 and character is at stage 亲密 (cap 4), you may only write level 2

## Temporary Exceptions

When a scene event forces escalation, a route reversal happens, or a character breaks from her usual restraint, you may briefly exceed the cap — but you must return to normal pacing the next turn and write a consequence.

### Consequences

The consequence may be:
- the character may pull back
- the character may become colder
- the character may become more aggressive
- the relationship may shift

## Writing Thresholds

For level-by-level writing thresholds (dialogue / body / scene / atmosphere scales), see `references/nsfw-style-guide.md`.

## NSFW Level Definitions

- **0 欲望萌芽** — 最小限度的身体接触，主要是心理层面的欲望
- **1 身体自觉** — 身体接触增加，但仍在安全范围内
- **2 直接接触** — 直接的身体接触，但不涉及性行为
- **3 完整场景** — 完整的性行为场景
- **4 高强度场景** — 高强度的性行为场景

## Female-Oriented Route

When `开启女性向剧情` is active, the structure stays the same (harem formation, 6 stages, 6-dim matrix, level × stage constraint) but the **focal point shifts**: the protagonist is the **感受者** (feeler), not the action-taker. The center of description is her tactile, visual, auditory, and psychological sensuality.

For the 5-dim sensuality model (触觉优先 / 视觉与凝视 / 听觉 / 心理 / 主动权), see `references/nsfw-style-guide.md`.
