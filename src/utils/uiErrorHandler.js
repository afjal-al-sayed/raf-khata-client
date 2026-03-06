import { toast } from "react-toastify";

export const showError = (error) => {
  toast.error(error.message);
};
