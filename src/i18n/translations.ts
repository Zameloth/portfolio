export type Locale = 'fr' | 'en';

type ExperienceItem = {
	role: string;
	company: string;
	period: string;
	bullets: string[];
};

type EducationItem = {
	degree: string;
	school: string;
	period: string;
	note?: string;
};

type Translations = {
	siteTitle: string;
	siteDescription: string;
	heroHeadline: string;
	heroDescription: string;
	heroAvailability: string;
	sectionAbout: string;
	aboutIntro: string;
	aboutExperience: string;
	aboutEducation: string;
	experience: ExperienceItem[];
	education: EducationItem[];
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
		sectionAbout: 'À propos',
		aboutIntro:
			"Ingénieur IA en fin de Mastère IA & Big Data à l'ESGI (alternance), avec 3 ans d'expérience chez La Poste en data science et engineering. Orienté systèmes agentiques et intégration de LLMs en production — benchmark LLM/SLM sur Databricks, pipelines de détection basés sur MITRE ATT&CK avec un LLM analyste SOC. 2ème place au Hackathon IA du Ministère des Armées (1er taux de détection).",
		aboutExperience: 'Expérience',
		aboutEducation: 'Formation',
		experience: [
			{
				role: 'Data Scientist (Alternance)',
				company: 'Groupe La Poste · Pôle Data & IA',
				period: 'Sept 2024 – Aujourd\'hui · Paris',
				bullets: [
					"Benchmark SLM vs LLM sur Databricks pour un use case de classification d'offres d'emploi",
					'Clustering clients et analyse d\'impact sur données métiers à grande échelle',
				],
			},
			{
				role: 'Data Analyst (Alternance)',
				company: 'Groupe La Poste · DOT IDF Colissimo',
				period: 'Sept 2023 – Août 2024 · Paris',
				bullets: [
					'Automatisation de pipelines de reporting (consolidations Excel → Power BI)',
				],
			},
		],
		education: [
			{
				degree: 'Mastère IA & Big Data',
				school: 'ESGI',
				period: '2024 – 2026',
				note: 'Alternance',
			},
			{
				degree: 'Bachelor IA & Big Data',
				school: 'ESGI',
				period: '2023 – 2024',
				note: 'Major de spécialisation',
			},
			{
				degree: 'DUT Informatique',
				school: 'IUT Amiens',
				period: '2020 – 2022',
			},
		],
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
			ml: 'IA / ML',
			mlops: 'MLOps & Infra',
			data: 'Data & Viz',
		},
	},
	en: {
		siteTitle: 'Théo ELOY — AI Engineer',
		siteDescription: 'Portfolio of Théo ELOY, AI Engineer.',
		heroHeadline: 'AI Engineer',
		heroDescription:
			'I design and deploy end-to-end AI solutions, from cloud infrastructure to LLM agents in production.',
		heroAvailability: '● Available · September 2026',
		sectionAbout: 'About',
		aboutIntro:
			"AI Engineer finishing a Master's in AI & Big Data at ESGI (work-study), with 3 years of experience at La Poste in data science and engineering. Focused on agentic systems and LLM integration in production — LLM/SLM benchmarking on Databricks, MITRE ATT&CK-based detection pipelines with an LLM SOC analyst. 2nd place at the Ministry of Armed Forces AI Hackathon (1st detection rate).",
		aboutExperience: 'Experience',
		aboutEducation: 'Education',
		experience: [
			{
				role: 'Data Scientist (Work-Study)',
				company: 'Groupe La Poste · Data & AI Division',
				period: 'Sept 2024 – Present · Paris',
				bullets: [
					'SLM vs LLM benchmark on Databricks for a job offer classification use case',
					'Customer clustering and impact analysis on large-scale business data',
				],
			},
			{
				role: 'Data Analyst (Work-Study)',
				company: 'Groupe La Poste · DOT IDF Colissimo',
				period: 'Sept 2023 – Aug 2024 · Paris',
				bullets: [
					'Automation of reporting pipelines (manual Excel → Power BI)',
				],
			},
		],
		education: [
			{
				degree: "Master's in AI & Big Data",
				school: 'ESGI',
				period: '2024 – 2026',
				note: 'Work-study',
			},
			{
				degree: "Bachelor's in AI & Big Data",
				school: 'ESGI',
				period: '2023 – 2024',
				note: 'Top of specialization',
			},
			{
				degree: 'DUT in Computer Science',
				school: 'IUT Amiens',
				period: '2020 – 2022',
			},
		],
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
			ml: 'AI / ML',
			mlops: 'MLOps & Infra',
			data: 'Data & Viz',
		},
	},
};
