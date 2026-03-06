import { useEffect } from "react";
import { showError } from "../utils/uiErrorHandler";

function ErrorToast({ error }) {
  useEffect(() => {
    if (error) {
      showError(error);
    }
  }, [error]);

  return null;
}

export default ErrorToast;
