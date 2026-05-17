#!/usr/bin/env node
// Combina favicon-16x16.png, favicon-32x32.png e favicon-48x48.png em favicon.ico multi-resolução.
import { writeFile, readFile } from 'node:fs/promises'
import pngToIco from 'png-to-ico'

const sources = [
  'public/favicon-16x16.png',
  'public/favicon-32x32.png',
  'public/favicon-48x48.png',
]

const buffers = await Promise.all(sources.map((p) => readFile(p)))
const ico = await pngToIco(buffers)
await writeFile('public/favicon.ico', ico)
console.log(`✓ favicon.ico criado (${ico.length} bytes, ${sources.length} resoluções)`)
