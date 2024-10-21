import React from 'react';

const generateMetadata = async ({params}) => {
return {
    title : `Post Details ${params.id}`
}
}
const getPostDetails  =  async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
    const data = res.json()
    console.log(data)
    return data ;
}

const postDetails = async ({params}) => {
    console.log("params",params.id)
    const {title , body} = await getPostDetails(params.id)

    return (
        <div>
            <h1>{title}</h1>
            <h1>{body}</h1>
        </div>
    );
};

export default postDetails;