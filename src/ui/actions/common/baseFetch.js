export const baseFetch = (url, options, successDo, errorDo) => {
    //console.log('###options',options)
    fetch(url, options).then(res => {
        return res.json()
    }).then(body => {
        successDo(body)
    }).catch(e => {
        errorDo(e)
    })
}

export const myFetch = (...requstItems) => {
    console.log('### myFetch requstItems', requstItems)
    return fetch(...requstItems).then(res => {
        const { ok = false, redirected = false, url = '' } = res
        if (ok === false) {
            console.error('### myFetch ok is false, so go to catch for more process...')
            return Promise.reject(res)
        }
        if (redirected && url.indexOf("login") !== -1) {
            console.log('### myFetch you need login in first and url is: ', url)
            //window.location.href = 'https://www.baidu.com/'
            window.location.href = url
            // The program may continue to go
            return Promise.reject('### myFetch redirecting to the login page')
        }
        return Promise.resolve(res)
    }).catch(err => {
        console.error('### myFetch error', err)
        const { status, statusText } = err
        if (status >= 300 && status <= 400) {
            console.error('### myFetch Request May Be Redirected', status, statusText)
        } else if (status >= 400 && status < 500) {
            console.error('### myFetch Client Request Error', status, statusText)
        } else if (status >= 500) {
            console.error('### myFetch Server Request error', status, statusText)
        }
        return Promise.reject(err)
    })
}

