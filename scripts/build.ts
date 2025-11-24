import { dirname } from 'node:path'
import { x } from 'tinyexec'
import { execSync } from 'node:child_process'
import fg from 'fast-glob'
import { existsSync } from 'node:fs'
import { cp } from 'node:fs/promises'

const packageFiles = (await fg('slides/!(_template)/package.json', { onlyFiles: true })).sort()

const allSlides = await Promise.all(
  packageFiles.map(async (file) => {
    const slideRoot = dirname(file)
    return { dir: slideRoot  }
  })
)

const getChangedSlides = () => {
  try {
    const diff = execSync('git diff --name-only HEAD~1 HEAD', { encoding: 'utf-8' }).toString().trim().split('\n')

    const changedSlides = new Set(
      diff.filter(file => file.startsWith('slides/')).map(file => file.split('/')[1])
    )

    return Array.from(changedSlides)
  } catch {
    return null
  }
}

const changedSlides = getChangedSlides()
const slides = allSlides.filter(s => {
  const distStalePath = `dist-stale/${s.dir.replace('slides/', '')}`

  if (!existsSync(distStalePath)) return true

  if (changedSlides) {
    return changedSlides.includes(s.dir.replace('slides/', ''))
  }

  return true
})

await Promise.all(
  slides.map(async (slide) => {
    console.log(`Building slide in ${slide.dir}...`);
    const buildCommand = [
      "slidev",
      "build",
      "--base",
      `/${slide.dir.replace("slides/", "")}/`,
      "--out",
      `../../dist-stale/${slide.dir.replace("slides/", "")}`,
    ];

    await x("pnpm", [...buildCommand], {
      nodeOptions: { cwd: slide.dir, stdio: "inherit" },
    });
  })
)

await cp('dist-stale/', 'dist/', { recursive: true })