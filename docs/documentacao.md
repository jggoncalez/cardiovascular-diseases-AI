# 🫀 Predição de Doenças Cardiovasculares
### Documentação Técnica — Machine Learning aplicado a diagnóstico clínico

> **SENAI Limeira — Desenvolvimento de Sistemas**  
> João Gabriel Gonçalez • Gabriel Ferreira da Silva • Kayque Costa da Silva • Victor Hugo Camargo

---

## Sumário

1. [Visão Geral](#1-visão-geral)
2. [Estrutura do Projeto](#2-estrutura-do-projeto)
3. [Dataset](#3-dataset)
4. [Análise Exploratória de Dados](#4-análise-exploratória-de-dados-eda)
5. [Pré-processamento](#5-pré-processamento)
6. [Modelos Utilizados](#6-modelos-utilizados)
7. [Resultados e Métricas](#7-resultados-e-métricas)
8. [Como Executar](#8-como-executar)
9. [Dependências](#9-dependências)
10. [Equipe](#10-equipe)
11. [Referência Científica](#11-referência-científica)

---

## 1. Visão Geral

Este projeto aplica técnicas de Machine Learning para predição de diagnóstico de doenças cardiovasculares, utilizando dados clínicos de pacientes. O objetivo é comparar diferentes algoritmos de classificação e identificar o modelo com melhor desempenho preditivo, contribuindo para o apoio à decisão clínica.

O dataset utilizado é público e proveniente do Mendeley Data, contendo 1.000 registros com 14 atributos clínicos por paciente, incluindo informações como pressão arterial, colesterol sérico, frequência cardíaca máxima, entre outros.

---

## 2. Estrutura do Projeto

```
cardiovascular-diseases-AI/
│
├── data/
│   └── Cardiovascular_Disease_Dataset.csv   # Dataset principal
│
├── notebooks/
│   ├── analise_exploratoria.ipynb           # EDA e visualizações
│   └── modelagem.ipynb                      # Treinamento e avaliação
│
├── docs/
│   └── documentacao.md                      # Este arquivo
│
├── readme.md                                # Visão geral (EN)
├── readme.pt.md                             # Visão geral (PT)
└── requirements.txt                         # Dependências do projeto
```

| Notebook | Descrição |
|---|---|
| `analise_exploratoria.ipynb` | Análise Exploratória de Dados (EDA) e visualizações gráficas |
| `modelagem.ipynb` | Pré-processamento, treinamento e avaliação dos modelos |

---

## 3. Dataset

**Fonte:** [Mendeley Data — Cardiovascular Disease Dataset](https://data.mendeley.com/datasets/dzz48mvjht/1)

O dataset contém dados clínicos de pacientes com **14 atributos** por registro e um rótulo binário de diagnóstico (`target`), totalizando aproximadamente **1.000 registros**.

### Atributos

| Atributo | Tipo | Descrição |
|---|---|---|
| `patientid` | int | Identificador único do paciente |
| `age` | int | Idade em anos |
| `gender` | int | Gênero (0 = feminino, 1 = masculino) |
| `chestpain` | int | Tipo de dor no peito (0–3) |
| `restingBP` | int | Pressão arterial em repouso (mmHg) |
| `serumcholestrol` | int | Colesterol sérico (mg/dl) |
| `fastingbloodsugar` | int | Glicemia em jejum > 120 mg/dl (0 = não, 1 = sim) |
| `restingrelectro` | int | Resultado do ECG em repouso (0–2) |
| `maxheartrate` | int | Frequência cardíaca máxima atingida |
| `exerciseangia` | int | Angina induzida por exercício (0 = não, 1 = sim) |
| `oldpeak` | float | Depressão do segmento ST induzida por exercício |
| `slope` | int | Inclinação do segmento ST no pico do exercício (0–3) |
| `noofmajorvessels` | int | Número de vasos principais coloridos por fluoroscopia (0–3) |
| `target` | int | **Diagnóstico:** 0 = sem doença, 1 = com doença |

---

## 4. Análise Exploratória de Dados (EDA)

A EDA foi conduzida no notebook `analise_exploratoria.ipynb` com o objetivo de compreender a distribuição das variáveis clínicas, identificar padrões relevantes e verificar relações entre os atributos e o diagnóstico.

### 4.1 Distribuição de Diagnóstico

O dataset apresenta leve desbalanceamento entre as classes: aproximadamente **420 registros** correspondem a pacientes sem doença (`target = 0`) e **580** a pacientes com doença (`target = 1`), numa proporção de **42% / 58%**.

Esse fator deve ser considerado durante o treinamento dos modelos, podendo requerer técnicas como oversampling (SMOTE) ou ajuste de pesos de classe, a fim de evitar viés preditivo em favor da classe majoritária.

### 4.2 Distribuição de Idade por Diagnóstico

A distribuição etária concentra-se majoritariamente entre **40 e 65 anos**, faixa compatível com o perfil epidemiológico de doenças cardiovasculares. A curva KDE dos pacientes com doença apresenta pico entre 40–50 anos e distribuição mais ampla até os 70 anos, enquanto os pacientes sem doença têm distribuição mais uniforme.

A variável `age` não é isoladamente um fator discriminante forte — ambas as classes coexistem nas mesmas faixas etárias —, porém contribui como feature preditiva em conjunto com as demais variáveis clínicas.

### 4.3 Correlação entre Variáveis

O heatmap de correlação de Pearson revela as seguintes relações mais relevantes com a variável `target`:

| Variável | Correlação c/ Diagnóstico | Interpretação |
|---|---|---|
| `slope` (Inclinação ST) | **0.80** | Forte correlação positiva — inclinações elevadas associam-se fortemente à doença |
| `chestpain` (Dor no Peito) | **0.55** | Correlação moderada-alta — tipo de dor torácica é indicador clínico relevante |
| `noofmajorvessels` (Vasos Principais) | **0.49** | Correlação moderada — maior nº de vasos com obstrução correlaciona-se com doença |
| `restingBP` (Pressão Arterial) | **0.48** | Correlação moderada — pressão elevada em repouso associa-se ao diagnóstico positivo |
| `restingrelectro` (ECG) | **0.43** | Correlação moderada — alterações no ECG são indicativas de patologia cardíaca |
| `exerciseangia` (Angina) | **-0.04** | Correlação desprezível — baixa contribuição isolada |

Destaca-se também a correlação entre `slope` e `noofmajorvessels` (0.53), sugerindo multicolinearidade moderada entre esses pares. Variáveis como `patientid` e `age` apresentam correlação próxima a zero com o diagnóstico.

### 4.4 Colesterol Sérico por Diagnóstico

Pacientes **sem doença** apresentam mediana em torno de **270 mg/dl**, com distribuição mais compacta. Pacientes **com doença** apresentam mediana próxima de **350 mg/dl** e maior dispersão, além de outliers próximos a 0 mg/dl que indicam possíveis erros de registro a serem tratados no pré-processamento.

A diferença entre medianas corrobora a correlação de **0.20** observada no heatmap.

### 4.5 Frequência Cardíaca Máxima por Diagnóstico

Pacientes sem doença têm mediana em torno de **133 bpm** e maior variabilidade. Pacientes com doença apresentam mediana levemente superior (~152 bpm), porém com distribuição mais concentrada. A sobreposição dos IQRs entre os grupos indica poder discriminante limitado de forma isolada, mas a variável contribui em combinação com as demais (correlação de **0.23** com o diagnóstico).

### 4.6 Considerações Gerais

As variáveis com maior potencial preditivo são `slope`, `chestpain`, `noofmajorvessels` e `restingBP`. O dataset exige atenção a outliers no colesterol e ao desbalanceamento de classes antes da modelagem. As distribuições observadas são consistentes com a literatura clínica de doenças cardiovasculares.

---

## 5. Pré-processamento

O pré-processamento foi realizado no notebook `modelagem.ipynb`, abrangendo as seguintes etapas:

- Remoção da coluna `patientid` (identificador sem valor preditivo)
- Tratamento de outliers e valores ausentes (valores zerados em `serumcholestrol`)
- Normalização/escalonamento das features numéricas
- Divisão treino/teste estratificada para manter a proporção entre as classes
- Avaliação do balanceamento de classes e aplicação de técnicas compensatórias quando necessário

---

## 6. Modelos Utilizados

Foram treinados e avaliados seis modelos de classificação supervisionada, cobrindo diferentes famílias de algoritmos:

- **Logistic Regression** — modelo linear de referência (baseline)
- **SGD Classifier** — regressão logística com gradiente estocástico
- **SVM** — Support Vector Machine com margem máxima de separação
- **Decision Tree** — árvore de decisão interpretável
- **AdaBoost** — ensemble por boosting adaptativo
- **XGBoost** — gradient boosting otimizado

---

## 7. Resultados e Métricas

A avaliação foi realizada com as métricas Acurácia, Precisão, Recall, F1-Score e ROC-AUC. Todos os modelos apresentaram desempenho elevado, superior a **96% de acurácia**.

| Modelo | Acurácia | Precisão | Recall | F1-Score | ROC-AUC |
|---|---|---|---|---|---|
| **SVM 🏆** | **0.985** | **0.983** | **0.991** | **0.987** | **0.984** |
| AdaBoost | 0.980 | 0.983 | 0.983 | 0.983 | 0.979 |
| XGBoost | 0.970 | 0.966 | 0.983 | 0.975 | 0.967 |
| Decision Tree | 0.965 | 0.958 | 0.983 | 0.970 | 0.961 |
| Logistic Regression | 0.965 | 0.966 | 0.974 | 0.970 | 0.963 |
| SGD Classifier | 0.960 | 0.950 | 0.983 | 0.966 | 0.955 |

### Melhor Modelo — SVM

O **SVM** foi o modelo de melhor desempenho geral, atingindo **F1-Score de 0.987** e **ROC-AUC de 0.984**. Sua capacidade de encontrar hiperplanos de separação com margem máxima mostrou-se particularmente eficaz para este dataset clínico com múltiplas features correlacionadas.

O AdaBoost ficou em segundo lugar (F1-Score: 0.983), seguido do XGBoost (0.975). Os modelos mais simples — Logistic Regression, Decision Tree e SGD — também apresentaram resultados expressivos, todos acima de 0.966 de F1-Score.

---

## 8. Como Executar

```bash
# Clone o repositório
git clone https://github.com/jggoncalez/cardiovascular-diseases-AI.git
cd cardiovascular-diseases-AI

# Instale as dependências
pip install -r requirements.txt
```

Execute os notebooks na seguinte sequência:

1. `analise_exploratoria.ipynb` — visualize a EDA e os gráficos exploratórios
2. `modelagem.ipynb` — treine e avalie os modelos

---

## 9. Dependências

| Biblioteca | Finalidade |
|---|---|
| `pandas` | Manipulação e análise de dados tabulares |
| `numpy` | Operações numéricas e vetoriais |
| `scikit-learn` | Algoritmos de ML, métricas e pré-processamento |
| `xgboost` | Implementação otimizada do XGBoost |
| `aif360` | Avaliação de fairness (equidade algorítmica) |
| `seaborn` | Visualizações estatísticas |
| `matplotlib` | Gráficos e plots personalizados |
| `ipykernel` | Suporte a Jupyter notebooks |

---

## 10. Equipe

| Nome | —  |
|---|---|
| João Gabriel Gonçalez | Desenvolvimento e modelagem |
| Gabriel Ferreira da Silva | Análise exploratória e visualizações |
| Kayque Costa da Silva | Pré-processamento e avaliação |
| Victor Hugo Camargo | Documentação e revisão |

---

## 11. Referência Científica

Kumar et al. (2022). *Artificial intelligence in disease diagnosis: a systematic literature review.* Journal of Circulating Biomarkers.

🔗 [PubMed — PMID: 35039756](https://pubmed.ncbi.nlm.nih.gov/35039756/)
