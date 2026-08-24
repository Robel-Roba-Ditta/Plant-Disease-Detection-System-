## 2024-08-24 - [Cache TensorFlow model loading in Streamlit]
**Learning:** In Streamlit applications, heavy initialization operations like loading TensorFlow models must be cached to prevent repeated synchronous loading on user interactions which can severely degrade performance.
**Action:** Use `@st.cache_resource` on model loading functions to ensure they are loaded only once and reused across reruns.
