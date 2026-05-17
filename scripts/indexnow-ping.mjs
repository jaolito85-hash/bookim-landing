#!/usr/bin/env node
// Pings IndexNow (Bing, Yandex, Naver, Seznam) with the current sitemap URLs.
// Run after every production deploy: `node scripts/indexnow-ping.mjs`

const HOST = 'www.bookim.com.br'
const KEY = '51af63fb9a79088dd3b8b31f6409fdeb'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`

const urlList = [
  `https://${HOST}/`,
  `https://${HOST}/lista-de-espera`,
]

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
}

const res = await fetch('https://api.indexnow.org/IndexNow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
})

if (res.ok || res.status === 202) {
  console.log(`✓ IndexNow accepted (${res.status}) — ${urlList.length} URL(s)`)
} else {
  const body = await res.text()
  console.error(`✗ IndexNow failed: ${res.status} ${res.statusText}\n${body}`)
  process.exit(1)
}
