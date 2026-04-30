# TrustAFI Capital Qualification & Verification Platform

TrustAFI operates in a space where the quality of a first impression determines whether a conversation ever happens. Asset owners and capital allocators are sophisticated counterparties, and they notice everything. A clunky intake form, a slow follow-up, a disorganised internal process — any one of these can quietly end a relationship before it begins.

TrustAFI was built to solve that problem.


## The Brief

TrustAFI needed a qualification system that could handle two distinct user types, **Asset Owners** and **Capital Allocators**, and route their submissions through a structured internal review process without losing information, missing follow-ups, or relying on manual spreadsheets.

The requirement was not just a form and a database. It was a full pipeline: intake, verification, scoring, routing, communication tracking, and behavioural signal capture. All connected, all automated, all running without someone having to manage it manually.


## The Approach

The platform is three layers working as one system.

**The public layer** is two intake forms on afi.africa, one for each user type. Each form captures detailed profile information relevant to that counterparty: fund mandate and ticket size for capital allocators, asset class and capital structure for asset owners. Clean, premium, institutional in feel.

**The automation layer** is an n8n workflow that sits between the public forms and the database. When a submission comes in, n8n receives it via webhook and fans it out into five simultaneous database records: submission, contact, organisation, and the appropriate counterparty profile, all correctly linked to each other. The workflow runs 24/7 without intervention. A submission made at 2am on a Sunday is in the database within 2 seconds.

**The internal layer** is a staff-only React application for the TrustAFI qualification team. Reviewers can see the full pipeline, open individual submissions, track evidence, log communications, move deals through stages, and record behavioural signal scores (seriousness, coherence, responsiveness) against each counterparty.


## The Architecture

```
PUBLIC FORM (afi.africa)
       │
       ▼
  n8n WEBHOOK  ── receives, routes, writes
       │
       ▼
  AIRTABLE BACKEND
  ┌──────────────────────────────────┐
  │  Submissions  (central hub)      │
  │  Contacts                        │
  │  Organizations                   │
  │  Capital Allocator Profiles      │
  │  Asset Owner Profiles            │
  │  Evidence                        │
  │  Workflow                        │
  │  Communication Log               │
  │  Signal Notes                    │
  └──────────────────────────────────┘
       │
       ▼
  INTERNAL APP  ── reads, reviews, routes
```


## Tech Stack

| Layer | Tool |
|---|---|
| Public & Internal Frontend | React, TypeScript, Vite, Tailwind CSS, shadcn/ui |
| Automation Middleware | n8n Cloud |
| Database | Airtable |
| Build Platform | Lovable |


## Decisions Worth Noting

**Why n8n instead of a direct Airtable connection?**
Connecting Lovable directly to Airtable would expose the API token in the browser, a security issue that scales badly. n8n handles the token server-side, keeps the connection secure, and gives the flexibility to add email notifications, team alerts, and scoring automations on top of the same webhook as the system grows.

**Why Airtable and not a traditional database?**
The qualification team are not engineers. They need to be able to see, filter, and manage records without writing queries. Airtable gives the backend the flexibility of a relational database with an interface the team can actually use. The 9-table structure was designed so that Submissions sits at the centre and everything else links back to it. Nothing is orphaned, nothing is duplicated.

**Why build the internal app separately from the public site?**
The public site is for counterparties. The internal app is for the team. Mixing them creates permission complexity and design conflict. Keeping them separate means each interface is optimised for its actual user.


## Where It Stands

The core pipeline is live and running. Public intake forms, n8n automation, and Airtable backend are fully connected and tested end to end. The internal qualification app is in phased rollout, with each module being built on top of live data rather than shipped as a complete product all at once. The priority was getting the pipeline right first. The tooling follows.


*Built for [afi.africa](https://afi.africa)*
