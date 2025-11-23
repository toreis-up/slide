import { mkdir, writeFile, readFile, cp } from "node:fs/promises";
import { join } from "node:path";
import prompts from "prompts";

const { name } = await prompts({
  type: "text",
  name: "name",
  message: "Slide name (e.g. my-talk)",
  initial: "my-talk",
});

if (!name) {
  console.log("Cancelled.");
  process.exit(0);
}

const slideDir = join("slides", name);
await mkdir(slideDir, { recursive: true });

await cp(
  join("slides", "_template"),
  join(slideDir),
  { recursive: true }
);

// テンプレートから package.json をコピーして置換
const templatePkg = JSON.parse(
  await readFile(join("slides", "_template", "package.json"), "utf-8")
);
templatePkg.name = name;

await writeFile(
  join(slideDir, "package.json"),
  JSON.stringify(templatePkg, null, 2)
);

console.log(`✓ Created: ${slideDir}`);