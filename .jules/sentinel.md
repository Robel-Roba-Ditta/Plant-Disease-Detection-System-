## 2024-05-15 - Unrestricted File Upload and Stack Trace Leak in Streamlit UI
**Vulnerability:** The application allowed arbitrary file uploads via `st.file_uploader` without restricting extensions, and buttons to process those files lacked checks for `None`, leading to unhandled exceptions and stack trace leaks if clicked prematurely.
**Learning:** In Streamlit applications, failing to restrict `st.file_uploader` extensions (`type`) or leaving UI components active when their dependencies (like uploaded files) are missing can result in both malicious file execution/storage risks and unintentional data leakage through error stack traces.
**Prevention:** Always restrict `st.file_uploader` extensions using the `type` parameter, and use the `disabled` parameter on interactive elements like `st.button` to prevent them from executing invalid states when dependencies are missing.

## 2024-11-06 - [Defense in Depth and Error Handling in Streamlit]
**Vulnerability:** The application was missing defense-in-depth checks for file uploads (relying solely on disabled button states) and lacked error handling around model predictions, which could lead to application crashes or stack trace leakage to the end user if processing failed.
**Learning:** Streamlit UI state (like `disabled=True`) is not a substitute for explicit `None` checks on inputs like `st.file_uploader` within processing blocks. Furthermore, complex operations like model inference must be wrapped in `try...except` blocks to prevent sensitive internal errors from bubbling up to the user interface.
**Prevention:** Always implement explicit `if input is not None:` checks inside action handlers before processing data, even if UI controls are conditionally disabled. Wrap potentially failing operations (like external model calls or file parsing) in `try...except` blocks, log the exception internally using `logging`, and present generic `st.error()` messages to the user.

## 2026-09-08 - Add file size validation to Streamlit file uploader
**Vulnerability:** The application accepts file uploads via `st.file_uploader` without validating the file size before attempting to process it. This can lead to Resource Exhaustion/Denial of Service (DoS) if a malicious user uploads extremely large files.
**Learning:** Streamlit does not enforce application-level file size validation out of the box beyond global config limits. Large files can overwhelm the backend during processing or model prediction.
**Prevention:** Always check `uploaded_file.size` against a predefined maximum limit (e.g., 5MB) immediately after upload, and halt execution gracefully using `st.error()` and `st.stop()` if the limit is exceeded.
