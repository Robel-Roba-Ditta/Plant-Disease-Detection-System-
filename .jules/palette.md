## 2024-09-05 - Add loading feedback for synchronous ML operations
**Learning:** Long-running synchronous ML operations (like loading models and running predictions) can make a Streamlit application appear unresponsive.
**Action:** Always wrap heavy synchronous operations in `st.spinner()` to provide immediate visual feedback and improve perceived performance.
