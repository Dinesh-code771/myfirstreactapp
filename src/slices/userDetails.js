import { createSlice } from "@reduxjs/toolkit";

export const sideBarSlice = createSlice({
  name: "userDetails",
  initialState: {
    userDetails: [],
  },
  reducers: {
    addition: (state, obj) => {
      console.log(obj.payload, "sdf");
      state.userDetails = [...state.userDetails, obj.payload];
    },
    remove: (state, obj) => {
      // state.userDetails.splice(obj.payload, 1);
      state.userDetails = state.userDetails.filter(
        (item, index) => index !== parseInt(obj.payload.id)
      );
    },
    edit: (state) => {
      state.count = 0;
    },
    set: (state, obj) => {
      // find index of object and update it
      const newUpdatearray = [...state.userDetails];
      const index = state.userDetails.findIndex(
        (item, index) => index === parseInt(obj.payload.id)
      );
      console.log(index, "index");
      newUpdatearray[index] = obj.payload;
      console.log(newUpdatearray);
      state.userDetails = newUpdatearray;
    },
  },
});

export const { addition, remove, edit, set } = sideBarSlice.actions;

// const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   function decrement() {
//     setCount(count - 1);
//   }

export default sideBarSlice.reducer;
