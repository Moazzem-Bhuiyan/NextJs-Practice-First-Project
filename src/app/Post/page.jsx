import Link from "next/link";

const getpost = async ()=>{

    const res = await fetch ('https://jsonplaceholder.typicode.com/posts');

    const data = await res.json();
    return data 
}

const page = async() => {

  const postData = await getpost();
    console.log(postData);
 

    return (

        <div className=" ">
           
           <div className="grid grid-cols-3 gap-10 p-10 ">
            {
                postData.slice(0,20).map(item=> <div className='border p-5 bg-cyan-50 text-black '>

                    <h1 className="text-xl font-bold mb-10"> Title : {item.title}</h1>
                    <h1> Body : {item.body}</h1>

                    <button className="btn bg-orange-300 p-1 px-2 mt-3 rounded-md"> <Link href={`/Post/${item.id}`} >View Details</Link> </button>
                    
                     </div>)

            }
           </div>
            
        </div>
    );
};

export default page;