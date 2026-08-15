## 2024-06-25 - Streamlit Model Caching Bottleneck
**Learning:** In Streamlit applications, heavy initialization operations like loading TensorFlow models (`tf.keras.models.load_model`) on every user interaction (e.g., button click) create massive performance bottlenecks, causing synchronous loading delays.
**Action:** Always extract heavy initializations into separate functions and decorate them with `@st.cache_resource` in Streamlit apps to ensure models are loaded once globally across reruns. Use `typing.Any` for Streamlit file objects like `test_image` instead of raw `bytes`.
