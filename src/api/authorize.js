import request from '@/utils/request'

export function amazonAuthorize(param) {
    return request({
        url: '/auth/amazon/add',
        method: 'post',
        data: param
    })
}

export function getStation() {
    return request({
        url: '/thirdAuthShop/station',
        method: 'get',
    })
}

export function getAuthShopAll() {
    return request({
        url: '/thirdAuthShop/all',
        method: 'get',
    })
}

export function amazonAuthorizeNo(param) {
    return request({
        url: '/thirdAuthShop/banned',
        method: 'post',
        data: param
    })
}

export function dhGateAuthorize(param) {
    return request({
        url: 'auth/dhgate/add',
        method: 'post',
        data: param
    })
}

export function dhgateGetPrams() {
    return request({
        url: 'auth/dhgate/getPrams',
        method: 'get'
    })
}

export function dhgateGetAll() {
    return request({
        url: '/auth/dhgate/all',
        method: 'get'
    })
}

export function getAuthUrl(type) {
    return request({
        url: `auth/${type}/authUrl`,
        method: 'get'
    })
}

export function authorize(param,type) {
    return request({
        url: `auth/${type}/add`,
        method: 'post',
        data: param
    })
}
export function ebayAuthUrl(param) {
    return request({
        url: `auth/ebay/authUrl`,
        method: 'get',
        params: param,
    })
}

export function showWishShop() {
    return request({
        url: 'thirdAuthShop/showWishShop',
        method: 'get'
    })
}

export function showEbayShop() {
    return request({
        url: 'thirdAuthShop/showEbayShop',
        method: 'get'
    })
}
export function bdtAuthorization(param) {
    return request({
        url: 'logistics/bdtAuthorization',
        method: 'post',
        data: param
    })
}