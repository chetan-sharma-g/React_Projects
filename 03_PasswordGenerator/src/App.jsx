import React, { useCallback, useEffect, useState } from 'react'

function App() {

  const [lenght, setLength] = useState(5)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [Password, setPassword] = useState()


  // Password Generator

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(number) {
      str += "0123456789"
    }
    if (character) {
      str+= "~!@#$%^&*()-_+={}[]|;<>,.?/"
    }
    
    for (let i = 1; i <= lenght; i++){
      let char = Math.floor(Math.random() * str.length + 1) 

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [lenght,number,character,setPassword])

  useEffect(() => {
    passwordGenerator()
  },[lenght,number,character,passwordGenerator])
  

  return (
    <>
      <div className='text-2xl w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-500 bg-gray-700 text-center'>
        <h1 className='text-white mb-5'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden '>
        <input 
        type="text" 
        value={Password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        />

        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 mt-5'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={lenght}
            className='cursor-pointer'

          onChange={(e) => {
            setLength(e.target.value)
          }}
            />
            <label> Length: {lenght}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            id="numberInput" 
            defaultChecked={number}
            onChange={() => {
              setNumber((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            id="characterInput" 
            defaultChecked={character}
            onChange={() => {
              setCharacter((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
