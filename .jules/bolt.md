## 2024-05-24 - Streamlit Model Caching
**Learning:** In Streamlit applications, heavy initialization operations like loading TensorFlow models must be explicitly cached using `@st.cache_resource` (or legacy `@st.cache`), otherwise they will synchronously block execution on every single user interaction due to Streamlit's top-down re-execution model.
**Action:** When working on Streamlit apps, always extract expensive I/O or model loading calls into separate functions and decorate them with `@st.cache_resource` to avoid severe latency issues on subsequent runs.
