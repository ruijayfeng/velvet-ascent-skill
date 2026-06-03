# Character Fetish Profile

Use this reference when writing NSFW scenes, dialogue with desire undercurrent, character-specific reactions in intimate moments, or female-oriented sensuality detail. The full character card lives in `references/character-engine.md`; this file covers the **性癖谱 (fetish profile)** and **性癖互动库 (fetish interaction library)** sections of the card.

## Why "Fetish", Not "Taste"

In the Chinese yellow-fiction / GalGame context, "XP" (性癖) means **specific sexual-behavior preferences** — control / submission, command / being commanded, costume play, foot fetish, dirty talk, observation / being observed, restraint, impact play, role-play, and similar specific kinks. It is **not** a generic character-aesthetic preference like "she likes being taken seriously". The card must list concrete, observable kinks, not personality traits.

Bad:
- "她害羞"
- "她被动"
- "她喜欢被认真对待"
- "她对认真观察她的人有反应"

Good:
- "被命令时肩膀会松半秒、嘴角勾一下再恢复"
- "被吻脖子时呼吸停一拍，然后主动把头偏过来"
- "被看着高潮时她会用手挡住脸但不会停止"

## Fetish Profile (性癖谱)

Each character has **3-5 concrete kinks**, each with three parts:

1. **Trigger** — what specific scene or stimulus activates the kink
2. **Body reaction** — what physical response is observable
3. **Tell** — a small gesture, breath change, or phrase that signals the kink just fired

```text
### 性癖谱（3-5 项具体癖好）
1. [被命令]: 她被对方说"跪下""转过去""别动"等 → 肩膀会松半秒 → 嘴角会勾一下再恢复
2. [被吻脖子]: 接吻蔓延到颈侧时 → 呼吸停一拍 → 主动把头偏过来让对方更方便
3. [被看着]: 对方目光停留在她身体某处超过 3 秒 → 耳根发红 → 用手挡住脸但不阻止
4. [被认真观察]: 对方说出她今天换的口红色号 / 项链的新戴法 → 声音变轻 → "……你看到了？"
5. [被言语追问]: 对方在她说"没什么"之后继续追问 → 视线躲开 → 最后小声承认
```

**Rules of thumb:**
- 3-5 items, no fewer (the character feels thin) and no more (memory explodes).
- Each item must be specific and observable. "She likes control" is a personality trait, not a fetish.
- Mix "passive-trigger" kinks (被命令, 被看着) with "active-trigger" kinks (主动主导, 言语挑逗) for range.
- The list is canonical: once set, it persists across turns unless the user explicitly changes it.

## Fetish Interaction Library (性癖互动库)

For each fetish in the profile, write the **reaction sequence** the character shows when the kink fires. This is the **reaction library**, not an action list. The pattern is `trigger → action 1 → action 2 → tell or silence`.

```text
### 性癖互动库
对 [被命令]:
  - 她听到命令的当下停住（0.5 秒）
  - 肩膀松下来半秒
  - 然后嘴角勾一下再恢复
  - 接下来按对方说的做，但动作里有微小的延迟或加重（"我按你说的做了，但我让你知道我不是没选择"）
  - 不主动说话；沉默里能听出呼吸偏重

对 [被看着]:
  - 对方目光落在她身上的前 2 秒，她假装没注意
  - 第 3 秒起，耳根发红
  - 4-5 秒后她用手挡住脸但不停下正在做的事
  - 如果对方挪开目光，她会主动把对方的视线拉回来（"你刚看什么？"）

对 [主动主导]:
  - 她的主导不在"命令"而在"决定节奏"
  - 她会先让对方做 1-2 个动作
  - 然后用手按住对方的手腕 / 肩膀 / 腰，节奏由她定
  - 对方若抢节奏，她会让 0.5 秒然后重新拿回控制
  - 口头禅："慢慢来" / "我让你动了吗" / "看着我"
```

**Why a reaction library.** The library makes the character recognizable in NSFW scenes — a reader can tell who is in the scene even without a name tag. It also makes the writing **non-template**: instead of "she was shy", the writer reaches for the specific reaction sequence from this character's library.

## Male-Harem Differentiation (for Female-Oriented Route)

When the protagonist is female and the harem is male, fill the 6-dim matrix with male-side content. The structure stays the same, but the kink categories shift.

| 维度 | 男性后宫特定内容 |
|---|---|
| 性癖组合 | 主动主导 / 言语挑逗 / 沉默型主导 / 服务型主导 / 角色扮演 / 被动期待 |
| 性互动人格 | 主导但克制 / 主导且侵略 / 温柔但坚定 / 笨拙但真挚 / 主动且尊重 / 服务型温柔 |
| 欲望立场 | 占有 / 保护 / 仰望 / 试探 / 挑衅 / 合作 / 索求 |
| 场景偏好 | 私密空间 / 公共压力 / 反差场景 / 服务场景 / 反主客 / 主导转换 |
| 触发器 | 被挑衅 / 被仰望 / 被需要 / 被肯定 / 被拒绝后反思 / 被接受后失控 |
| 关系阻力源 | 地位差 / 性格克制 / 第三方 / 自我怀疑 / 男性的"不主动"性格 / 她的边界感 |

**Two characters in the male harem may not share ≥3 dimensions of similarity**, same rule as the female harem.

## Fetish Profile Updates

When the user runs `设置角色性癖：...` or `锁定角色设定：...`, the new content is canonical and must propagate to:
1. The character card in `02-character-ledger.md`
2. The 6-dim matrix self-check (re-run if a 3rd-dimension conflict appears)
3. The `06-desire-map.md` entry for that character (the fetish determines what desire-stand transitions feel natural)
4. Subsequent NSFW scenes (the writer should reach for the new library, not the old one)
