import axios, { AxiosError, AxiosResponse } from "axios";
import { useAuth } from "../src/context/authContext";
import env from "./env";

const instance = axios.create({
    baseURL: env.baseUrl,
    headers: { 'content-type': 'application/json; charset=utf-8' }
});

instance.interceptors.request.use(
    async (config: any) => {
        if (!config.headers.Authorization) {
            config.headers.Authorization = env.apiKey;
        }

        //in every request we can show what's going on
        // console.log('config.headers', config.url, config.headers, config.data);

        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    async (error: AxiosError) => {

        if (!error.response) {
            return Promise.reject(error);
        }

        try {
            if (error.response.status === 401) {
                const auth = useAuth();
                await auth.signOut();
            }
        } catch (e) {
            //
        }

        console.warn('response error', error.response);
        return Promise.reject(error.response);
    },
);

export default instance;