import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./components/Login";
import { ChakraProvider } from '@chakra-ui/react'
import AccountType from "./components/AccountType";
import StudentRegister from "./components/StudentRegister";
import TeacherRegister from "./components/TeacherRegister";
import Home from "./components/Home";
import History from "./components/History";
import WelcomeVideo from "./components/WelcomeVideo";
import LessonPlans from "./components/LessonPlans";
import TeacherCenter from "./components/TeacherCenter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setTeacher } from "./utils/slices/teacherSlice";
import { setUser } from "./utils/slices/userSlice";

function App() {

  const dispatch = useDispatch()

  const teacher = useSelector((state) => state.teacher.value);
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    if(window.sessionStorage.getItem("teacher") != undefined) {
      dispatch(setTeacher(window.sessionStorage.getItem("teacher")))
    }
    if(window.sessionStorage.getItem("user") != undefined) {
      dispatch(setUser(window.sessionStorage.getItem("user")))
    }
  }, [])

  return (
    <div className="h-screen">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/ACType" element={<AccountType />} />
            <Route path="/StudentRegister" element={<StudentRegister />} />
            <Route path="/TeacherRegister" element={<TeacherRegister />} />
            <Route path="/home" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/wellcomeVideo" element={<WelcomeVideo />} />
            <Route path="/lessonPlans" element={<LessonPlans />} />
            <Route path="/teacherCenter" element={<TeacherCenter />} /> 
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  )
}

export default App
