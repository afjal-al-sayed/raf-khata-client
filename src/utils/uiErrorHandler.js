import { toast } from "react-toastify";

export const showErrorToast = (error) => {
  toast.error(error.message);
};
