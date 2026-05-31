#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const SKILL_NAME = "velvet-ascent";
const ROOT = path.resolve(__dirname, "..");
const DEFAULT_SKILLS_DIR = path.join(os.homedir(), ".agents", "skills");
const COPY_ENTRIES = ["SKILL.md", "assets", "references", "scripts"];

function printHelp() {
  console.log(`velvet-ascent-skill installer

Usage:
  npx @ruizhefeng/velvet-ascent-skill
  npx @ruizhefeng/velvet-ascent-skill --target <skills-directory>

Options:
  --target <dir>  Install into a custom skills directory.
  --help         Show this help message.

Default target:
  ${path.join(DEFAULT_SKILLS_DIR, SKILL_NAME)}
`);
}

function parseArgs(argv) {
  const args = { target: DEFAULT_SKILLS_DIR };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--help" || arg === "-h") {
      args.help = true;
      continue;
    }

    if (arg === "--target") {
      const value = argv[i + 1];
      if (!value) {
        throw new Error("--target requires a directory path");
      }
      args.target = value;
      i += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  return args;
}

function assertPackagedSkill() {
  const skillPath = path.join(ROOT, "SKILL.md");
  if (!fs.existsSync(skillPath)) {
    throw new Error(`SKILL.md not found in package root: ${ROOT}`);
  }
}

function copySkill(targetSkillsDir) {
  const installDir = path.resolve(targetSkillsDir, SKILL_NAME);

  fs.mkdirSync(targetSkillsDir, { recursive: true });
  fs.rmSync(installDir, { recursive: true, force: true });
  fs.mkdirSync(installDir, { recursive: true });

  for (const entry of COPY_ENTRIES) {
    const source = path.join(ROOT, entry);
    if (!fs.existsSync(source)) {
      continue;
    }

    const destination = path.join(installDir, entry);
    fs.cpSync(source, destination, {
      recursive: true,
      force: true,
      filter: (src) => !src.includes(`${path.sep}__pycache__${path.sep}`),
    });
  }

  return installDir;
}

function main() {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      printHelp();
      return;
    }

    assertPackagedSkill();
    const installDir = copySkill(args.target);

    console.log(`Installed ${SKILL_NAME} to:`);
    console.log(`  ${installDir}`);
    console.log("");
    console.log("Restart Codex or reload skills if the skill does not appear immediately.");
  } catch (error) {
    console.error(`Install failed: ${error.message}`);
    process.exit(1);
  }
}

main();
