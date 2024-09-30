import Link from 'next/link';
import React from 'react';

const Page = () => {
  const menu = [
    {
      id: 1,
      title: "Learn JavaScript",
      des: "A beginner's guide to JavaScript programming."
    },
    {
      id: 2,
      title: "Master React",
      des: "Advanced concepts of React for frontend development."
    },
    {
      id: 3,
      title: "Node.js Basics",
      des: "Learn how to create backend services using Node.js."
    },
    {
      id: 4,
      title: "Introduction to MongoDB",
      des: "Learn the basics of NoSQL databases with MongoDB."
    },
    {
      id: 5,
      title: "Understanding Express.js",
      des: "Build web applications using Express.js framework."
    },
    {
      id: 6,
      title: "Frontend with TailwindCSS",
      des: "Style your applications with the TailwindCSS utility framework."
    },
    {
      id: 7,
      title: "Responsive Web Design",
      des: "Create mobile-first responsive websites."
    },
    {
      id: 8,
      title: "Git and GitHub",
      des: "Learn version control using Git and GitHub."
    },
    {
      id: 9,
      title: "Deploy with Vercel",
      des: "Deploy and host web applications with Vercel."
    },
    {
      id: 10,
      title: "API Development",
      des: "Learn to create RESTful APIs using Node.js and Express."
    }
  ];

  return (
    <div>
      <h1>This is the More Page</h1>
      <div className='grid grid-cols-2 gap-10 py-10'>
        {
          menu.map(item => (
            <div key={item.id} className='my-10 border-2 p-10 bg-cyan-300 text-black'>
              <h1>{item.title}</h1>
              <h1>{item.des}</h1>
              <Link href={`/More/${item.title}`}>
                
                  <button className='btn bg-white py-1 px-2 rounded-xl mt-3'>View Details</button>
                
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Page;
