import React, { useState } from 'react'

const Button = ({ind,  chngNns} ) => {
    const [noun, setNoun] = useState(true);
    

    const changeBtn = () => {
        setNoun(!noun);
    }

    const btnClck = () => {
        chngNns(ind);
        changeBtn();
    }

  return (
    <div className='rounded-full bg-cFour w-fit hover:cursor-pointer mx-3 my-2' onClick={btnClck} >
        <p className='text-center text-cThree font-bold text-3xl py-2 px-6 hover:cursor-pointer'>{noun ? "Noun" : "Adjective"}</p>    
    </div>
  )
}

export default Button