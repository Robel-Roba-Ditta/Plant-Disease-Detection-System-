## 2024-08-30 - Add loading state to model prediction
**Learning:** Users lack visual feedback during long-running TensorFlow model predictions in Streamlit, leading to uncertainty about whether the app is processing.
**Action:** Wrap long-running synchronous model prediction calls with `st.spinner()` to provide immediate, clear visual feedback to the user while processing.
