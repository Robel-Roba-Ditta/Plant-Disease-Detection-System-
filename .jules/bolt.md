
## 2024-05-18 - Streamlit Machine Learning Model Caching
**Learning:** In Streamlit applications, expensive initialization operations like loading TensorFlow/Keras models run synchronously on every script rerun (such as user interactions). This creates a massive performance bottleneck.
**Action:** Extract heavy initialization operations into separate functions and decorate them with `@st.cache_resource` to cache the object globally across reruns, drastically reducing latency after the first load.
