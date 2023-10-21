import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { set } from "../slices/userDetails";
export default function UProfile() {
  const userDetails = useSelector((state) => state.userDetails.userDetails);
  const dispatch = useDispatch();
  const [userNewValues, setUserNewValues] = React.useState({
    name: "",
    age: "",
    email: "",
  });
  const [isEdit, setIsEdit] = React.useState(false);
  const { id } = useParams();
  const user = userDetails.find((user, index) => index === parseInt(id));
  console.log(userDetails, "userDetails", id);
  useEffect(() => {
    setUserNewValues(user);
  }, []);
  const handleChange = (e) => {
    setUserNewValues({ ...userNewValues, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {user ? (
        <div>
          {isEdit ? (
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="name"
              value={userNewValues.name}
              placeholder="enter new name"
            />
          ) : (
            <h1>{user.name}</h1>
          )}
          {isEdit ? (
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="age"
              value={userNewValues.age}
              placeholder="emnter new age"
            />
          ) : (
            <h1>{user.age}</h1>
          )}
          {isEdit ? (
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="email"
              value={userNewValues.email}
              placeholder="emnter email"
            />
          ) : (
            <h1>{user.email}</h1>
          )}
        </div>
      ) : (
        <h1>User not found</h1>
      )}
      <div>
        <button
          onClick={() => {
            setIsEdit(!isEdit);
            if (isEdit) {
              dispatch(set({ user: userNewValues, id: id }));
            }
          }}
        >
          {isEdit ? "save" : "edit"}
        </button>
      </div>
    </div>
  );
}
