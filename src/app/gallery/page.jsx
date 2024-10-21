import Image from 'next/image';
import React from 'react';
import { Headland_One } from 'next/font/google';
const Headland = Headland_One({weight :['400'] ,  subsets: ["latin"] });

const galleryPage = () => {
    return (
        <div className='min-h-screen px-12 py-24'>
           <h6 className={`${Headland.className} text-3xl mb-12`} >Gallaery page</h6>
           {[1,2,3]?.map((img) => ( 
               <Image  key={img} src={`/images/${img}.jpg`} alt='IMages' height="1080" width="1920"  />
           ))}
           
            
        </div>
    );
};

export default galleryPage;