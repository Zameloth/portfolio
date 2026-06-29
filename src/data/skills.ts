export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "Bash", "SQL", "Go"],
  },
  {
    name: "ML / DL",
    skills: ["PyTorch", "Scikit-learn", "HuggingFace", "LangChain", "MLflow"],
  },
  {
    name: "MLOps & Infra",
    skills: ["Docker", "Kubernetes", "Airflow", "Prefect", "Terraform", "Nginx", "Traefik"],
  },
  {
    name: "Cloud & Data",
    skills: ["AWS", "GCP", "PostgreSQL", "Redis", "Kafka", "dbt"],
  },
];
