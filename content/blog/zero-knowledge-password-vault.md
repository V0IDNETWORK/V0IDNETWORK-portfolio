---
title: "Designing a Zero-Knowledge Password Vault: Lessons from Building Guard"
date: "2026-04-03"
excerpt: "Key derivation, authenticated encryption, and the small decisions that separate a real zero-knowledge vault from a vault that merely claims to be one."
tags: ["Cryptography", "Python", "Security Architecture"]
---

## What "zero-knowledge" actually has to mean

The phrase gets used loosely in password manager marketing. A useful working definition: the application — and anyone who can read its storage or its source code — should learn nothing about the contents of the vault without the master password. That sounds obvious, but it rules out a surprising number of common shortcuts, like caching a derived key in plaintext config, or logging decrypted values during debugging.

## Key derivation is the foundation

A master password is low-entropy compared to a cryptographic key, so the first job is stretching it. PBKDF2-HMAC-SHA256 with a high iteration count remains a reasonable default for a desktop application where Argon2's memory-hardness benefits matter less than broad compatibility. The iteration count should be tuned to the slowest realistic target hardware, not the fastest — the goal is to make offline brute-force attempts expensive without making legitimate unlocks annoying.

A few details that are easy to get wrong:

- The salt must be unique per vault and stored alongside the ciphertext, never reused across installs.
- The derived key should never be written to disk in any form, including swap. On platforms where it's available, locking the memory pages holding the key is worth the added complexity.
- Iteration counts should be versioned in the vault format, so they can be increased later without breaking old vaults.

## Authenticated encryption, not just encryption

Encrypting each credential entry with Fernet (AES-128-CBC plus HMAC-SHA256) rather than raw AES gives you authenticated encryption for free — tampering with ciphertext is detected before decryption completes, rather than producing garbage plaintext that the application might mishandle. Any vault format that doesn't authenticate its ciphertext is accepting a category of attack it doesn't need to.

## What zero network calls actually buys you

A fully offline vault eliminates an entire class of risk: there's no API to misconfigure, no TLS implementation to get wrong, no server-side breach to worry about. The tradeoff is obvious too — no built-in sync, no remote wipe, no cloud backup. For a security-conscious user base, that tradeoff is often the right one, but it's a tradeoff, not a free win, and it should be stated as one rather than oversold.

## The boring parts matter most

Most of the actual engineering effort in a project like this goes into unglamorous correctness: making sure the database integrity check actually runs before any decryption attempt, making sure failed unlock attempts don't leak timing information about *which* check failed, and making sure the OS keyring integration degrades gracefully on platforms where it isn't available. None of that shows up in a feature list, but it's the difference between a vault that's secure in practice and one that's only secure in the README.
