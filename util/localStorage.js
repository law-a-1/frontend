export function saveJwt(token) {
    localStorage.setItem('token', token);
}

export function getJWt() {
    if (typeof window !== 'undefined') {
        return localStorage?.getItem('token') || null
    }
    return null
}