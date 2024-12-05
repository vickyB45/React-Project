export const GetData =async()=>{
    const responce =await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'GET'
    })
    return await responce.json()
}