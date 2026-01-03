import axios from "axios";
import searchParams from "@/lib/searchParams";

const getToken = () => {
    const params = searchParams<{ token?: string }>();
    return params?.token || localStorage.getItem("token") || "";
};

// Axios instance configured with auth + normalized errors
const apiClient = axios.create();

apiClient.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers = config.headers ?? {};
        (config.headers as Record<string, string>).Authorization = token;
    }
    return config;
});

apiClient.interceptors.response.use(
    (res) => res,
    (error) => {
        const msg = error.response?.data?.message || error.message as string;
        const normalized = typeof msg === "string" ? msg : JSON.stringify(msg);
        const wrapped = new Error(normalized) as Error & { status?: number; response?: unknown };
        wrapped.status = error.response?.status;
        wrapped.response = error.response;
        return Promise.reject(wrapped);
    }
);


export default apiClient;