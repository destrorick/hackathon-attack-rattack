# Your Attack-side tool

This is an optional starting point for a simple recon/checks script — swap in a real scanner, fuzzer, or your own AI-assisted tool, this is just here so you're not starting from a blank folder.

## Getting started

```
npm install
node index.js https://target-url-from-a-submission.example.com
```

Runs a few basic, non-destructive checks (missing security headers, exposed default routes) against the given URL and prints results.

## Important

This tool is meant to run **on your own machine**, not on the hub server. The hub app does not execute attack tools for you — after you run your tool, go to the target's page on the hub and:

1. **File a finding** for anything real you found (title, description, proposed fix, severity, real-threat verdict).
2. Optionally **log a test run** on the submission page to note that you tested it, even if you found nothing.

Only test the exact targets submitted on the hub, and only with non-destructive checks — no actual exploitation, DoS, or data destruction.

## `findings-template.json`

A copy-paste starting point matching the fields the hub's "File a finding" form expects.
