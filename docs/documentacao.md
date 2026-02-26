#  📚 Documentação Técnica — Predição de Doenças Cardiovasculares

Este documento apresenta uma solução de **Machine Learning** para predição de doenças cardiovasculares, utilizando o dataset [Cardiovascular Disease Dataset](https://data.mendeley.com/datasets/dzz48mvjht/1). A documentação abrange desde a análise exploratória dos dados até a avaliação comparativa de diferentes modelos preditivos, incluindo métricas de desempenho e instruções de reprodução.

## 📋 Sumário

1. [Visão Geral](#visão-geral)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Dataset](#dataset)
4. [Análise Exploratória](#análise-exploratória)
5. [Pré-processamento](#pré-processamento)
6. [Modelos Utilizados](#modelos-utilizados)
7. [Resultados e Métricas](#resultados-e-métricas)
8. [Como Executar](#como-executar)
9. [Dependências](#dependências)
10. [Equipe](#equipe)
11. [Referência Científica](#referência-científica)

---

<!-- ## Visão Geral -->


## Estrutura do Projeto

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

##  Dataset

 **Fonte:** [Mendeley Data](https://data.mendeley.com/datasets/dzz48mvjht/1)

O dataset contém dados clínicos de pacientes, com **14 atributos** por registro e um rótulo binário de diagnóstico.

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
| `restingrelectro` | int | Resultado do eletrocardiograma em repouso (0–2) |
| `maxheartrate` | int | Frequência cardíaca máxima atingida |
| `exerciseangia` | int | Angina induzida por exercício (0 = não, 1 = sim) |
| `oldpeak` | float | Depressão do segmento ST induzida por exercício |
| `slope` | int | Inclinação do segmento ST no pico do exercício (0–3) |
| `noofmajorvessels` | int | Número de vasos principais coloridos por fluoroscopia (0–3) |
| `target` | int | **Diagnóstico** (0 = sem doença, 1 = com doença) |

## Análise Exploratória

A Análise Exploratória de Dados (EDA) foi conduzida no notebook [`analise_exploratoria.ipynb`](notebooks/analise_exploratoria.ipynb) com o objetivo de compreender a distribuição das variáveis clínicas, identificar padrões relevantes e verificar relações entre os atributos e o diagnóstico de doença cardiovascular.

---

### Distribuição de Diagnóstico

![Distribuição de Diagnóstico](images/countplot_distribuicao_de_diagnostico.png)

O dataset apresenta leve desbalanceamento entre as classes: aproximadamente **420 registros** correspondem a pacientes sem doença (target = 0) e **580 registros** a pacientes com doença (target = 1), totalizando cerca de 1.000 amostras. A proporção aproximada é de **42% / 58%**, o que indica um desbalanceamento moderado. Esse fator deve ser considerado durante o treinamento dos modelos, podendo requerer técnicas de balanceamento como oversampling (SMOTE) ou ajuste de pesos de classe, a fim de evitar viés preditivo em favor da classe majoritária.

---

### Distribuição de Idade por Diagnóstico

![Distribuição de Idade por Diagnóstico](images/histplot_distribuicao_de_idade.png)

A distribuição etária dos pacientes concentra-se majoritariamente entre **40 e 65 anos**, faixa compatível com o perfil epidemiológico de doenças cardiovasculares. A curva KDE (Kernel Density Estimate) dos pacientes **com doença** apresenta pico entre 40–50 anos e distribuição mais ampla até os 70 anos. Já os pacientes **sem doença** têm distribuição mais uniforme ao longo das faixas etárias. O histograma indica que a variável `age` não é, isoladamente, um fator discriminante forte — ambas as classes coexistem nas mesmas faixas de idade —, porém contribui como feature preditiva em conjunto com demais variáveis clínicas.

---

### Correlação entre Variáveis

![Heatmap de Correlação](images/heatmap_correlacao_entre_variaveis.png)

O heatmap de correlação de Pearson revela as seguintes relações mais relevantes com a variável `Diagnóstico`:

| Variável | Correlação com Diagnóstico | Interpretação |
|---|---|---|
| Inclinação ST (`slope`) | **0.80** | Forte correlação positiva — inclinações mais elevadas do segmento ST associam-se fortemente à presença de doença |
| Dor no Peito (`chestpain`) | **0.55** | Correlação moderada-alta — tipo de dor torácica é um indicador clínico relevante |
| Pressão Arterial (`restingBP`) | **0.48** | Correlação moderada — pressão arterial elevada em repouso associa-se ao diagnóstico positivo |
| Eletrocardiograma (`restingrelectro`) | **0.43** | Correlação moderada — alterações no ECG são indicativas de patologia cardíaca |
| Vasos Principais (`noofmajorvessels`) | **0.49** | Correlação moderada — maior número de vasos com obstrução correlaciona-se com doença |
| Angina por Exercício (`exerciseangia`) | **-0.04** | Correlação desprezível — baixa contribuição isolada |

Destaca-se também a correlação entre `Inclinação ST` e `Vasos Principais` (0.53) e entre `Dor no Peito` e `Pressão Arterial` (0.22), sugerindo multicolinearidade moderada em alguns pares de features. Variáveis como `ID` e `Idade` apresentam correlação próxima a zero com o diagnóstico, indicando baixo poder preditivo individual.

---

### Colesterol Sérico por Diagnóstico

![Colesterol Sérico por Diagnóstico](images/boxplot_colesterol_serico.png)

O boxplot evidencia uma diferença relevante na distribuição do colesterol sérico entre os grupos. Pacientes **sem doença** apresentam mediana em torno de **270 mg/dl**, com distribuição mais compacta (IQR menor). Pacientes **com doença** apresentam mediana próxima de **350 mg/dl** e maior dispersão dos dados (IQR mais amplo), além de outliers próximos a 0 mg/dl que indicam possíveis erros de registro ou casos atípicos a serem tratados no pré-processamento. A diferença entre medianas sugere que níveis elevados de colesterol são associados ao diagnóstico positivo, corroborando a correlação de **0.20** observada no heatmap.

---

### Frequência Cardíaca Máxima por Diagnóstico

![Frequência Cardíaca Máxima por Diagnóstico](images/boxplot_frequencia_cardiaca.png)

Ao contrário do colesterol, a frequência cardíaca máxima (`maxheartrate`) apresenta comportamento oposto entre os grupos. Pacientes **sem doença** têm mediana em torno de **133 bpm** e maior variabilidade (IQR amplo, de ~100 a ~170 bpm). Pacientes **com doença** apresentam mediana levemente superior (~152 bpm), porém com distribuição mais concentrada. A sobreposição dos IQRs entre os grupos indica que esta variável, isoladamente, possui poder discriminante limitado. No entanto, em combinação com outras features, contribui para a predição — conforme indicado pela correlação de **0.23** com o diagnóstico no heatmap.

---

### Considerações Gerais da EDA

A análise exploratória aponta que as variáveis com maior potencial preditivo são **Inclinação ST**, **Dor no Peito**, **Pressão Arterial** e **Número de Vasos Principais**. O dataset exige atenção a outliers no colesterol (valores zerados) e ao desbalanceamento de classes antes da etapa de modelagem. As distribuições observadas são consistentes com a literatura clínica de doenças cardiovasculares.