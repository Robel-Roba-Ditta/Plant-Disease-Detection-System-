## 2024-09-05 - Streamlit Model Loading Bottleneck
**Learning:** In Streamlit applications, synchronous initialization of heavy ML models (like TensorFlow/Keras) directly inside interaction functions causes severe performance degradation, as the model is redundantly loaded from disk on every rerun and button click.
**Action:** Extract model loading into a dedicated initialization function decorated with `@st.cache_resource` to load the model only once per application lifecycle, significantly speeding up prediction times.
