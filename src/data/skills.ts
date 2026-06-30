export interface Skill {
  name: string;
  level: 'core' | 'used';
}

export interface SkillCategory {
  key: 'languages' | 'ml' | 'mlops' | 'data';
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: 'languages',
    skills: [
      { name: 'Python', level: 'core' },
      { name: 'Rust', level: 'core' },
      { name: 'SQL', level: 'core' },
      { name: 'TypeScript', level: 'used' },
      { name: 'Bash', level: 'used' },
    ],
  },
  {
    key: 'ml',
    skills: [
      { name: 'LLMs', level: 'core' },
      { name: 'RAG', level: 'core' },
      { name: 'Agents', level: 'core' },
      { name: 'Scikit-learn', level: 'core' },
      { name: 'HuggingFace', level: 'used' },
      { name: 'PyTorch', level: 'used' },
      { name: 'LightGBM', level: 'used' },
      { name: 'XGBoost', level: 'used' },
      { name: 'Optuna', level: 'used' },
      { name: 'MLflow', level: 'used' },
      { name: 'OpenAI / Anthropic API', level: 'used' },
    ],
  },
  {
    key: 'mlops',
    skills: [
      { name: 'Docker', level: 'core' },
      { name: 'Kubernetes', level: 'core' },
      { name: 'FastAPI', level: 'core' },
      { name: 'AWS', level: 'core' },
      { name: 'Databricks', level: 'core' },
      { name: 'Airflow', level: 'used' },
      { name: 'Terraform', level: 'used' },
      { name: 'Git', level: 'used' },
      { name: 'Linux', level: 'used' },
    ],
  },
  {
    key: 'data',
    skills: [
      { name: 'pandas', level: 'core' },
      { name: 'Dataiku DSS', level: 'core' },
      { name: 'Spark', level: 'used' },
      { name: 'polars', level: 'used' },
      { name: 'NumPy', level: 'used' },
      { name: 'PostgreSQL', level: 'used' },
      { name: 'ClickHouse', level: 'used' },
      { name: 'Power BI', level: 'used' },
      { name: 'Tableau', level: 'used' },
      { name: 'Streamlit', level: 'used' },
    ],
  },
];
