import { useState } from "react";

function Lamp() {
    // let status = false;

    const [status, setState] = useState(false);

    const handleOnclick = () => {
        // status = !status;
        setState(!status);
    }

    console.log(status);   

    return (
        <>
            <button onClick={handleOnclick}>
                {status ? "Off" : "On"}
            </button>
            <div>
                {status ? "Đèn đang bật" : "Đèn đang tắt"}
            </div>
        </>
    )
}

export default Lamp;