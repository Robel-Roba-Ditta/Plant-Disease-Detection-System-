## 2024-05-15 - Unrestricted File Upload and Stack Trace Leak in Streamlit UI
**Vulnerability:** The application allowed arbitrary file uploads via `st.file_uploader` without restricting extensions, and buttons to process those files lacked checks for `None`, leading to unhandled exceptions and stack trace leaks if clicked prematurely.
**Learning:** In Streamlit applications, failing to restrict `st.file_uploader` extensions (`type`) or leaving UI components active when their dependencies (like uploaded files) are missing can result in both malicious file execution/storage risks and unintentional data leakage through error stack traces.
**Prevention:** Always restrict `st.file_uploader` extensions using the `type` parameter, and use the `disabled` parameter on interactive elements like `st.button` to prevent them from executing invalid states when dependencies are missing.

## 2024-05-16 - Unhandled Model Prediction Exception and Stack Trace Leak
**Vulnerability:** The model prediction logic within the Streamlit app was not wrapped in a `try...except` block, meaning any processing errors (e.g., malformed image input) would result in unhandled exceptions, potentially leaking backend details and stack traces to the frontend UI.
**Learning:** When invoking complex backend operations (like ML model predictions) triggered by user input (like file uploads), exceptions must be handled securely to prevent unintentional data leakage.
**Prevention:** Always wrap sensitive backend logic in `try...except` blocks, log the detailed error securely using a logging framework, and present a generic, safe error message to the user via `st.error`.
