## 2024-05-23 - Added Loading Spinner and Error Boundary to Disease Prediction
**Learning:** Streamlit apps that load ML models synchronously can freeze the UI and leave users wondering if the app has crashed. Also, relying only on `disabled` states for input checks can sometimes lead to unhandled errors during edge cases.
**Action:** Always wrap heavy ML predictions in an `st.spinner` to provide immediate visual feedback. Implement defense-in-depth with explicit `is not None` checks and error handling with user-friendly `st.error` messages to ensure a seamless experience.
