import React, { useEffect } from 'react'
import { useState, useCallback} from 'react'
// import { useEffect } from 'react'
import "./App.css"
import { useRef } from 'react'

const App = () => {

  const [length, setlength] = useState(8)

  const [charAllowed, setcharAllowed] = useState(false)

  const [numberAllowed, setnumberAllowed] = useState(false)

  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) string += "0123456789"

    if (charAllowed) string += "!@#$%^&*()_-+=[]{}`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
    }

    setPassword(pass)
  }, [length, charAllowed, numberAllowed, setPassword])  

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password )
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="password-generator">
      <div className='heading'>
        <h1>Password Generator</h1>
      </div>
      <div >
        <input type="text"
          value={password}
          placeholder='password'
          readOnly
        />
        <button onClick={copyPasswordToClipboard}>Copy</button>
        <br />
        <div className='input-sec'>
          <input type='range' min={8}
            max={100}
            value={length}
            onChange={(e) => { setlength(e.target.value) }}
          />
          <label >Length: {length} </label>
        </div>
        <div className='d-flex'>
          <div>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => { setnumberAllowed((prev) => !prev) }}
            />
            <label htmlFor='numberInput' >Number </label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => { setcharAllowed((prev) => !prev) }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App