# 🫀 Predição de Doenças Cardiovasculares
> 🇬🇧 [English Version](README.md)

Predição de diagnóstico de doenças cardiovasculares 
usando Machine Learning.

Projeto desenvolvido para a disciplina de 
**Desenvolvimento de Sistemas — SENAI Limeira**.

---

## 👥 Equipe

- João Gabriel Gonçalez
- Gabriel Ferreira da Silva
- Kayque Costa da Silva
- Victor Hugo Camargo

---

## 🗃️ Dataset

Dataset de doenças cardiovasculares com 14 atributos clínicos 
por paciente, disponível no Mendeley Data.

🔗 [Mendeley Data](https://data.mendeley.com/datasets/dzz48mvjht/1)

| Atributo | Descrição |
|---|---|
| `age` | Idade (anos) |
| `gender` | Gênero (0 = feminino, 1 = masculino) |
| `chestpain` | Tipo de dor no peito |
| `restingBP` | Pressão arterial em repouso (mmHg) |
| `serumcholestrol` | Colesterol sérico (mg/dl) |
| `fastingbloodsugar` | Glicemia em jejum |
| `restingrelectro` | Eletrocardiograma em repouso |
| `maxheartrate` | Frequência cardíaca máxima |
| `exerciseangia` | Angina induzida por exercício |
| `oldpeak` | Depressão do segmento ST |
| `slope` | Inclinação do segmento ST |
| `noofmajorvessels` | Número de vasos principais |
| `target` | 0 = Sem doença, 1 = Com doença |

---

## 📓 Notebooks

| Notebook | Descrição |
|---|---|
| `analise_exploratoria.ipynb` | Análise exploratória e visualizações |
| `modelagem.ipynb` | Pré-processamento, treinamento e avaliação |

---

## 🤖 Modelos Utilizados

- Logistic Regression
- SGD Classifier
- SVM
- Decision Tree
- AdaBoost
- XGBoost

---

## 📊 Resultados

| Modelo | Acurácia | Precisão | Recall | F1-Score | ROC-AUC |
|---|---|---|---|---|---|
| SVM | 0.985 | 0.983 | 0.991 | 0.987 | 0.984 |
| AdaBoost | 0.980 | 0.983 | 0.983 | 0.983 | 0.979 |
| XGBoost | 0.970 | 0.966 | 0.983 | 0.975 | 0.967 |
| Decision Tree | 0.965 | 0.958 | 0.983 | 0.970 | 0.961 |
| Logistic Regression | 0.965 | 0.966 | 0.974 | 0.970 | 0.963 |
| SGD Classifier | 0.960 | 0.950 | 0.983 | 0.966 | 0.955 |

Melhor modelo: **SVM** com F1-Score de 0.987

---

## 📦 Instalação
```bash
git clone https://github.com/jggoncalez/cardiovascular-diseases-AI.git
cd cardiovascular-diseases-AI
pip install -r requirements.txt
```

---

## 📄 Referência Científica

Kumar et al. (2022) — Artificial intelligence in disease diagnosis: 
a systematic literature review.

🔗 [PubMed — PMID: 35039756](https://pubmed.ncbi.nlm.nih.gov/35039756/)