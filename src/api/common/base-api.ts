import axios, { AxiosError } from "axios";
import { BASE_URL } from "@/utils/config";


export const request = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
    }
});

request.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const getAxiosErrorMessage = (error: AxiosError<any>): string | undefined => {
    if (error) {
        if (error.code === "ERR_NETWORK")
            return "No Internet connection!"
        return error.response?.data?.detail?.[0]?.msg ?? "Somthing went wrong";
    }
};
