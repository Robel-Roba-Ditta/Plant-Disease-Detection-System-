## 2024-05-15 - Unrestricted File Upload and Stack Trace Leak in Streamlit UI
**Vulnerability:** The application allowed arbitrary file uploads via `st.file_uploader` without restricting extensions, and buttons to process those files lacked checks for `None`, leading to unhandled exceptions and stack trace leaks if clicked prematurely.
**Learning:** In Streamlit applications, failing to restrict `st.file_uploader` extensions (`type`) or leaving UI components active when their dependencies (like uploaded files) are missing can result in both malicious file execution/storage risks and unintentional data leakage through error stack traces.
**Prevention:** Always restrict `st.file_uploader` extensions using the `type` parameter, and use the `disabled` parameter on interactive elements like `st.button` to prevent them from executing invalid states when dependencies are missing.
## 2024-08-22 - Prevent Information Leakage in Streamlit
**Vulnerability:** Unhandled exceptions during file processing or model inference could lead to internal stack traces being exposed to end users, potentially revealing system paths and library details.
**Learning:** Streamlit apps must explicitly wrap operations on user-supplied inputs (like uploaded images) and subsequent model predictions in defensive `try...except` blocks to catch and gracefully handle unpredictable data.
**Prevention:** Always implement generic, user-friendly error messages (e.g. `st.error`) and catch generic exceptions rather than letting them bubble up in the user interface.
