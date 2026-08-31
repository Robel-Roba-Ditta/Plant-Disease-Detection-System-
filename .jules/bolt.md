## 2024-05-17 - Caching Heavy Models in Streamlit
**Learning:** In Streamlit applications, heavy initialization operations like loading TensorFlow models block the main thread and re-execute synchronously on user interactions if not cached.
**Action:** Use `@st.cache_resource` on functions that load heavy models to prevent repeated loading from disk on every prediction.
