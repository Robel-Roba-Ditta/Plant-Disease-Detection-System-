## 2024-05-24 - Cache Heavy TensorFlow Model in Streamlit
**Learning:** Loading a heavy TensorFlow model synchronously inside the prediction function causes a massive bottleneck, as it reloads the model from disk on every prediction execution.
**Action:** Always use `@st.cache_resource` to cache the loading of ML models in Streamlit apps so that it is loaded into memory only once across reruns.
