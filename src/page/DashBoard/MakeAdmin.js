import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MakeAdmin = ({ refetch, index }) => {
  //   const { email, } = user;

  const [user] = useAuthState(auth);
  const makeAdmin = () => {
    fetch(`https://cokpit.onrender.com/user/admin/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })

      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made an admin");
        }
      });
  };
  return (
    <div>
      
    <tr>
      <th>{index}</th>
      <td>{user.email}</td>
      <td>
        <button onClick={makeAdmin} className="btn btn-xs">
          Make Admin
        </button>
      </td>
      <td>
        <button className="btn btn-xs">Remove User</button>
      </td>
    </tr>
    </div>
  );
};

export default MakeAdmin;
