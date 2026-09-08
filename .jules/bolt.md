## 2024-09-08 - Cache Heavy Initialization in Streamlit
**Learning:** Streamlit re-runs scripts on every interaction. Loading heavy ML models (like TensorFlow/Keras) synchronously within prediction functions creates a massive I/O and processing bottleneck, exhausting resources and ruining UX.
**Action:** Always extract heavy initialization operations into separate functions and decorate them with `@st.cache_resource` to ensure they are loaded only once per session.
