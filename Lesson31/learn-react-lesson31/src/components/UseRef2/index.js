import { useRef, useState } from "react";

function UseRef2() {
    const [inputValue, setInputValue] = useState("");
    // const [counter, setCounter] = useState(0);
    const counterRef = useRef(0);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        // setCounter(counter + 1);  
        counterRef.current = counterRef.current + 1;      
    }

    console.log(counterRef.current);
    

    return (

        <>
            <input value={inputValue} onChange={handleChange} />
        </>

    )
}

export default UseRef2;