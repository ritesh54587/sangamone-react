import React from 'react'
import Table from 'react-bootstrap/Table';

function Student(){

    const students =[
        {name:"Ritesh",email:"riteshkr233@gmail.com",contact:7443332220},
        {name:"Rakesh",email:"rakeshhkr233@gmail.com",contact:744233220},

    ]

    return (
    
    <Table striped>
        <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Contact</td>
    </tr>

    {
    students.map((data, i)=>
    <tr key={i}>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.contact}</td>
    </tr>
    )
}
</Table>
       
    )
}

export default Student;