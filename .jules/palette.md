
## 2024-05-24 - Visual Feedback for ML Inference
**Learning:** Synchronous ML operations (like model prediction) in Streamlit block the main thread, making the UI appear unresponsive. Wrapping them in st.spinner is a critical UX pattern for this app.
**Action:** Always wrap model_prediction and similar heavy synchronous functions in Streamlit apps with st.spinner() to provide immediate visual feedback.
