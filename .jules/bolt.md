## 2024-05-28 - Cache TensorFlow Models in Streamlit
**Learning:** Streamlit re-runs scripts on every interaction. Heavy operations like loading TensorFlow models synchronously within prediction functions cause severe performance bottlenecks, blocking the main thread and increasing memory bloat.
**Action:** Extract model loading into a separate function and decorate it with `@st.cache_resource` so the model is loaded only once and reused across re-runs.
