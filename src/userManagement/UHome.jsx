import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { remove, set } from "../slices/userDetails";
import { useSelector } from "react-redux";
import { updateRole } from "../slices/userDetails";
import AddingUser from "./AddingUser";
export default function UHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails.userDetails);
  const role = useSelector((state) => state.userDetails.userRole);

  useEffect(() => {
    // check if the user is logged in or not
    localStorage.getItem("userDetails")
      ? // if logged in, redirect to home page
        navigate("/")
      : navigate("/login");

    dispatch(updateRole(localStorage.getItem("userRole")));
  }, []);

  console.log(userDetails, "userDetails");

  useEffect(() => {
    if (userDetails.length === 0)
      dispatch(
        set([
          {
            name: "dinesh",
            age: 23,
            email: "dinesh@gmail.com",
          },
          {
            name: "reddy",
            age: 23,
            email: "reddy@gmail.com",
          },
          {
            name: "teddy",
            age: 23,
            email: "teddy@gmail.com",
          },
          {
            name: "uiui",
            age: 63,
            email: "uiuih@gmail.com",
          },
        ])
      );
  }, []);
  const handleDelete = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <h1>User Logged in with role {role}</h1>
      <button
        onClick={() => {
          localStorage.removeItem("userDetails");
          localStorage.removeItem("userRole");
          navigate("/login");
        }}
      >
        Logout
      </button>

      {/* create a table with the data from redux store
       */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "50px",
        }}
      >
        <table
          style={{
            border: "1px solid black",
            borderCollapse: "collapse",
            padding: "10px",
            marginBottom: "50px",
          }}
        >
          <thead
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              padding: "10px",
            }}
          >
            <tr
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                padding: "10px",
              }}
            >
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              padding: "10px",
            }}
          >
            {userDetails.map((user, index) => {
              return (
                <tr
                  key={index}
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    padding: "10px",
                  }}
                >
                  <td
                    style={{
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      padding: "50px",
                    }}
                  >
                    {user.name}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      padding: "50px",
                    }}
                  >
                    {user.age}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      borderCollapse: "collapse",
                      padding: "50px",
                    }}
                  >
                    {user.email}
                  </td>
                  {role === "admin" ? (
                    <td
                      style={{
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        padding: "50px",
                      }}
                    >
                      <button onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                    </td>
                  ) : null}
                  <td>
                    <button
                      style={{
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        padding: "50px",
                      }}
                      onClick={() => {
                        navigate(`/user/${index}`);
                      }}
                    >
                      view
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <AddingUser />
      </div>
    </div>
  );
}
