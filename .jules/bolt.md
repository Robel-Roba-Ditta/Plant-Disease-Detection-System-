## 2024-05-15 - Cached TensorFlow Model Initialization
**Learning:** Heavy dependencies like TensorFlow models in Streamlit are reloaded on every interaction if not explicitly cached, causing significant performance bottlenecks during prediction.
**Action:** Always wrap heavy model initializations with `@st.cache_resource` in Streamlit applications.