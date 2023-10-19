import { createSlice } from "@reduxjs/toolkit";

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    names: ["dinesh", "reddy"],
  },
  reducers: {
    adition: (state, obj) => {
        console.log(obj.payload,"sdf")
      state.names = [...state.names, obj.payload];
    },
    remove: (state, obj) => {
      state.names.splice(obj.payload, 1);
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { adition, remove, reset } = sideBarSlice.actions;

// const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   function decrement() {
//     setCount(count - 1);
//   }

export default sideBarSlice.reducer;
