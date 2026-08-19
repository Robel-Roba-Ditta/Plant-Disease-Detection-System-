## 2024-05-18 - Caching Heavy Initializations in Streamlit
**Learning:** Loading large models like TensorFlow `.keras` files synchronously within a Streamlit prediction block severely degrades performance since Streamlit re-runs the script on every interaction.
**Action:** Always extract heavy initialization functions and decorate them with `@st.cache_resource` in Streamlit apps to ensure the asset is only loaded once and cached in memory across interactions.
