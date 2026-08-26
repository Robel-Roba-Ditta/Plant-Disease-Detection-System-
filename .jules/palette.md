## 2024-05-18 - Add Loading States to Async Operations
**Learning:** Long-running operations like ML predictions cause the UI to appear frozen, leading to poor UX and user confusion.
**Action:** Always wrap asynchronous or heavy blocking calls (like `model.predict()`) with visual feedback elements, such as `st.spinner()`, to provide clear status indications.