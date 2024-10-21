export const  getPosts  = async () => {
    const resData = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = resData.json()
        console.log("data" , data)
    return data;
}