import axios from '../../config/axios';
import env from '../../config/env';


export enum countries {
    ae = "ae",
    ar = "ar",
    at = "at",
    us = "us",
};

export enum categories {
    general = "general",
    business = "business",
    entertainment = "entertainment",
    health = "health",
    science = "science",
    sports = "sports",
    technology = "technology"
};

interface topHeadlineProps {
    country?: countries,
    category?: categories,
    sources?: string,
    query?: string,
    pageSize?: number,
    page?: number
}

export const getEverything = (props: topHeadlineProps) => {

    return axios.get(`${env.baseUrl}/everything`, {
        params: props,
    });
};


export const topHeadlines = (props: topHeadlineProps) => {

    return axios.get(`${env.baseUrl}/top-headlines`, {
        params: props,
    });
};