
const BASE_URL = 'http://localhost:2323' || process.env.NEXT_PUBLIC_LOG_SERVICE_BASE_URL

export const LogsAPI = {
    getLogs : async (queryParams) => {
        Object.keys(queryParams).forEach((k) => {
            !queryParams[k] && delete queryParams[k]
        });
        const query = new URLSearchParams(queryParams)
        const res = await fetch(`${BASE_URL}/logs?${query}`)
        const data = await res.json()
        return data
    }
}