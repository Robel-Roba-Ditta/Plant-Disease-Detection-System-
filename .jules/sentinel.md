## 2024-05-15 - Unrestricted File Upload and Stack Trace Leak in Streamlit UI
**Vulnerability:** The application allowed arbitrary file uploads via `st.file_uploader` without restricting extensions, and buttons to process those files lacked checks for `None`, leading to unhandled exceptions and stack trace leaks if clicked prematurely.
**Learning:** In Streamlit applications, failing to restrict `st.file_uploader` extensions (`type`) or leaving UI components active when their dependencies (like uploaded files) are missing can result in both malicious file execution/storage risks and unintentional data leakage through error stack traces.
**Prevention:** Always restrict `st.file_uploader` extensions using the `type` parameter, and use the `disabled` parameter on interactive elements like `st.button` to prevent them from executing invalid states when dependencies are missing.
## 2025-01-28 - Prevent stack trace leakage on prediction errors
**Vulnerability:** Unhandled exceptions during file processing or model prediction leak stack traces and system information to the frontend.
**Learning:** Streamlit exposes detailed stack traces by default when exceptions occur. In a production environment, this can leak internal file paths, module versions, and logic that could be exploited.
**Prevention:** Wrap file processing and model prediction logic in `try...except` blocks, log the actual errors internally using `logging.error`, and display generic, user-friendly messages using `st.error`.
