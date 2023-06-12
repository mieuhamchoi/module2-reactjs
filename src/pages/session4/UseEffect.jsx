import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [number, setNumber] = useState(0);


    //sẽ chạy 1 lần duy nhất khi didmounting
    useEffect(() => {
        // almost same as componentDidMount
        fetch("https://random-data-api.com/api/v2/users")
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data);
          // You can access the fetched data here
        })
        .catch((error) => {
          console.log("Error:", error);
        });
      
        return () => {
            // almost same as componentWillUnmount
            console.log('unmount!');
        };
    }, []);

    // chạy mỗi khi number thay đổi
    // useEffect(() => {
    //     // almost same as componentDidMount
    //     console.log('mounted!');
    //     return () => {
    //         // almost same as componentWillUnmount
    //         console.log('unmount!');
    //     };
    // }, [number]);


    // lúc méo nào trang web load là nó chạy
    // useEffect(() => {
    //     // almost same as componentDidMount
    //     console.log('mounted!');
    //     return () => {
    //         // almost same as componentWillUnmount
    //         console.log('unmount!');
    //     };
    // });

  return (
    <>
        <h1>UseEffect</h1>
        <span>{number}</span>
        <button onClick={() => setNumber(Math.random())}>Set Number</button>
    </>
  )
}
