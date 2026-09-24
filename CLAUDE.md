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
- First person singular as the default: Christopher is one person, not a team. Christopher called this an unhelpful rule, so it's no longer absolute; "we" is fine on his direct say-so for a specific line (see the FAQ's "Web3" answer), the way it now reads "You own everything we make." Don't take this as blanket license to swap "I" for "we" sitewide without a fresh, explicit request each time; the rest of the site's copy stays first person singular until told otherwise.
- Respect his experience where it is natural. "You spent a career building something."
- Sentence case for buttons and labels.

**The read aloud test:** before any copy change ships, read it aloud imagining an 87 year old hearing it. If a word makes him pause, replace it. If a sentence needs a second read, split it.

---

## 5. Page structure

The order is the argument. Do not reorder blocks without asking.

1. Header. Logo, plus a nav, added on Christopher's direct request (previously logo-only, "nothing to click but the phone number and the one call to action"; that blanket rule is retired, but adding new items to the menu or new nav elsewhere still needs a separate explicit conversation first, same as any other structural change). No social links. The logo links to `/` (a no-op there, a way home from every other page); on subpages (case studies, articles) the header logo and the breadcrumb's first crumb both link to `/`. The nav holds four links, Christopher's own list: case studies, articles, contact, and book a meeting (the popup), the last one styled as a real button (`.nav-cta`) rather than a plain link, on direct request. Below 760px it's a `<details>`/`<summary>` hamburger disclosure, the same zero-JS pattern the case study pages used for their weekly log; at 760px and up it's a second, plain `<nav class="nav-inline">` carrying the same four links, always visible, no toggle, added on direct request ("can we have a better menu on desktop?"). Both markups exist in `base.njk` at once, one hidden by CSS depending on viewport width, rather than trying to force the closed `<details>`'s content to stay visible above the breakpoint: that was tried first and silently broke, since Chromium keeps an internal collapsed-layout state for a closed `<details>` regardless of a CSS `display` override, and the nav rendered at zero width and overflowed off-screen. Neither nav adds client-side JavaScript.
2. Portrait, name, and city. Before any claim. For this reader a real photo of a real person is the largest trust signal on the page.
3. Hero. A two-line headline, one line naming who he works with and what happens every Friday, the booking button as the one dominant action, the phone number beside it as a small secondary link, and a one-line cadence/cancellation note. The price and the hours-per-week figure used to sit in the hero too; both were removed from here on direct request (a September 2026 build instruction) since naming the hours invites the reader to price the time instead of the result, and the price now appears lower on the page (see item 8 below).
4. The problem, in his words. He will not believe you can help until he believes you understand.
5. What Christopher does. In his own voice, not a bulleted list. Four bold lead-ins now, not three: "I listen to you talk," "I work behind the scenes," "I deliver the work every Friday," and "Your organization keeps everything" (a history of emails and a dedicated Google Drive). That fourth one used to be its own standalone section, first "What changes" then "What is delivered"; a September 2026 build instruction ("Spacing, SEO, and measurement") had it merged into this section instead, since a one-sentence section carrying its own heading, rule, and full section padding was itself a chunk of the large vertical voids that same instruction was fixing. `.steps`/`.step-num` (the old numbered "How it works" this section replaced a round earlier) were fully removed from `src/styles.css`, not just left unused, since nothing else on the site used them.
6. Clients like you. Three real, named clients, linking to their own page under `/case-studies/`. See section 8. Headed "Clients like you" on the homepage specifically (through "The work so far" then a plain "Clients" on the way there, each a direct request); the case-studies index page at `/case-studies/` keeps "The work so far" as its own heading, unchanged. No separate intro line under the heading anymore ("People like you." was added then removed in the same round, on direct request, once the heading itself absorbed the sentiment).
7. Have Questions? The FAQ, which handles his last objections. Heading changed from "Straight answers" on direct request.
8. The price, plainly. Still stated in full, never hidden or vague, just positioned later than before: after the case studies and FAQ have made the case, right before the final booking action, instead of near the top. Moved down from its original position higher on the page (right after "What Christopher does") on direct request, so the reader has the value in hand before the number arrives. Its supporting copy was also rewritten on direct request, from a two-paragraph explanation of the cadence and what's covered, to one line naming what's actually delivered: "For your own dedicated slot on my calendar, the Friday emails, and your own personal Google Drive with everything built so far." (adapted from the requested "with all that we've built," per the first-person-singular rule).
9. Last action. Booking widget and phone number.
10. Footer. Name, business name, city, phone, and email, plus a "Clients" line linking out to the three case-study clients' own live sites (loveaid.foundation, askgpop.online, rapfrogs.online), added on direct request via a Vercel toolbar comment ("Them 3 links into the footer too"), and a "Privacy" link to `/privacy/`, added alongside Google Analytics (see section 9). No social icons, and no other links beyond those four.

**Locked copy.** Do not change the headline, the price block, the button text, or the footer without an explicit request from Christopher.

**Naming consistency.** The offer is **a 15 minute call**, still the name for the Calendly event itself and in conversation, even though the on-page button text has since changed (see below). The earlier "free briefing" name, and "Digital Intelligence Briefing" before that, are both retired and do not come back. Every booking button on the site reads "Book a call with me," changed from "Book a free strategy call" (itself changed from "Book my meeting with you.," itself changed from the original "Book my 15 minute call") on Christopher's direct request via a Vercel toolbar comment on the header nav CTA; it's pulled from one shared template (`src/_includes/cta.njk`) so it only needs to change in one place, plus the header nav CTA and the case-studies index page's own hand-written CTA, which don't route through that macro. The phone number, being a secondary link rather than a button, stays third person: "or call/text (310) 703-6003." The shared macro shows that line under the button by default; the homepage's final booking section passes `showPhone=false` to omit it there specifically, on direct request, since the number already appears earlier on that same page. An "or email me directly" mailto line, added on a September 2026 build instruction, sits under every button too, and unlike the phone line it always shows regardless of `showPhone`: the email address isn't shown anywhere earlier on the homepage by the time the reader reaches that section, so there's no redundancy to avoid there the way there is with the phone number.

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

A September 2026 build instruction ("Sitemap, meta tags, card links, touch targets") restated this palette from memory with slightly different hex values (cream `#F4F1EA`, forest `#0A2E1F`, orange `#F4511E`). Those weren't used: the values above are the ones with verified contrast ratios below, and swapping them without a fresh contrast check would be a quiet rebrand nobody asked for. If a future instruction wants the palette itself to change, flag it and confirm before swapping any of these hex values or their contrast ratios.

**Type:** Lora at 600 and 700 for headings. Inter at 400, 500, 600, 700 for body. Loaded from Google Fonts. Do not add a third typeface.

### Spacing scale

Added on a September 2026 build instruction ("Spacing, SEO, and measurement"), after a complaint that the homepage had large voids, worst between "What I do" and what was then its own "What is delivered" section. `--space-1` (4px) through `--space-11` (128px), doubling roughly every couple of steps; use a token for any new spacing value rather than a bare pixel number, rounding to the nearer step. `--gap` (section padding, `.hero` included) now resolves through the scale: `--space-7` (48px) by default, redefined to `--space-10` (96px) inside the 760px media query, replacing the old fluid `clamp()` value and its `calc(var(--gap) * 1.15)` desktop override. `.wrap` grew to `max-width:1100px` (from 1000px) with `padding-inline` at `--space-8` (64px) at that same breakpoint (mobile padding, `--space-5`/24px, is unchanged, just tokenized). The build instruction's own diagnosis was that stretched, misaligned two-column rows (a short label column forced to match a tall body column, or vice versa) were doing as much damage as the raw padding numbers; `.split` and `.price-grid` already had `align-items:start` at desktop, `.faq-item` didn't and now does. Don't add a competing spacing system (a `.container` or `.two-col` class, a second scale): the instruction's own suggested class names for these didn't match this codebase's existing ones (`.wrap`, `.split`), so the fix went into the existing classes instead, per the standing "reuse existing patterns" rule, not as parallel new ones.

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

- Body text 18px, the site's base font size (dropped from 20px on a September 2026 build instruction, "Sitemap, meta tags, card links, touch targets," aimed at the 60-plus audience's tap-target and readability needs). Never below 18px anywhere, including footer, captions, and button subtext, with one confirmed exception: the case study `.risk-reversal` line, deliberately set smaller as disclaimer text on Christopher's explicit call. See section 10. Don't treat that one exception as license to go below 18px elsewhere without the same kind of explicit confirmation. Headings are set in px/`clamp()`, not em/rem, so this change didn't cascade into them; the type scale stayed proportional with no heading-size edits needed.
- Line height 1.6 (raised from 1.5 on the same instruction).
- Tap targets 56px minimum on primary actions and card links (`.cta`, `.card-btn`), 48px on secondary controls like the hamburger toggle, with 8px between adjacent targets. `a,button{touch-action:manipulation}` is set sitewide, removing the tap-delay some mobile browsers add before registering a touch as a real click.
- Links underlined by default at 2px thickness, not on hover only.
- Visible keyboard focus on every interactive element.
- No light gray on cream. This was a real reported failure on an earlier version of this site.
- Respect `prefers-reduced-motion`.
- Real alt text on images.
- Design at 375px width first. Desktop is secondary.

---

## 8. Placeholders that are intentional

No slot in `src/index.njk` is waiting on placeholder material anymore. The portrait (`src/christopher.jpg`), the phone number ((310) 703-6003), the email (christopher@theweb3family.com), and the booking button (Calendly's real popup scheduler, see section 9) are all real.

**One real placeholder remains, on `src/contact.njk`.** The page is built and live, with a working `<form class="contact-form">` (name, email, message) as a stand-in, per direct request ("this needs to be a form"). It submits via a plain `action="mailto:christopher@theweb3family.com"`, so it needs no backend and adds no JavaScript, but it only works if the visitor's device has an email app configured for `mailto:` links, which not everyone has (a lot of people read mail only in a browser tab). That's not the real Splitform embed Christopher actually asked for: this still needs the actual embed snippet or hosted form URL from his own Splitform account, which nobody else can pull. Below the form, working `tel:`/`mailto:` links stay as a direct-contact fallback. Don't invent a Splitform snippet or URL to fill this in. Once the real one is in hand, swap out the whole mailto-form block for it; adding it is also a deliberate, confirmed exception to the zero-JS rule in section 9, the same kind of tradeoff Microsoft Clarity already is.

**Case studies.** `/case-studies/` is an index page plus one full page per client, built from Christopher's own weekly delivery logs: `/case-studies/love-aid-foundation/` (Arthur Flatto, Founder), `/case-studies/ask-g-pop/` (Howard Eley, Founder), and `/case-studies/rap-frogs/` (Anthony Taylor, Creator). All three organizations gave written permission to be named; that permission covers the named person and their organization, nothing wider. Don't add a fourth case study, a logo, or anyone else's name to an existing one without Christopher confirming that specific person or org is covered.

Every published quote needs an accurate attribution. Two quotes that were originally shown on the Ask G-Pop page turned out to be from Howard's team (not Howard), so they were pulled rather than misattributed to him. Neither that page nor Rap Frogs (whose client hasn't given a quote yet) shows a quote section right now; the pull-quote block is simply left out rather than filled with a placeholder note. Don't attribute a quote to someone who didn't say it, and don't add a quote without the right person's name and their organization's okay confirmed first.

This replaced an earlier anonymous, single-page version at `/proof/` (three cards on one page, anchored at `#mission`/`#wisdom`/`#character`, no names). That page no longer exists; `/proof/` now redirects to `/case-studies/` (see `vercel.json`). A redirect straight from an old `/proof/#anchor` link to the matching new page isn't technically possible without JavaScript, since URL fragments never reach the server, so those old deep links land on the index instead of the specific page.

**The GoatCounter analytics pixel is scaffolded but not live**, in `base.njk` just before `</body>`, wrapped in an HTML comment. A September 2026 build instruction asked for path-level analytics via a single hidden `<img>` pixel, zero JavaScript, but the real tracking subdomain (`MYCODE.goatcounter.com`) has to come from Christopher's own free GoatCounter account, which nobody else can create for him. Don't invent a subdomain to fill this in. Once he supplies the real one, uncomment the block on every page (it's already in the shared layout) and it becomes a fourth external dependency alongside Google Fonts, Calendly, and Clarity (section 9); the `@media print` rule hiding it from a printed page is already live in `styles.css`, ready for when the pixel itself is.

**No About page exists.** The same build instruction asked for one to open with a specific entity-disambiguating sentence, but building a whole new page (its full content beyond that one sentence, whether it joins the nav, where it links from) is a bigger, more speculative call than a single copy edit, so it wasn't built. Don't create one without Christopher confirming he wants it and what else besides that opening sentence should be on it.

---

## 9. Technical constraints

- **Built with Eleventy**, deliberately, so a design-system-wide change (a color, a spacing value, the type scale) is one edit instead of one edit per page. That was the entire reason this site moved off a single static file: it started growing past one page. Do not reach for anything heavier (Astro, Next.js, a component framework) without asking. This project already tried Astro twice before landing here.
- `src/_includes/base.njk` is the shared layout: the `<head>`, the header, and the footer. Every page uses it. Do not duplicate the header or footer markup into a page file.
- `src/styles.css` is the one stylesheet every page links. A style that only one page needs still belongs in this file, scoped with a class; do not add a second stylesheet or inline a `<style>` block into a page.
- Ships zero client-side JavaScript beyond the booking embed, Microsoft Clarity, and Google Analytics (analytics). No animation libraries, sliders, or other analytics tools beyond those two. Eleventy's job is finished at build time; nothing it does should add a runtime script beyond those three. The homepage's old inline Calendly iframe is gone (removed on direct request); every "Book a call with me" button on the site, the homepage included, now opens Calendly's official popup widget instead (their `widget.css`/`widget.js`, plus an `onclick="Calendly.initPopupWidget(...)"` on the CTA link, with a plain link to the Calendly page as the href fallback if JavaScript is off). That's still the same one third-party booking product, not a second dependency. The popup assets load in `<head>` on every page now, not gated behind a front-matter flag, since the footer's own booking button needs them everywhere the footer appears. The header's nav (hamburger below 760px, plain inline nav above it, see section 5) is CSS-only, so it adds no JavaScript either. The contact page's stand-in form (section 8) submits via a plain `mailto:` action, also no JavaScript.
- Microsoft Clarity and Google Analytics (`gtag.js`, measurement ID `G-X7WWKF2SFX`) are both loaded on every page, by explicit request, even though each sets its own cookies (Clarity for session replay and heatmaps, GA4 for aggregate visit stats). That's a deliberate exception to the site's general no-cookies posture, made knowingly. Rather than a consent banner, the site links to a short `/privacy/` page (`src/privacy.njk`) from the footer, describing what each tool collects and why. The banner-vs-privacy-page call was made after weighing CCPA/GDPR exposure for a solo operator with primarily LA-based nonprofit clients (low risk at this scale, though Google's own EU User Consent Policy is technically a contractual condition of using their tag regardless of site size). Don't add a banner speculatively, and don't treat this as license to add other tracking without the same explicit ask; if a future tracker is added, revisit whether the privacy-page approach still holds.
- Beyond Clarity's and Google Analytics' cookies, no localStorage, sessionStorage, or other cookies.
- External dependencies are Google Fonts, the booking embed, Microsoft Clarity, and Google Analytics. That is the whole list of things a visitor's browser talks to. `@11ty/eleventy` is a dev-time dependency only; it never ships to the browser. Splitform and GoatCounter will each become a dependency once their real credentials are wired in (see section 8); neither is live yet.
- **Organization, Person, and BreadcrumbList JSON-LD**, added on a September 2026 build instruction. The Organization and Person blocks live in `base.njk`'s `<head>`, gated to the homepage only (`{% if page.url == "/" %}`); each case study page carries its own BreadcrumbList block near its breadcrumb, with the client's name in position 3. These are `<script type="application/ld+json">` blocks: inert structured data parsed by crawlers, not executable script, so they don't touch the zero-JS rule despite the `<script>` tag.
- **Sitemap, robots.txt, canonical, and OpenGraph**, added on a September 2026 build instruction ("Sitemap, meta tags, card links, touch targets"). `src/sitemap.njk` renders at `/sitemap.xml` from `collections.all`; `src/robots.txt` (passthrough-copied) points at it. Every page's `<head>` in `base.njk` carries a canonical link and OG/Twitter-card tags built from that page's own `title` and `description` front matter, which every page already had. `og:image` points at `src/og-share.jpg`, a static 1200x630 JPEG checked into the repo (passthrough-copied, not generated at build time): a typographic card built from the homepage headline, the header's own "CC" wordmark, and an orange rule, styled with the site's real fonts and colors, rendered with a one-off headless-browser screenshot rather than photography or AI image generation, consistent with the no-stock-photography rule in section 3. If the headline or wordmark ever changes, re-render this file the same way rather than hand-editing a JPEG.
- Build: `npm run build` outputs static files to `_site/`. `npm run dev` serves it locally with live reload. There is no other build step and no server at runtime; Vercel serves what Eleventy generates, nothing more.

---

## 10. How to work in this repo

- Small, single purpose changes. One concern per pull request.
- Never rewrite sections that were not asked about. If you notice something else worth fixing, say so in the pull request description instead of changing it.
- Explain what changed and why in plain language. Christopher reviews on a phone.
- When adding a section to a page, match the existing rhythm: a `<section>` with a top border, a `.wrap` container, an `h2`, and either `.split` prose or a `.cards` grid.
- **Adding a new page:** create a file under `src/` with `layout: base.njk` in its front matter, a `title`, and a `description`. The header (including the hamburger menu), and footer come along automatically from `base.njk`. Write its sections using the same rhythm as `src/index.njk`. Do not add the new page into the hamburger menu, or any navigation link for it elsewhere, without an explicit conversation first: the menu's four links (case studies, articles, contact, book a meeting) were Christopher's own explicit list, not a general "add every page" rule.
- **Adding an article:** copy `article-template.md` (repo root) into `src/articles/`, fill in the front matter, write the body in Markdown, done. It appears on `/articles/` and gets its own page automatically, no template edits needed. Every article carries the same header, footer, and a "Book a call with me" button at the end, via the shared `cta.njk` macro. `src/_includes/article.njk` used to have its own hand-written CTA that still read "Book my 15 minute call," missed during the earlier button-text rounds since no article had been published yet to surface it; fixed to route through `{% from "cta.njk" import button %}` like every other page, so a future button-text change only needs the one macro edit it was always supposed to need.
- **`/articles/` is now reachable from the hamburger menu** on every page, added along with the rest of the menu on Christopher's direct request. It previously had no link pointing at it anywhere, on purpose; that's no longer the case.
- **The homepage FAQ was rewritten on a September 2026 build instruction**: all four questions and answers changed, and the section heading became "Have Questions?" (from "Straight answers"). Two of the requested answers used "we" ("You own everything we create," "You still keep everything we created"); both were adapted at the time to hold the first-person-singular rule in section 4, shipping as "You own everything I make," "You still keep everything," since Christopher speaks as one person on this site. Christopher later flagged that rule as unhelpful via a Vercel toolbar comment, so the "Web3" FAQ answer's line now reads "You own everything we make" again, on his direct request; the "You still keep everything" line hasn't had a fresh request to match, so it stays as is. See section 4 for the updated, non-absolute version of the rule.
- **Case studies** live at `src/case-studies/`: `index.njk` (three short cards linking out, page heading "The work so far") plus one full page per client (`love-aid-foundation.njk`, `ask-g-pop.njk`, `rap-frogs.njk`), not a collection like articles. Each full page: a breadcrumb (`Home → Case studies → [org]`), an `.eyebrow-person` (the person's name on one line, the organization on the next, differentiated by size, weight, and style rather than joined with a middle dot; see below), the serif headline, a `.case-facts` strip (client type only, see below), and a two-column `.split.split-swapped`: "Here is what landed" on the wide left side, "Sound familiar?" questions on the narrow right side. Immediately after the split (full width, spanning both columns): the page's one CTA, then, when a real quote exists, the client's quotes with a `<cite>` attribution line under each, then a "what this proves" block, a weekly delivery log shown as a horizontal timeline (see below), a short first-person note from Christopher next to the reused homepage portrait, a "Want to see more case studies?" heading, and the closing list of links to the other case studies. The homepage's own "Clients like you" section links to each page by name, and reuses `.eyebrow-person`, using the same card content and structure as the case-studies index cards: the two briefly diverged (the homepage got new one-line headlines and a plain-text domain first, while the index page kept its old numeric stat and outcome-style copy) and were then brought back into parity on a direct follow-up request ("needs to match what we'll be putting on the homepage"). Both pages' cards now share:
  - A short, factual one-line headline naming what the client actually is (Christopher's own descriptions, not outcome-style copy): "A nonprofit, combining music and charity" (Love Aid Foundation), "A program enabling youth mentorship by seniors" (Ask G-Pop), "Brand refresh of a 20-year crime prevention IP" (Rap Frogs).
  - The client's own live domain (`loveaid.foundation`, `askgpop.online`, `rapfrogs.online`) as a real external link (`.card-site`, opens in a new tab, `rel="noopener"`), with a small "↗" (`.link-out-icon`).
  - A descriptive anchor (`.card-btn`) in the card's bottom-right corner, reading "See the [client] build" ("See the Love Aid Foundation build," "See the Ask G-Pop build," "See the Rap Frogs build"), linking to the case study page. This replaced plain "Learn More" text on a September 2026 build instruction ("Sitemap, meta tags, card links, touch targets") fixing a Lighthouse audit flag for non-descriptive link text; zero instances of "Learn More" remain anywhere on the site.
  - No numeric stat and no separate description paragraph anymore; both are gone from both pages' cards.
  `.card` is a plain `<div>` now, not an `<a>`: with two real links inside it (the external site, and the card-btn anchor), nesting them both inside one outer `<a>` would be invalid HTML. Instead, the same September 2026 instruction made the whole card clickable to the case study page: `.card-btn::after` is a `position:absolute;inset:0` overlay, sized to `.card` (the nearest positioned ancestor, `position:relative`), so a click anywhere in the card reaches the anchor. `.card-site` is carved out of that overlay with its own `position:relative;z-index:2` so it stays independently clickable to the client's own domain, and every other child gets `pointer-events:none` so a click anywhere else on the card still passes through to the stretched anchor underneath. Hovering anywhere in the card, including the button, still lifts the whole card (`.card:hover`), since a CSS `:hover` on a parent element fires from a hover anywhere inside it, no extra rule needed. `.card-arrow`, `.card-more`, `.card-stat`/`.card-stat-num`/`.card-stat-label` were all fully removed from `src/styles.css`, not just left unused, once nothing referenced them anymore. `.card` is a flex column (`.cards` itself stretches every card in a row to the tallest one's height, the grid default) and `.card-btn` sits at `align-self:flex-end;margin-top:auto`, pinning it to the bottom of its own now-equal-height card; that replaced an earlier `position:absolute` version on a September 2026 build instruction reporting the three "Learn More" buttons sitting at different heights across a row, since an absolutely-positioned button is placed relative to its own card's height and only lines up with its neighbors if every card already happens to be the same height for some other reason. The same spacing-token pass that introduced `--space-6` briefly regressed `.card-btn` back to a fixed `margin-top:var(--space-6)` instead of `auto`, which silently reintroduced the exact misalignment bug this fix was for; caught from a screenshot and restored to `margin-top:auto`. If a future spacing pass touches `.card-btn`, keep this one on `auto`, not a token. `.card-btn` also grew from `min-height:48px` to `56px` (padding `16px 28px`, up from `0 20px`) as part of the same touch-target pass; see section 7.
  - **No `.stat-row`.** All three pages tried it (a row of large rust numbers: weeks running, things delivered, dollars saved) and Christopher removed it entirely on direct feedback, calling the whole row redundant with the rest of the page. A September 2026 build instruction asked for it back, itemized; Christopher's own response was that he wasn't sure what to enumerate across three dissimilar clients and left it to judgment, so it's still not back, still by design. The class still exists in `src/styles.css` in case a future page has a real, isolated reason for one large number, but no current case study page uses it. What that same instruction verifiably improved instead: Rap Frogs' card/teaser stat changed from the confusing `4→1` numeral to a plain `4` with the label "calendars wrestled into one meeting," and Ask G-Pop's stat label became "saved by replacing flash drives with one printed sheet," both pulled straight from real lines already in each page's own "Here is what landed" list, not invented. Don't add a breakdown line under any stat (a website count, a video count, anything itemized) unless it's independently verifiable from that page's own content; Christopher has said plainly he doesn't know the itemized counts either.
  - **No visible client start dates anywhere on the site**, removed on a September 2026 build instruction: the old "Client since [Month Year]" fact-strip column (with its "N months and running" sub-line), and the "Client since [date]" line on the case-studies index cards and the homepage teaser cards, are all gone. `.case-facts` now holds one column, client type, on all three detail pages. The week count still lives inside the weekly log timeline's own circled numbers (see below); that's momentum, not a start date, and it stays. Don't reintroduce a start date anywhere without a fresh, explicit request; the `.case-fact-sub` class this used was removed from `src/styles.css`, not just left unused.
  - **The two-column split runs "Here is what landed" on the left (wide) and "Sound familiar?" on the right (narrow)** on all three pages, per Christopher's direct feedback: `.split.split-swapped` reverses which DOM child gets the 1.5fr/1fr width so the checklist keeps the wider column even though it's now first. Elsewhere on the site (homepage sections, articles) the label/eyebrow column stays narrow-left, body-wide-right as before; the swap is scoped to case studies only via that modifier class, not a global change.
  - **One CTA per page, not three.** These pages went from three CTAs down to one, across two rounds of direct feedback: first the CTA between "What this proves" and the weekly log was cut, then the closing CTA near the bottom was cut too. What's left sits right after the two-column split, spanning full width ("footer-wide," Christopher's own word for it) rather than nested inside the narrow "Sound familiar?" column, where it briefly lived. Don't add a CTA elsewhere on these pages without a fresh, explicit request; the trend across this feedback was fewer, not more.
  - **The CTA carries three lines**: the "Book a call with me" button, `or call/text (310) 703-6003` underneath it (third person, per the phone-number convention above), and the risk-reversal line `Month to month. Everything built is yours.` (a shortened version Christopher preferred over the original "Month to month. One email ends it. Everything built stays yours.", after seeing both live; the price section's own paragraph on the homepage is untouched). Built from the shared `src/_includes/cta.njk` macro (`{{ button("content-cta", true) }}`), which also supplies `.call-alt` and, via the `riskReversal` argument, `.risk-reversal`.
  - **The CTA button opens Calendly's popup widget** instead of linking to the homepage's `/#booking` section, per direct request. Calendly's popup assets now load in `<head>` on every page (see section 9; not gated behind a `calendlyPopup` front matter flag anymore, since the footer's own booking button needs them everywhere the footer appears); the button itself is `<a href="https://calendly.com/aweb3dad/15-minute-greeting" onclick="Calendly.initPopupWidget({url:'...'});return false;">`, so it still goes straight to the real booking page if JavaScript is off. The case-studies index page's own CTA is unchanged (still links to `/#booking`, still a plain link, not the popup); only the three detail pages, the hero, and the last action section got the popup treatment.
  - **`.risk-reversal` is set at 14px, below the site's 18px accessibility floor (section 7), as a deliberate, confirmed exception.** It wrapped to two lines in the narrow "Sound familiar?" column at 18px; a request to shrink it to fit one line was flagged first, since it would break the floor, and Christopher confirmed explicitly: "it's meant to be disclaimer text anyway, so lower it." That's the only place on the site allowed below 18px. Don't extend the exception to any other text, and don't quietly raise it back to 18px thinking the small size was a bug.
  - **The weekly log section heading is "Preview of our nonprofit's progress"** (no separate intro paragraph underneath it anymore, and no "Every Friday, one email goes out..." sentence either; both were cut on direct feedback as redundant once the heading itself says what the section is). It's the same heading text on all three pages, matching the site's pattern of reusing generic section language across case studies ("Sound familiar?", "Here is what landed") rather than writing a bespoke heading per client.
  - **The weekly log is a horizontal timeline**, not a collapsed disclosure: every week is a circled number on a connecting line (`.log-timeline-scroll` > `.log-timeline` > `.log-timeline-item`), with the month named above the line only where it changes (a blank `&nbsp;` label holds the row's height the rest of the time), the date in rust below the circle, and the week's own line of copy under that. All entries render at once, in `overflow-x:auto`, so seeing the rest of the log is a scroll, not a click; no JavaScript, no expand state to manage. This replaced an earlier version that collapsed the whole log behind one native `<details>`/`<summary>` disclosure, on direct request with a reference screenshot of the style Christopher wanted. Each item also carries a `.sr-only` "Week N," label ahead of the visible date, so screen reader users keep the week number that the visual redesign dropped. Follow this same pattern (numbered circle, month label only at transitions, date, one line of copy) if a future case study adds its own log.
  - **The connecting line is drawn per item** (`.log-timeline-item:not(:last-child)::after`), circle center to circle center, not as one line spanning the whole row. An earlier version drew a single line across the full track width, which caused two different bugs in turn: first the line stopped partway through the log because the track (a block-level flex container) sized itself to its scroll parent's visible width rather than its own overflowing children; fixing that with `width:max-content` on `.log-timeline` then made the line run the full track width including empty column space trailing the last circle, since nothing follows it to connect to, which read as "the scroll goes too far." Per-item segments sidestep both: each one only draws when there's a next circle to reach.
  - The old "Week 25, and next Friday is already in motion." status line (`.log-status`, `.log-dot`) is gone, cut on direct feedback as no longer needed once the timeline itself shows the week count. Don't bring that class back; it's been removed from `src/styles.css`, not just unused.
  - The closing block reuses `/christopher.jpg` at a smaller size (`.portrait.portrait-sm`) next to one first-person sentence from Christopher ("Hi, I'm Christopher..."), inside `.author-note`, at the very end of the page, right before a "Want to see more case studies?" heading and the cross-links to the other case studies. It no longer sits next to a CTA of its own, since the page's one CTA sits higher up, right after the two-column split. Don't add a different photo or a synthetic person: the portrait already on the homepage is the only trust photo this site uses, per section 3.
  - No sticky elements anywhere on these pages (no sticky sub-nav, no sticky CTA bar). It fails the "would this look out of place printed and handed to someone?" test in section 3, even though it wouldn't touch the zero-JS rule. The repeated inline "Book a call with me" button is the mechanism instead.
  - No pulsing or otherwise animated status dot. `.log-dot`/`.log-status` stay static, per the no-animation-while-reading rule. The card grid may lift slightly on hover, a plain CSS transition already covered by the sitewide `prefers-reduced-motion` rule rather than gated individually.
  - When a client's quote doesn't exist yet, or was pulled for accuracy, leave the quote block out entirely rather than filling it with a placeholder note or inventing one. Don't attribute a pulled quote to whoever actually said it (e.g. a team member) without Christopher explicitly re-confirming that specific person is covered; a spec document proposing that attribution is not that confirmation.
  - Card images (a client's own logo or character art, or a screenshot of the built work) are planned but not implemented: none of that artwork has been supplied yet. Don't add placeholder art, a generated image, or a synthetic photo of a named client in the meantime; the cards stay text-only until real files exist.
  - Every name, quote, and organization must be real and attributed accurately. See section 8 for exactly who is covered and the Ask G-Pop quote correction.
  - The case-studies index cards' old circled corner-arrow affordance (`.card-arrow`) is gone, superseded by the descriptive card-btn anchor both pages' cards now share (see the "Clients like you" bullet above for the current card design).
  - **Each case study opens with one or two plain sentences answering "what did The Web3 Family build for this client?"**, right after the `.case-facts` strip and before the two-column split, added on a September 2026 build instruction aimed at both search engines and AI assistants extracting the page. First person singular ("I built [client] a..."), pulled from real, already-published facts on that same page, not new claims. Immediately under it, a prominent link out to the client's own live site (reusing `.card-site` and `.link-out-icon`, the same treatment the homepage/index cards use for the same domains) with descriptive anchor text ("See Love Aid Foundation live at loveaid.foundation"), `target="_blank"` and `rel="noopener"`.
  - **Page `<title>` and meta `description` for the homepage, the case-studies index, and all three case study pages were rewritten for SEO** on that same build instruction: more keyword-descriptive than the visible on-page headlines, which are untouched (the locked-copy rule in section 5 is about visible copy, not metadata). Don't further tune these without a fresh, explicit request; they're deliberately more conventional/keyword-forward than the plain-spoken on-page voice, which is an accepted tradeoff for a `<title>` tag specifically, not license to write body copy that way.
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
