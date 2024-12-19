import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [color,setcolor]=useState('white')
  const bgchange=(applycolor)=>{
    setcolor(prevcolor => applycolor)
    console.log(color)
  }
  return (
    <div style={{ backgroundColor: color, minHeight: "100vh" }}>
      <button className="bg-orange-400 p-4 h-250 w-250 m-10 text-orange" onClick={() => bgchange("red")} >Red</button>
      <button className="bg-orange-400 p-4 h-250 w-250 m-10 text-orange" onClick={() => bgchange("green")}>Green</button>
      <button className="bg-orange-400 p-4 h-250 w-250 m-10 text-orange" onClick={() => bgchange("blue")}>Blue</button>
      <button className="bg-orange-400 p-4 h-250 w-250 m-10 text-orange" onClick={() => bgchange("olive")}>Olive</button>
      <button className="bg-orange-400 p-4 h-250 w-250 m-10 text-orange" onClick={() => bgchange("gray")}>Gray</button>
      <button className="bg-orange-400 p-4 h-250 w-250 m-10 text-orange" onClick={() => bgchange("yellow")}>Yellow</button>
      <button className="bg-orange-400 p-4 h-250 w-250 m-10 text-orange" onClick={() => bgchange("pink")}>Pink</button>
      <button className="bg-orange-400 p-4 h-250 w-250 m-10 text-orange" onClick={() => bgchange("purple")}>Purple</button>
      <button className="bg-orange-400 p-4 h-250 w-250 m-10 text-orange" onClick={() => bgchange("lavender")}>Lavender</button>
      <button className="bg-orange-400 p-4 h-250 w-250 m-10 text-orange" onClick={() => bgchange("white")}>White</button>
      <button className="bg-orange-400 p-4 h-250 w-250 m-10 text-orange" onClick={() => bgchange("black")}>Black</button>
    </div>
  );
}

export default App;
