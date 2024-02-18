import { configureStore } from '@reduxjs/toolkit'
import teacherReducer from './slices/teacherSlice'

export default configureStore({
  reducer: {
    teacher: teacherReducer
  },
})