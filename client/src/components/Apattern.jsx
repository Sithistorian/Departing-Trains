import React from 'react';

// const Apattern = function ({ state, onChange }) {


//   return (

//     <input
//     type="text"
//     name="input1"
//     value={state.Input1}
//     onChange={onChange} >
//     </input>
//   )
// }



const Apattern = function ({state, onChange}) {

  return (
    <div>
      <div>
    <input type="text" name="input1" value={state.input1 || ''} onChange={onChange} ></input>
      </div>
      <div>
    <input type="text" name="input2" value={state.input2 || ''} onChange={onChange} ></input>
    </div>
    <input type="text" name="input3" value={state.input3 || ''} onChange={onChange} ></input>
    </div>)
}

export default Apattern;