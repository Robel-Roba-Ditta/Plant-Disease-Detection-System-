## 2024-11-20 - Cache TensorFlow model loading
**Learning:** Loading large machine learning models inside prediction functions in Streamlit causes severe performance regressions, as Streamlit reruns the entire script on every user interaction, repeatedly executing synchronous disk I/O and expensive model instantiation.
**Action:** Extracted `tf.keras.models.load_model` into a dedicated `load_model` function decorated with `@st.cache_resource`, ensuring the heavy TensorFlow model is initialized once globally and reused across all subsequent reruns and sessions.
