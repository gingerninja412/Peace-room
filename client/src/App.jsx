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
import PeaceRoom from "./components/PeaceRoom";
import SubmitNomination from "./components/SubmitNomination";
import axios from "axios";
import Voting from "./components/Voting";
import Bookshelf from "./components/Bookshelf";

function App() {
  //hooks
  const dispatch = useDispatch()

  //redux states
  const teacher = useSelector((state) => state.teacher.value);
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    axios.get("http://localhost:3001/checkAuth", {
      withCredentials: true
    }).then(res => {

    }).catch(err => {
      if(window.location.href != "http://localhost:5173/") {
        console.log(window.location.href)
        window.location.replace("/")
      }
    })
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
            <Route path="/peaceRoom" element={<PeaceRoom />} />
            <Route path="/table" element={<SubmitNomination />}/>
            <Route path="/chair" element={<Voting />}/>
            <Route path="/bookshelf" element={<Bookshelf />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  )
}

export default App
