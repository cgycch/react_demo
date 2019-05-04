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
