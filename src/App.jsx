import "./App.css";
import React, { useState, useEffect } from "react";


function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/PostData.json');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log('Fetched Data:', data);
        setPostData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  console.log('Post Data:', postData); // Add this line to check the state


  let followers = 6482;
  let following = 245;
  let name = "Anuj Gosalia ";

  return (
    <div className="App">
        <div className="header">
          <div className="leftheader">
            <img src="your-image-source.jpg" alt="Profile" />
            <h1 className="alpha">STORIES</h1>
          </div>
          <button className="button">Courses</button>
        </div>
        <div className="container">
          <div className="top">
            <h1>t</h1>
            <div className="profile-img-bg"></div>
            <div className="profile-img"></div>
          </div>
          <div className="bottom">
            <span>Posts</span><br />
            <div>
              {postData.map((post) => (
                <div className="Post" key={post.id}>
                 
                  <h2>{post.postHeading}</h2>
                  <p>{post.postTextData}</p>
                  <p>Likes: {post.likeStatus ? "Liked" : "Not Liked"}</p>
                  <p>{post.isThought ? "Thought" : "Musing"}</p>
                  <p>Views: {post.views}</p>
                  <p>Date: {post.date}</p>
                  <p>Read Time: {post.readTime}</p>
                  <p>{post.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}



export default App;
