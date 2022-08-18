import React from "react";

function List() {
    const click = (a) => {
        alert(a);
      }
   return (
    <ol>
        <li>Mobiles</li>
        <li>TVs and Radio</li>
        <li>Chargers</li>
        <li>EarPhones</li>
        <button onClick={()=> click('Thank you')}>Click Me</button>

    </ol>
   );
}
export default List;