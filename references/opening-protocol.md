# Opening Protocol - 开场协议

## Step 1: Gather setup (only if missing)

Infer or ask for the minimum:

- 主题/世界观：现代都市、玄幻、末世、娱乐圈、职场、架空王朝、成年校园、女性向等。
- 主角身份：普通开局、隐藏天赋、重生、系统觉醒、豪门、修行者、自定义。
- 剧情方向：男性向后宫养成（默认）、女性向多男后宫。
- NSFW 档位：`0 欲望萌芽`、`1 身体自觉`、`2 直接接触`、`3 完整场景`、`4 高强度场景`。
- 记忆模式：临时游玩、文档记忆、每阶段整理、最终小说导出。
- 初始角色定制：系统生成（推荐：2-4 个角色，跑差异化矩阵自检）、玩家自定义、半自定义。
- 后宫养成节奏：玩家主导（默认）/ 加速 / 参考。

## Step 2: Surface available features

Before asking the player to choose, make the available control features visible:

```text
【可开启功能】
- 欲望图谱：每回合后台维护各角色的欲望立场与显性度。
- 后宫养成阶段：每名后宫角色按 6 阶段路径独立推进。
- 角色差异化矩阵：每加入新角色必跑 6 维自检，避免模板化。
- 文档记忆：每回合后台保存人物、关系、欲望图谱和后宫状态。
- 阶段整理：每 4-6 回合或阶段节点整理成章节。
- 小说导出：游戏结束或阶段完成后整理为连续小说草稿。
- 尺度控制：可随时提高/降低尺度，或设置 NSFW 档位 0-4。
- 角色锁定：可锁定角色性格、性癖谱、互动库、说话方式和着装记忆点。
- 时间线修复：剧情跳线或关系混乱时，可要求回到稳定节点整理。
```

## Step 3: Confirm enabled settings

Before starting the first scene, confirm the enabled feature set in a short block. If the user did not specify, choose a conservative default and mark it as adjustable.

```text
【本局已启用】
方向：男性向后宫养成 / 女性向多男后宫
NSFW档位：...
记忆模式：临时游玩 / 文档记忆 / 每阶段整理 / 最终小说导出
整理策略：不开启 / 每回合后台保存 / 阶段节点整理
角色定制：系统生成 / 玩家自定义 / 半自定义
后宫养成节奏：玩家主导 / 加速 / 参考
时间线：单时间线推进
```

## Step 4: One-time opening reminder

Show once per new game:

```text
你可以随时用自然语言控制剧情走向：指定某个角色路线、提高/降低尺度、慢放某个场景、跳过某段、锁定人物性格或性癖、要求整理文档、或直接输入自定义行动。
```

## Step 5: Generate identity cards and character seeds

Generate 3 identity cards unless the user asks to start immediately. Each card includes:

- 身份名称
- 初始处境
- 核心优势
- 潜在关系线
- 成人向剧情钩子
- 初始风险
- 推荐 NSFW 档位

Generate 2-4 initial major character seeds when the game benefits from routes. **Each character must pass the 6-dim differentiation matrix self-check against the existing roster** — no two characters may share ≥3 dimensions of similarity, and no two characters may share the same relationship-resistance-source type. See `references/character-engine.md` for the full card template and matrix procedure.

All important romantic or intimate characters must be clearly adult.
