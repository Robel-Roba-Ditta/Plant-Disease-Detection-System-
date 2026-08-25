
## 2024-08-25 - Cache Expensive Model Initialization in Streamlit
**Learning:** In Streamlit applications, heavy initialization operations like loading TensorFlow models from disk can become a significant performance bottleneck if executed synchronously on every user interaction or re-render.
**Action:** Always use `@st.cache_resource` for heavy dependencies (e.g., ML models, database connections) in Streamlit to cache the initialized object globally across sessions, preventing repeated loading and drastically improving inference latency.
