import { useState } from "react"
import PopupContent from "./PopupContent"

const CopyInput = () => {
    const [InputValue, setInputValue] = useState('')
    const [copied, setCopied] = useState(false)

    const CopyHandler = () => {
        navigator.clipboard.writeText(InputValue).then(()=>
        setTimeout(() => {
            setCopied(false),2000
        })
    )
    }
  return (
    <div>
      <input type="text" value={InputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={CopyHandler}> Copy</button>
      <PopupContent show={copied} />
    </div>
  )
}

export default CopyInput
