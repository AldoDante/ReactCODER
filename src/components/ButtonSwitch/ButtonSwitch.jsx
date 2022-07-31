import React, { useState } from 'react'
import Inputcount from '../InputCount/Inputcount'
import ItemCount from '../ItemCount/ItemCount'



const ButtonSwitch = () => {
    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType(false)
    }

  return (
    <div>ButtonSwitch
        {
                inputType === 'button' ? 
                    <ItemCount handleInter={handleInter} />
                : 
                    <Inputcount />
            }
    </div>
  )
}

export default ButtonSwitch