import React, { useState } from 'react';

function Increment() {

    const [count, setCount] = useState(9);

    return (

        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button><br></br>
        </div>
    )



}
export default Increment;