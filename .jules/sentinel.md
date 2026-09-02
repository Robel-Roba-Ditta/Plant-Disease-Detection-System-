## 2024-05-15 - Unrestricted File Upload and Stack Trace Leak in Streamlit UI
**Vulnerability:** The application allowed arbitrary file uploads via `st.file_uploader` without restricting extensions, and buttons to process those files lacked checks for `None`, leading to unhandled exceptions and stack trace leaks if clicked prematurely.
**Learning:** In Streamlit applications, failing to restrict `st.file_uploader` extensions (`type`) or leaving UI components active when their dependencies (like uploaded files) are missing can result in both malicious file execution/storage risks and unintentional data leakage through error stack traces.
**Prevention:** Always restrict `st.file_uploader` extensions using the `type` parameter, and use the `disabled` parameter on interactive elements like `st.button` to prevent them from executing invalid states when dependencies are missing.
## 2024-05-24 - Prevent stack trace leakage in Streamlit
**Vulnerability:** Unhandled exceptions in Streamlit applications leak internal stack traces to the end-user UI.
**Learning:** Streamlit prints exception stack traces directly in the UI if an error occurs. This exposes internal paths, library versions, and potentially sensitive logic.
**Prevention:** Wrap file processing and model prediction logic in `try...except` blocks, log errors internally via `logging.error`, and display generic, user-friendly messages using `st.error`.
