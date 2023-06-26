import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { randomId } from '@mieuteacher/meomeojs';

export default function Axios() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(function (response) {
        // success
        console.log(response.data);
        setPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(function (response) {
        // success
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <>
      <div>Axios</div>
      {posts.map((post) => (
        <React.Fragment key={randomId()}>
          <span>
            title: {post.title} - author: {post.author}
          </span>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
          <br />
        </React.Fragment>
      ))}
    </>
  );
}
