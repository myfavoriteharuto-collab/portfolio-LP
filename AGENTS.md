<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Changelog rule — MANDATORY

Whenever you modify any source file in this repository, you MUST append an entry to `CHANGELOG.md` in the same response before finishing.

Entry format (add at the top, under the `---` after the header):

```
## YYYY-MM-DD

### Added / Changed / Fixed / Removed
- <component or file>: <what changed and why>
```

- Use today's date (available in system context as `currentDate`).
- One bullet per logical change, not per file edit.
- If an entry for today already exists, append bullets to it rather than creating a duplicate date block.
- Do NOT skip this step even for small fixes.
