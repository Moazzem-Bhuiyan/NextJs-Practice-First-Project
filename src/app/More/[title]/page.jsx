const page = ({ params }) => {
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

  console.log("Title from params:", params.title); // Check the value of params.title

  const menuItem = menu.find(item => item.title === params.title) || { id: null, des: "Menu item not found" };
  const { id, des } = menuItem;

  return (
    <div>
      <h1>Details</h1>
      <h1>ID: {id}</h1>
      <h1>Description: {des}</h1>
    </div>
  );
};

export default page;
