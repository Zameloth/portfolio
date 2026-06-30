export type Locale = 'fr' | 'en';

type Translations = {
	siteTitle: string;
	siteDescription: string;
	heroHeadline: string;
	heroDescription: string;
	heroAvailability: string;
	sectionProjects: string;
	sectionSkills: string;
	sectionContact: string;
	contactIntro: string;
	backToProjects: string;
	footer: string;
	switchLang: string;
	switchLangLabel: string;
	readMore: string;
	skillCategoryNames: Record<string, string>;
};

export const translations: Record<Locale, Translations> = {
	fr: {
		siteTitle: 'Théo ELOY — Ingénieur IA',
		siteDescription: 'Portfolio de Théo ELOY, ingénieur IA.',
		heroHeadline: 'Ingénieur IA',
		heroDescription:
			"Je conçois et déploie des solutions d'IA de bout en bout, de l'infrastructure cloud jusqu'aux agents LLM en production.",
		heroAvailability: '● Disponible · septembre 2026',
		sectionProjects: 'Projets',
		sectionSkills: 'Compétences',
		sectionContact: 'Contact',
		contactIntro: 'Intéressé par une collaboration ou une question ? Contactez-moi directement.',
		backToProjects: '← Retour aux projets',
		footer: 'Tous droits réservés.',
		switchLang: 'EN',
		switchLangLabel: 'Switch to English',
		readMore: 'Lire la suite →',
		skillCategoryNames: {
			languages: 'Langages',
			ml: 'ML / DL',
			mlops: 'MLOps & Infra',
			cloud: 'Cloud & Data',
		},
	},
	en: {
		siteTitle: 'Théo ELOY — AI Engineer',
		siteDescription: 'Portfolio of Théo ELOY, AI Engineer.',
		heroHeadline: 'AI Engineer',
		heroDescription:
			'I design and deploy end-to-end AI solutions, from cloud infrastructure to LLM agents in production.',
		heroAvailability: '● Available · September 2026',
		sectionProjects: 'Projects',
		sectionSkills: 'Skills',
		sectionContact: 'Contact',
		contactIntro: 'Interested in working together or have a question? Reach out directly.',
		backToProjects: '← Back to projects',
		footer: 'All rights reserved.',
		switchLang: 'FR',
		switchLangLabel: 'Passer en français',
		readMore: 'Read more →',
		skillCategoryNames: {
			languages: 'Languages',
			ml: 'ML / DL',
			mlops: 'MLOps & Infra',
			cloud: 'Cloud & Data',
		},
	},
};
