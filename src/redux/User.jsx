import {createSlice} from  "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
      name: "",
      email: "",
      id: "",
    },
    reducers: {
      updateUser: (state, action) => {
        const { name, email, id } = action.payload;
        state.name = name;
        state.email = email;
        state.id = id;
      },
    },
  });

  export const { updateUser } = userSlice.actions;
  export default userSlice.reducer;