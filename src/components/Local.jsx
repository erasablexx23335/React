import { useEffect, useState } from "react"

const Local = () => {
    const [name, setName] = useState(() =>{
        const saveName = localStorage.getItem('name')
        return saveName ? JSON.parse(saveName) : ''
    });
    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name))
    }, [name])

    const clickChange = (e) => {
        setName(e.target.value);
    };
    const clearHandler = () => {
        setName('');
    }

  return (
    <div>
      <h1>Your Name: {name}</h1>
      <input type="text" value={name} onChange={clickChange} placeholder="Enter your name"  />
      <button onClick={clearHandler}> Clear Name </button>
    </div>
  )
}

export default Local
