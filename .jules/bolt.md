## 2026-08-29 - Cache TensorFlow Model Loading in Streamlit
**Learning:** In Streamlit, heavy initialization operations like loading TensorFlow models within prediction functions cause the model to be loaded from disk on every prediction interaction because Streamlit reruns the script top-to-bottom.
**Action:** Extract model loading into a separate function decorated with `@st.cache_resource` to cache the loaded model in memory and significantly reduce subsequent prediction latencies.
