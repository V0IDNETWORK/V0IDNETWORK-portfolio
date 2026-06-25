---
title: "Using MITRE ATT&CK as a Pentest Reporting Framework, Not Just a Wall Poster"
date: "2026-02-18"
excerpt: "ATT&CK is most useful when it changes how findings get written and prioritized, not just when it gets pasted into an appendix."
tags: ["MITRE ATT&CK", "Penetration Testing", "Reporting"]
---

## The appendix problem

It's common for a pentest report to include a MITRE ATT&CK mapping table as an afterthought — a page near the back that lists technique IDs next to findings that were already written up in plain language. That's better than nothing, but it leaves most of ATT&CK's actual value on the table.

## What changes when you map as you go

Mapping findings to ATT&CK tactics during the engagement, rather than after, changes the shape of the report in a few concrete ways:

- **Coverage gaps become visible.** If every finding clusters under Initial Access and Execution, and nothing touches Lateral Movement or Exfiltration, that's a signal the assessment's scope or time budget left part of the kill chain untested — worth saying explicitly rather than implying false completeness.
- **Findings link into chains instead of standing alone.** A reflected XSS and a missing CSRF token are unrelated bugs in isolation. Mapped to ATT&CK tactics in sequence, they become a believable path from initial foothold to session hijack, which is what actually motivates a remediation budget.
- **Client security teams can plug findings directly into their own detection coverage.** A blue team running a SIEM mapped to ATT&CK can take a technique ID and immediately check whether they'd have caught it, rather than re-deriving that mapping themselves from prose.

## A practical workflow

During active testing, logging each confirmed action against its likely technique ID in real time — even just in scratch notes — turns the eventual report into an assembly task instead of a reconstruction task. It also surfaces, mid-engagement, whether a particular phase needs more attention before time runs out.

## Where the matrix says less than it implies

ATT&CK is descriptive, not prescriptive — it catalogs what's been observed in the wild, not what's possible. A novel technique that hasn't been publicly documented won't have a clean ID, and forcing it into the nearest existing category can blur what actually happened. It's fine, and often more honest, to note a finding as "related to T1190 but not a clean match" rather than mislabeling it for the sake of a tidy table.

Used this way, ATT&CK earns its place as the spine of the report rather than decoration bolted onto the end of it.
