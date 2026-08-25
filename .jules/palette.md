## 2024-05-15 - Improve prediction loading feedback

**Learning:** When performing long-running tasks like model predictions in Streamlit, disconnected animations (like `st.snow()`) are less effective for UX and accessibility than connected loading states (like `st.spinner()`). Spinner components convey clear system status and improve predictability.

**Action:** Consistently wrap long-running async or model prediction operations in `with st.spinner("Descriptive text..."):` to provide immediate, context-aware visual feedback.
