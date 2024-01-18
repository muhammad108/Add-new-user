import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { removeusers } from "../store/slice/userSlice";
function DsiplayUser() {
  const data = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch()
  const deleteUser = (id)=>{
    dispatch(removeusers(id))
}
//   console.log(data);

  return (
    <div className="heading">
      <h1>User List</h1>
      <ul className="text">
        {data.map((user, id) => (
          <li key={id}>{user}
          <button className="btn btn-delete" onClick={()=> deleteUser(id)}>
          <AiFillDelete className="delete-icon"/>
          </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DsiplayUser;
