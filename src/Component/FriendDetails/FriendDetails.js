import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {FriendId} = useParams();
    const [friend,setFriend]=useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/users/${FriendId}`
           fetch(url)
           .then(res =>res.json())
           .then(data => setFriend(data));


    },[])
   
    return (
        <div>
            <p>This is Friend Details : {FriendId}</p>
            <h3>{friend.name}</h3>
            <p>email :{friend.email}</p>
            <p>User Name : {friend.username}</p>
            <p>phone : {friend.phone}</p>
            <p>website : {friend.website}</p>

        </div>
    );
};

export default FriendDetails;