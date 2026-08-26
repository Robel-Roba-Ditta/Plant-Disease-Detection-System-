## 2024-05-18 - Caching Heavy Models in Streamlit
**Learning:** Heavy initialization operations like loading TensorFlow models cause significant performance bottlenecks in Streamlit if not cached, as they are loaded synchronously on every user interaction or prediction.
**Action:** Use `@st.cache_resource` on functions that load heavy ML models or establish database connections to prevent redundant loading and speed up predictions.
