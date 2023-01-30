import axios from 'axios';
import React, { useState } from 'react';

function AddApi() {
    const [company_name, setCompany] = useState("");
    const [company_code, setCompanyCode] = useState("");


    const saveCustomer = async (e) => {
        e.preventDefault();
        const resp = await axios.post('http://jagah2-env.eba-m3zawypz.us-east-2.elasticbeanstalk.com:80/addCompany',
            { company_name: company_name ,
              company_code: company_code
            });
        console.log(resp.data);
    }
    return (

        <div>
            <form onSubmit={saveCustomer}>
                <h1>POST API ADD</h1>
                <label>Company Name:</label><br></br>
                <input type="text" value={company_name} onChange={(e) => (setCompany(e.target.value))} name="company_name" />
                <label>Company Code:</label><br></br>

                <input type="text" value={company_code} onChange={(e) => (setCompanyCode(e.target.value))} name="company_code" />

                <button type="submit" >Save</button>
            </form>
        </div>
    )
}
export default AddApi;