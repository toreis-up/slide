import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import prompts from 'prompts'

const { name } = await prompts({
  type: 'text',
  name: 'name',
  message: 'Slide name (e.g. my-talk)'
})

if (!name) {
  console.log('Cancelled.')
  process.exit(0)
}

const slideDir = join('slides', name)
await mkdir(slideDir, { recursive: true })

await writeFile(
  join(slideDir, 'package.json'),
  JSON.stringify({
    scripts: {
      "build": "slidev build",
      "dev": "slidev --open"
    }
  }, null, 2)
)

await writeFile(
  join(slideDir, 'slides.md'),
  `---
theme: default
---

  title: ${name}
---
`
)