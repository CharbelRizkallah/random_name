import React, { useEffect, useState } from 'react'
import Button from './Button'
import nounWords from './nouns.json'
import adjectiveWords from './adjectives.json'

const Buttons = ({ changeName }) => {
    const [nouns, setNouns] = useState(() => {return [true]});
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        
        var arr = [];
        // console.log(nouns.length) 

        for(let i = 0; i < nouns.length; i++){
            if(index === i){
                arr[i] = !nouns[i]
                // console.log(arr[i]) 
            }else{
                arr[i] = nouns[i]
                // console.log(arr[i])
            }
        }

        setNouns(arr);
        setIndex(-1);

    }, [index])
    

    const chngNns = (indexx) => {
        setIndex(indexx)
    }

    const [btns, setBtns] = useState([<Button key={0} ind={0} chngNns={chngNns} />]);

    const addBtn = () => {
        setNouns(prevNouns => { return [...prevNouns, true]});
        setBtns(prevBtns => { return [...prevBtns, <Button key={btns.length} ind={btns.length} chngNns={chngNns} />]});
    }

    const removeBtn = () => {
        if(btns.length > 1){
            setBtns(prevBtns => { return prevBtns.slice(0, btns.length-1)});
            setNouns(prevNouns => { return prevNouns.slice(0, prevNouns.length-1)});
        }    
    }

    const generateName = () => {
        // console.log(nouns)
        var newName = "";
        // console.log(btns.length)
        for(let i = 0; i < nouns.length; i++){
            if(nouns[i]){
                newName = newName + nounWords[Math.floor(Math.random() * nounWords.length)] + " ";
                // console.log(newName);
            }else{
                newName = newName + adjectiveWords[Math.floor(Math.random() * adjectiveWords.length)] + " ";
            }
        }
        
        changeName(newName.trim().toLowerCase());
        
    }

    

  return (
    <div className='select-none'>
        <div className='flex flex-wrap justify-center m-2'>
            {btns}
        </div>
        <div className='flex justify-center m-2'>
            <div className='text-center w-fit text-cThree text-3xl font-bold rounded-full bg-cTwo hover:cursor-pointer mx-3 my-2' onClick={addBtn}>
                <p className='py-2 px-6 hover:cursor-pointer'>+</p>
            </div>
            <div className='text-center w-fit text-cThree text-3xl font-bold rounded-full bg-cTwo hover:cursor-pointer mx-3 my-2' onClick={removeBtn}>
                <p className='py-2 px-6 hover:cursor-pointer'>-</p>
            </div>
        </div>
        <div className='flex justify-center m-2'>
            <div className='text-center text-cThree text-3xl w-fit font-bold rounded-full bg-cTwo hover:cursor-pointer mx-3 my-2' onClick={generateName}>
                <p className='py-2 px-6 hover:cursor-pointer'>Generate</p>
            </div>
        </div>
    </div>
  )
}

export default Buttons