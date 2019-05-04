export const list = ()=>{
    console.log('list user abc')
    var newArray = ["a","b","c"]
    let users = newArray.map(item => {
        return {
            userName: 'user'+item,
            sex: item === 'a'? '男':item === 'b'?'女':'保密',
            age: 18
        }
    })
    return users
}


export const load = (key1,key2)=>{
    console.log('load',key1,key2)
    return{
        userName:'userName',
        phone:'123'
    }
}
