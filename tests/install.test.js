const test = require("node:test");
const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const INSTALLER = path.join(__dirname, "..", "bin", "install.js");

function runInstaller(args) {
  return execFileSync("node", [INSTALLER, ...args], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function makeTempDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

test("--help prints usage and exits 0", () => {
  const out = runInstaller(["--help"]);
  assert.match(out, /Usage:/);
  assert.match(out, /--target/);
  assert.match(out, /Default target:/);
});

test("--help exits 0 even with no other args", () => {
  const code = execFileSync("node", [INSTALLER, "--help"], { stdio: "pipe" }).length;
  assert.ok(code >= 0, "should produce output");
});

test("--target installs skill into a fresh temp dir", () => {
  const target = makeTempDir("velvet-test-");
  const out = runInstaller(["--target", target]);

  const installDir = path.join(target, "velvet-ascent");
  assert.ok(fs.existsSync(installDir), `install dir should exist: ${installDir}`);

  const skillMd = path.join(installDir, "SKILL.md");
  assert.ok(fs.existsSync(skillMd), "SKILL.md should be copied");

  const referencesDir = path.join(installDir, "references");
  assert.ok(fs.existsSync(referencesDir), "references/ should be copied");
  assert.ok(
    fs.existsSync(path.join(referencesDir, "character-fetish.md")),
    "character-fetish.md must be present in installed references (audit #1)"
  );

  assert.match(out, /Installed velvet-ascent to:/);
});

test("--target does not install evals/ or docs/ (per package.json files whitelist)", () => {
  const target = makeTempDir("velvet-test-");
  runInstaller(["--target", target]);

  const installDir = path.join(target, "velvet-ascent");
  assert.ok(
    !fs.existsSync(path.join(installDir, "evals")),
    "evals/ should NOT be in the npm package"
  );
  assert.ok(
    !fs.existsSync(path.join(installDir, "docs")),
    "docs/ should NOT be in the npm package"
  );
});

test("re-running --target on the same dir is idempotent (overwrites cleanly)", () => {
  const target = makeTempDir("velvet-test-");
  runInstaller(["--target", target]);
  // second run should not throw
  runInstaller(["--target", target]);
  const installDir = path.join(target, "velvet-ascent");
  assert.ok(fs.existsSync(path.join(installDir, "SKILL.md")));
});

test("unknown argument exits non-zero with a clear message", () => {
  let stderr = "";
  let code = 0;
  try {
    execFileSync("node", [INSTALLER, "--bogus"], { stdio: ["ignore", "pipe", "pipe"] });
  } catch (err) {
    stderr = err.stderr ? err.stderr.toString() : "";
    code = err.status;
  }
  assert.equal(code, 1);
  assert.match(stderr, /Unknown argument: --bogus/);
});
