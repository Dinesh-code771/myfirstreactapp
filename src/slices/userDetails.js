import { createSlice } from "@reduxjs/toolkit";

export const sideBarSlice = createSlice({
  name: "userDetails",
  initialState: {
    userDetails: [],
    userRole: "",
  },
  reducers: {
    addition: (state, obj) => {
      console.log(obj.payload, "sdf");
      state.userDetails = [...state.userDetails, obj.payload];
    },
    remove: (state, obj) => {
      // state.userDetails.splice(obj.payload, 1);
      console.log(obj.payload, "id");
      state.userDetails = state.userDetails.filter(
        (item, index) => index !== obj.payload
      );
    },
    edit: (state, obj) => {
      // find index of object and update it
      const index = state.userDetails.findIndex((item, index) => {
        return index === parseInt(obj.payload.id);
      });
      state.userDetails[index] = obj.payload.user;
      // console.log(array, "array")
      // state.userDetails = array;
    },
    set: (state, obj) => {
      // find index of object and update it
      const newUpdatearray = [...state.userDetails, ...obj.payload];
      // const index = state.userDetails.findIndex(
      state.userDetails = newUpdatearray;
    },
    updateRole: (state, obj) => {
      state.userRole = obj.payload;
    },
  },
});

export const { addition,updateRole, remove, edit, set } = sideBarSlice.actions;

// const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   function decrement() {
//     setCount(count - 1);
//   }

export default sideBarSlice.reducer;
