#!/usr/bin/env node
// Static assertion check for evals/evals.json.
// Does NOT execute the skill — that needs the agent runtime, which
// lives in the skill-creator toolchain. This script verifies that:
//   1. Every eval has a non-empty assertions array
//   2. Each assertion has name/check/type
//   3. Programmatic assertions have a 'keywords' list and the
//      expected_output string contains at least one keyword
// To run programmatic keyword checks, the assertion JSON may include
// an optional "keywords" array (added by graders, not the eval author).
//
// Usage: node scripts/run-assertions.js
// Exit 0 = pass, 1 = fail.

const fs = require("node:fs");
const path = require("node:path");

const EVALS_PATH = path.join(__dirname, "..", "evals", "evals.json");
const ALLOWED_TYPES = new Set(["programmatic", "llm-judge", "hybrid"]);

function fail(msg) {
  console.error("FAIL:", msg);
  process.exitCode = 1;
}

function main() {
  const raw = fs.readFileSync(EVALS_PATH, "utf8");
  const data = JSON.parse(raw);
  if (!Array.isArray(data.evals) || data.evals.length === 0) {
    fail("evals.json has no evals array");
    return;
  }

  let totalAssertions = 0;
  let programmaticWithKeywords = 0;
  let programmaticWithKeywordHit = 0;

  for (const ev of data.evals) {
    if (!ev.id) fail(`eval missing id`);
    if (!ev.prompt) fail(`eval ${ev.id}: missing prompt`);
    if (!ev.expected_output) fail(`eval ${ev.id}: missing expected_output`);
    if (!Array.isArray(ev.assertions) || ev.assertions.length === 0) {
      fail(`eval ${ev.id}: empty or missing assertions`);
      continue;
    }
    for (const a of ev.assertions) {
      totalAssertions += 1;
      if (!a.name) fail(`eval ${ev.id}: assertion missing name`);
      if (!a.check) fail(`eval ${ev.id}: assertion missing check`);
      if (!ALLOWED_TYPES.has(a.type)) {
        fail(`eval ${ev.id}: assertion ${a.name}: bad type ${a.type}`);
      }
      if (a.type === "programmatic" && Array.isArray(a.keywords)) {
        programmaticWithKeywords += 1;
        const haystack = (ev.expected_output + " " + ev.prompt).toLowerCase();
        const hit = a.keywords.some((k) => haystack.includes(String(k).toLowerCase()));
        if (hit) programmaticWithKeywordHit += 1;
        else fail(`eval ${ev.id}: programmatic assertion ${a.name} has keywords but none match`);
      }
    }
  }

  if (process.exitCode === 1) return;

  console.log(
    `evals: ${data.evals.length}, assertions: ${totalAssertions}, ` +
      `programmatic w/ keywords: ${programmaticWithKeywords}, keyword hits: ${programmaticWithKeywordHit}`
  );
  console.log("OK");
}

main();
