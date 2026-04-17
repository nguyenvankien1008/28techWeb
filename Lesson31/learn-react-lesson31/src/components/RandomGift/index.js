import { useRef, useState } from "react";

function RandomGift() {
    const gifts = ["Điện thoại", "Máy tính", "Đồng hồ", "Xe máy", "Ô tô"];
    const [result, setResult] = useState("");
    const counterRef = useRef(0);

    const handleRandom = () => {
        if(counterRef.current < 3) {
            const random = Math.floor(Math.random()*gifts.length);
            // console.log(random);
            setResult(gifts[random]);
            // setResult(gifts[0]);
            counterRef.current = counterRef.current + 1;

        } else {
            alert("Bạn đã hết lượt quay thưởng");
        }


    }

    console.log(counterRef);
    
    return (
        <>
            <button onClick={handleRandom}>Random</button>

            <div>
                Bạn đã trúng thưởng: {result}
            </div>
        </>
    )
}

export default RandomGift;