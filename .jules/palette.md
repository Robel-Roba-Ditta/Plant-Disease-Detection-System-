## 2026-09-03 - Adding explicit spinner to model prediction steps
**Learning:** Long-running sync processes in Streamlit leave users without feedback, leading to potential frustration.
**Action:** Always wrap model predictions or long running processes in `with st.spinner("...")` to provide immediate visual feedback.
