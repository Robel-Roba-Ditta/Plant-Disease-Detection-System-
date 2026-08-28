## 2024-05-24 - [Cache Heavy Initializations in Streamlit]
**Learning:** Streamlit re-runs the entire Python script on every user interaction (e.g., clicking a button, selecting an option). Loading heavy machine learning models (like TensorFlow models) synchronously on every run creates a massive performance bottleneck.
**Action:** Always wrap heavy initializations and model loading in a separate function decorated with `@st.cache_resource` to load the model into memory only once across all reruns and sessions.
