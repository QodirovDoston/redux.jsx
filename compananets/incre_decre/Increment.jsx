import React, { useState } from "react";

const Increment = () => {
    
    const [count, setCount] = useState(0)
    
    function increment() {
      setCount(prevCount => prevCount -1)
    }
    
    function decrement() {
      setCount(prevCount => prevCount +1)
    }
  return (
    <>
    < div className="ert">
      <button onClick={increment} className="bt">increment</button>
      ||
      <button onClick={decrement} className="bt">decrement</button>
    </div>
    <div className="ert">
      <span>{count}</span>
    </div>
    </>
  )
}

export default Increment
