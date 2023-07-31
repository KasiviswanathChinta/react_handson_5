import React from 'react';
import Student1 from './Student1';
import Student2 from './Student2';
import '../App.css';

const MainCompo = () => {
  return (
    <div>
        <h1>Higher Order Component</h1>
        <p>A higher-order component (HOC) in React.js is a function that takes a component and returns a new component. This new component will have the same props as the original component, but it will also have some additional functionality added by the HOC.</p>
        <p>HOCs are a powerful tool for reusing component logic. They can be used to add common functionality to multiple components, or to customize the behavior of a component without having to modify the component itself.</p>
        <h3>Example:</h3>
        <div className='parent'>
            <Student1/>
            <Student2/>
        </div>
    </div>
  )
}

export default MainCompo;