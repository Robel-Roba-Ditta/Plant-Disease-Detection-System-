## 2024-05-15 - Unrestricted File Upload and Stack Trace Leak in Streamlit UI
**Vulnerability:** The application allowed arbitrary file uploads via `st.file_uploader` without restricting extensions, and buttons to process those files lacked checks for `None`, leading to unhandled exceptions and stack trace leaks if clicked prematurely.
**Learning:** In Streamlit applications, failing to restrict `st.file_uploader` extensions (`type`) or leaving UI components active when their dependencies (like uploaded files) are missing can result in both malicious file execution/storage risks and unintentional data leakage through error stack traces.
**Prevention:** Always restrict `st.file_uploader` extensions using the `type` parameter, and use the `disabled` parameter on interactive elements like `st.button` to prevent them from executing invalid states when dependencies are missing.

## 2024-11-06 - [Defense in Depth and Error Handling in Streamlit]
**Vulnerability:** The application was missing defense-in-depth checks for file uploads (relying solely on disabled button states) and lacked error handling around model predictions, which could lead to application crashes or stack trace leakage to the end user if processing failed.
**Learning:** Streamlit UI state (like `disabled=True`) is not a substitute for explicit `None` checks on inputs like `st.file_uploader` within processing blocks. Furthermore, complex operations like model inference must be wrapped in `try...except` blocks to prevent sensitive internal errors from bubbling up to the user interface.

## 2026-09-06 - Add file size limit for image uploads
**Vulnerability:** Unrestricted file upload size can lead to resource exhaustion (DoS) when processing large images.
**Learning:** Streamlit's `file_uploader` doesn't enforce strict application-level file size validation out of the box beyond global config, allowing overly large files to reach backend processing layers.
**Prevention:** Always implement explicit file size limits for user uploads before performing heavy operations like image decoding and model prediction.
