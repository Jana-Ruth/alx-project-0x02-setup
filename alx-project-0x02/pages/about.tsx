import Header from "@/components/layout/Header"
import React from "react";
import Button from "@/components/common/Button";


const About: React.FC = () =>{
    return(
        <div>
            <Header/>
      <h1 className="text-2xl font-bold mb-6 text-center mt-2">About Us</h1>
        <div className=" flex flex-row items-center justify-between p-10 space-y-4">
      

      <Button title="Small Button" size="small" shape="rounded-sm" />
      <Button title="Medium Button" size="medium" shape="rounded-md" />
      <Button title="Large Button" size="large" shape="rounded-full" />
    </div>
        </div>
    )
}

export default About