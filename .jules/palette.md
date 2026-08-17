
## 2026-08-17 - Missing loading states for ML inference
**Learning:** Synchronous ML predictions in Streamlit cause the UI to freeze without feedback, leading users to wonder if the app is broken.
**Action:** Always wrap heavy synchronous operations like model_prediction() in st.spinner() to give immediate visual feedback.
