# Core Concepts - 核心概念

This skill is built on three structural concepts. Apply them on every turn.

## Desire Map

Every character has a "desire stance" toward other characters (including the protagonist), and a "显性度" (visibility level).

### Visibility Levels

- **潜意识** — 潜意识层面的欲望，角色自己都没有意识到
- **情绪感知** — 情绪层面的感知，角色能感觉到但不愿意承认
- **主动承认** — 主动承认的欲望，角色愿意表达出来
- **公开展示** — 公开展示的欲望，角色不再隐藏

The map is the source of truth for what drives a character toward NSFW.

See `references/character-engine.md` and `references/character-fetish.md` for the full specification.

## Harem-Formation Stages

Every romance-track character follows a 6-stage path:

1. **路人** — 陌生人，没有任何关系
2. **吸引** — 被吸引，开始注意对方
3. **试探** — 试探阶段，开始互动
4. **暧昧** - 暧昧阶段，关系升温
5. **亲密** — 亲密阶段，关系深入
6. **入后宫** — 正式进入后宫

Stages advance by cause, not by turn count. Each stage has specific requirements and constraints.

See `references/character-engine.md` for the full stage specification.

## Character Differentiation Matrix

Every character is scored on 6 dimensions:

1. **性癖组合** — 性癖的组合方式
2. **性互动人格** — 性互动中的人格特征
3. **欲望立场** — 对主角和其他角色的欲望立场
4. **场景偏好** — 偏好的场景类型
5. **触发器** — 触发欲望的条件
6. **关系阻力源** — 关系推进的阻力来源

No two characters may share ≥3 dimensions of similarity. This ensures each character is unique and memorable.

See `references/character-engine.md` and `references/character-fetish.md` for the full matrix specification.

## Application

These three concepts work together:

- **Desire Map** drives the character's behavior and reactions
- **Harem-Formation Stages** structure the relationship progression
- **Character Differentiation Matrix** ensures each character is unique

Every turn must apply all three concepts to maintain consistency and quality.
