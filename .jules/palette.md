## 2024-10-24 - Added visual feedback for model inference
**Learning:** Blocking machine learning operations in Streamlit (like model prediction) cause the UI to freeze without visual feedback, which can lead to users repeatedly clicking buttons or thinking the app has crashed.
**Action:** Always wrap long-running operations like model inference in `with st.spinner("Message..."):` to provide immediate visual feedback that work is happening.
