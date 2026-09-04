## 2026-09-04 - Cache Heavy TensorFlow Model Loading in Streamlit
**Learning:** In Streamlit applications, loading heavy TensorFlow models inside prediction functions without caching causes redundant synchronous loading bottlenecks during user interactions and script reruns, significantly degrading performance on subsequent predictions.
**Action:** Extract heavy initialization operations, such as loading TensorFlow/Keras models, into separate functions decorated with `@st.cache_resource` to prevent redundant synchronous loading bottlenecks during user interactions and script reruns.
