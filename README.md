# 🌱 Plant Disease Detection System

<div align="center">

![Python](https://img.shields.io/badge/Python-3.10+-blue?style=for-the-badge\&logo=python)
![TensorFlow](https://img.shields.io/badge/TensorFlow-DeepLearning-orange?style=for-the-badge\&logo=tensorflow)
![Streamlit](https://img.shields.io/badge/Streamlit-WebApp-red?style=for-the-badge\&logo=streamlit)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-RandomForest-yellow?style=for-the-badge\&logo=scikitlearn)
![OpenCV](https://img.shields.io/badge/OpenCV-ComputerVision-green?style=for-the-badge\&logo=opencv)

### Intelligent Plant Disease Detection Using Deep Learning & Computer Vision

Detect plant diseases from leaf images using a hybrid **CNN + Random Forest** machine learning approach.

</div>

---

## 📖 Overview

Plant diseases are one of the major causes of crop yield loss worldwide. Early identification of plant diseases helps farmers take timely actions and prevent large-scale agricultural damage.

This project introduces an intelligent plant disease detection system that leverages **Convolutional Neural Networks (CNNs)** and **Random Forest classifiers** to automatically identify diseases from plant leaf images.

The system is deployed through an interactive **Streamlit web application**, allowing users to upload or capture leaf images and receive instant disease predictions with confidence scores.

---


---

## ✨ Features

✅ Plant disease classification from leaf images

✅ Deep Learning based CNN model

✅ Random Forest classifier on CNN extracted features

✅ Top-3 disease predictions with confidence scores

✅ Real-time image upload and webcam capture

✅ Prediction history tracking

✅ CSV export functionality

✅ Multilingual support (English & Amharic)

✅ Visualization of prediction statistics

✅ User-friendly Streamlit interface

---

## 🎯 Problem Statement

Traditional disease diagnosis relies heavily on manual inspection by agricultural experts. This process can be:

* Time-consuming
* Expensive
* Subjective
* Difficult to access in rural areas

Our solution provides an automated disease detection system capable of producing fast and accurate diagnoses using only leaf images.

---

## 🏗️ System Architecture

```text
Leaf Image
     │
     ▼
Image Preprocessing
     │
     ▼
CNN Feature Extraction
     │
 ┌───┴────┐
 ▼        ▼
CNN      Random Forest
Prediction Prediction
 └───┬────┘
     ▼
Result Analysis
     ▼
Streamlit Web Interface
```

---

## 📊 Dataset

### New Plant Diseases Dataset

The project uses the widely adopted Plant Disease Dataset from Kaggle.

Dataset Statistics:

| Property     | Value                     |
| ------------ | ------------------------- |
| Total Images | 87,000+                   |
| Classes      | 38                        |
| Crop Types   | 14                        |
| Image Type   | RGB                       |
| Categories   | Healthy & Diseased Leaves |

### Supported Crops

* Apple
* Blueberry
* Cherry
* Corn
* Grape
* Orange
* Peach
* Pepper
* Potato
* Raspberry
* Soybean
* Squash
* Strawberry
* Tomato

Dataset Source:

https://www.kaggle.com/datasets/vipoooool/new-plant-diseases-dataset

---

## 🧠 Machine Learning Approach

### 1. Image Preprocessing

* Image resizing (128×128)
* Normalization
* Dataset shuffling
* Batch generation

### 2. CNN Model

The CNN model consists of:

* Convolution Layers
* ReLU Activation
* Max Pooling
* Dropout
* Dense Layers
* Softmax Output Layer

### 3. Random Forest Model

The Random Forest classifier uses:

* CNN extracted feature vectors
* StandardScaler normalization
* 100 decision trees

### 4. Hybrid Prediction

The system compares:

* CNN prediction
* Random Forest prediction

This hybrid approach improves reliability for difficult classification cases.

---

## 📈 Results

| Model             | Accuracy |
| ----------------- | -------- |
| CNN               | 97.8%    |
| Random Forest     | 95.4%    |
| Ensemble Strategy | 98.3%    |

### Performance Metrics

| Metric    | CNN   |
| --------- | ----- |
| Precision | 0.97  |
| Recall    | 0.978 |
| F1-Score  | 0.977 |

---

## 🖥️ User Interface

The Streamlit application provides:

### Image Upload

Upload leaf images directly from your device.

### Webcam Capture

Capture plant images in real time.

### Top Predictions

View:

* Predicted disease
* Confidence percentage
* Top 3 probable diseases

### Analytics

* Prediction frequency charts
* Historical prediction logs
* CSV report download

---

## 🛠️ Technology Stack

### Programming Language

* Python

### Deep Learning

* TensorFlow
* Keras

### Machine Learning

* Scikit-Learn

### Computer Vision

* OpenCV

### Data Processing

* NumPy
* Pandas

### Visualization

* Matplotlib
* Seaborn

### Deployment

* Streamlit

---

## 📂 Project Structure

```text
Plant-Disease-Detection/
│
├── dataset/
│
├── models/
│   ├── cnn_model.h5
│   ├── random_forest.pkl
│   └── scaler.pkl
│
├── notebooks/
│
├── app/
│   ├── app.py
│   ├── prediction.py
│   ├── preprocessing.py
│   └── utils.py
│
├── assets/
│   ├── screenshots/
│   └── images/
│
├── requirements.txt
│
├── README.md
│
└── LICENSE
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git
```

### Navigate to Project

```bash
cd Plant-Disease-Detection
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run Application

```bash
streamlit run app.py
```

---

## 🔮 Future Improvements

* Mobile Application Integration
* TensorFlow Lite Deployment
* Offline Prediction Support
* Grad-CAM Explainability
* Weather-Based Disease Risk Analysis
* Farmer Feedback System
* Cloud Deployment
* Real-Time Field Diagnosis

---

## 👥 Team Members

| Name            |
| --------------- |
| Robel Roba      |
| Sosina Tilahun  |
| Salim Aragaw    |
| Sosina Ayele    |
| Thressa Menilek |

---

## 🎓 Academic Information

**Institution:** Addis Ababa Science and Technology University

**Department:** Software Engineering

**Course:** Machine Learning Project

**Supervisor:** Dr. Fedlu

---

## 🤝 Contributing

Contributions are welcome.

Feel free to fork the repository, create a feature branch, and submit a pull request.

---

## 📜 License

This project is developed for educational and research purposes.

---

<div align="center">

### 🌿 Empowering Agriculture Through Artificial Intelligence

Made  by AASTU Software Engineering Students

</div>
