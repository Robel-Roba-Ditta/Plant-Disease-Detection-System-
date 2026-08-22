## 2026-08-22 - Add loading states for async operations
**Learning:** Synchronous Streamlit operations like model prediction cause the UI to hang without feedback, degrading the user experience.
**Action:** Always wrap long-running operations in `st.spinner()` to provide immediate visual feedback.
