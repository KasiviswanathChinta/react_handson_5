import React from 'react';
import HOCCompo from './HOCCompo';

const Student1 = (props) => {
  return (
    <div className='child_1'>
        <h2>Student_1</h2>
        <h3>Marks: {props.Inc} {props.Dec}</h3>
        <button type='button' className='btn' onClick={props.handleClick}>Increase</button>
        <button type='button' className='btn' onClick={props.handleEvent}>Decrease</button>
    </div>
  )
}

export default HOCCompo(Student1);