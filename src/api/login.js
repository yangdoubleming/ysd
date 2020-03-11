import request from '@/utils/request'

export function login(token) {
    return request({
        url: `http://api.dousha8ao.com/currency/getUserByToken`,
        method: 'get',
        params: {token:token}
    })
}

export function getInfo(token) {
    return request({
        url: '/user/menus',
        method: 'get',
        // params: { token }
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}
