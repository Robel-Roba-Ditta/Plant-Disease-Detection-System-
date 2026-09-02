## 2026-09-02 - Streamlit Model Caching
**Learning:** Streamlit applications reload entirely on every interaction. If machine learning models (like TensorFlow/Keras) are loaded within the prediction function without caching, the app suffers from severe I/O and initialization bottlenecks on every prediction.
**Action:** Always extract heavy model initialization into a separate function decorated with `@st.cache_resource` in Streamlit apps to load the model into memory only once across all user sessions.
