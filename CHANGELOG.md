# Changelog

All notable changes to velvet-ascent are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project adheres to [Semantic Versioning](https://semver.org/).

## [0.2.0] - 2026-06-03

### Added
- 8-document memory workspace (00-game-bible, 01-protagonist, 02-character-ledger, 03-relationship-web, 04-plot-threads, 05-timeline, 06-desire-map, 07-harem-status) with a 10-step backstage update protocol.
- Desire Map: every character carries a 欲望立场 toward other characters with a 4-level 显性度 (潜意识 / 情绪感知 / 主动承认 / 公开展示).
- Harem-formation 6-stage path: 路人 → 吸引 → 试探 → 暧昧 → 亲密 → 入后宫, with per-character independent progression gated by cause, not turn count.
- Character Differentiation Matrix: 6 dimensions (性癖组合 / 性互动人格 / 欲望立场 / 场景偏好 / 触发器 / 关系阻力源) with a hard rule that no two characters may share ≥3 dimensions of similarity or the same relationship-resistance-source type.
- NSFW level × stage cross-constraint: written level ≤ min(user-set level, stage cap). Caps: 路人=0, 吸引=1, 试探=2, 暧昧=3, 亲密=4, 入后宫=4.
- Female-oriented 5-dim sensuality model: 触觉 / 视觉与凝视 / 听觉 / 心理 / 主动权, with female agency preserved in every NSFW scene.
- 18 evals in `evals/evals.json` covering opening, continuation, escalation, and meta paths; 5 dedicated 0.2 pivot evals (ids 14-18).

### Changed
- Single-timeline progression is now a hard contract: scene disturbance must connect to current time/place, not unrelated random events.
- Action options in Normal Turn Format now use stage-adaptive labels (early-game uses neutral 试探/观察/退让/自定义; only mid/late-game uses 欲望推进/关系压力/风险代价/自由行动).
- Memory updates are explicitly backstage — they do not interrupt the main response unless the player asks to see save status.
- README "Skill 设计结构" section now lists all 5 references including `character-fetish.md`.

### Safety
- Hard-coded consent boundaries: no minors, no non-consent, no coercion, no intoxication-based inability to consent, no illegal sexual content. If the user pushes across these lines, redirect to the nearest safe adult version and continue the game.

## [0.1.2] - 2026-05-31

### Added
- Initial release with single-timeline narrative engine, character engine, NSFW style guide, and document memory.
- npx installer (`bin/install.js`) supporting `--target` and `--help`.
- Chinese-first prompt templates and quick-start examples in README.

[0.1.2]: https://github.com/ruijayfeng/velvet-ascent-skill/releases/tag/v0.1.2
[0.2.0]: https://github.com/ruijayfeng/velvet-ascent-skill/releases/tag/v0.2.0
