
## 2026-09-07 - Add loading spinner for model prediction
**Learning:** Long-running synchronous operations (like model inference) in Streamlit can make the app appear frozen. Visual feedback is crucial for good UX.
**Action:** Always wrap synchronous ML predictions or heavy computations in an `st.spinner()` block to provide immediate visual feedback.
