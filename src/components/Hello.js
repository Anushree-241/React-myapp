import React from "react";
const Hello=()=>{
    // return(
    //     <div className="Myclass">
    //     <h1>Hello component display creation</h1>
    //     </div>
    // )

    // return React.createElement('div',null,'Create React component without using JSX')

    return React.createElement('div',
            {id:'hello',className:'MyClass'},
            React.createElement('h1',null,'Create React component without using JSX'))


}
export default Hello;
