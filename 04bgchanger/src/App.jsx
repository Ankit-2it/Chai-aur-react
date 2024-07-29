import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          className="w-24 outline-none rounded-full text-white px-4 py-1 shadow-lg" 
          style={{backgroundColor: "red"}} 
          onClick={() => setColor("red")}>
            Red
          </button>

          <button 
          className="w-24 outline-none rounded-full text-white px-4 py-1 shadow-lg" 
          style={{backgroundColor: "Blue"}} 
          onClick={() => setColor("blue")}>
            Blue
          </button><button 
          className="w-24 outline-none rounded-full text-white px-4 py-1 shadow-lg" 
          style={{backgroundColor: "yellow", color: "black"}} 
          onClick={() => setColor("yellow")}>
            Yellow
          </button><button 
          className="w-24 outline-none rounded-full text-white px-4 py-1 shadow-lg" 
          style={{backgroundColor: "green"}} 
          onClick={() => setColor("green")}>
            Green
          </button>
          
          <button 
          className="w-24 outline-none rounded-full text-white px-4 py-1 shadow-lg" 
          style={{backgroundColor: "violet"}} 
          onClick={() => setColor("violet")}>
            Violet
          </button>
          
          <button 
          className="w-24 outline-none rounded-full text-white px-4 py-1 shadow-lg" 
          style={{backgroundColor: "Olive"}} 
          onClick={() => setColor("Olive")}>
            Olive
          </button>

          <button 
          className="w-24 outline-none rounded-full text-white px-4 py-1 shadow-lg" 
          style={{backgroundColor: "Purple"}} 
          onClick={() => setColor("Purple")}>
            Purple
          </button>
          
          <button 
          className="w-24 outline-none rounded-full text-white px-4 py-1 shadow-lg" 
          style={{backgroundColor: "Lavender", color: "black"}} 
          onClick={() => setColor("Lavender")}>
            Lavender
          </button>
          
          <button 
          className="w-24 outline-none rounded-full text-white px-4 py-1 shadow-lg" 
          style={{backgroundColor: "Orange"}} 
          onClick={() => setColor("Orange")}>
            Orange
          </button>
          <button 
          className="w-24 outline-none rounded-full text-white px-4 py-1 shadow-lg" 
          style={{backgroundColor: "Brown"}} 
          onClick={() => setColor("Brown")}>
            Brown
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default App
