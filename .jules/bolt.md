
## 2024-05-18 - Caching Heavy Resource Initialization in Streamlit
**Learning:** Streamlit reruns the entire script on every user interaction. Loading heavy resources (like a TensorFlow model) directly in the prediction function causes significant, synchronous bottlenecks as it gets reloaded from disk each time.
**Action:** Always extract heavy initialization operations into separate functions and decorate them with `@st.cache_resource` to ensure they are loaded only once and reused across reruns.
