## 2024-08-22 - Streamlit Model Loading Anti-Pattern
**Learning:** Loading TensorFlow models inside the prediction function causes expensive disk I/O on every interaction due to Streamlit's top-down execution model.
**Action:** Always use `@st.cache_resource` to cache heavy machine learning models and prevent redundant loading.
