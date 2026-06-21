## Rename UI labels: "Investor" → "Allocator"

Display-only rename. Internal `tab` values (`"investor"`), `intakeType` payload (`"Capital Allocator"`), state names, and webhook field keys stay unchanged so n8n/Airtable mapping is unaffected.

### Changes

**1. `src/pages/Index.tsx`** (homepage hero CTA)
- Button text "Investor Access" → "Allocator Access"

**2. `src/pages/EngagePage.tsx`**
- Tab button label "Investor" → "Allocator"
- Submit button label (investor tab) "Apply for Access" stays, OR if there's an "Investor Access" CTA, rename to "Allocator Access"

**3. Search for any other visible "Investor" / "Investor Access" strings** across pages (Index, WhoWeServePage, Footer, Navbar, AcquisitionPage, TrustAFIPage) and rename display text only. Leave route paths, state keys, prop names, and payload values untouched.

### Out of scope
- No changes to `tab === "investor"` conditionals
- No changes to `intakeType: "Capital Allocator"` payload (already correct)
- No changes to n8n workflow or webhook fields
