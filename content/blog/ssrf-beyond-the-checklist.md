---
title: "Server-Side Request Forgery: Beyond the OWASP Checklist"
date: "2026-05-12"
excerpt: "Why SSRF keeps showing up in modern cloud-native applications, and what a real-world remediation strategy looks like beyond basic allowlists."
tags: ["SSRF", "Web Security", "Cloud"]
---

## Why SSRF refuses to go away

Server-Side Request Forgery shows up again and again in penetration test reports, even on applications that pass automated scanners with a clean bill of health. The reason is structural: SSRF isn't a single bug pattern, it's a category of trust failures that emerges whenever a server makes an outbound request based on user-controlled input — a webhook URL, an image-fetch endpoint, a PDF generator, a "test this integration" button.

Most teams reach for a domain allowlist and consider the issue closed. In practice, that's the easy 80% of the fix, and attackers spend their time on the remaining 20%.

## Where allowlists break down

A few patterns that consistently defeat naive allowlisting in real engagements:

- **DNS rebinding.** The allowlist check resolves a hostname at validation time, then the application makes the actual request later, after the DNS record has changed to point at an internal address.
- **Redirect chains.** The validated URL returns a 302 to an internal resource, and the HTTP client happily follows it.
- **IPv6 and alternate encodings.** Decimal, octal, and IPv6-mapped representations of `127.0.0.1` slip past regex-based filters that only recognize the dotted-quad form.
- **Cloud metadata endpoints.** The classic `169.254.169.254` target remains effective because it's not a "domain" at all, so domain-based allowlists never even evaluate it.

## A more durable approach

Validating input is necessary but not sufficient. The pattern that holds up under adversarial testing combines several layers:

1. Resolve the hostname once, validate the resulting IP against a strict denylist of private and link-local ranges, and pin the connection to that resolved IP so a later DNS change can't matter.
2. Disable automatic redirect following in the HTTP client, or re-validate the destination on every hop.
3. Run outbound requests through an egress proxy with its own independent network-layer controls, so application logic isn't the last line of defense.
4. Treat metadata service endpoints as a special case requiring explicit, audited exceptions rather than relying on generic IP filtering to catch them.

## Testing for it properly

During an engagement, the fastest way to find these issues isn't fuzzing every parameter — it's mapping every feature that triggers an outbound server request and walking each one through the redirect and DNS-rebinding cases above. Burp Collaborator or a self-hosted equivalent makes blind SSRF detection straightforward once you know where to point it.

The deeper lesson is that defense-in-depth matters more for SSRF than almost any other web vulnerability class, precisely because the attack surface is "the server's own network position," which application-layer code alone can never fully control.
