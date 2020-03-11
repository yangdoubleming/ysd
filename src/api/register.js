import request from '@/utils/request'

export function isUsernameRegister(param) {
    return request({
        url: '/ci/user/isUsernameRegister',
        method: 'post',
        data: param
    })
}

export function getVerifyCode(param) {
    return request({
        url: '/code/getVerifyCode',
        method: 'post',
        data: param
    })
}

export function getCiInterestRateList(data) {
    return request({
        url: `/ci/getCiInterestRateList`,
        method: 'get',
        params: data
    })
}


export function register(param) {
    return request({
        url: '/ci/user/register',
        method: 'post',
        data: param
    })
}

export function login(param) {
    return request({
        url: '/ci/user/login',
        method: 'post',
        data: param
    })
}

export function upload(param) {
    return request({
        url: '/ci/upload',
        method: 'post',
        data: param
    })
}

export function addCiCompanyAndPlatform(param) {
    return request({
        url: '/ci/addCiCompanyAndPlatform',
        method: 'post',
        data: param
    })
}

export function editCiCompanyLoan(param) {
    return request({
        url: '/ci/editCiCompanyLoan',
        method: 'post',
        data: param
    })
}

export function findCiCompanyLoanList(param) {
    return request({
        url: '/ci/findCiCompanyLoanList',
        method: 'post',
        data: param
    })
}

export function getCiCompanyLoanById(id) {
    return request({
        url: `/ci/getCiCompanyLoanById?id=${id}`,
        method: 'post'
    })
}

export function getCiCompanyAndPlatformByUser() {
    return request({
        url: `/ci/getCiCompanyAndPlatformByUser`,
        method: 'post'
    })
}

