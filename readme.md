# 🫀 Cardiovascular Disease Prediction
> 🇧🇷 [Versão em Português](readme.pt.md)

Prediction of cardiovascular disease diagnosis using 
Machine Learning.

Project developed for the **Systems Development course — SENAI Limeira**.

---

## 👥 Team

- João Gabriel Gonçalez
- Gabriel Ferreira da Silva
- Kayque Costa da Silva
- Victor Hugo Camargo

---

## 🗃️ Dataset

Cardiovascular disease dataset with 14 clinical attributes 
per patient, available on Mendeley Data.

🔗 [Mendeley Data](https://data.mendeley.com/datasets/dzz48mvjht/1)

| Attribute | Description |
|---|---|
| `age` | Age (years) |
| `gender` | Gender (0 = female, 1 = male) |
| `chestpain` | Chest pain type |
| `restingBP` | Resting blood pressure (mmHg) |
| `serumcholestrol` | Serum cholesterol (mg/dl) |
| `fastingbloodsugar` | Fasting blood sugar |
| `restingrelectro` | Resting electrocardiogram |
| `maxheartrate` | Maximum heart rate |
| `exerciseangia` | Exercise induced angina |
| `oldpeak` | ST segment depression |
| `slope` | ST segment slope |
| `noofmajorvessels` | Number of major vessels |
| `target` | 0 = No disease, 1 = Disease |

---

## 📓 Notebooks

| Notebook | Description |
|---|---|
| `analise_exploratoria.ipynb` | Exploratory analysis and visualizations |
| `modelagem.ipynb` | Preprocessing, training and evaluation |

---

## 🤖 Models

- Logistic Regression
- SGD Classifier
- SVM
- Decision Tree
- AdaBoost
- XGBoost

---

## 📊 Results

| Model | Accuracy | Precision | Recall | F1-Score | ROC-AUC |
|---|---|---|---|---|---|
| SVM | 0.985 | 0.983 | 0.991 | 0.987 | 0.984 |
| AdaBoost | 0.980 | 0.983 | 0.983 | 0.983 | 0.979 |
| XGBoost | 0.970 | 0.966 | 0.983 | 0.975 | 0.967 |
| Decision Tree | 0.965 | 0.958 | 0.983 | 0.970 | 0.961 |
| Logistic Regression | 0.965 | 0.966 | 0.974 | 0.970 | 0.963 |
| SGD Classifier | 0.960 | 0.950 | 0.983 | 0.966 | 0.955 |

🏆 Best model: **SVM** with F1-Score of 0.987

---

## 📦 Installation
```bash
git clone https://github.com/jggoncalez/cardiovascular-diseases-AI.git
cd cardiovascular-diseases-AI
pip install -r requirements.txt
```

---

## 📄 Scientific Reference

Kumar et al. (2022) — Artificial intelligence in disease diagnosis:
a systematic literature review.

🔗 [PubMed — PMID: 35039756](https://pubmed.ncbi.nlm.nih.gov/35039756/)
