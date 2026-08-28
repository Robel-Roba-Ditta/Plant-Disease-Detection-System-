## 2024-05-14 - Add loading spinners for synchronous model predictions
**Learning:** In Streamlit apps running heavy operations like TensorFlow predictions, the UI appears frozen without explicit indicators.
**Action:** Always wrap long-running operations in `with st.spinner()` to provide immediate visual feedback and improve perceived performance and usability.
