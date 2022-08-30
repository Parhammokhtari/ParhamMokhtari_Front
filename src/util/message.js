import {toast} from "react-toastify";

export const successMessage = (message) => {
    console.log("hi parham");
    toast.success(message, {
        position: "top-right",
        closeOnClick: true
        
    });
      console.log("hi parham after");
};

export const errorMessage = (message) => {
    toast.error(message, {
        position: "top-right",
        closeOnClick: true
    });
};