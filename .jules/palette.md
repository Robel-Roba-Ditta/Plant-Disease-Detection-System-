## 2024-05-18 - [Add loading state for ML predictions]
**Learning:** Heavy synchronous ML operations in Streamlit applications freeze the UI, causing users to think the application has crashed.
**Action:** Always wrap long-running synchronous operations, like TensorFlow model loading and inference, in an `st.spinner()` block to provide crucial visual feedback to the user.
