# Open items

Things built, but waiting on something only Christopher can supply, or a step
only he can take. Nothing here is invented; each is a real placeholder or a
real unfinished step. Delete an item once it's done.

## About page (`/about/`)

- [ ] Write the real "Why I do this" paragraph (2–3 sentences, in your own
      words) in `src/about.njk`, replacing the bracketed placeholder. Don't
      let this page go live with the placeholder still showing.
- [ ] Send your real profile URLs for Instagram, Facebook, Threads, and X.
      They're used in two places in `src/about.njk`: the visible "Where to
      find me" links, and the page's own JSON-LD (`sameAs`). Both currently
      read `PASTE_INSTAGRAM_URL`, `PASTE_FACEBOOK_URL`, `PASTE_THREADS_URL`,
      `PASTE_X_URL`.
- [ ] Once the above two are in and the page is live, run it through
      [Google's Rich Results Test](https://search.google.com/test/rich-results)
      and request indexing in Search Console. A Profile page report should
      show up under Enhancements, next to Breadcrumbs, within a few weeks.

## Support page (`/support/`)

- [ ] Create seven Stripe Payment Links in your own Stripe dashboard (three
      one-time amounts, one custom/"Other amount" link, three monthly
      amounts) and send them over. `src/support.njk` currently points each
      tip button at a placeholder: `STRIPE_LINK_ONCE_10`, `_25`, `_50`,
      `_OTHER`, `STRIPE_LINK_MONTHLY_10`, `_25`, `_50`.
- [ ] Decide whether [PR #18](https://github.com/The-Web3-Family/client-theweb3family-web/pull/18)
      (the support page + the new 404 page) should merge now with
      placeholder links, or wait until the real ones are ready.

## Still open from earlier rounds (see CLAUDE.md section 8 for full detail)

- [ ] **Splitform embed.** `src/contact.njk`'s right-column form is still a
      plain `mailto:` stand-in. Send the real Splitform embed snippet or
      hosted form URL from your own Splitform account to swap it in.
- [ ] **GoatCounter.** The analytics pixel in `base.njk` is built but
      commented out, waiting on the real tracking subdomain from your own
      free GoatCounter account (`MYCODE.goatcounter.com`).
- [ ] **Confirm `BUTTONDOWN_API_KEY` is set in Vercel.** (Project Settings →
      Environment Variables, Production and Preview.) If it's already
      there, this is done — just hadn't been verified from this session.
      Test the footer newsletter signup with a real email once you're sure.

## Not on this list

Everything else from recent rounds (the real-text articles, the article
cover images and short-answer boxes, the "Creative Studio for Nonprofits"
descriptor, the case studies, the pricing cards) is finished and live or
merged. This file is only for things waiting on you.
