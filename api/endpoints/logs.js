
const BASE_URL = 'http://localhost:2323'

export const LogsAPI = {
    getLogs : async (queryParams) => {
        const query = new URLSearchParams(queryParams)
        const res = await fetch(`${BASE_URL}/logs?${query}`)
        const data = await res.json()
        return data
    },
    getLogById : async (id) => {
        const res = await fetch(`${BASE_URL}/logs/${id}`)
        const data = await res.data
        return data
    },
}