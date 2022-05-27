
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_LOG_SERVICE || 'http://localhost:2323'

export const LogsAPI = {
    getLogs : async (token, queryParams) => {
        Object.keys(queryParams).forEach((k) => {
            !queryParams[k] && delete queryParams[k]
        });
        const query = new URLSearchParams(queryParams)
        try {
            const res = await fetch(`${BASE_URL}/logs?${query}`, {
                headers: { 'authorization' : `Bearer ${token}` }
            })
            const data = await res.json()
            return data
        } catch (error) {
            console.error(error)
        }
    }
}