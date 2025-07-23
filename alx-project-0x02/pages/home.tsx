import Card from "@/components/common/Card"
import Header from "@/components/layout/Header"

const Home: React.FC = () =>{
    return(
        <div>
    <Header/>
     <div className="flex flex-col items-center ">
        <h1 className=" font-bold text-2xl text-gray-800 pt-3">Home</h1>
        <div className="mt-6 flex flex-row flex-wrap px-25 gap-4">
  <Card title={"Vallies"} content={"A very beautiful suite"}/>
   <Card title={"Vallies"} content={"A very beautiful suite"}/>
    <Card title={"Vallies"} content={"A very beautiful suite"}/>
     <Card title={"Vallies"} content={"A very beautiful suite"}/>
      <Card title={"Vallies"} content={"A very beautiful suite"}/>
       <Card title={"Vallies"} content={"A very beautiful suite"}/>
        <Card title={"Vallies"} content={"A very beautiful suite"}/>
         <Card title={"Vallies"} content={"A very beautiful suite"}/>
          <Card title={"Vallies"} content={"A very beautiful suite"}/>
           <Card title={"Vallies"} content={"A very beautiful suite"}/>
  </div>
  </div>
        </div>
    )
}

export default Home