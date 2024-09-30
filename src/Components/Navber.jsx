import Link from 'next/link';
import React from 'react';

const Navber = () => {
    return (
        <div >

         <div className='flex gap-10 justify-center bg-indigo-400 py-3  '>
         <Link href={"/Home"}>Home</Link>
           <Link href={"/About"}>About</Link>
           <Link href={"/Contact"}>Contact</Link>
           <Link href={"/More"}>More</Link>

         </div>

        </div>
    );
};

export default Navber;