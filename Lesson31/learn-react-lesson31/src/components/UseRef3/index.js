import { useEffect, useRef, useState } from "react";

function UseRef3() {
    const [inputValue, setInputValue] = useState("");
    // const [counter, setCounter] = useState(0);
    const counterRef = useRef(0);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        // setCounter(counter + 1);  
        counterRef.current = counterRef.current + 1;   
        console.log(inputRef);
           
    }

    // console.log(counterRef.current);
    

    return (

        <>
            <input ref={inputRef} value={inputValue} onChange={handleChange} />
        </>

    )
}

export default UseRef3;