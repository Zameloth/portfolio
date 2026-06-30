# Slice 4 — Skills section

Type: AFK
Triage: ready-for-agent

## What to build

The competences section. A Skill is a tool/language/platform grouped by category
(see CONTEXT.md → Skill). No proficiency levels — categories only.

- A typed data file holding Skills grouped by category (e.g. Languages,
  ML/DL, MLOps & Infra, Cloud & Data).
- A skills section on the home page that renders each category with its Skills,
  themed to match the dark/technical design.

## Acceptance criteria

- [ ] Skills live in a single typed data file, grouped by category
- [ ] The home page renders each category and its Skills
- [ ] No proficiency bars/percentages are shown
- [ ] Adding a Skill = editing the data file only, no component changes
- [ ] Styling matches the shared dark theme

## Blocked by

- Slice 2 — Base layout shell + Hero
