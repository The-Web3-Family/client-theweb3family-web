# CLAUDE.md

Project instructions for theweb3family.com. Read this fully before changing anything. These are rules, not suggestions. If a request conflicts with something here, say so and ask before proceeding.

---

## 1. The project

A marketing site for **The Web3 Family**, operated by **Christopher Clarke** in Inglewood, California. Built to grow past one page, on purpose.

The business: Christopher works with people who started a nonprofit after a full career in something else. Two hours a week, on a standing call, turns into something finished every Friday: a page, a sheet, a video, whatever that week's work calls for. Flat $3,000 a month, month to month, no contract.

The homepage has exactly one job: get the right visitor to book a 15 minute call. Every change should make that easier, clearer, or more legible. Every other page carries the same design system and the same restraint, even once there are more of them.

**Hosting:** Vercel, deploying automatically from this repo's main branch. Vercel runs `npm run build` and serves `_site`.
**Files:** built with Eleventy. `src/` holds every page and the shared layout; `src/_includes/base.njk` is the one header, footer, and `<head>` every page uses; `src/styles.css` is the one design system every page shares. See section 9.

---

## 2. Who reads this page

This is the most important section, because it invalidates most default web design instincts.

**A founder aged roughly 60 to 90.** Usually a man. He spent thirty or forty years building a career somewhere else, in trades, ministry, education, law enforcement, corporate work, the military, or medicine. He recently started a grassroots nonprofit. He is retired or semi retired with stable income. The organization is pre launch to about three years old, often with no paid staff.

He is not a beginner at anything except the internet.

**He reads on a phone**, top to bottom, in order, without skipping ahead. He will not scan for the price, so anything buried reads as hidden.

**He decides alone.** No board vote, no procurement, no RFP.

**His currency is time.** Money arrives reliably. Years do not.

**What he is not:** stupid, fragile, or a charity case. He built more in his life than most people who will condescend to him about technology. The page fails the moment it treats him as behind rather than new.

---

## 3. Design direction

The page should feel like a well made letter from a competent person. Editorial and printed, not startup. Someone who makes things for a living made this page, and it should show, quietly.

**Do:**
- Generous whitespace. Let sections breathe. Crowding reads as cheap.
- Real size contrast between headline and body. A headline should feel like a headline.
- Left aligned text everywhere. Centered body copy is harder to track for aging eyes.
- Thin horizontal rules between sections. Structure by division, not by boxes everywhere.
- Warm paper background with near black text. It should feel like good stock, not a screen.
- One accent color, used rarely. When orange appears, it means act.
- Vertical rhythm that repeats. Consistent spacing above and below every section.
- Lora for headings, Inter for body. Two typefaces, no more.
- The portrait is the only photograph on the page. It carries all the human weight.

**Do not:**
- Gradients, glassmorphism, blurred backgrounds, or heavy drop shadows.
- Icon sets. Checkmarks and numbers only.
- Stock photography of any kind. It destroys trust with this reader faster than bad copy.
- Animation on scroll, parallax, or anything that moves while reading.
- Cards inside cards, or boxes around everything.
- Dark mode. The warm background is the brand.
- Full width text. Cap line length around 62 characters.

The test: would this look out of place printed and handed to someone? If yes, reconsider.

---

## 4. Voice and copy rules

The plain spoken voice is the positioning. Do not punch it up, polish it, or make it more compelling. Every adjective added drifts it toward agency speak, which is the failure this site was rebuilt to escape.

**Never use:**
- The word "Web3" in a headline or above the fold. It reads as crypto to this reader. It stays in the logo, the company name, and the FAQ answer.
- Jargon: fractional CTO, tech debt, full stack, optimization, conversion, funnel, scale, leverage as a verb, synergy, solutions, seamless, robust, cutting edge, digital transformation, impact assets.
- Age labels: second act, senior, older, silver, boomer, retiree. He should recognize himself, never be labeled.
- Negative framing about his current setup: your site is broken, stop leaking donations, outdated, you are losing money. Any tension belongs on the internet as the problem, never on him.
- Agency comparisons: unlike traditional agencies, without six month delays, agency prices. He was never going to hire an agency.
- Compliance and procurement language: micro purchase threshold, 2 CFR 200, single signature authority, board approval, RFP. He has no board.
- Bypass, workaround, or get around anything.
- Em dashes. Use periods, commas, or colons.
- Pressure tactics: countdown timers, false scarcity, limited spots, book now before.

**Always:**
- Short sentences. Plain words. One idea per sentence.
- Specifics over cleverness. Clear beats memorable.
- Active voice. A button says exactly what happens when it is tapped.
- First person singular. Christopher is one person, not a team. Never "we" or "our team".
- Respect his experience where it is natural. "You spent a career building something."
- Sentence case for buttons and labels.

**The read aloud test:** before any copy change ships, read it aloud imagining an 87 year old hearing it. If a word makes him pause, replace it. If a sentence needs a second read, split it.

---

## 5. Page structure

The order is the argument. Do not reorder blocks without asking.

1. Header. Logo, plus a hamburger menu, added on Christopher's direct request (previously logo-only, "nothing to click but the phone number and the one call to action"; that blanket rule is retired, but adding new items to the menu or new nav elsewhere still needs a separate explicit conversation first, same as any other structural change). No social links. The logo links to `/` (a no-op there, a way home from every other page); on subpages (case studies, articles) the header logo and the breadcrumb's first crumb both link to `/`. The menu itself holds four links, Christopher's own list: case studies, articles, contact, and book a meeting (the popup). It's built as a `<details>`/`<summary>` disclosure, the same zero-JS pattern the case study pages used for their weekly log, so opening and closing it adds no client-side JavaScript.
2. Portrait, name, and city. Before any claim. For this reader a real photo of a real person is the largest trust signal on the page.
3. Hero. A two-line headline, one line naming who he works with and what happens every Friday, the booking button as the one dominant action, the phone number beside it as a small secondary link, and a one-line cadence/cancellation note. The price and the hours-per-week figure used to sit in the hero too; both were removed from here on direct request (a September 2026 build instruction) since naming the hours invites the reader to price the time instead of the result, and the price now appears lower on the page (see item 9 below).
4. The problem, in his words. He will not believe you can help until he believes you understand.
5. What Christopher does. In his own voice, not a bulleted list.
6. What changes. Prose, no numbered steps, describing the after state: what a client's organization has once the library exists and other people can find it. Replaced the earlier numbered "How it works" (four steps: we talk, I see what you mean, I go build it, Friday it lands) on direct request, a September 2026 build instruction, calling the process explanation unnecessary and asking for the after state instead. `.steps`/`.step-num` were fully removed from `src/styles.css`, not just left unused, since nothing else on the site used them.
7. Clients. Three real, named clients, one line each, linking to their own page under `/case-studies/`. See section 8. Headed "Clients" on the homepage specifically (changed from "The work so far" on direct request); the case-studies index page at `/case-studies/` keeps "The work so far" as its own heading, unchanged.
8. Have Questions? The FAQ, which handles his last objections. Heading changed from "Straight answers" on direct request.
9. The price, plainly. Still stated in full, never hidden or vague, just positioned later than before: after the case studies and FAQ have made the case, right before the final booking action, instead of near the top. Moved down from its original position higher on the page (right after "What Christopher does") on direct request, so the reader has the value in hand before the number arrives.
10. Last action. Booking widget and phone number.
11. Footer. Name, business name, city, phone, and email. Nothing else, no other links, no social icons.

**Locked copy.** Do not change the headline, the price block, the button text, or the footer without an explicit request from Christopher.

**Naming consistency.** The offer is **a 15 minute call**, still the name for the Calendly event itself and in conversation, even though the on-page button text has since changed (see below). The earlier "free briefing" name, and "Digital Intelligence Briefing" before that, are both retired and do not come back. Every booking button on the site reads "Book a free strategy call," changed from "Book my meeting with you." (itself changed from the original "Book my 15 minute call") on Christopher's direct request; it's pulled from one shared template (`src/_includes/cta.njk`) so it only needs to change in one place. The phone number, being a secondary link rather than a button, stays third person: "or call/text (310) 703-6003."

---

## 6. Brand tokens

Defined as CSS custom properties in `index.html`. Use the variables, never raw hex, in new code.

| Token | Hex | Use |
|---|---|---|
| `--forest` | `#003223` | Headings, panels, borders, logo ground |
| `--orange` | `#fc4d00` | The call to action, accent rules |
| `--cream` | `#f5ebe1` | Page background |
| `--charcoal` | `#181C1B` | Body text, and text on orange |
| `--cream-deep` | `#ede0d3` | Card and panel fills |
| `--muted` | `#2f3d38` | Small labels, footer |
| `--rust` | `#8f2c00` | Eyebrow labels, step numerals |

**Type:** Lora at 600 and 700 for headings. Inter at 400, 500, 600, 700 for body. Loaded from Google Fonts. Do not add a third typeface.

### Verified contrast ratios

These were computed, not estimated. Any new color pairing must be checked before it ships.

| Pair | Ratio | Status |
|---|---|---|
| Charcoal on cream | 14.62:1 | AAA |
| Forest on cream | 12.06:1 | AAA |
| Muted on cream | 9.67:1 | AAA |
| Rust on cream | 7.06:1 | AAA |
| Charcoal on orange | 5.08:1 | AA, which is why button text is charcoal |
| White on orange | 3.39:1 | **Fails. Never put white text on the orange.** |
| Orange on cream | 2.88:1 | **Fails non text contrast. Orange elements need a forest border.** |

---

## 7. Accessibility

Not compliance theater. For this reader it is the positioning. If he has to squint, the message is that this was not built for him.

- Body text 20px. Never below 18px anywhere, including footer, captions, and button subtext, with one confirmed exception: the case study `.risk-reversal` line, deliberately set smaller as disclaimer text on Christopher's explicit call. See section 10. Don't treat that one exception as license to go below 18px elsewhere without the same kind of explicit confirmation.
- Line height 1.5 minimum.
- Tap targets 48px minimum, 56px and up for primary actions, with 8px between adjacent targets.
- Links underlined by default at 2px thickness, not on hover only.
- Visible keyboard focus on every interactive element.
- No light gray on cream. This was a real reported failure on an earlier version of this site.
- Respect `prefers-reduced-motion`.
- Real alt text on images.
- Design at 375px width first. Desktop is secondary.

---

## 8. Placeholders that are intentional

No slot in `src/index.njk` is waiting on placeholder material anymore. The portrait (`src/christopher.jpg`), the phone number ((310) 703-6003), the email (christopher@theweb3family.com), and the booking button (Calendly's real popup scheduler, see section 9) are all real.

**One real placeholder remains, on `src/contact.njk`.** The page is built and live, but the ZipForm embed itself isn't wired in: it needs the actual embed snippet or hosted form URL from Christopher's own ZipForm account, which nobody else can pull. Until that's supplied, the page shows working `tel:`/`mailto:` fallbacks instead of a fake or broken embed. Don't invent a ZipForm snippet or URL to fill this in. Once the real one is in hand, adding it is also a deliberate, confirmed exception to the zero-JS rule in section 9, the same kind of tradeoff Microsoft Clarity already is.

**Case studies.** `/case-studies/` is an index page plus one full page per client, built from Christopher's own weekly delivery logs: `/case-studies/love-aid-foundation/` (Arthur Flatto, Founder), `/case-studies/ask-g-pop/` (Howard Eley, Founder), and `/case-studies/rap-frogs/` (Anthony Taylor, Creator). All three organizations gave written permission to be named; that permission covers the named person and their organization, nothing wider. Don't add a fourth case study, a logo, or anyone else's name to an existing one without Christopher confirming that specific person or org is covered.

Every published quote needs an accurate attribution. Two quotes that were originally shown on the Ask G-Pop page turned out to be from Howard's team (not Howard), so they were pulled rather than misattributed to him. Neither that page nor Rap Frogs (whose client hasn't given a quote yet) shows a quote section right now; the pull-quote block is simply left out rather than filled with a placeholder note. Don't attribute a quote to someone who didn't say it, and don't add a quote without the right person's name and their organization's okay confirmed first.

This replaced an earlier anonymous, single-page version at `/proof/` (three cards on one page, anchored at `#mission`/`#wisdom`/`#character`, no names). That page no longer exists; `/proof/` now redirects to `/case-studies/` (see `vercel.json`). A redirect straight from an old `/proof/#anchor` link to the matching new page isn't technically possible without JavaScript, since URL fragments never reach the server, so those old deep links land on the index instead of the specific page.

---

## 9. Technical constraints

- **Built with Eleventy**, deliberately, so a design-system-wide change (a color, a spacing value, the type scale) is one edit instead of one edit per page. That was the entire reason this site moved off a single static file: it started growing past one page. Do not reach for anything heavier (Astro, Next.js, a component framework) without asking. This project already tried Astro twice before landing here.
- `src/_includes/base.njk` is the shared layout: the `<head>`, the header, and the footer. Every page uses it. Do not duplicate the header or footer markup into a page file.
- `src/styles.css` is the one stylesheet every page links. A style that only one page needs still belongs in this file, scoped with a class; do not add a second stylesheet or inline a `<style>` block into a page.
- Ships zero client-side JavaScript beyond the booking embed and Microsoft Clarity (analytics). No animation libraries, sliders, or other analytics tools. Eleventy's job is finished at build time; nothing it does should add a runtime script beyond those two. The homepage's old inline Calendly iframe is gone (removed on direct request); every "Book my meeting with you." button on the site, the homepage included, now opens Calendly's official popup widget instead (their `widget.css`/`widget.js`, plus an `onclick="Calendly.initPopupWidget(...)"` on the CTA link, with a plain link to the Calendly page as the href fallback if JavaScript is off). That's still the same one third-party booking product, not a second dependency. The popup assets load in `<head>` on every page now, not gated behind a front-matter flag, since the footer's own booking button needs them everywhere the footer appears. The header's hamburger menu is a `<details>`/`<summary>` disclosure, so it opens and closes with no JavaScript either.
- Microsoft Clarity is loaded on every page, by explicit request, even though it sets cookies for session replay and heatmaps. That's a deliberate exception to the site's general no-cookies posture, made knowingly, without a consent banner. Don't add a banner speculatively and don't treat this as license to add other tracking without the same explicit ask.
- Beyond Clarity's cookies, no localStorage, sessionStorage, or other cookies. Nothing else that would require a consent banner.
- External dependencies are Google Fonts, the booking embed, and Microsoft Clarity. That is the whole list of things a visitor's browser talks to. `@11ty/eleventy` is a dev-time dependency only; it never ships to the browser. ZipForm will become a fourth once the real embed is wired into `src/contact.njk` (see section 8); it isn't live yet.
- Build: `npm run build` outputs static files to `_site/`. `npm run dev` serves it locally with live reload. There is no other build step and no server at runtime; Vercel serves what Eleventy generates, nothing more.

---

## 10. How to work in this repo

- Small, single purpose changes. One concern per pull request.
- Never rewrite sections that were not asked about. If you notice something else worth fixing, say so in the pull request description instead of changing it.
- Explain what changed and why in plain language. Christopher reviews on a phone.
- When adding a section to a page, match the existing rhythm: a `<section>` with a top border, a `.wrap` container, an `h2`, and either `.split` prose or a `.cards` grid.
- **Adding a new page:** create a file under `src/` with `layout: base.njk` in its front matter, a `title`, and a `description`. The header (including the hamburger menu), and footer come along automatically from `base.njk`. Write its sections using the same rhythm as `src/index.njk`. Do not add the new page into the hamburger menu, or any navigation link for it elsewhere, without an explicit conversation first: the menu's four links (case studies, articles, contact, book a meeting) were Christopher's own explicit list, not a general "add every page" rule.
- **Adding an article:** copy `article-template.md` (repo root) into `src/articles/`, fill in the front matter, write the body in Markdown, done. It appears on `/articles/` and gets its own page automatically, no template edits needed. Every article carries the same header, footer, and a "Book a free strategy call" button at the end.
- **`/articles/` is now reachable from the hamburger menu** on every page, added along with the rest of the menu on Christopher's direct request. It previously had no link pointing at it anywhere, on purpose; that's no longer the case.
- **The homepage FAQ was rewritten on a September 2026 build instruction**: all four questions and answers changed, and the section heading became "Have Questions?" (from "Straight answers"). Two of the requested answers used "we" ("You own everything we create," "You still keep everything we created"); both were adapted to hold the first-person-singular rule in section 4 rather than shipped as given ("You own everything I make," "You still keep everything") since Christopher speaks as one person on this site, never a team. If a future request needs "we" in Christopher's own voice specifically (not a question posed from the visitor's side, like "What happens if we stop?", which is fine since it's the reader speaking about their own organization), flag it the same way rather than shipping it.
- **Case studies** live at `src/case-studies/`: `index.njk` (three short cards linking out, page heading "The work so far") plus one full page per client (`love-aid-foundation.njk`, `ask-g-pop.njk`, `rap-frogs.njk`), not a collection like articles. Each full page: a breadcrumb (`Home → Case studies → [org]`), an `.eyebrow-person` (the person's name on one line, the organization on the next, differentiated by size, weight, and style rather than joined with a middle dot; see below), the serif headline, a `.case-facts` strip (client type only, see below), and a two-column `.split.split-swapped`: "Here is what landed" on the wide left side, "Sound familiar?" questions on the narrow right side. Immediately after the split (full width, spanning both columns): the page's one CTA, then, when a real quote exists, the client's quotes with a `<cite>` attribution line under each, then a "what this proves" block, a weekly delivery log shown as a horizontal timeline (see below), a short first-person note from Christopher next to the reused homepage portrait, a "Want to see more case studies?" heading, and the closing list of links to the other case studies. The homepage's own "Clients" section links to each page by name, and reuses `.eyebrow-person`, but its three cards otherwise diverged from the case-studies index cards on a September 2026 build instruction: each headline is now a short, factual one-liner naming what the client actually is (Christopher's own descriptions, not outcome-style copy), and the numeric stat plus description paragraph are both gone, replaced by the client's own live domain shown as plain text in `.card-stat-label` (`loveaid.foundation`, `askgpop.online`, `rapfrogs.online`). That text is deliberately not a link: the whole card is already one `<a>` to the case study page, and nesting a second `<a>` inside it is invalid HTML, so the domain is shown but not tappable. If real clickable links to the clients' own sites are wanted, that needs a different card structure (the outer element would have to stop being the link), which hasn't been asked for. The case-studies index page's own three cards are unchanged: they still show `.card-arrow`, the numeric stat, and the original outcome-style headlines and description lines.
  - **No `.stat-row`.** All three pages tried it (a row of large rust numbers: weeks running, things delivered, dollars saved) and Christopher removed it entirely on direct feedback, calling the whole row redundant with the rest of the page. A September 2026 build instruction asked for it back, itemized; Christopher's own response was that he wasn't sure what to enumerate across three dissimilar clients and left it to judgment, so it's still not back, still by design. The class still exists in `src/styles.css` in case a future page has a real, isolated reason for one large number, but no current case study page uses it. What that same instruction verifiably improved instead: Rap Frogs' card/teaser stat changed from the confusing `4→1` numeral to a plain `4` with the label "calendars wrestled into one meeting," and Ask G-Pop's stat label became "saved by replacing flash drives with one printed sheet," both pulled straight from real lines already in each page's own "Here is what landed" list, not invented. Don't add a breakdown line under any stat (a website count, a video count, anything itemized) unless it's independently verifiable from that page's own content; Christopher has said plainly he doesn't know the itemized counts either.
  - **No visible client start dates anywhere on the site**, removed on a September 2026 build instruction: the old "Client since [Month Year]" fact-strip column (with its "N months and running" sub-line), and the "Client since [date]" line on the case-studies index cards and the homepage teaser cards, are all gone. `.case-facts` now holds one column, client type, on all three detail pages. The week count still lives inside the weekly log timeline's own circled numbers (see below); that's momentum, not a start date, and it stays. Don't reintroduce a start date anywhere without a fresh, explicit request; the `.case-fact-sub` class this used was removed from `src/styles.css`, not just left unused.
  - **The two-column split runs "Here is what landed" on the left (wide) and "Sound familiar?" on the right (narrow)** on all three pages, per Christopher's direct feedback: `.split.split-swapped` reverses which DOM child gets the 1.5fr/1fr width so the checklist keeps the wider column even though it's now first. Elsewhere on the site (homepage sections, articles) the label/eyebrow column stays narrow-left, body-wide-right as before; the swap is scoped to case studies only via that modifier class, not a global change.
  - **One CTA per page, not three.** These pages went from three CTAs down to one, across two rounds of direct feedback: first the CTA between "What this proves" and the weekly log was cut, then the closing CTA near the bottom was cut too. What's left sits right after the two-column split, spanning full width ("footer-wide," Christopher's own word for it) rather than nested inside the narrow "Sound familiar?" column, where it briefly lived. Don't add a CTA elsewhere on these pages without a fresh, explicit request; the trend across this feedback was fewer, not more.
  - **The CTA carries three lines**: the "Book a free strategy call" button, `or call/text (310) 703-6003` underneath it (third person, per the phone-number convention above), and the risk-reversal line `Month to month. Everything built is yours.` (a shortened version Christopher preferred over the original "Month to month. One email ends it. Everything built stays yours.", after seeing both live; the price section's own paragraph on the homepage is untouched). Built from the shared `src/_includes/cta.njk` macro (`{{ button("content-cta", true) }}`), which also supplies `.call-alt` and, via the `riskReversal` argument, `.risk-reversal`.
  - **The CTA button opens Calendly's popup widget** instead of linking to the homepage's `/#booking` section, per direct request. Calendly's popup assets now load in `<head>` on every page (see section 9; not gated behind a `calendlyPopup` front matter flag anymore, since the footer's own booking button needs them everywhere the footer appears); the button itself is `<a href="https://calendly.com/aweb3dad/15-minute-greeting" onclick="Calendly.initPopupWidget({url:'...'});return false;">`, so it still goes straight to the real booking page if JavaScript is off. The case-studies index page's own CTA is unchanged (still links to `/#booking`, still the plain "Book my meeting with you." link, not the popup); only the three detail pages, the hero, and the last action section got the popup treatment.
  - **`.risk-reversal` is set at 14px, below the site's 18px accessibility floor (section 7), as a deliberate, confirmed exception.** It wrapped to two lines in the narrow "Sound familiar?" column at 18px; a request to shrink it to fit one line was flagged first, since it would break the floor, and Christopher confirmed explicitly: "it's meant to be disclaimer text anyway, so lower it." That's the only place on the site allowed below 18px. Don't extend the exception to any other text, and don't quietly raise it back to 18px thinking the small size was a bug.
  - **The weekly log section heading is "Preview of our nonprofit's progress"** (no separate intro paragraph underneath it anymore, and no "Every Friday, one email goes out..." sentence either; both were cut on direct feedback as redundant once the heading itself says what the section is). It's the same heading text on all three pages, matching the site's pattern of reusing generic section language across case studies ("Sound familiar?", "Here is what landed") rather than writing a bespoke heading per client.
  - **The weekly log is a horizontal timeline**, not a collapsed disclosure: every week is a circled number on a connecting line (`.log-timeline-scroll` > `.log-timeline` > `.log-timeline-item`), with the month named above the line only where it changes (a blank `&nbsp;` label holds the row's height the rest of the time), the date in rust below the circle, and the week's own line of copy under that. All entries render at once, in `overflow-x:auto`, so seeing the rest of the log is a scroll, not a click; no JavaScript, no expand state to manage. This replaced an earlier version that collapsed the whole log behind one native `<details>`/`<summary>` disclosure, on direct request with a reference screenshot of the style Christopher wanted. Each item also carries a `.sr-only` "Week N," label ahead of the visible date, so screen reader users keep the week number that the visual redesign dropped. Follow this same pattern (numbered circle, month label only at transitions, date, one line of copy) if a future case study adds its own log.
  - **The connecting line is drawn per item** (`.log-timeline-item:not(:last-child)::after`), circle center to circle center, not as one line spanning the whole row. An earlier version drew a single line across the full track width, which caused two different bugs in turn: first the line stopped partway through the log because the track (a block-level flex container) sized itself to its scroll parent's visible width rather than its own overflowing children; fixing that with `width:max-content` on `.log-timeline` then made the line run the full track width including empty column space trailing the last circle, since nothing follows it to connect to, which read as "the scroll goes too far." Per-item segments sidestep both: each one only draws when there's a next circle to reach.
  - The old "Week 25, and next Friday is already in motion." status line (`.log-status`, `.log-dot`) is gone, cut on direct feedback as no longer needed once the timeline itself shows the week count. Don't bring that class back; it's been removed from `src/styles.css`, not just unused.
  - The closing block reuses `/christopher.jpg` at a smaller size (`.portrait.portrait-sm`) next to one first-person sentence from Christopher ("Hi, I'm Christopher..."), inside `.author-note`, at the very end of the page, right before a "Want to see more case studies?" heading and the cross-links to the other case studies. It no longer sits next to a CTA of its own, since the page's one CTA sits higher up, right after the two-column split. Don't add a different photo or a synthetic person: the portrait already on the homepage is the only trust photo this site uses, per section 3.
  - No sticky elements anywhere on these pages (no sticky sub-nav, no sticky CTA bar). It fails the "would this look out of place printed and handed to someone?" test in section 3, even though it wouldn't touch the zero-JS rule. The repeated inline "Book my meeting with you." button is the mechanism instead.
  - No pulsing or otherwise animated status dot. `.log-dot`/`.log-status` stay static, per the no-animation-while-reading rule. The card grid may lift slightly on hover, a plain CSS transition already covered by the sitewide `prefers-reduced-motion` rule rather than gated individually.
  - When a client's quote doesn't exist yet, or was pulled for accuracy, leave the quote block out entirely rather than filling it with a placeholder note or inventing one. Don't attribute a pulled quote to whoever actually said it (e.g. a team member) without Christopher explicitly re-confirming that specific person is covered; a spec document proposing that attribution is not that confirmation.
  - Card images (a client's own logo or character art, or a screenshot of the built work) are planned but not implemented: none of that artwork has been supplied yet. Don't add placeholder art, a generated image, or a synthetic photo of a named client in the meantime; the cards stay text-only until real files exist.
  - Every name, quote, and organization must be real and attributed accurately. See section 8 for exactly who is covered and the Ask G-Pop quote correction.
  - **The case-studies index cards (`/case-studies/`) carry a circled corner arrow**, `.card-arrow`, positioned absolute in the card's bottom-right corner rather than inline in the "Read the full story" text, added on a September 2026 build instruction as a stronger clickability affordance. It's scoped to those three cards specifically by markup, not by a sitewide CSS rule; the homepage's own teaser cards reuse the same `.card` component but don't carry the arrow span, so they render without it. All cards, on both pages, were already fully wrapped in a single `<a class="card">` before this change and still are.
  - Follow the same rhythm when adding a case study: reuse `.prose`, `.log-*`, `.case-facts`, `.split`, `.promise`, `.breadcrumb`, `.author-note`, `.eyebrow-person`, and `.case-crosslinks` in `src/styles.css` rather than inventing new ones.
  - **`.promise` is explicitly excluded from the generic `.prose ul` rule** (`.prose ul:not(.promise)`), because the "Here is what landed" checklist sits inside a `.prose`-classed wrapper alongside real bulleted lists like `.proof-questions`. The generic prose-list rule adds a bullet-style indent and its own margin/max-width, meant for actual bulleted prose; `.promise` has its own custom layout (an outlined checkmark instead of a bullet) that don't need that indent, and the higher-specificity `.prose ul` selector was silently overriding `.promise`'s own margin, padding, and max-width, not just adding to them. This was a real reported bug (checklist visibly out of alignment with the rest of the page on a phone), not a style preference. If a new list gets added inside `.prose` with its own bespoke layout, exclude it the same way rather than letting the generic rule win by specificity.
  - **The "Want to see more case studies?" heading is set to look like an `h2`** via the `.crosslinks-heading` class (h2's font-size, weight, line-height, and letter-spacing, without its decorative underline), while staying an `<h3>` tag: case study pages run h1 straight to h3 with no h2 level anywhere else on them, and introducing an actual `<h2>` here would be the only one on the page. If a page ever needs a second heading sized like this, reuse the class rather than repeating the values.
- **Section padding is symmetric everywhere**: top and bottom padding on every `<section>` (and the homepage `.hero`) use the same value. An earlier deliberately asymmetric rhythm (a shorter "false bottom" on every section) was reversed on direct feedback that the top padding read as too wide; don't reintroduce the asymmetry.
- Numbered lists are only for real sequences. Do not add decorative numbering elsewhere.
- Do not add sections speculatively. No testimonials until they exist. No logo bars until there are logos. No statistics that have not been verified.
- If a request would break a rule in this file, flag it and ask.

---

## 11. Out of scope for this site

Christopher also does embedded technical work for larger nonprofits with staff and compliance obligations. That is sold person to person with its own document. None of it belongs here, because its language would repel this buyer on sight.

Keep off this site: HIPAA, GLBA, PII, compliance, cybersecurity audits, CRM migration, Salesforce, board governance, capacity building, IT modernization, procurement.

---

## 12. Claims that must stay off the page

- Any promise that a grant will cover the cost, or that the service is free to the organization. No client has ever paid because of a grant. That model is untested.
- Regulatory compliance capability claims of any kind.
- Outcome metrics that have not been measured, such as hours saved or percentage increases in donations.
- Any client name, organization, logo, or quote without that specific person and organization's written permission. Three clients (Arthur Flatto/Love Aid Foundation, Howard Eley/Ask G-Pop, Anthony Taylor/Rap Frogs) have given that permission and are named on the site; nobody else associated with those organizations is automatically covered by it. A quote from someone whose okay hasn't been confirmed stays unpublished, even if the quote itself is real and on file.
- LLC status, DBA registration, certifications, UEI, or CAGE codes that are not yet actually granted. The LLC and DBA were still in formation as of August 2026. List nothing as pending that has no application on file.
- Anything about cryptocurrency, tokens, or blockchain other than the FAQ's explicit denial.

**Coming, but not yet claimable.** Christopher is building interactive knowledge archives, where a founder's recordings and writing become something people can ask questions of. This will eventually be central to the positioning. It does not go on the site until one exists and a client has agreed to it being shown. A brand must deliver before it promotes.

---

## 13. Before merging

Confirm every time:

- Does it read cleanly at 375px width?
- Is all text 18px or larger?
- Does every color pair meet the ratios in section 6?
- Would an 87 year old understand every word?
- Does the page still have exactly one goal and one action?
