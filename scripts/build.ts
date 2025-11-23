import { dirname } from 'node:path'
import { x } from 'tinyexec'
import fg from 'fast-glob'

const packageFiles = (await fg('slides/*/package.json', { onlyFiles: true })).sort()

const slides = await Promise.all(
  packageFiles.map(async (file) => {
    const slideRoot = dirname(file)
    return { dir: slideRoot  }
  })
)

for (const slide of slides) {
  console.log(`Building slide in ${slide.dir}...`)
  const buildCommand = [
    "slidev",
    "build",
    "--base",
    `/${slide.dir.replace("slides/", "")}/`,
    "--out",
    `../../dist/${slide.dir.replace("slides/", "")}`,
  ];

  await x('pnpm', [...buildCommand], {
    nodeOptions: {cwd: slide.dir, stdio: 'inherit' },
  })
}