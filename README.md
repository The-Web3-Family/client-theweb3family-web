# The Web3 Family

The marketing site for The Web3 Family (Clarke Tech Solutions, Inglewood, California).

The homepage has one job: get the right visitor to book a 15 minute call. Built
to grow past one page.

**Read `CLAUDE.md` before changing anything.** It holds the audience, the design
direction, the copy rules, the locked copy, the brand tokens, the verified contrast
ratios, and the accessibility floor. Those are project rules, not suggestions.

## Structure

```
src/
  layouts/
    Base.astro      the shared layout: <head>, header, footer, every page uses it
  components/
    CallButton.astro  the one booking button, used everywhere
  pages/
    index.astro       the homepage
    about.astro, contact.astro, privacy.astro, support.astro
    subscribed.astro, subscribe-error.astro, 404.astro
    sitemap.xml.ts    builds /sitemap.xml
    articles/
      index.astro     the /articles/ listing page
      [slug].astro    the page each article renders into
    case-studies/
      index.astro     the /case-studies/ listing page, three short cards
      love-aid-foundation.astro   full case study, Love Aid Foundation
      ask-g-pop.astro             full case study, Howard Eley
      rap-frogs.astro             full case study, Anthony Taylor
  content/
    articles/*.md     one file per published article
  content.config.ts   the article fields
  styles.css          the one stylesheet every page shares
public/               files served as they are: the portrait, logo,
                      favicon, share image, robots.txt, images/
api/subscribe.js      the newsletter signup function (runs on Vercel)
astro.config.mjs      build config
article-template.md   starting point for a new article, copy into src/content/articles/
```

Built with [Astro](https://astro.build/). A brand-wide change (a color, a
spacing value) is one edit to `src/styles.css`, not one edit per page.

## Running it

Needs Node 22 (22.23.4 or newer).

```
npm install
npm run dev       # local preview with live reload, localhost:4321
npm run build     # static output into dist/
```

## Adding a page

Create an `.astro` file under `src/pages/`:

```
---
import Base from '../layouts/Base.astro';
---
<Base title="Page title here" description="One sentence for the meta description.">
  <section>
    <div class="wrap">
      <h1>Page heading</h1>
    </div>
  </section>
</Base>
```

Write the page's sections inside `<Base>`, matching the rhythm in
`src/pages/index.astro`: a `<section>` with a top border (or `class="band"` for the
alternate ground), a `.wrap` container, and either `.split` prose or a `.cards`
grid. The header and footer come from `Base.astro` automatically. Add the page's
address to the list in `src/pages/sitemap.xml.ts`. Do not add a
navigation link anywhere without asking first, see CLAUDE.md section 10.

## Adding an article

Copy `article-template.md` into `src/content/articles/` under a new filename (that
filename becomes the URL), fill in the front matter, write the body in
Markdown, done. It shows up on `/articles/` and builds automatically.

## Adding a case study

Case studies live at `src/pages/case-studies/`: `index.astro` (short cards, page
heading "The work so far") plus one full page per client, not a
collection like articles. Each full page: a breadcrumb, an eyebrow
reading `Person · Organization`, the serif headline, a `.case-facts`
strip (client type, client since), a `.stat-row` of real numbers, a
two-column `.split` (questions vs. what landed), a CTA, the client's
quotes with a `<cite>` attribution under each when a real quote exists,
a "what this proves" block, a second CTA, a weekly log collapsed behind
one closed-by-default `<details>`, a short first-person note from
Christopher next to the reused homepage portrait, a third closing CTA,
and a closing list of links to the other case studies. Every CTA carries
the button, `or call 310-703-6003`, and the same risk-reversal line
("Month to month. One email ends it. Everything built stays yours.").
Tenure reads as "Client since [Month Year]" everywhere except the
weekly log's own status line, which is the only place a week count
appears. Copy the closest existing page as a starting point and reuse
the `.prose`, `.log-*`, `.case-facts`, `.stat-row`, `.split`, `.promise`,
`.breadcrumb`, `.author-note`, and `.case-crosslinks` classes already in
`src/styles.css` rather than inventing new ones. Numbers in the stat row
must be real, already-verified facts, set in rust (never orange: orange
text fails contrast on these pages).

Every name, organization, and quote must be real and covered by that
specific person's written permission, confirmed with Christopher before
publishing, not assumed from a broader organization-level okay. If a
quote doesn't exist yet, or turns out to be misattributed, leave the
quote block out entirely rather than guessing or adding a placeholder
note. Link the new page from both `src/pages/case-studies/index.astro` and the
homepage's Case studies section (`src/pages/index.astro`).

## Deploying

Vercel builds from `main` automatically: `npm run build`, output directory `dist`.

If something breaks, roll back to the previous deployment in the Vercel dashboard
rather than hotfixing under pressure.

## Before merging

Confirm every time:

1. Reads cleanly at 375px width.
2. All text is 18px or larger.
3. Every color pair meets the ratios in CLAUDE.md section 6.
4. An 87-year-old would understand every word.
5. Each page still has exactly one goal and one action.

## Open slots

None. The portrait (`public/christopher.jpg`), the phone number
(310-703-6003), the email (christopher@theweb3family.com), and the booking
button (Calendly's real popup scheduler) are all real.

The homepage's Case studies section links to three real, named clients
under `/case-studies/`: Love Aid Foundation, Howard Eley
(Ask G-Pop), and Anthony Taylor (Rap Frogs). All three gave written
permission to be named. `/proof/`, the earlier anonymous single-page
version, now redirects to `/case-studies/` (see `vercel.json`); a
fragment-specific redirect to each old anchor's new page isn't possible
without JavaScript, since URL fragments never reach the server.
