import axios from '../../config/axios';
import env from '../../config/env';

export const getEverything = (query: string) => axios.get(`${env.baseUrl}/everything`, {
    params: {
        q: query,
    }
});