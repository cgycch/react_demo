import { baseContex } from './common/baseUrl'
import { baseFetch } from './common/baseFetch'


export const list = (curPage, pageSize, successDo, errorDo) => {
    let url = baseContex + '/api/user/page?pageIndex=' + curPage + '&pageSize=' + pageSize
    console.log('list url', url)
    let options = {}
    options.method = 'GET'
    baseFetch(url, options, successDo, errorDo);
}


export const load = (userId, successDo, errorDo) => {
    let url = baseContex + '/api/user/' + userId
    console.log('load url', url)
    baseFetch(url, {}, successDo, errorDo);
}


export const add = (user, successDo, errorDo) => {
    let url = baseContex + '/api/user/add'
    console.log('add url', url)
    let options = {}
    options.method = 'POST'
    //options.mode = 'cors'
    options.headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        //'Access-Control-Allow-Origin':'*',
    }
    options.body = JSON.stringify(user)
    baseFetch(url, options, successDo, errorDo);
}

