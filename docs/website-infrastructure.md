# Kanos Marketing — Website & Infrastructure Overview

How **kanosmarketing.com** connects Squarespace, GitHub, Vercel, and Google Workspace.

---

## 1. The whole picture (who does what)

```mermaid
flowchart TB
  subgraph people["People"]
    V[Visitors]
    D[Developers]
    E[Email senders / recipients]
  end

  subgraph squarespace["Squarespace"]
    REG["Domain registration<br/>(you own kanosmarketing.com)"]
    OLD["Old DNS panel<br/>(ignored if nameservers moved)"]
  end

  subgraph github["GitHub"]
    REPO["Repo: patgratt/kanosGroup<br/>React + Vite source code"]
  end

  subgraph vercel["Vercel"]
    BUILD["Build & host website"]
    DNS["Authoritative DNS<br/>(nameservers)"]
    SITE["Live site + CDN"]
  end

  subgraph google["Google"]
    GW["Google Workspace<br/>Gmail / mailboxes"]
    ADMIN["Admin: MX, SPF, DKIM instructions"]
  end

  REG -->|"Nameservers → Vercel"| DNS
  D -->|"git push"| REPO
  REPO -->|"Auto deploy on push"| BUILD
  BUILD --> SITE
  DNS -->|"A / ALIAS → Vercel"| SITE
  DNS -->|"MX → smtp.google.com"| GW
  DNS -->|"SPF + DKIM TXT"| GW
  V -->|"https://kanosmarketing.com"| SITE
  E <-->|"@kanosmarketing.com mail"| GW
  ADMIN -.->|"Copy DNS values into"| DNS
  OLD -.->|"MX used to live here<br/>no longer used if NS = Vercel"| OLD
```

**Summary:** Squarespace often **owns the domain**; **Vercel** runs the **site + live DNS**; **GitHub** holds the **code**; **Google** runs **email** (DNS in Vercel points mail at Google).

---

## 2. When someone opens the website

```mermaid
sequenceDiagram
  participant Browser as Visitor's browser
  participant DNS as Public DNS
  participant VDNS as Vercel DNS
  participant Vercel as Vercel CDN / hosting
  participant Site as React app (built from GitHub)

  Browser->>DNS: Where is kanosmarketing.com?
  DNS->>VDNS: Nameservers say "ask Vercel"
  VDNS-->>DNS: ALIAS / A → Vercel servers
  DNS-->>Browser: IP / host for Vercel
  Browser->>Vercel: GET https://kanosmarketing.com/
  Vercel->>Site: Serve static files (HTML, JS, CSS, images)
  Site-->>Browser: About, Services, Contact pages (client-side routing)
```

The app is a **Vite + React SPA**. `vercel.json` rewrites all routes to `index.html` so `/about`, `/services`, etc. work. Vercel serves **website files only** — not email.

---

## 3. When you change the site (dev → live)

```mermaid
flowchart LR
  A[Edit code locally] --> B[git commit & push]
  B --> C[GitHub: kanosGroup repo]
  C --> D[Vercel watches repo]
  D --> E["npm run build (vite build)"]
  E --> F[Deploy to Vercel edge/CDN]
  F --> G[kanosmarketing.com serves new version]
```

**Flow:** push to GitHub → Vercel builds → new site live in minutes. Squarespace and Google are not involved in deploys.

---

## 4. Email (separate path from the website)

```mermaid
flowchart TB
  subgraph website_path["Website path (browser)"]
    B[Browser] --> DNS1[DNS: ALIAS/A]
    DNS1 --> V[Vercel hosts site]
  end

  subgraph email_path["Email path (Gmail, etc.)"]
    S[Sender] --> DNS2[DNS: MX record]
    DNS2 --> G[Google Workspace]
    G --> W["will.papaz@kanosmarketing.com"]
  end

  subgraph vercel_dns["Vercel DNS for kanosmarketing.com"]
    R1["ALIAS → Vercel (website)"]
    R2["MX → smtp.google.com (mail)"]
    R3["TXT SPF + google._domainkey DKIM"]
  end

  DNS1 --> vercel_dns
  DNS2 --> vercel_dns
```

Mail **does not** go through Vercel's web servers. Vercel only **stores DNS records** that tell the world to send mail to **Google**.

---

## 5. Squarespace's role (before vs now)

```mermaid
flowchart TB
  subgraph now["Typical setup now"]
    SS1[Squarespace: domain billing / registrar]
    SS1 --> NS[Nameservers point to Vercel]
    NS --> VD[Vercel DNS]
    VD --> WEB[Website records]
    VD --> MAIL[Google MX + SPF + DKIM]
  end

  subgraph before["What broke mail briefly"]
    SS2[Squarespace had MX → Google]
    MV[Site moved to Vercel]
    MV --> NS2[Nameservers → Vercel]
    NS2 --> VD2[Vercel DNS had website only]
    VD2 --> X[MX missing → mail failed]
  end

  before -->|"Add MX + SPF + DKIM in Vercel"| now
```

Squarespace isn't hosting the React site if nameservers point to Vercel — it's mainly **domain registration** and possibly **legacy DNS**.

---

## 6. Simple boxes view

```
┌─────────────────────────────────────────────────────────────────┐
│  kanosmarketing.com (domain name)                                │
│  Registered / billed: often Squarespace                          │
│  Nameservers: Vercel                                             │
└─────────────────────────────────────────────────────────────────┘
         │                                    │
         │ DNS (website)                      │ DNS (email)
         ▼                                    ▼
┌─────────────────────┐              ┌─────────────────────┐
│  VERCEL             │              │  GOOGLE WORKSPACE    │
│  • Builds from      │              │  • Inboxes           │
│    GitHub repo      │              │  • Send/receive      │
│  • Serves React     │              │  • will.papaz@…      │
│    marketing site   │              │                      │
└─────────────────────┘              └─────────────────────┘
         ▲
         │ git push
┌─────────────────────┐
│  GITHUB             │
│  patgratt/kanosGroup│
│  Source code        │
└─────────────────────┘
```

---

## Quick reference

| Service | Role |
|--------|------|
| **Squarespace** | Domain registration (and possibly old DNS); not serving the site if NS → Vercel |
| **GitHub** | Source code (`patgratt/kanosGroup`); triggers Vercel deploys |
| **Vercel** | Builds & hosts website; **authoritative DNS** (site + Google mail records) |
| **Google** | Email only (Workspace); mailboxes like `will.papaz@kanosmarketing.com` |
| **Visitors** | Hit Vercel for the site; never touch Google for browsing |

---

## Required DNS records (Vercel)

| Record | Name | Purpose |
|--------|------|---------|
| **ALIAS / A** | `@` (empty) | Website → Vercel |
| **MX** | `@` (empty) | Mail → `smtp.google.com` (priority 1) |
| **TXT (SPF)** | `@` (empty) | `v=spf1 include:_spf.google.com ~all` |
| **TXT (DKIM)** | `google._domainkey` | Google signing key from Admin console |

Optional: **DMARC** at `_dmarc` when Google recommends it.
