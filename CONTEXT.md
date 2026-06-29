# Context — Portfolio (MLOps / AI Engineer)

A single-owner personal portfolio site for Théo Eloy, an MLOps / AI Engineer.
Served as a fully static site by Nginx behind Traefik at `theo-eloy.fr`.

## Glossary

### Project
A piece of work showcased on the portfolio. Each Project has a title, a tech
stack, external links (repo / demo), and a description. Each Project is authored
as a single Markdown file (Content Collection entry) whose body becomes its own
**dedicated detail page**. The home page renders Projects as cards linking to
those detail pages.

### Skill
A competency/technology displayed in the competences section (a tool, language,
or platform). Skills are grouped by category (e.g. Languages, ML/DL, MLOps &
Infra, Cloud & Data) and stored in a typed data file. No proficiency levels —
categories only.

### Hero
The top section of the home page: name, role headline, and primary call(s) to
action.

### Contact
Not a form. A set of direct links (mailto + social/professional profiles). The
site has no backend, so "contact" means outbound links only.
