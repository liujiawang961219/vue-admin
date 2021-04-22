/**
 * 过滤特殊字符
 */
export function scripscript(s) {
    var pattern = new RegExp("[`~!@#$%^&*(){};:【】 ！@#￥%……&*（）“‘”’、？?*]")
    var rs = ''
    for (var i = 0; i < s.length; i++) {
        rs = rs + s.substr(i, 1).replace(pattern, '')
    }
    return rs
}
/**
 * 验证用户名
 */
export function validateEmail(value){
    let reg = /^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$/
    if(!reg.test(value)){
        return false
    }else{
        return true
    }
    // return reg
}