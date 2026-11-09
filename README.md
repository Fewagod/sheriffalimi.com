# sheriffalimi.com

My personal site. Built with [Astro](https://astro.build), hosted on Cloudflare Workers.

## Where things live

| What | File |
| --- | --- |
| Articles | `src/content/writing/*.md` (one file per post) |
| Books | `src/data/books.json` |
| Work history | `src/data/work.json` (anything with `"when": "Now"` also shows on the home page) |
| Education | `src/data/education.json` |
| Writing elsewhere | `src/data/elsewhere.json` |
| Home page text | `src/pages/index.astro` |
| Contact links, theme | `src/config.ts` |
| Look and feel | `public/themes/adire.css` or `public/themes/plain.css` |

## Publishing an article

**In the browser (easiest):** go to [pagescms.org](https://pagescms.org), sign in with GitHub, open this repository, choose **Writing**, then **Add an entry**. Write, then save. Cloudflare rebuilds the site in about a minute.

**On GitHub:** open `src/content/writing`, choose **Add file > Create new file**, name it `my-post-title.md`, and start it with:

```
---
title: My post title
date: 2026-11-20
description: One line about the post.
---

The post starts here.
```

The file name becomes the address: `my-post-title.md` is published at `sheriffalimi.com/writing/my-post-title`. Add `draft: true` to the top block to hide a post until it's ready.

## Switching the look

In `src/config.ts`, set `theme` to `"plain"` or `"adire"`.

## First-time deploy (Cloudflare)

1. Push this folder to a GitHub repository.
2. In the Cloudflare dashboard: **Workers & Pages > Create > Import a repository**, pick the repo.
3. Build command: `npm run build`. Deploy command: `npx wrangler deploy`.
4. After the first deploy: open the Worker, then **Settings > Domains & Routes > Add > Custom domain**, and enter `sheriffalimi.com` (and `www.sheriffalimi.com` if you want it).

## Working locally (optional)

```
npm install
npm run dev      # http://localhost:4321
```
