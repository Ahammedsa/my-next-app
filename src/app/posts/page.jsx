import { getPosts } from '@/services/postApi';
import Link from 'next/link';
import React from 'react';
import styles from "./styles.module.css"
const page =  async () => {
   const postData =  await getPosts()
  
  
   console.log(7,postData?.id)
    return <div className=''>
         <h1 className={styles.text_large}>All Posts</h1> 
          <div className='grid grid-cols-3 gap-'>
                 {
                    postData?.slice(0,20).map(({title ,body , id}) =>  (
                     <div key={id} className='border p-4'>
                        <h1>{title}</h1>
                        <p>{body}</p>
                        <button className='bg-red-400 px-4 py-2 text-white'><Link href={`/posts/${id}}`}>View Details</Link></button>
                     </div>

                    ))}
          </div>
         </div>
};
export default page;