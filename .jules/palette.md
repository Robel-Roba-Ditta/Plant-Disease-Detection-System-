
## 2023-10-25 - Add loading spinner to model prediction
**Learning:** Users lack visual feedback when synchronous Streamlit model predictions are running, leading them to think the application has frozen.
**Action:** Wrap long-running synchronous operations like model loading/inference in an `st.spinner()` block to provide visual feedback.
