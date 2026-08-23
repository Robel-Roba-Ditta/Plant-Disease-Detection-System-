## 2024-05-24 - Add Loading Spinner for Model Prediction
**Learning:** Model predictions can take time, leaving the user without visual feedback and potentially causing them to interact with the app in unexpected ways while waiting.
**Action:** Always wrap long-running operations like ML model predictions in a visual loading indicator such as `st.spinner` to provide immediate feedback to the user.
