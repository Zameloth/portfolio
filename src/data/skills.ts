export interface SkillCategory {
  key: 'languages' | 'ml' | 'mlops' | 'cloud';
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: 'languages',
    skills: ['Python', 'Rust', 'TypeScript', 'SQL', 'Bash'],
  },
  {
    key: 'ml',
    skills: ['Scikit-learn', 'LightGBM', 'XGBoost', 'Optuna', 'MLflow', 'PyTorch', 'LLMs'],
  },
  {
    key: 'mlops',
    skills: ['Docker', 'Kubernetes', 'Airflow', 'Terraform', 'FastAPI', 'Streamlit', 'React'],
  },
  {
    key: 'cloud',
    skills: ['AWS', 'PostgreSQL', 'ClickHouse'],
  },
];
