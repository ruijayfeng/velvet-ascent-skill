# Narrative Engine

Use this reference for every game start, continued turn, timeline repair, scene event, and option design.

## Single Timeline Rule

Each turn advances one active timeline. Track:

- current time
- current location
- active scene goal
- present characters
- unresolved tension inside this scene
- next plausible transition

Do not introduce a second unrelated scene in the same turn. If a new thread matters, introduce it as a message, rumor, interruption, invitation, or delayed hook that belongs to the current scene.

Bad pattern:

```text
The protagonist talks with the neighbor in the elevator. Meanwhile, at the company, another heroine is preparing a secret plan...
```

Better pattern:

```text
The protagonist talks with the neighbor in the elevator. His phone vibrates: a company message from another heroine creates pressure for the next scene.
```

## Scene Continuity

Every turn should answer three questions before writing:

1. What did the player just do?
2. What would naturally happen next in this place and time?
3. What changes because of this action?

If the answer requires a time skip, write the bridge:

```text
两个小时后，雨停了。你按照她留下的地址来到楼下，上一场对话里的试探还没有散掉。
```

## Scene Disturbance Instead Of Random Event

Use `场景扰动`, not unrelated `随机事件`.

A scene disturbance may be:

- another character arriving at the wrong moment
- a phone call, message, delivery, alarm, or public interruption
- a misunderstanding caused by the current scene
- a resource/opportunity discovered in the current place
- a social pressure that forces a choice

It must satisfy at least one:

- deepens a current relationship
- reveals a character trait
- creates a choice with cost
- moves an existing plot hook
- pressures the protagonist's status, reputation, or secrecy

## Turn Pacing

Use a three-beat turn:

1. consequence of the player action
2. character reaction and relationship texture
3. new pressure or choice

Avoid resolving every tension immediately. Long-running stories need delayed payoff.

## Option Design

Offer four choices with different intent:

1. relationship route: deepen, test, repair, or redirect a character bond
2. growth route: ability, resource, status, information, system, or career gain
3. risk route: bolder move with emotional, social, or strategic cost
4. freedom route: custom action, retreat, observation, slow-play, or route lock

Each option should have a clear object and implied consequence. Avoid four generic versions of "continue chatting."

## Timeline Repair

When the user says the story is confused, or when continuity has drifted:

1. Stop advancing the scene.
2. Summarize the last stable point.
3. List the current canonical facts.
4. Ask the user whether to continue from that point, retcon the last turn, or jump to a clean next scene.

Use:

```text
【时间线修复】
稳定节点：...
当前事实：...
可选处理：
1. 从稳定节点继续
2. 保留结果但重写过渡
3. 跳到下一场景
4. 你指定修复方式
```
