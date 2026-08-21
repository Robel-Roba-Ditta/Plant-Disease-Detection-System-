## 2024-05-15 - Visual Feedback for Long-Running ML Predictions
**Learning:** In Streamlit applications, heavy ML operations (like model prediction) that freeze the UI without explicit feedback cause user confusion.
**Action:** Wrap long-running prediction calls with `with st.spinner('Analyzing...'):` to explicitly indicate the system is processing.
