import { useEffect, useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(parseInt(localStorage.getItem("myCount")) || 0);

    useEffect(() => {
        localStorage.setItem("myCount", count)
    }, [count]);

    let countUp = () => count < 15 && setCount(count + 1)

    let countDown = () => count > 0 && setCount(count - 1) 

    return (
        <>
            <div style={{ marginTop: "3rem", display:"grid", justifyContent:"center" }}>
                <h2 style={{ textAlign: "center"}}>{count}</h2>
                <div>
                    <button onClick={countDown} style={{ padding:"1rem", marginRight:".5rem" }}>DECREASE</button>
                    <button onClick={countUp} style={{ padding:"1rem" }}>INCREASE</button>
                </div>
            </div>
        </>
    );
}

export default Counter;