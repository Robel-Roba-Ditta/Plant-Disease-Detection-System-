## 2024-08-14 - Streamlit disabled state and spinner
**Learning:** Streamlit `st.button` has a native `disabled` parameter which is a perfect fit for preventing actions like "Predict" or "Show Image" when required inputs (like file uploads) are missing. Also `st.spinner()` provides crucial feedback during long-running tasks like ML model inference.
**Action:** Use `disabled` attribute on buttons conditionally based on input state to prevent errors, and wrap blocking processing logic in `with st.spinner():` for immediate visual feedback.
