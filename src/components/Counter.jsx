import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    // const increment = () => {
    //     return count(setCount + 1 )
    // }
    // const decrement = () => {
    //     return count(setCount - 1)
    // }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Counter
