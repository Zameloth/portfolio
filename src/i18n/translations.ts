export type Locale = 'fr' | 'en';

type Translations = {
	siteTitle: string;
	siteDescription: string;
	heroHeadline: string;
	heroDescription: string;
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
		siteTitle: 'Théo ELOY — Ingénieur MLOps / IA',
		siteDescription: 'Portfolio de Théo ELOY, ingénieur MLOps et IA.',
		heroHeadline: 'Ingénieur MLOps / IA',
		heroDescription:
			"Construction de systèmes IA et d'infrastructure ML. Passionné par les pipelines ML scalables, le déploiement de modèles et les applications IA en production.",
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
		siteTitle: 'Théo ELOY — MLOps / AI Engineer',
		siteDescription: 'Portfolio of Théo ELOY, an MLOps and AI Engineer.',
		heroHeadline: 'MLOps / AI Engineer',
		heroDescription:
			'Building AI systems and ML infrastructure. Passionate about scalable ML pipelines, model serving, and production-grade AI applications.',
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
