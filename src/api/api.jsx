import axios from "axios";
export const photoBaseUrl = import.meta.env.VITE_IMGURL


const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlwIjoiOjoxIiwiaXNzIjoiand0LnNlcnZlciIsImF1ZCI6ImludGVscy5jbyJ9.eyJpZCI6IjEyNyIsIm5hbWUiOiJhZG1pbiIsInJvbGVfaWQiOiIxIiwiZW1haWwiOiJ0b3doaWQxQG91dGxvb2suY29tIiwiaXAiOiI6OjEiLCJpc3MiOiJqd3Quc2VydmVyIiwiYXVkIjoiaW50ZWxzLmNvIiwiZXhwIjoxNzM3OTU2MzA4fQ.Emcb0y6TlPbOLC7NVwwo668h3dkryIUXZ1bW9Sn3GiU';

api.interceptors.request.use(

    (config) => {
        const token = localStorage.getItem("token")
        config.headers.Authorization = `Bearer ${token}`;
        return config;

    }

    , function (error) {
        return Promise.reject(error);
    }

);



export default api