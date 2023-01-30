import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [customer_id, setId] = useState("")
  const [customer_name, setName] = useState("")
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    getPosts();
  }, []);

  const getPosts = async () => {
    const { data: res } = await axios.get('http://localhost:8080/getAllCustomers');
    setPosts(res);
  };



  console.warn(posts)

  
  function select(id) {
    console.log(posts)
    let item = posts[id];
    setId(item.customer_id);
    setName(item.customer_name);

  }

  function update() {
    let item = { customer_id:customer_id ,customer_name:customer_name }
    console.warn("item", item)
    fetch('http://sangamone.com:10000/PNGDataCo-WebApp/updateCustomer', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then((result) => {
      console.log(result)
      if(result){
        alert("Updated Data")
      }
        getPosts();
         
    })
    
  }
  
  function deleteData(){
   console.warn(customer_id)

   let result=  fetch('http://sangamone.com:10000/PNGDataCo-WebApp/deleteCustomer' ,{
            method:"Delete"
});
 if(result)
 {
 alert("deleted")

 }


  }
  return (
    <>
      <div className="container">

        <table className="table">
          <h1>List of Customers</h1>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
          {posts.map((post,index) => (
            <tr>
              <td> {post.customer_id} </td>
              <td> {post.customer_name} </td>
              <td><button onClick={() => select(index)}>Update</button></td>
              <td><button onClick={() => deleteData(post.customer_id)}>Delete</button></td>





            </tr>
          ))}
        </table>
        <div>
          <input type="text" value={customer_id} onChange={(e) => (setId(e.target.value))} name="customer_id" />

          <input type="text" value={customer_name} onChange={(e) => (setName(e.target.value))} name="customer_name" />
          <button onClick={update} >Update </button>


        </div>
      </div>
    </>
  );
};

export default Home;