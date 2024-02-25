import { createSlice } from "@reduxjs/toolkit";

export const teacherSlice = createSlice({
  name: "teacher",
  initialState: {
    value: false,
  },
  reducers: {
    setTeacher: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTeacher } = teacherSlice.actions;

export default teacherSlice.reducer;
