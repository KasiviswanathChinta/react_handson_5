import React, { useState } from 'react';

const HOCCompo = (WrappedComponent) => {

    function HigherOrder(){
        const [Increase, setIncrease] = useState(0)
    const [Decrease, SetDecrease] = useState (100)
        const handleClick = () =>{
            setIncrease(Increase+10);
        }
        const handleEvent = () => {
            SetDecrease(Decrease-5);
        }
        return (
            <WrappedComponent Inc={Increase} handleClick={handleClick} Dec={Decrease} handleEvent={handleEvent} />
          )
    }

  return HigherOrder;

}

export default HOCCompo;