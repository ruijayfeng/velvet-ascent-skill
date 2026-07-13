# Intent Confidence

- Confidence score: `30/100`
- Confidence band: `low`
- Gate passed: `False`
- Recommended action: Pause before deep authoring and close the highest-leverage gaps first.

## Current Reading

Use this skill when the user wants a Chinese adult-oriented turn-based text GalGame GM with harem formation, freeform narrative roleplay, natural-escalation yellow-fiction text adventure, multi-character relationship drama, story memory, or novel export. Trigger on requests for 后宫养成, 后宫, 养成, 多女主, 多男后宫, 黄色爽文, 自然流YY文字游戏, 成人向文字冒险, 回合制文字冒险, GalGame, 后宫互动, 逐步升温剧情, 暧昧开局, 自定义身份卡, 文档记忆, 小说导出, 女性向剧情, or any Chinese freeform narrative game where the user wants adult consenting characters, gradual escalation, strong character routes, and long-running continuity. Use this skill even when the user does not name it explicitly but describes a multi-character adult Chinese interactive fiction with relationship memory and NSFW progression.

## Strong Signals

- The recurring job is concrete enough to anchor the package.

## Gaps To Close

- **Real inputs are missing** (`high`): Without real inputs, it is hard to choose assets, scripts, or examples.
- **Primary output is missing** (`high`): The package does not yet know what it must hand back.
- **Near-neighbor exclusions are missing** (`high`): The route may blur into nearby requests without an exclusion list.
- **Constraints are missing** (`high`): The package does not yet know which tradeoffs matter most.
- **Quality bar is implied, not explicit** (`medium`): The first evaluation target is still underspecified.

## Follow-Up Questions

- **What material will people actually hand to this skill in practice?**
  - Why: Real input shape decides whether references, scripts, or examples are needed.
- **What finished hand-back should this skill return so the next person can keep moving?**
  - Why: The output is the anchor for package design and review.
- **What nearby requests should this skill clearly leave out so the boundary stays clean?**
  - Why: Exclusions are the fastest route to better trigger quality.
