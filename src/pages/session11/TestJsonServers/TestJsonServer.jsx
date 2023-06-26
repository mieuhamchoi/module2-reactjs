import React, { useEffect, useState } from "react";
import { randomId } from "@mieuteacher/meomeojs";

export default function TestJsonServer() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const addNewPost = () => {
    const newPost = {
      title: "Bài số " + Math.random(),
      author: "Phước",
    };

    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPosts([...posts, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const deletePost = (id) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const getPostDetails = (id) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSelectedPost(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      {selectedPost ? (
        <React.Fragment>
          <span>Post đã chọn</span>
          <br></br>
          <span>
            title: {selectedPost.title} - author: {selectedPost.author}
          </span>
          <br></br>
        </React.Fragment>
      ) : (
        <></>
      )}
      <button onClick={addNewPost}>Add New</button>
      <br></br>
      {posts?.map((post) => (
        <React.Fragment key={randomId()}>
          <span onClick={() => getPostDetails(post.id)}>
            title: {post.title} - author: {post.author}
          </span>
          <button onClick={() => deletePost(post.id)}>Delete</button>
          <br></br>
        </React.Fragment>
      ))}
    </>
  );
}
