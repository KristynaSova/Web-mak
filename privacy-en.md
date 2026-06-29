# Privacy Policy — EN localisation
> Source file: `ochrana-osobnich-udaju.html`
> Target file: `en/privacy-policy.html`

---

## SEO & Metadata

| Field | Value |
|---|---|
| `<html lang>` | `en` |
| URL (file) | `en/privacy-policy.html` |
| `<title>` | `Privacy Policy \| Farma Černý` |
| `<meta description>` | `Learn how Farma Černý s.r.o. collects and processes your personal data, why we need it, and what rights you hold under the General Data Protection Regulation (GDPR).` |
| `<link rel="canonical">` | `https://www.farmacerny.cz/en/privacy-policy` |
| `<meta name="robots">` | `noindex` |
| OG Title | `Privacy Policy \| Farma Černý` |
| OG Description | `How Farma Černý s.r.o. handles your personal data in accordance with GDPR.` |

---

## JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy — Farma Černý",
  "url": "https://www.farmacerny.cz/en/privacy-policy",
  "description": "How Farma Černý s.r.o. collects, processes and protects your personal data under the General Data Protection Regulation (GDPR).",
  "inLanguage": "en",
  "publisher": {
    "@type": "Organization",
    "name": "Farma Černý s.r.o.",
    "url": "https://www.farmacerny.cz/"
  }
}
```

---

## Navigation — localised labels

| CZ | EN |
|---|---|
| Logo alt | `Farma Černý` *(unchanged)* |
| Domů | Home |
| Český modrý mák | Czech Blue Poppy Seeds |
| Kvalita & technologie | Quality & Technology |
| Pro zpracovatele | For Food Manufacturers |
| Export | Export |
| Rodinná tradice | Family Heritage |
| Kontakt (CTA) | Contact |
| aria-label hamburger | `Open menu` |

### Lang switcher — active link
```
CZ → ../ochrana-osobnich-udaju.html
EN → privacy-policy.html      ← active (lang-active)
DE → ../de/datenschutz.html
PL → ../pl/index.html
```

---

## HERO section

| Field | Text |
|---|---|
| Eyebrow (`section-subtitle`) | `LEGAL INFORMATION` |
| H1 | `Privacy Policy` |
| Lead (paragraph under H1) | `Your privacy matters to us. This page explains what personal data we collect, why we process it, and what rights you have under the General Data Protection Regulation (GDPR).` |

---

## Accordion sections

### 1 — Data Controller
**Summary:** `Data Controller`

**Body:**
> The data controller responsible for processing your personal data is:
>
> **Farma Černý s.r.o.**
> Lužany 64
> 503 05 Lužany
> Czech Republic
>
> Company registration no. (IČO): 08022577
> VAT no. (DIČ): CZ08022577
> Email: jiricerny75@seznam.cz

---

### 2 — Personal Data We Collect
**Summary:** `Personal Data We Collect`

**Body:**
> When you submit our contact form, we may collect the following data:
>
> - First and last name
> - Company name
> - Email address
> - Phone number
> - Country
> - Requested delivery volume
> - Preferred packaging type
> - Requested delivery date
> - Message content
>
> Providing this information is entirely voluntary.

---

### 3 — How We Use Your Data
**Summary:** `How We Use Your Data`

**Body:**
> We use your personal data solely for the following purposes:
>
> - Responding to your enquiry,
> - Preparing a tailored quotation,
> - Business communication,
> - Exploring potential cooperation.
>
> We do not use your data for marketing communications or promotional purposes.

---

### 4 — Data Retention
**Summary:** `Data Retention`

**Body:**
> We retain personal data only for as long as necessary for the purposes for which it was collected.
>
> Data is kept for a maximum of **24 months from the date of our last communication**, unless a longer retention period is required by applicable law.

---

### 5 — Third-Party Processors
**Summary:** `Who Has Access to Your Data`

**Body:**
> We do not share your data with third parties for marketing purposes.
>
> For technical reasons, your data may be processed by the following sub-processors:
>
> - Netlify (website hosting)
> - Web3Forms (contact form processing)
>
> Both providers process your data exclusively for the purpose of operating this website and delivering contact form submissions.

---

### 6 — Cookies
**Summary:** `Cookies`

**Body:**
> Our website uses only strictly necessary technical cookies required for the website to function properly.
>
> We do not use any analytics or marketing cookies.
>
> In particular, this website does not use:
>
> - Google Analytics
> - Google Tag Manager
> - Meta Pixel
> - Facebook Pixel
> - Hotjar
> - Microsoft Clarity
>
> The interactive Google Maps embed is not loaded automatically. It is displayed only after the user clicks the **Open in Google Maps** button.
>
> At present, this website does not use any cookies that require user consent under applicable data protection law.
>
> Should analytics or marketing tools be added in the future, a cookie consent mechanism will be implemented accordingly.

---

### 7 — Your Rights
**Summary:** `Your Rights`

**Body:**
> Under the General Data Protection Regulation (GDPR), you have the right to:
>
> - Access the personal data we hold about you,
> - Request correction of inaccurate data,
> - Request erasure of your personal data ("right to be forgotten"),
> - Request restriction of processing,
> - Object to the processing of your data,
> - Request data portability,
> - Lodge a complaint with a supervisory authority.

---

### 8 — Privacy Contact
**Summary:** `Privacy Enquiries`

**Body:**
> If you have any questions about how we handle your personal data, please feel free to contact us at any time.
>
> **Farma Černý s.r.o.**
> Lužany 64
> 503 05 Lužany
> Czech Republic
>
> Email: jiricerny75@seznam.cz

---

## CTA section

| Field | Text |
|---|---|
| Eyebrow | `ENQUIRY` |
| H2 | `Interested in Blue Poppy Seed Supply?` |
| Paragraph | `We'll prepare a tailored quote for you. Get in touch — we're happy to help.` |
| Button (CTA) | `Contact Us` |
| Button href | `contact.html` |

---

## Footer

| Column | Heading | Items |
|---|---|---|
| 1 – Pages | `Pages` | Czech Blue Poppy Seeds / Quality & Technology / Family Heritage / For Food Manufacturers |
| 2 – Info | `Information` | Export / Contact / Terms & Conditions *(placeholder)* / **Privacy Policy** *(active, highlighted)* |
| 3 – Contact | `Contact` | address, email, phone *(unchanged)* |
| Copyright | `© 2026 Farma Černý s.r.o. All rights reserved.` | |

---

## Implementation notes

- File belongs in `en/` folder → CSS and JS paths: `../style.css`, `../subpage.css`, `../main.js`
- Image paths: `../Obrazky/mak_cerny.svg`, `../favicon.svg`
- Nav CTA href: `contact.html` (relative within `en/`)
- Lang switcher: active link = `privacy-policy.html` with class `lang-active`
- hreflang: this page has no language counterparts in PL → link to respective homepage
- IČO / DIČ kept in original Czech format (this is a Czech legal entity); labelled in English as "Company registration no." and "VAT no."
- "Right to be forgotten" added as a parenthetical — standard in EN B2B privacy pages
- EN pages use `contact.html` (not `kontakt.html`) — verify the EN contact page filename before implementing
