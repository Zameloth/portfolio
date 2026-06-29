# Issue tracker: Local Markdown

Issues for this repo live as markdown files in `.scratch/portfolio/`.

## Conventions

- All issues are in `.scratch/portfolio/<NN>-<slug>.md`, numbered from `01`
- Triage state is a `Triage:` line near the top of each file (see `docs/agents/triage-labels.md`)
- Type is a `Type:` line (e.g. `AFK` for agent-ready work)
- Acceptance criteria use a markdown checklist (`- [ ]`)
- Comments and conversation history append under a `## Comments` heading

## When a skill says "publish to the issue tracker"

Create a new file at `.scratch/portfolio/<NN>-<slug>.md` with the next available number.

## When a skill says "fetch the relevant ticket"

Read the file at the referenced path. The user will normally pass the path or issue number directly.
