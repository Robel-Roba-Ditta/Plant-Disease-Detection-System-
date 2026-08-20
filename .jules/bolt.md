## 2024-03-24 - [Cache TensorFlow Models in Streamlit]
**Learning:** Loading heavy TensorFlow models synchronously on each prediction in a Streamlit application causes severe performance bottlenecks due to Streamlit's rerun execution model (running the whole script on every interaction).
**Action:** Always wrap heavy model initialization functions (e.g., `tf.keras.models.load_model`) with Streamlit's `@st.cache_resource` decorator to load the model only once and persist it across reruns and sessions, significantly reducing prediction latency.
