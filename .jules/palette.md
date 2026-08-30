## 2024-05-15 - Add loading spinner and fix image responsiveness in Streamlit UI
**Learning:** In Streamlit applications, long-running model inferences without explicit loading states cause user frustration. Additionally, mixing conflicting static widths with deprecated responsive width parameters leads to unpredictable visual layouts.
**Action:** Always wrap expensive synchronous or asynchronous operations in `with st.spinner(...)` to provide clear feedback. For responsive images, use `use_container_width=True` exclusively and remove conflicting static width parameters.
