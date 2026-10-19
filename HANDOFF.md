# Sri Lekha Vempati — Author Website Prototype (Handoff)

Frontend-only approval prototype. React + Vite + TypeScript + Tailwind (v3) + React Router.

## Run
```
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
```

## Content inventory (source: `Author Information.docx`, kept unchanged in `_client-originals/`)
| Item | Status |
|---|---|
| Author name, bio, "about me" line | Supplied, used verbatim |
| Author photo | Supplied (560×705), used as-is |
| Book cover | Supplied as a **full wrap** (back + spine + front, 684×506). Front panel cropped out unaltered (332×506) |
| Title, subtitle, blurb, closing line | Supplied, used verbatim |
| Publication date, formats | Supplied: Aug 27 2026; eBook, Paperback, Hardcover |
| Amazon / B&N / Goodreads links | Supplied (see discrepancies) |
| Instagram @Sri_Vempati1 | Supplied |
| Contact email, country | Supplied |
| ISBN, publisher | **Not supplied — hidden** |
| Facebook, Author Central, other socials | Marked NA — not shown |
| Reviews / endorsements | None supplied — no review section |
| Privacy/legal pages | None — not linked |

## Pages
Home `/`, About `/about`, The Book `/book`, Contact `/contact`, plus a 404 page. Central content lives in `src/data/` (`author.ts`, `book.ts`, `navigation.ts`); retailer URLs are in `book.ts`.

## Discrepancies and items to confirm with Sri
1. **Title in bio:** her bio says "Beyond Rumors" (no "the"); everywhere else it's *Beyond the Rumors*. Bio is shown verbatim — please confirm which is correct.
2. **Publication date:** supplied as Aug 27 2026; Goodreads lists Aug 25 2026 (hardcover). Site shows Aug 27 — confirm.
3. **Author name on B&N:** listed as "Sri Vempati" (not "Sri Lekha Vempati"). Cover also says "Sri Vempati". Confirm the preferred public form.
4. **Barnes & Noble link:** the document's hyperlink was truncated by a line break; the URL was reassembled from the visible text. It loads the correct book (checked). B&N showed the item as out of stock online.
5. **Amazon short link (a.co):** could not be checked automatically — please click it.
6. **Instagram link:** supplied URL contained a tracking parameter (`?stkn=…`); removed.
7. **Cover resolution:** the front cover is only 332 px wide, so it looks soft on large/retina screens. Please request the front-cover file in high resolution before launch.
8. **Content sensitivity:** the blurb refers to the misuse of a child's innocence. It is used verbatim; consider whether Sri wants a short content note.
9. **Not displayed on purpose:** her favourite author (Colleen Hoover) from the form; the ISBN/EAN visible in the B&N URL (not supplied as an ISBN).
10. **Country:** "United States" is shown on Contact because she supplied it for display. Remove if she prefers.

## Design decisions needing approval
- Palette drawn from the cover (dusk blue-slate, copper, ivory) rather than the burgundy suggested in the brief.
- Cormorant Garamond (headings) + Inter (text) via Google Fonts.
- Themes (from her stated themes and the blurb): rumors & misunderstandings, relationships & friendship, healing & trust, self-discovery & growth, innocence to wisdom. The brief's "betrayal/failure" were not in her supplied materials, so they are not used.
- "In her words" quote on About uses her own supplied sentence.

## Placeholders / not built (by scope)
No backend, contact form, checkout, analytics, canonical URLs or share images (pending production domain). Contact uses a `mailto:` link.
