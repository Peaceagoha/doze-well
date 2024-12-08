import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const toastSlice = createSlice({
  name: "toast",
  initialState: [],
  reducers: {
    showToast: (state, action) => {
      const { type, message, options } = action.payload;

      const defaultOptions = {
        position: "top-right",
        duration: 3000,
        style: {
          backgroundColor: "#391E8A",
          color: "#fff",
          borderRadius: "5px",
          padding: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
        iconTheme: {
          primary:
            type === "success"
              ? "#4CAF50"
              : type === "error"
              ? "#F44336"
              : "#FF9800",
          secondary: "#FFF",
        },
        ...options,
      };

      switch (type) {
        case "success":
          toast.success(message, defaultOptions);
          break;
        case "error":
          toast.error(message, defaultOptions);
          break;
        case "warning":
          toast(message, {
            ...defaultOptions,
            style: { ...defaultOptions.style, backgroundColor: "#FFC107" },
          });
          break;
        case "info":
          toast(message, {
            ...defaultOptions,
            style: { ...defaultOptions.style, backgroundColor: "#2196F3" },
          });
          break;
        default:
          toast(message, defaultOptions);
      }
    },
  },
});

export const { showToast } = toastSlice.actions;
export default toastSlice.reducer;
