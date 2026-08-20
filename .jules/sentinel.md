## 2024-05-15 - Unrestricted File Upload and Stack Trace Leak in Streamlit UI
**Vulnerability:** The application allowed arbitrary file uploads via `st.file_uploader` without restricting extensions, and buttons to process those files lacked checks for `None`, leading to unhandled exceptions and stack trace leaks if clicked prematurely.
**Learning:** In Streamlit applications, failing to restrict `st.file_uploader` extensions (`type`) or leaving UI components active when their dependencies (like uploaded files) are missing can result in both malicious file execution/storage risks and unintentional data leakage through error stack traces.
**Prevention:** Always restrict `st.file_uploader` extensions using the `type` parameter, and use the `disabled` parameter on interactive elements like `st.button` to prevent them from executing invalid states when dependencies are missing.

## 2026-08-20 - Unhandled Exceptions in UI Element
**Vulnerability:** The application allowed processing uploaded files via a Predict button, but lacked a try-catch block during prediction, leading to unhandled exceptions and stack trace leaks.
**Learning:** In Streamlit applications, failing to wrap model processing logic inside interactive components with a try-except block can result in unintentional data leakage through error stack traces.
**Prevention:** Always wrap model processing and predictions logic inside a try...except Exception block, and use a generic st.error to present the error state to the user without disclosing the trace.
