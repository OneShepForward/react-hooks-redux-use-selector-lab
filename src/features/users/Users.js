import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";


function Users() {
  
  const users = useSelector((state) => state.users)
  const numOfUsers = useSelector((state) => state.users.length)

  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
          {users.map(user => <li> {user.username} </li> )}
      </ul>
        {/* In addition, display the total number of users curently in the store */}
      {/* <p> Total users: {users.length} </p> */}
      <p> Total Users: {numOfUsers} </p>
    </div>
  );
}

export default Users;
