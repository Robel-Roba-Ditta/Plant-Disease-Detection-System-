
## 2026-09-09 - Cache ML model loading in Streamlit
**Learning:** Loading TensorFlow/Keras models synchronously on every Streamlit prediction interaction causes severe performance bottlenecks due to script reruns.
**Action:** Extract heavy ML model loading into a separate function decorated with `@st.cache_resource` to cache the model across reruns.
