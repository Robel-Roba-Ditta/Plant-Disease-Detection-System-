## 2026-09-02 - Add visual feedback for long-running operations
**Learning:** Streamlit apps without visual feedback during heavy operations (like model inference) appear frozen, leading to poor UX and potential redundant clicks.
**Action:** Always wrap long-running function calls (e.g., `model.predict()`) with `with st.spinner('Loading message...'):` to provide immediate, clear feedback that the system is processing.
