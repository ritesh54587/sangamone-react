import React from 'react'

function Student(){

    const students =['Anil','Sidhu','Sam','Peter'];
      

      return(
     <div>
        <h1>List of Students</h1>
      {  
        students.map((list)=><h1>{list}</h1>
        )
      }
      </div>
      );

}



export default Student;