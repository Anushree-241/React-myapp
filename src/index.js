import React from "react";
import { render } from "react-dom";
//import MyComponent from './components/MyComponent.js';
//render(<button title='My Button'>MY BUTTON</button>,document.getElementById('root'));

// render(

//     <MyComponent>
//         <MyComponent.First/>
//         <MyComponent.Second/>
//     </MyComponent>,
//     document.getElementById('root')
// );

// const enabled = false;
// const text = 'A Button';
// const placeholder = 'input value...';
// const size = 50;
// render(
//     <section>
//         <button disabled={enabled}>{text}</button>
//         <input disabled={!enabled} placeholder={placeholder} size={size}/>
//     </section>,
// document.getElementById('root')
// )

const array = ['First','Second','Third'];
const object ={
    first:1,
    second:2,
    third:3
};
render()
{
    <section><h1>Array</h1><ul>{array}</ul></section>
}

