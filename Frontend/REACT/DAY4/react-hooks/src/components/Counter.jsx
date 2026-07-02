import { useContext, useRef } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Counter() {
  const {data}=useContext(ThemeContext);
//   let ref = useRef(0);
  const inputRef=useRef();

//   function handleClick() {
//       console.log("my input ref",ref)
//     ref.current = ref.current + 1;
//     alert('You clicked ' + ref.current + ' times!');
//   }

  function handleClick2(){
    console.log("my input ref",ref)
    inputRef.current.focus();
  }

  return (
   <>
     {/* <button onClick={handleClick}>
      Click me!
     </button> */}
       <input ref={inputRef}/>
       <button onClick={handleClick2}>
         Click
      </button>
   
   </>

  );
}