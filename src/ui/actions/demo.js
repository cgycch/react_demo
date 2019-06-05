import { myFetch } from "./common/baseFetch";

export function testRedirectOK() {
    console.log('testRedirectOK...')
    let options = {}
    options.method = 'GET'
    options.mode = 'cors'
    options.headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    }

    const oriUrl = 'http://localhost:8080/rest/api/mock/302/redirect/success'
    return myFetch(oriUrl, options).then(res => {
        console.log('testRedirectOK oriUrl', oriUrl)
        console.log('testRedirectOK result', res)
        const { status, redirected, url } = res
        if (status && redirected) {
            console.log('testRedirectOK will fetch new url', url)
            return Promise.reject(res)
        }
        return res.json()
    }).then(body => {
        console.log('testRedirectOK body', body)
        return body
    }).catch(err => {
        console.log('testRedirectOK error', err)
        const { status, redirected, url } = err
        if (status && redirected) {
            console.log('testRedirectOK go to new page ... ', url)
            //window.location.href = url; //it can be location to new url
            return err.json()
        }else{
            return Promise.reject(err)
        }
    })
}

export function testRedirectFailed() {
    console.log('testRedirectFailed...')
    let options = {}
    options.method = 'GET'
    options.mode = 'cors'
    options.headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    }
    const oriUrl = 'http://localhost:8080/rest/api/mock/302/redirect/failed'
    return myFetch(oriUrl, options).then(res => {
        console.log('testRedirectFailed oriUrl', oriUrl)
        console.log('testRedirectFailed result', res)
        const { status, redirected, url } = res
        if (status && redirected) {
            console.log('testRedirectFailed will fetch new url', url)
            return Promise.reject(res)
        }
        return res.json()
    }).then(body => {
        console.log('testRedirectFailed body', body)
        return body
    }).catch(err => {
        console.log('testRedirectFailed error', err)
        const { status, redirected, url } = err
        if (status && redirected) {
            console.log('testRedirectFailed go to new page ... ', url)
            return err.json()
        }else{
            return Promise.reject(err)
        }
    })
}

export function testRequestWithCookie() {
    console.log('testRequestWithCookie...')
    let options = {}
    options.method = 'GET'
    options.mode = 'cors'
    //options.credentials = 'include'
    options.credentials = 'same-origin'
    //options.credentials = 'omit'
    options.headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    }
    //options.body = JSON.stringify({})
    return myFetch('http://localhost:8080/rest/api/mock/login/authorized', options).then(res => {
        console.log('result', res)
        return res.json()
    }).then(body => {
        console.log('body', body)
        return body
    }).catch(err => {
        console.log('error', err)
        return err
    })
}

export function testLoginOK() {
    console.log('testLoginOK...')
    let options = {}
    options.method = 'GET'
    options.mode = 'cors'
    options.headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    }
    return myFetch('http://localhost:8080/rest/api/mock/login/authorized', options).then(res => {
        console.log('result', res)
        return res.json()
    }).then(body => {
        console.log('body', body)
        return body
    }).catch(err => {
        console.log('error', err)
        return err
    })
}