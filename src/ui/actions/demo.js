import { Promise } from "q";

export  function testRedirectToNewUrl() {
    console.log('testRedirectToNewUrl...')
    let options = {}
    options.method = 'GET'
    options.mode = 'cors'
    options.headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    }

    const oriUrl = 'http://localhost:8080/rest/api/mock/302/redirect'
    return fetch(oriUrl, options).then(res => {
        console.log('oriUrl', oriUrl)
        console.log('result', res)
        const { status, redirected, url } = res
        if (status && redirected) {
            console.log('will fetch new url', url)
            return Promise.reject('You need to log in again!')
        }
        return res.json()
    }).then(body => {
        console.log('body', body)
        return body
    }).catch(err => {
        console.log('error', err)
        if (err === 'You need to log in again!') {
            window.location.href = 'https://www.baidu.com/'
        }
        return err
    })
}

const sleep = (ms) => {
    console.log('hahahahha')
    return new Promise(resolve => setTimeout(resolve, ms))
}

export function testRedirect() {
    console.log('testRedirect...')
    let options = {}
    options.method = 'GET'
    options.mode = 'cors'
    options.headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    }
    //options.body = JSON.stringify({})
    const oriUrl = 'http://localhost:8080/rest/api/mock/302/redirect'
    return fetch(oriUrl, options).then(res => {
        console.log('oriUrl', oriUrl)
        console.log('result', res)
        const { status, redirected, url } = res
        if (status && redirected) {
            console.log('will fetch new url', url)
        }
        return res.json()
    }).then(body => {
        console.log('body', body)
        return body
    }).catch(err => {
        console.log('error', err)
        return err
    })
}

export function testRequest() {
    console.log('testRequest...')
    let options = {}
    options.method = 'GET'
    options.mode = 'cors'
    options.headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    }
    //options.body = JSON.stringify({})
    return fetch('http://localhost:8080/rest/api/mock/newurl', options).then(res => {
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