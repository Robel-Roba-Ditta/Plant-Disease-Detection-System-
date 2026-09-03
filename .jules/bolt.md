## 2024-05-15 - [Model Caching Optimization]
**Learning:** Streamlit reruns the entire script on every user interaction (like button clicks). Loading a heavy machine learning model (e.g., TensorFlow/Keras) synchronously inside the prediction function causes a massive performance bottleneck on each prediction.
**Action:** Always extract heavy initialization logic like model loading into a separate function and decorate it with `@st.cache_resource` to load the model only once and reuse the instance across reruns.
