import React,{ useState } from 'react';
import '../App.css';

const PureCompo = () => {
  const [Data] = useState(
    {
      Address:"Mr.",
      Name:"Kasiviswanath",
      Batch:"EA23",
      Course:" Full- Stack MERN Development",
      Platform:"PrepBytes"
    }
  )
  return (
    <div className='container'>
        <h1>Pure Component</h1>
        <p>A function is said to be pure if the return values are determined by the input values only and the return value is also same for the same input values. A react component is said to be pure if it renders the same output values for same state and props.</p>
        <p>Pure components are important for performance because they can prevent unnecessary re-rendering. When a component re-renders, React has to re-build the DOM, which can be expensive. By preventing unnecessary re-rendering, pure components can improve the performance of your React application.</p>
        <h3>Example:</h3>
        <p>Hello, my Name is {Data.Address}{Data.Name}.</p>
        <p>My Batch is {Data.Batch}.</p>
        <p>I am learning the {Data.Course} from the {Data.Platform} Edu.Tech.</p>
    </div>
  )
}

export default PureCompo;