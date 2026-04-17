import { memo } from "react";

function Box(props) {
    const { onCounter, onReset } = props;
    // console.log(onCounter);
    

    console.log("render box");

    const handleCouter = () => {
        onCounter();
    }

    const handleReset = () => {
        onReset();
    }
    
    return (
        <>
            <button onClick={handleCouter}>Click</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default memo(Box);