import request from '@/utils/request'

//认证============================================

export function getAuthUserBasicInfo() {
    return request({
        url: `/authentication/getUserBasicInfo`,
        method: 'post',
    })
}

export function addApplicantInfo(data) {
    return request({
        url: `/authentication/addApplicantInfo`,
        method: 'post',
        data: data
    })
}

export function addEnterpriseInfo(data) {
    return request({
        url: `/authentication/addEnterpriseInfo`,
        method: 'post',
        data: data
    })
}

//贷款申请==============================================

export function getLoanProductList() {
    return request({
        url: `/loan/getLoanProductList`,
        method: 'post'
    })
}

export function shopInfo() {
    return request({
        url: `/loan/shopInfo`,
        method: 'post'
    })
}

export function getShopList(data) {
    return request({
        url: `/loan/getShopList`,
        method: 'post',
        data:data
    })
}

export function addCiCompany(data) {
    return request({
        url: `ci/addCiCompany`,
        method: 'post',
        data:data
    })
}

export function editCiCompanyDocument(data) {
    return request({
        url: `ci/editCiCompanyDocument`,
        method: 'post',
        data:data
    })
}

export function getUserDataInfo() {
    return request({
        url: `ci/getUserDataInfo`,
        method: 'post'
    })
}

export function submitApplication(data) {
    return request({
        url: `loan/submitApplication`,
        method: 'post',
        data:data
    })
}

export function shopCredit(data) {
    return request({
        url: `loan/shopCredit`,
        method: 'post',
        data:data
    })
}

export function checkAuthentication() {
    return request({
        url: `authentication/checkAuthentication`,
        method: 'post'
    })
}

export function getLoanShopDetails(data) {
    return request({
        url: `ci/getLoanShopDetails`,
        method: 'post',
        data:data
    })
}
// ===========================================================应收贷

export function receivablesloan(data) {
    return request({
        url: `receivablesloan/submit`,
        method: 'post',
        data:data
    })
}

export function sendVerifyCode() {
    return request({
        url: `receivablesloan/sendVerifyCode`,
        method: 'get'
    })
}

export function shoplist() {
    return request({
        url: `receivablesloan/shoplist`,
        method: 'get'
    })
}

export function shopstatistic() {
    return request({
        url: `receivablesloan/shopstatistic`,
        method: 'get'
    })
}