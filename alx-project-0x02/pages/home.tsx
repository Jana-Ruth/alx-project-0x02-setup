import Card from "@/components/common/Card"
import Header from "@/components/layout/Header"
import PostModal from "@/components/common/PostModal"
import { useState } from "react"
const Home: React.FC = () =>{
const [posts, setPosts] = useState([
    { title: "Welcome", content: "This is the welcome section of our site." },
    { title: "Features", content: "We offer a wide range of awesome features." },
    {title: "Vallies", content: "A very beautiful suite for your leisure"},
    {title: "Vallies", content: "A very beautiful suite for your leisure"},
    {title: "Vallies", content: "A very beautiful suite for your leisure"},
    {title: "Vallies", content: "A very beautiful suite for your leisure"},
    {title: "Vallies", content: "A very beautiful suite for your leisure"},
    {title: "Vallies", content: "A very beautiful suite for your leisure"},
    {title: "Vallies", content: "A very beautiful suite for your leisure"},
    {title: "Vallies", content: "A very beautiful suite for your leisure"},
    {title: "Vallies", content: "A very beautiful suite for your leisure"}

  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: { title: string; content: string }) => {
    setPosts((prev) => [newPost, ...prev]);
  };
    
    return(
        <div>
    <Header/>
     <div className="flex flex-col  ">
         <div className="flex flex-row items-center justify-between px-6 pt-4">
               <h1 className=" font-bold text-2xl text-gray-800">Home</h1>
                     <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Add New Villa
      </button>

               </div> 
<div className="mt-6 flex flex-row flex-wrap px-25 gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
  </div>
    <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="mt-6 flex flex-row flex-wrap px-25 gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
        </div>
   
        
    )
}

export default Home