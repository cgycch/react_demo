export const myFetch =(key1)=>{
 console.log('params',key1)
 return fetch('http://localhost:8080/mock/api/get/test').then(res =>{
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