import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    
    const {name ,email,id} = props.friend
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`
        history.push(url);
    }
      const FriendStyle ={
          border : '1px solid purple',
          margin : '20px',
          padding : '20px',
          borderRadius : '20px'

      }


    return (
        <div style={FriendStyle}>
              <h4>Name : {name}</h4>
              <p>Email : {email}</p>
              <Link to ={`/friend/${id}`}>
                  <button>Show Details of {id} </button>
                  </Link>
                  <button onClick={()=>handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;