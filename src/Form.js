import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    getPosts();
  }, []);

  const getPosts = async () => {
    const { data: res } = await axios.get('http://jagah2-env.eba-m3zawypz.us-east-2.elasticbeanstalk.com:80/getCountries');
    setPosts(res);
  };


  console.warn(posts)
  return (
  
    <div className="container">

      <table className="table">
        <h1>List of Companies</h1>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Code</th>
        </tr>
        {posts.map((post) => 
          <tr >
            <td> {post.company_id} </td>
            <td> {post.company_name} </td>
            <td>{post.company_code}</td>




          </tr>
        )}
      </table>
      </div>
  );
}
export default Home;