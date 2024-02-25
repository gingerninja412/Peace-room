import { configureStore } from '@reduxjs/toolkit'
import teacherReducer from './slices/teacherSlice'
import userReducer from './slices/userSlice'

export default configureStore({
  reducer: {
    teacher: teacherReducer,
    user: userReducer
  },
})