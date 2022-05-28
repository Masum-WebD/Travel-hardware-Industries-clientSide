import React from "react";
import { useQuery } from "react-query";
import Loading from "../Login/Loading";
import MakeAdmin from "./MakeAdmin";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://trevel-hardware.herokuapp.com/user", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl">All Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <MakeAdmin
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></MakeAdmin>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
