

const getpostDetails = async (id)=>{

    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}

const pagedetailspage = async ({params}) => {

    const GetData = await getpostDetails(params.id);

    return (

        <div className =" border my-20 w-[50%] p-5 space-y-2 m-auto bg-cyan-300 text-black">
            <h1 className="text-xl font-bold ">Post Details Of : {params.id}</h1>
            <h1 className="font-bold ">Title : {GetData.title}</h1>
            <h1>Body : {GetData.body}</h1>
        </div>
    );
};

export default pagedetailspage;