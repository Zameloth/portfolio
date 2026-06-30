export interface SkillCategory {
  key: 'languages' | 'ml' | 'mlops' | 'cloud';
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: 'languages',
    skills: ['Python', 'TypeScript', 'Bash', 'SQL', 'Go'],
  },
  {
    key: 'ml',
    skills: ['PyTorch', 'Scikit-learn', 'HuggingFace', 'LangChain', 'MLflow'],
  },
  {
    key: 'mlops',
    skills: ['Docker', 'Kubernetes', 'Airflow', 'Prefect', 'Terraform', 'Nginx', 'Traefik'],
  },
  {
    key: 'cloud',
    skills: ['AWS', 'GCP', 'PostgreSQL', 'Redis', 'Kafka', 'dbt'],
  },
];
