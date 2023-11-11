const getApiUrl = () => {
    if (process.env.NODE_ENV === "development") {
        return "http://localhost:8080"
    } else {
        return "https://matmagi-api.up.railway.app"
    }
}

export const apiUrl = getApiUrl()