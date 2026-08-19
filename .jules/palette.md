
## 2024-05-19 - Add Loading Spinner for Async Operations
**Learning:** Operations like machine learning model loading and inference are synchronous and long-running. They block the UI and may leave the user confused as to whether the app has crashed if no feedback is provided.
**Action:** Always wrap heavy synchronous or asynchronous tasks in Streamlit with `st.spinner()` or similar progress indicators to provide visual feedback and improve perceived performance.
