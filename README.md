# Velvet Ascent Skill

`velvet-ascent` is a Codex skill for running a Chinese, turn-based, freeform text adventure GM with gradual narrative escalation, persistent story memory, relationship tracking, and optional novel export.

The skill is designed for natural pacing: early turns stay grounded and emotionally suggestive, while later turns can become more dramatic as player choices, relationship history, and story stakes accumulate.

## Install

Install the skill with npx:

```powershell
npx @ruizhefeng/velvet-ascent-skill
```

By default, the installer copies the skill to:

```text
~/.agents/skills/velvet-ascent
```

Install to a custom skills directory:

```powershell
npx @ruizhefeng/velvet-ascent-skill --target C:\Users\YourName\.agents\skills
```

Restart Codex or reload skills after installation if the skill does not appear immediately.

## Use

After installation, ask Codex for a Chinese turn-based text adventure using natural YY-style escalation. Example prompts:

```text
开一个现代都市题材的自然流YY文字游戏，主角普通青年，想要爽文方向，但开局要温和自然一点。
```

```text
主题玄幻宗门，主角是刚入门的外门弟子。我要高度自由，后期可以有后宫争宠，但前几回合先从吸引力和机缘开始。
```

Useful in-game commands include:

- `查看系统面板`
- `查看关系网`
- `查看后宫状态`
- `提高尺度`
- `降低尺度`
- `保存本回合`
- `整理故事文档`
- `导出小说`
- `自定义行动：...`

## Repository Layout

```text
.
├── SKILL.md              # Skill metadata and runtime instructions
├── bin/install.js        # npx installer
├── assets/               # Optional reusable assets
├── references/           # Longer reference docs for the skill
├── scripts/              # Optional helper scripts bundled with the skill
├── evals/evals.json      # Development eval prompts, not included in npm package
├── package.json          # npm package metadata
├── README.md             # Project documentation
└── LICENSE               # MIT license
```

## Development

Validate the installer locally:

```powershell
node bin\install.js --help
node bin\install.js --target .\tmp-skills
```

Preview the npm package contents:

```powershell
npm pack --dry-run
```

The npm package intentionally excludes `evals/`; evals are useful for development but not needed by end users.

## Publish

Update the version in `package.json`, then publish:

```powershell
npm publish --access public
```

If npm requires two-factor authentication, complete the browser challenge or provide an OTP as prompted.

## Safety And Scope

This skill is intended for fictional adult text adventure roleplay. It should keep romantic or intimate material adult, consensual, and tied to story progression. It is not designed for non-consensual, underage, exploitative, or illegal sexual content.

## License

MIT

