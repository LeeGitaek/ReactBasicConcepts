import React, { useState } from "react";

export default function Counter({ total, onClick }) {
    let num = 0;
    const [count, setCount] = useState(0);
    return (
        <div className='counter'>
            <p className='number'>
                {count} 
            </p>
            <button
                className='button'
                onClick={ () => {
                    // setCount(count+1);
                    // safe way: 
                    setCount((prev) => prev + 1);
                    onClick();
                }}
                >Add +</button>
        </div>
    );
}