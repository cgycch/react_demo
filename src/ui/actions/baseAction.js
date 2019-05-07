export const myFetch =(key1)=>{
 console.log('params',key1)
 let options = {}
 options.method = 'GET'
 options.mode = 'cors'
 options.headers = {
     'Content-Type': 'application/json;charset=UTF-8',
     'Access-Control-Allow-Origin':'*',
     'credentials': "include"
 }
 return fetch('http://localhost:8080/mock/api/get/test',options).then(res =>{
     console.log('result',res)
     if(res.ok ===false && res.status ===401){
         console.log('unauthorized...');
         return Promise.reject('unauthorized!')

     }
     return res.json()
 }).then(body =>{
     console.log('body',body)
     return body
 }).catch(err =>{
     console.log('error',err)
     return err
 })
} 

export function myFetch2 (key1){
    console.log('params',key1)
   return fetch('http://localhost:8080/mock/api/get/testErr').then(res =>{
        console.log('result',res)
        return res.json()
    }).then(body =>{
        console.log('body',body)
        return body
    }).catch(err =>{
        console.log('error',err)
        return err
    })
  }

  export function myFetch3 (key1){
    console.log('params',key1)
   return fetch('http://localhost:8080/mock/api/get/testNotExist').then(res =>{
        console.log('result',res)
        return res.json()
    }).then(body =>{
        console.log('body',body)
        return body
    }).catch(err =>{
        console.log('error',err)
        return err
    })
  }

  export function myAdd (user){
    console.log('params',user)
    let options = {}
    options.method = 'POST'
    options.mode = 'cors'
    options.headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        //'Access-Control-Allow-Origin':'*',
        //'Access-Control-Allow-Origin':'http://localhost:3000',
    }
   options.body = JSON.stringify(user)
   return fetch('http://localhost:8080/mock/api/post/test', options).then(res =>{
        console.log('result',res)
        return res.json()
    }).then(body =>{
        console.log('body',body)
        return body
    }).catch(err =>{
        console.log('error',err)
        return err
    })
  }

  export function myAddErr (user){
    console.log('params',user)
    let options = {}
    options.method = 'POST'
    options.mode = 'cors'
    options.headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
    }
    options.body = JSON.stringify(user)
   return fetch('http://localhost:8080/mock/api/post/testErr', options).then(res =>{
        console.log('result',res)
        return res.json()
    }).then(body =>{
        console.log('body',body)
        return body
    }).catch(err =>{
        console.log('error',err)
        return err
    })
  }

  export function myLogin (user){
    console.log('params',user)
    let options = {}
    options.method = 'POST'
    options.mode = 'cors'
    options.headers = {
        'Access':'text/html',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'authentication':'username=cch&password=123456',
        'credentials': "include"
    }
    options.credentials = 'same-origin'
    options.body = JSON.stringify(user)
   return fetch('http://localhost:8080/login', options).then(res =>{
        console.log('result',res)
        return res.json()
    }).then(body =>{
        console.log('body',body)
        return body
    }).catch(err =>{
        console.log('error',err)
        return err
    })
  }