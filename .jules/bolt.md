## 2024-05-15 - Streamlit Model Caching
**Learning:** Streamlit applications rerun the entire script on every user interaction. If heavy initialization operations, such as loading a TensorFlow model, are not explicitly cached, they will re-execute on every button click or file upload, causing severe blocking latency.
**Action:** Use `@st.cache_resource` on functions that load heavy, immutable assets (like ML models) to ensure they are loaded only once and cached across reruns, significantly improving UI responsiveness.
