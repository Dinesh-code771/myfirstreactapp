import { createSlice } from "@reduxjs/toolkit";

export const sideBarSlice = createSlice({
  name: "userDetails",
  initialState: {
    userDetails: [],
  },
  reducers: {
    adition: (state, obj) => {
      console.log(obj.payload, "sdf");
      state.names = [...state.names, obj.payload];
    },
    remove: (state, obj) => {
      state.names.splice(obj.payload, 1);
    },
    edit: (state) => {
      state.count = 0;
    },
    set: (state, obj) => {
      state.userDetails = obj.payload;
    },
  },
});

export const { adition, remove, edit, set } = sideBarSlice.actions;

// const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   function decrement() {
//     setCount(count - 1);
//   }

export default sideBarSlice.reducer;
